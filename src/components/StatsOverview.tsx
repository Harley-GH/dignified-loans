import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Shield, DollarSign } from "lucide-react";

export const StatsOverview = () => {
  const stats = [
    {
      title: "Total Loans Funded",
      value: "$2.4M",
      change: "+12.3%",
      icon: DollarSign,
      color: "text-trust",
      bgColor: "bg-trust/10"
    },
    {
      title: "Active Borrowers",
      value: "1,247",
      change: "+8.1%", 
      icon: Users,
      color: "text-privacy",
      bgColor: "bg-privacy/10"
    },
    {
      title: "Privacy Protected",
      value: "100%",
      change: "Always",
      icon: Shield,
      color: "text-shield",
      bgColor: "bg-shield/10"
    },
    {
      title: "Average Return",
      value: "12.8%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "text-trust",
      bgColor: "bg-trust/10"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 bg-card border-border/50 hover:shadow-card transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground font-medium">{stat.title}</p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-shield" />
                <span className="text-xs text-shield font-medium">{stat.change}</span>
              </div>
            </div>
            <div className={`w-12 h-12 rounded-full ${stat.bgColor} flex items-center justify-center`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};