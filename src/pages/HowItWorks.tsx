import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, DollarSign, Users, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Shield,
      title: "Privacy-First Registration",
      description: "Borrowers register with encrypted identities, ensuring dignity while maintaining transparency for lenders.",
      badge: "Encrypted"
    },
    {
      icon: DollarSign,
      title: "Loan Request Creation",
      description: "Create loan requests with purpose, amount, and terms. All personal information remains encrypted.",
      badge: "Secure"
    },
    {
      icon: Users,
      title: "Community Funding",
      description: "Lenders browse and fund loans based on encrypted profiles and loan purposes.",
      badge: "Transparent"
    },
    {
      icon: CheckCircle,
      title: "Automated Repayment",
      description: "Smart contracts handle repayments automatically, ensuring trust and reducing administrative costs.",
      badge: "Automated"
    }
  ];

  const features = [
    {
      title: "Zero-Knowledge Privacy",
      description: "Borrower identities are encrypted using advanced cryptography, protecting dignity while enabling informed lending decisions."
    },
    {
      title: "Transparent Terms",
      description: "All loan terms, interest rates, and repayment schedules are clearly displayed and immutable once agreed upon."
    },
    {
      title: "Community-Driven",
      description: "Lenders can fund loans partially or fully, creating a collaborative approach to microfinance."
    },
    {
      title: "Smart Contract Security",
      description: "Blockchain technology ensures automatic execution of loan terms and secure handling of funds."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              How Our Platform 
              <span className="bg-gradient-trust bg-clip-text text-transparent"> Works</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A step-by-step guide to privacy-first microfinance
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">The Lending Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full card-elevated hover:shadow-glow transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-trust flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-trust-foreground" />
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-trust">{index + 1}</span>
                      <Badge variant="outline" className="border-trust/20 text-trust">
                        {step.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                
                {/* Arrow for non-mobile view */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-trust" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elevated hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-privacy flex items-center justify-center">
                      <Lock className="w-4 h-4 text-privacy-foreground" />
                    </div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Security Note */}
        <section className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-shield flex items-center justify-center">
              <Shield className="w-6 h-6 text-shield-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Privacy & Security</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform uses advanced encryption and blockchain technology to ensure that all borrower 
              information remains private while still providing lenders with the necessary data to make 
              informed funding decisions.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HowItWorks;