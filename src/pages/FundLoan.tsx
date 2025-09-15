import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Shield, DollarSign, Calendar, Percent, Target, AlertTriangle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const FundLoan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [fundingAmount, setFundingAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock loan data - in real app this would come from API
  const loan = {
    id: id || "1",
    encryptedId: "B7A9X2",
    loanAmount: 2500,
    purpose: "Small Business Expansion",
    repaymentTerm: "12 months",
    interestRate: 8.5,
    riskLevel: "low" as const,
    fundingProgress: 78,
    amountFunded: 1950,
    amountNeeded: 550,
    description: "Looking to expand my small retail business by purchasing additional inventory and upgrading point-of-sale systems. This investment will help serve more customers and increase revenue.",
    lenderCount: 12,
    monthlyPayment: 220.50,
    expectedReturn: 13.2
  };

  const riskColors = {
    low: "text-green-600",
    medium: "text-yellow-600", 
    high: "text-red-600"
  };

  const handleFunding = async () => {
    if (!fundingAmount || parseFloat(fundingAmount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid funding amount.",
        variant: "destructive"
      });
      return;
    }

    if (parseFloat(fundingAmount) > loan.amountNeeded) {
      toast({
        title: "Amount Too High",
        description: `Maximum funding needed is $${loan.amountNeeded}.`,
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Funding Successful!",
        description: `You've successfully funded $${fundingAmount} to borrower ${loan.encryptedId}.`,
      });
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-trust/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Browse Loans
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Loan Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="card-elevated">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="border-privacy/20 text-privacy bg-privacy/5">
                        <Shield className="w-3 h-3 mr-1" />
                        ID: {loan.encryptedId}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={`border-opacity-20 ${riskColors[loan.riskLevel]}`}
                      >
                        {loan.riskLevel.toUpperCase()} RISK
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{loan.purpose}</CardTitle>
                    <CardDescription className="text-base">
                      Requesting ${loan.loanAmount.toLocaleString()} • {loan.repaymentTerm}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Loan Purpose</h4>
                  <p className="text-muted-foreground">{loan.description}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <DollarSign className="w-6 h-6 mx-auto mb-2 text-trust" />
                    <div className="text-sm text-muted-foreground">Amount</div>
                    <div className="font-bold">${loan.loanAmount.toLocaleString()}</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-trust" />
                    <div className="text-sm text-muted-foreground">Term</div>
                    <div className="font-bold">{loan.repaymentTerm}</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Percent className="w-6 h-6 mx-auto mb-2 text-trust" />
                    <div className="text-sm text-muted-foreground">Interest</div>
                    <div className="font-bold">{loan.interestRate}%</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Target className="w-6 h-6 mx-auto mb-2 text-trust" />
                    <div className="text-sm text-muted-foreground">Monthly</div>
                    <div className="font-bold">${loan.monthlyPayment}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Assessment */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Risk Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">A-</div>
                    <div className="text-sm text-muted-foreground">Credit Score</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">2.3x</div>
                    <div className="text-sm text-muted-foreground">Income Ratio</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">98%</div>
                    <div className="text-sm text-muted-foreground">Similar Loans</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  This borrower has a strong credit profile with verified income and successful history 
                  with similar loan amounts. Risk assessment is based on encrypted data analysis.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Funding Panel */}
          <div className="space-y-6">
            <Card className="card-elevated sticky top-24">
              <CardHeader>
                <CardTitle>Fund This Loan</CardTitle>
                <CardDescription>
                  Help this borrower achieve their goals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-semibold">{loan.fundingProgress}%</span>
                  </div>
                  <Progress value={loan.fundingProgress} className="h-3" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${loan.amountFunded.toLocaleString()} funded</span>
                    <span>${loan.amountNeeded.toLocaleString()} needed</span>
                  </div>
                </div>

                <Separator />

                {/* Funding Form */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="amount">Funding Amount</Label>
                    <div className="relative mt-1">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="amount"
                        type="number"
                        placeholder="0.00"
                        className="pl-10"
                        value={fundingAmount}
                        onChange={(e) => setFundingAmount(e.target.value)}
                        max={loan.amountNeeded}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setFundingAmount("50")}
                    >
                      $50
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setFundingAmount("100")}
                    >
                      $100
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setFundingAmount(loan.amountNeeded.toString())}
                    >
                      Max
                    </Button>
                  </div>

                  <Button 
                    onClick={handleFunding}
                    className="w-full bg-gradient-trust text-trust-foreground hover:shadow-glow"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Fund Loan"}
                  </Button>
                </div>

                <Separator />

                {/* Investment Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Lenders</span>
                    <span className="font-medium">{loan.lenderCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected Return</span>
                    <span className="font-medium text-green-600">{loan.expectedReturn}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Risk Level</span>
                    <span className={`font-medium capitalize ${riskColors[loan.riskLevel]}`}>
                      {loan.riskLevel}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
                  <Shield className="w-4 h-4 inline mr-1" />
                  All transactions are secured with end-to-end encryption. 
                  Borrower identity remains private throughout the process.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FundLoan;