import { Shield, Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-trust flex items-center justify-center">
              <Shield className="w-6 h-6 text-trust-foreground" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground">Microloans with Dignity</h1>
              <p className="text-sm text-muted-foreground">Privacy-first lending platform</p>
            </div>
            <div className="block md:hidden">
              <h1 className="text-lg font-bold text-foreground">MicroDignity</h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-trust transition-colors">Browse Loans</a>
            <a href="/how-it-works" className="text-foreground hover:text-trust transition-colors">How It Works</a>
            <a href="/about" className="text-foreground hover:text-trust transition-colors">About</a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Notification with privacy badge */}
            <div className="hidden sm:flex items-center gap-2">
              <Badge variant="outline" className="text-privacy border-privacy/20 bg-privacy/5">
                <Shield className="w-3 h-3 mr-1" />
                Encrypted
              </Badge>
            </div>
            
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-trust rounded-full"></span>
            </Button>

            {/* Mobile menu */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};