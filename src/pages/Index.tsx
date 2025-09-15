import { useState } from "react";
import { Header } from "@/components/Header";
import { WalletConnect } from "@/components/WalletConnect";
import { BorrowerCard } from "@/components/BorrowerCard";
import { StatsOverview } from "@/components/StatsOverview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const Index = () => {
  const [walletConnected, setWalletConnected] = useState(false);

  // Mock data for borrower cards
  const borrowers = [
    {
      id: "1",
      encryptedId: "B7A9X2",
      loanAmount: "$2,500",
      purpose: "Small Business Expansion",
      repaymentTerm: "12 months",
      interestRate: "8.5%",
      riskLevel: "low" as const,
      fundingProgress: 78
    },
    {
      id: "2", 
      encryptedId: "M4K8P1",
      loanAmount: "$1,800",
      purpose: "Agricultural Equipment",
      repaymentTerm: "18 months",
      interestRate: "12.2%",
      riskLevel: "medium" as const,
      fundingProgress: 45
    },
    {
      id: "3",
      encryptedId: "N3L5Q9",
      loanAmount: "$3,200",
      purpose: "Education & Training",
      repaymentTerm: "24 months", 
      interestRate: "7.8%",
      riskLevel: "low" as const,
      fundingProgress: 92
    },
    {
      id: "4",
      encryptedId: "R8V2W7",
      loanAmount: "$950",
      purpose: "Healthcare Expenses",
      repaymentTerm: "6 months",
      interestRate: "15.5%",
      riskLevel: "high" as const,
      fundingProgress: 23
    },
    {
      id: "5",
      encryptedId: "F6J4H3",
      loanAmount: "$4,100",
      purpose: "Technology Upgrade",
      repaymentTerm: "15 months",
      interestRate: "9.2%",
      riskLevel: "medium" as const,
      fundingProgress: 67
    },
    {
      id: "6",
      encryptedId: "D9T1Y5",
      loanAmount: "$1,350",
      purpose: "Home Improvement",
      repaymentTerm: "9 months",
      interestRate: "11.8%",
      riskLevel: "low" as const,
      fundingProgress: 85
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-12">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Microloans with 
              <span className="bg-gradient-trust bg-clip-text text-transparent"> Dignity</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A privacy-first lending platform where borrower identities and loan amounts are encrypted, 
              ensuring dignity while enabling access to capital.
            </p>
          </div>
          
          {/* Wallet Connection */}
          <div className="max-w-md mx-auto">
            <WalletConnect />
          </div>
        </section>

        {/* Stats Overview */}
        <section>
          <StatsOverview />
        </section>

        {/* Loan Browser */}
        <section className="space-y-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Browse Loan Opportunities</h2>
              <p className="text-muted-foreground">
                All borrower identities are encrypted to protect privacy while enabling informed lending decisions.
              </p>
            </div>
            
            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by purpose..."
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Risk Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Risk Levels</SelectItem>
                  <SelectItem value="low">Low Risk</SelectItem>
                  <SelectItem value="medium">Medium Risk</SelectItem>
                  <SelectItem value="high">High Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Borrower Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {borrowers.map((borrower) => (
              <BorrowerCard key={borrower.id} {...borrower} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-trust/20 text-trust hover:bg-trust/5">
              Load More Opportunities
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
