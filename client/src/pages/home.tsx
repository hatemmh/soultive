import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import SolutionsSection from "@/components/solutions-section";
import TeamSection from "@/components/team-section";
import CareersSection from "@/components/careers-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all animate-on-scroll elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <SolutionsSection />
      {/* <TeamSection /> */}
      {/* <CareersSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
