# Dignified Loans - Privacy-First Microloan Platform

A decentralized microloan platform built with Fully Homomorphic Encryption (FHE) to ensure complete privacy protection for borrowers and lenders.

## Features

- **Privacy-First**: All sensitive financial data is encrypted using FHE technology
- **Decentralized**: Built on Ethereum Sepolia testnet with smart contracts
- **Secure Wallet Integration**: Connect with RainbowKit and multiple wallet providers
- **Transparent**: All loan transactions are verifiable on-chain while maintaining privacy
- **User-Friendly**: Modern React interface with shadcn/ui components

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui, Tailwind CSS
- **Blockchain**: Ethereum, Wagmi, RainbowKit
- **Privacy**: Zama FHE (Fully Homomorphic Encryption)
- **Smart Contracts**: Solidity with FHE integration

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Harley-GH/dignified-loans.git

# Navigate to the project directory
cd dignified-loans

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID
VITE_INFURA_API_KEY=YOUR_INFURA_API_KEY
VITE_ALTERNATIVE_RPC_URL=https://1rpc.io/sepolia
```

## Smart Contract

The platform uses a custom smart contract (`DignifiedLoans.sol`) that implements:

- Encrypted loan requests and approvals
- Privacy-preserving credit scoring
- Secure repayment tracking
- Reputation systems for borrowers and lenders

All sensitive data is encrypted using FHE, ensuring that even the smart contract cannot access unencrypted financial information.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # Reusable UI components
├── config/             # Configuration files
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── contracts/          # Smart contract files
```

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist folder to your hosting provider
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support and questions, please open an issue on GitHub.
