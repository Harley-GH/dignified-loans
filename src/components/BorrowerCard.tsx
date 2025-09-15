import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Clock, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface BorrowerCardProps {
  id: string;
  encryptedId: string;
  loanAmount: string;
  purpose: string;
  repaymentTerm: string;
  interestRate: string;
  riskLevel: "low" | "medium" | "high";
  fundingProgress: number;
  className?: string;
}

export const BorrowerCard = ({
  id,
  encryptedId,
  loanAmount,
  purpose,
  repaymentTerm,
  interestRate,
  riskLevel,
  fundingProgress,
  className
}: BorrowerCardProps) => {
  const navigate = useNavigate();
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "text-shield bg-shield/10 border-shield/20";
      case "medium": return "text-orange-600 bg-orange-50 border-orange-200";
      case "high": return "text-destructive bg-destructive/10 border-destructive/20";
      default: return "text-muted-foreground bg-muted border-border";
    }
  };

  return (
    <Card className={cn(
      "p-6 transition-all duration-300 hover:shadow-card hover:scale-[1.02] cursor-pointer",
      "bg-card border-border/50 backdrop-blur-sm",
      className
    )}>
      {/* Header with encrypted ID and shield */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-privacy/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-privacy" />
          </div>
          <div>
            <h3 className="font-medium text-foreground">Borrower #{encryptedId}</h3>
            <p className="text-xs text-muted-foreground">Identity Protected</p>
          </div>
        </div>
        <Badge variant="outline" className={getRiskColor(riskLevel)}>
          {riskLevel.toUpperCase()} RISK
        </Badge>
      </div>

      {/* Loan details */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Loan Amount</p>
            <p className="font-semibold text-foreground">{loanAmount}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Interest Rate</p>
            <p className="font-semibold text-trust">{interestRate}</p>
          </div>
        </div>

        <div>
          <p className="text-muted-foreground text-sm mb-1">Purpose</p>
          <p className="text-foreground font-medium">{purpose}</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{repaymentTerm}</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <span>{fundingProgress}% funded</span>
          </div>
        </div>

        {/* Funding progress bar */}
        <div className="space-y-2">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-trust h-2 rounded-full transition-all duration-500"
              style={{ width: `${fundingProgress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            ${Math.round((fundingProgress / 100) * parseInt(loanAmount.replace(/[$,]/g, '')))} raised
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-6">
        <Button 
          className="flex-1 bg-gradient-trust hover:shadow-trust transition-all duration-300"
          onClick={() => navigate(`/fund-loan/${id}`)}
        >
          Fund Loan
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          className="border-privacy/20 text-privacy hover:bg-privacy/5"
          onClick={() => navigate(`/fund-loan/${id}`)}
        >
          <Eye className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};