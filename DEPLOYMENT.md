# Vercel Deployment Guide for Dignified Loans

This guide provides step-by-step instructions for deploying the Dignified Loans platform to Vercel.

## Prerequisites

- GitHub account with access to the repository
- Vercel account (free tier available)
- Environment variables ready

## Step-by-Step Deployment

### Step 1: Access Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project" on the dashboard

### Step 2: Import GitHub Repository

1. In the "Import Git Repository" section, find `Harley-GH/dignified-loans`
2. Click "Import" next to the repository
3. Vercel will automatically detect it's a Vite project

### Step 3: Configure Project Settings

1. **Project Name**: `dignified-loans` (or your preferred name)
2. **Framework Preset**: Vite (should be auto-detected)
3. **Root Directory**: `./` (default)
4. **Build Command**: `npm run build` (default)
5. **Output Directory**: `dist` (default)
6. **Install Command**: `npm install` (default)

### Step 4: Set Environment Variables

Click "Environment Variables" and add the following:

```
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID
VITE_INFURA_API_KEY=YOUR_INFURA_API_KEY
VITE_ALTERNATIVE_RPC_URL=https://1rpc.io/sepolia
```

**Important**: Make sure to set these for all environments (Production, Preview, Development).

### Step 5: Deploy

1. Click "Deploy" button
2. Wait for the build process to complete (usually 2-3 minutes)
3. Vercel will provide you with a deployment URL

### Step 6: Configure Custom Domain (Optional)

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables Reference

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `VITE_CHAIN_ID` | Ethereum chain ID for Sepolia testnet | `11155111` |
| `VITE_RPC_URL` | Primary RPC endpoint | `https://sepolia.infura.io/v3/YOUR_KEY` |
| `VITE_WALLET_CONNECT_PROJECT_ID` | WalletConnect project ID | `YOUR_WALLET_CONNECT_PROJECT_ID` |
| `VITE_INFURA_API_KEY` | Infura API key for RPC access | `YOUR_INFURA_API_KEY` |
| `VITE_ALTERNATIVE_RPC_URL` | Backup RPC endpoint | `https://1rpc.io/sepolia` |

## Build Configuration

The project uses the following build settings:

- **Framework**: Vite
- **Node.js Version**: 18.x (recommended)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Post-Deployment Checklist

- [ ] Verify the application loads correctly
- [ ] Test wallet connection functionality
- [ ] Confirm all environment variables are set
- [ ] Check that the favicon and meta tags are working
- [ ] Test responsive design on mobile devices
- [ ] Verify all routes are accessible

## Troubleshooting

### Common Issues

1. **Build Fails**: Check that all dependencies are in package.json
2. **Environment Variables Not Working**: Ensure variables start with `VITE_`
3. **Wallet Connection Issues**: Verify WalletConnect project ID is correct
4. **RPC Errors**: Check that RPC URLs are accessible and valid

### Build Logs

If deployment fails, check the build logs in Vercel dashboard:
1. Go to your project
2. Click on the failed deployment
3. Review the build logs for specific error messages

## Automatic Deployments

Once configured, Vercel will automatically deploy:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches
- **Development**: Every pull request

## Performance Optimization

The project is already optimized with:
- Vite for fast builds
- Tree shaking for smaller bundle sizes
- Code splitting for better loading performance
- Optimized images and assets

## Security Considerations

- All sensitive data is encrypted using FHE
- Environment variables are secure in Vercel
- HTTPS is automatically enabled
- No sensitive data is exposed in client-side code

## Support

If you encounter issues:
1. Check the Vercel documentation
2. Review the project's GitHub issues
3. Contact the development team

## Deployment URL

After successful deployment, your application will be available at:
- Production: `https://dignified-loans.vercel.app` (or your custom domain)
- Preview: `https://dignified-loans-git-[branch].vercel.app`

Remember to update any hardcoded URLs in your application to use the production domain.
