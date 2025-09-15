// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract DignifiedLoans is SepoliaConfig {
    using FHE for *;
    
    struct LoanRequest {
        euint32 loanId;
        euint32 amount;
        euint32 interestRate;
        euint32 duration;
        euint32 creditScore;
        bool isActive;
        bool isApproved;
        string purpose;
        address borrower;
        uint256 requestTime;
        uint256 deadline;
    }
    
    struct Loan {
        euint32 loanId;
        euint32 amount;
        euint32 interestRate;
        euint32 duration;
        euint32 remainingAmount;
        euint32 monthlyPayment;
        bool isActive;
        bool isRepaid;
        address borrower;
        address lender;
        uint256 startTime;
        uint256 endTime;
    }
    
    struct Repayment {
        euint32 repaymentId;
        euint32 amount;
        euint32 loanId;
        address borrower;
        uint256 timestamp;
    }
    
    mapping(uint256 => LoanRequest) public loanRequests;
    mapping(uint256 => Loan) public loans;
    mapping(uint256 => Repayment) public repayments;
    mapping(address => euint32) public borrowerCreditScore;
    mapping(address => euint32) public lenderReputation;
    
    uint256 public loanRequestCounter;
    uint256 public loanCounter;
    uint256 public repaymentCounter;
    
    address public owner;
    address public verifier;
    
    event LoanRequested(uint256 indexed requestId, address indexed borrower, string purpose);
    event LoanApproved(uint256 indexed requestId, uint256 indexed loanId, address indexed lender);
    event LoanFunded(uint256 indexed loanId, address indexed lender, uint32 amount);
    event RepaymentMade(uint256 indexed repaymentId, uint256 indexed loanId, address indexed borrower);
    event LoanCompleted(uint256 indexed loanId);
    event CreditScoreUpdated(address indexed borrower, uint32 score);
    event ReputationUpdated(address indexed lender, uint32 reputation);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function requestLoan(
        externalEuint32 amount,
        externalEuint32 interestRate,
        externalEuint32 duration,
        string memory purpose,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(bytes(purpose).length > 0, "Purpose cannot be empty");
        
        uint256 requestId = loanRequestCounter++;
        
        // Convert external encrypted values to internal
        euint32 internalAmount = FHE.fromExternal(amount, inputProof);
        euint32 internalInterestRate = FHE.fromExternal(interestRate, inputProof);
        euint32 internalDuration = FHE.fromExternal(duration, inputProof);
        
        loanRequests[requestId] = LoanRequest({
            loanId: FHE.asEuint32(0),
            amount: internalAmount,
            interestRate: internalInterestRate,
            duration: internalDuration,
            creditScore: borrowerCreditScore[msg.sender],
            isActive: true,
            isApproved: false,
            purpose: purpose,
            borrower: msg.sender,
            requestTime: block.timestamp,
            deadline: block.timestamp + 7 days
        });
        
        emit LoanRequested(requestId, msg.sender, purpose);
        return requestId;
    }
    
    function approveLoan(
        uint256 requestId,
        address lender
    ) public returns (uint256) {
        require(msg.sender == verifier, "Only verifier can approve loans");
        require(loanRequests[requestId].borrower != address(0), "Request does not exist");
        require(loanRequests[requestId].isActive, "Request is not active");
        require(block.timestamp <= loanRequests[requestId].deadline, "Request has expired");
        
        uint256 loanId = loanCounter++;
        
        LoanRequest storage request = loanRequests[requestId];
        request.isApproved = true;
        request.isActive = false;
        
        // Calculate monthly payment using FHE operations
        euint32 monthlyPayment = FHE.div(
            FHE.mul(request.amount, FHE.add(request.interestRate, FHE.asEuint32(100))),
            FHE.mul(request.duration, FHE.asEuint32(100))
        );
        
        loans[loanId] = Loan({
            loanId: FHE.asEuint32(loanId),
            amount: request.amount,
            interestRate: request.interestRate,
            duration: request.duration,
            remainingAmount: request.amount,
            monthlyPayment: monthlyPayment,
            isActive: false,
            isRepaid: false,
            borrower: request.borrower,
            lender: lender,
            startTime: 0,
            endTime: 0
        });
        
        emit LoanApproved(requestId, loanId, lender);
        return loanId;
    }
    
    function fundLoan(
        uint256 loanId,
        externalEuint32 amount,
        bytes calldata inputProof
    ) public payable {
        require(loans[loanId].borrower != address(0), "Loan does not exist");
        require(loans[loanId].lender == msg.sender, "Only designated lender can fund");
        require(!loans[loanId].isActive, "Loan is already active");
        require(!loans[loanId].isRepaid, "Loan is already repaid");
        
        euint32 internalAmount = FHE.fromExternal(amount, inputProof);
        
        // Verify funding amount matches loan amount
        require(FHE.eq(internalAmount, loans[loanId].amount), "Funding amount must match loan amount");
        
        loans[loanId].isActive = true;
        loans[loanId].startTime = block.timestamp;
        loans[loanId].endTime = block.timestamp + (FHE.decrypt(loans[loanId].duration) * 30 days);
        
        emit LoanFunded(loanId, msg.sender, 0); // Amount will be decrypted off-chain
    }
    
    function makeRepayment(
        uint256 loanId,
        externalEuint32 amount,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(loans[loanId].borrower == msg.sender, "Only borrower can make repayments");
        require(loans[loanId].isActive, "Loan is not active");
        require(!loans[loanId].isRepaid, "Loan is already repaid");
        
        uint256 repaymentId = repaymentCounter++;
        euint32 internalAmount = FHE.fromExternal(amount, inputProof);
        
        repayments[repaymentId] = Repayment({
            repaymentId: FHE.asEuint32(repaymentId),
            amount: internalAmount,
            loanId: FHE.asEuint32(loanId),
            borrower: msg.sender,
            timestamp: block.timestamp
        });
        
        // Update remaining amount
        loans[loanId].remainingAmount = FHE.sub(loans[loanId].remainingAmount, internalAmount);
        
        // Check if loan is fully repaid
        if (FHE.le(loans[loanId].remainingAmount, FHE.asEuint32(0))) {
            loans[loanId].isRepaid = true;
            loans[loanId].isActive = false;
            emit LoanCompleted(loanId);
        }
        
        emit RepaymentMade(repaymentId, loanId, msg.sender);
        return repaymentId;
    }
    
    function updateCreditScore(address borrower, euint32 score) public {
        require(msg.sender == verifier, "Only verifier can update credit scores");
        require(borrower != address(0), "Invalid borrower address");
        
        borrowerCreditScore[borrower] = score;
        emit CreditScoreUpdated(borrower, 0); // Will be decrypted off-chain
    }
    
    function updateLenderReputation(address lender, euint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(lender != address(0), "Invalid lender address");
        
        lenderReputation[lender] = reputation;
        emit ReputationUpdated(lender, 0); // Will be decrypted off-chain
    }
    
    function getLoanRequestInfo(uint256 requestId) public view returns (
        string memory purpose,
        address borrower,
        uint8 amount,
        uint8 interestRate,
        uint8 duration,
        uint8 creditScore,
        bool isActive,
        bool isApproved,
        uint256 requestTime,
        uint256 deadline
    ) {
        LoanRequest storage request = loanRequests[requestId];
        return (
            request.purpose,
            request.borrower,
            0, // FHE.decrypt(request.amount) - will be decrypted off-chain
            0, // FHE.decrypt(request.interestRate) - will be decrypted off-chain
            0, // FHE.decrypt(request.duration) - will be decrypted off-chain
            0, // FHE.decrypt(request.creditScore) - will be decrypted off-chain
            request.isActive,
            request.isApproved,
            request.requestTime,
            request.deadline
        );
    }
    
    function getLoanInfo(uint256 loanId) public view returns (
        address borrower,
        address lender,
        uint8 amount,
        uint8 interestRate,
        uint8 duration,
        uint8 remainingAmount,
        uint8 monthlyPayment,
        bool isActive,
        bool isRepaid,
        uint256 startTime,
        uint256 endTime
    ) {
        Loan storage loan = loans[loanId];
        return (
            loan.borrower,
            loan.lender,
            0, // FHE.decrypt(loan.amount) - will be decrypted off-chain
            0, // FHE.decrypt(loan.interestRate) - will be decrypted off-chain
            0, // FHE.decrypt(loan.duration) - will be decrypted off-chain
            0, // FHE.decrypt(loan.remainingAmount) - will be decrypted off-chain
            0, // FHE.decrypt(loan.monthlyPayment) - will be decrypted off-chain
            loan.isActive,
            loan.isRepaid,
            loan.startTime,
            loan.endTime
        );
    }
    
    function getRepaymentInfo(uint256 repaymentId) public view returns (
        uint8 amount,
        uint8 loanId,
        address borrower,
        uint256 timestamp
    ) {
        Repayment storage repayment = repayments[repaymentId];
        return (
            0, // FHE.decrypt(repayment.amount) - will be decrypted off-chain
            0, // FHE.decrypt(repayment.loanId) - will be decrypted off-chain
            repayment.borrower,
            repayment.timestamp
        );
    }
    
    function getBorrowerCreditScore(address borrower) public view returns (uint8) {
        return 0; // FHE.decrypt(borrowerCreditScore[borrower]) - will be decrypted off-chain
    }
    
    function getLenderReputation(address lender) public view returns (uint8) {
        return 0; // FHE.decrypt(lenderReputation[lender]) - will be decrypted off-chain
    }
}
