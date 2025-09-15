import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Card } from "@/components/ui/card";
import { Wallet, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface WalletConnectProps {
  className?: string;
}

export const WalletConnect = ({ className }: WalletConnectProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      <Card className="p-6 bg-gradient-hero border-border/50">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-trust/10 flex items-center justify-center">
            <Wallet className="w-8 h-8 text-trust" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Connect Your Wallet</h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Securely connect your wallet to access microloans with complete privacy protection using FHE encryption
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-privacy">
            <Shield className="w-4 h-4" />
            <span>Fully Homomorphic Encryption</span>
          </div>
        </div>
      </Card>

      <div className="flex justify-center">
        <ConnectButton 
          chainStatus="icon"
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
        />
      </div>
    </div>
  );
};