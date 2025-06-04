
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import AboutSection from '../components/AboutSection';

import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = "INFINICORE | Innovación Digital más allá de la imaginación";
  }, []);

  // Button to scroll back to top
  const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    // Show button when page is scrolled beyond a threshold
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Set up scroll event listener
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    return (
      <motion.button
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-neon-blue flex items-center justify-center shadow-neon-blue transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    );
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Animated particle background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content sections */}
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
