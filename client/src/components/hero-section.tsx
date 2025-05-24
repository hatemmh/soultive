import { Button } from "@/components/ui/button";
import { TrendingUp, Bot } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-gradient py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Intelligent Software <span className="text-emerald-400">Solutions</span> for Modern Business
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We develop cutting-edge AI solutions, process automation, and custom software that transforms how businesses operate and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-primary px-8 py-4 h-auto text-base font-semibold hover:bg-gray-50"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="border-2 border-white text-white px-8 py-4 h-auto text-base font-semibold hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -top-4 -left-4 bg-emerald-500 text-white p-4 rounded-lg shadow-lg">
              <TrendingUp size={32} />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white text-primary p-4 rounded-lg shadow-lg">
              <Bot size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
