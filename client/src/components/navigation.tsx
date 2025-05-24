import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import soultiveLogo from "@assets/Screenshot_2025-01-02_at_01.37.05-ai-brush-removebg-6934gv69.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src={soultiveLogo} 
                alt="Soultive" 
                className="h-10 w-auto"
              />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-primary font-medium px-3 py-2 text-sm hover:text-primary-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('careers')}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm transition-colors"
              >
                Careers
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 text-sm font-medium"
              >
                Contact
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-gray-600 hover:text-primary w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-gray-600 hover:text-primary w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-gray-600 hover:text-primary w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="block px-3 py-2 text-gray-600 hover:text-primary w-full text-left"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('careers')}
              className="block px-3 py-2 text-gray-600 hover:text-primary w-full text-left"
            >
              Careers
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="m-3 w-auto"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
