import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Inicio', href: '#home' },
    { title: 'Servicios', href: '#services' },
    { title: 'Portafolio', href: '#portfolio' },
    { title: 'Nosotros', href: '#about' },
    { title: 'Contacto', href: 'https://wa.me/+50672862183?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 glass-panel' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a 
            href="https://wa.me/+50672862183?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios" 
            className="text-2xl font-orbitron font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            INFINI<span className="text-neon-blue">CORE</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="font-orbitron text-sm tracking-wider hover-glow"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                {link.title}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/+50672862183?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
            className="hidden md:block cyberpunk-btn text-sm"
            whileHover={{ scale: 1.05, boxShadow: '0 0 8px #1EAEDB' }}
            whileTap={{ scale: 0.95 }}
          >
            Contactanos
          </motion.a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-muted rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className="md:hidden overflow-hidden"
          variants={menuVariants}
          initial="hidden"
          animate={mobileMenuOpen ? "visible" : "hidden"}
        >
          <div className="pt-4 pb-3 space-y-3">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="block py-2 px-4 font-orbitron text-sm hover:bg-muted/30 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
              >
                {link.title}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/+50672862183?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
              className="block w-full text-center cyberpunk-btn text-sm mt-2"
              onClick={() => setMobileMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
            >
              Contactanos
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;