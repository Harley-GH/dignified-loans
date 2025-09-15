import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';
import { config } from './env';

export const walletConfig = getDefaultConfig({
  appName: 'Dignified Loans',
  projectId: config.walletConnectProjectId,
  chains: [sepolia],
  ssr: false,
});
