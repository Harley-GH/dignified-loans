import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, Shield, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "We believe financial dignity starts with protecting borrower privacy while maintaining transparency."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our platform is built by and for communities who understand the importance of mutual support."
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Every loan funded creates opportunities and helps break cycles of financial exclusion."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Technology should democratize access to capital, regardless of geography or background."
    }
  ];

  const stats = [
    { number: "2,500+", label: "Loans Funded" },
    { number: "$1.2M", label: "Capital Deployed" },
    { number: "45", label: "Countries Served" },
    { number: "98.5%", label: "Repayment Rate" }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      description: "Former World Bank economist passionate about financial inclusion and privacy rights."
    },
    {
      name: "Marcus Rodriguez", 
      role: "CTO",
      description: "Blockchain architect with 10+ years in cryptography and decentralized systems."
    },
    {
      name: "Aisha Patel",
      role: "Head of Product",
      description: "UX researcher focused on creating dignified financial experiences for underserved communities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-8">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About 
              <span className="bg-gradient-trust bg-clip-text text-transparent"> MicroDignity</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're building the future of microfinance where privacy, dignity, and access to capital 
              go hand in hand. Our mission is to democratize lending while protecting borrower privacy.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-trust flex items-center justify-center">
              <Target className="w-8 h-8 text-trust-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To create a world where everyone has access to fair financial services without 
              sacrificing their privacy or dignity. We believe that financial inclusion should 
              empower, not expose vulnerable individuals.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center card-elevated hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gradient-privacy flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-privacy-foreground" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">Impact by Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-trust bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center card-elevated hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-shield flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-shield-foreground" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <Badge variant="outline" className="border-trust/20 text-trust w-fit mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{member.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recognition */}
        <section className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50">
          <div className="text-center space-y-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-trust flex items-center justify-center">
              <Award className="w-6 h-6 text-trust-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="space-y-2">
                <div className="font-semibold text-trust">FinTech Innovation Award 2024</div>
                <div className="text-sm text-muted-foreground">Best Privacy-Focused Platform</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-trust">Social Impact Prize</div>
                <div className="text-sm text-muted-foreground">Digital Financial Inclusion</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-trust">Tech for Good</div>
                <div className="text-sm text-muted-foreground">Blockchain for Social Good</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Join Our Mission</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to access capital or help others achieve their goals, 
            you can be part of building a more inclusive financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-trust text-trust-foreground hover:shadow-glow">
              Start Lending
            </Button>
            <Button variant="outline" size="lg" className="border-trust/20 text-trust hover:bg-trust/5">
              Apply for Loan
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;