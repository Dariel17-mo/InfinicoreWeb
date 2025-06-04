
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-dark py-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Animated grid background with low opacity */}
        <div className="absolute inset-0 grid-bg opacity-5"></div>
        
        {/* Glowing elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-electric-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 right-0 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Logo and tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="text-3xl font-orbitron font-bold text-gradient mb-3 block">
              INFINI<span className="text-neon-blue">CORE</span>
            </a>
            <p className="text-gray-400 max-w-md">
              Pioneros en experiencias digitales que trascienden la imaginación e impulsan el crecimiento empresarial.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-8 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex justify-center md:justify-end">
              
                {/* Reemplaza la src con la ruta de tu logo */}
                <img
                  src="/img/LOGO COMPAÑIA.png"
                  alt="INFINICORE"
                  className="w-48 h-48 md:w-56 md:h-40 object-contain filter brightness-110"
                />
            </div>
          </motion.div>
        </div>
        
        {/* Navigation links */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-b border-neon-blue/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <h5 className="font-orbitron text-neon-blue mb-4">Servicios</h5>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-neon-blue transition-colors">Desarrollo Web</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-neon-blue transition-colors">Aplicaciones Móviles</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-neon-blue transition-colors">Sistemas Personalizados</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-neon-blue transition-colors">Soluciones E-commerce</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-orbitron text-neon-blue mb-4">Empresa</h5>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-neon-blue transition-colors">Acerca de Nosotros</a></li>
              <li><a href="https://wa.me/+50672862183?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20su%20equipo%20de%20trabajo" className="text-gray-400 hover:text-neon-blue transition-colors">Nuestro Equipo</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-neon-blue transition-colors">Premios</a></li>
              <li><a href="https://wa.me/+50672862183?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios" className="text-gray-400 hover:text-neon-blue transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-orbitron text-neon-blue mb-4">Recursos</h5>
            <ul className="space-y-2">
              <li><a href="" className="text-gray-400 hover:text-neon-blue transition-colors">Blog</a></li>
              <li><a href="" className="text-gray-400 hover:text-neon-blue transition-colors">Casos de Estudio</a></li>
              <li><a href="" className="text-gray-400 hover:text-neon-blue transition-colors">Documentación</a></li>
              <li><a href="" className="text-gray-400 hover:text-neon-blue transition-colors">Tutoriales</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-orbitron text-neon-blue mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><a href="/doc/Politica_de_Privacidad_WEBINFINICORE.pdf" className="text-gray-400 hover:text-neon-blue transition-colors">Política de Privacidad</a></li>
              <li><a href="/doc/Terminos_de_Servicio_WEBINFINI.pdf" className="text-gray-400 hover:text-neon-blue transition-colors">Términos de Servicio</a></li>
              <li><a href="/doc/Politica_de_Cookies_WEBINFINI.pdf" className="text-gray-400 hover:text-neon-blue transition-colors">Política de Cookies</a></li>
              <li><a href="/doc/Cumplimiento_GDPR_WEBINFINI.pdf" className="text-gray-400 hover:text-neon-blue transition-colors">GDPR</a></li>
            </ul>
          </div>
        </motion.div>
        
        {/* Bottom info */}
        <motion.div 
          className="pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} INFINICORE WEB WORKS. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a href="/doc/Politica_de_Privacidad_InfiniCore.pdf" className="text-gray-400 hover:text-neon-blue transition-colors">Política de Privacidad</a>
            <a href="/doc/Terminos_de_Servicio_InfiniCore.pdf" className="text-gray-400 hover:text-neon-blue transition-colors">Términos de Servicio</a>
            <a href="/doc/Configuracion_de_Cookies_InfiniCore.pdf" className="text-gray-400 hover:text-neon-blue transition-colors">Configuración de Cookies</a>
          </div>
        </motion.div>
      </div>
      
      {/* Technical line decoration at the bottom */}
      <div className="relative mt-12">
        <div className="tech-line h-[1px] w-full absolute bottom-0"></div>
        <div className="tech-line h-[1px] w-full absolute bottom-2"></div>
      </div>
    </footer>
  );
};

export default Footer;
