# Environment Setup Guide

## Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Chain Configuration
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
VITE_ALTERNATIVE_RPC_URL=https://1rpc.io/sepolia

# Wallet Connect Configuration
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID

# Infura Configuration
VITE_INFURA_API_KEY=YOUR_INFURA_API_KEY
```

## How to Get API Keys

### 1. Infura API Key
1. Go to [infura.io](https://infura.io)
2. Create an account or sign in
3. Create a new project
4. Copy the Project ID (this is your API key)

### 2. WalletConnect Project ID
1. Go to [cloud.walletconnect.com](https://cloud.walletconnect.com)
2. Create an account or sign in
3. Create a new project
4. Copy the Project ID

## Setup Instructions

1. Copy the environment variables above
2. Create a `.env` file in the project root
3. Replace `YOUR_*` placeholders with actual values
4. Save the file
5. Restart your development server

## Security Notes

- Never commit the `.env` file to version control
- The `.env` file is already in `.gitignore`
- For production deployment, set these variables in your hosting platform
- All variables must start with `VITE_` to be accessible in the frontend

## Default Values

The application includes default values for development, but you should replace them with your own keys for production use.
