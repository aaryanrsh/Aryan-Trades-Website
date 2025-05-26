
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/680d64f7-7755-47ec-97af-19f34bbb0c9e.png" 
              alt="Aryan Trades Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl md:text-2xl font-bold text-crypto-green">
              Aryan Trades Premium
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-crypto-green transition-colors">
              Features
            </a>
            <a href="#results" className="text-gray-300 hover:text-crypto-green transition-colors">
              Results
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-crypto-green transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-crypto-green transition-colors">
              Pricing
            </a>
            <Button 
              size="sm" 
              className="bg-green-gradient text-black font-bold hover:scale-105 transition-all duration-300"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-crypto-green"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-300 hover:text-crypto-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#results" 
                className="text-gray-300 hover:text-crypto-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Results
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-300 hover:text-crypto-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#pricing" 
                className="text-gray-300 hover:text-crypto-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <Button 
                size="sm" 
                className="bg-green-gradient text-black font-bold w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
