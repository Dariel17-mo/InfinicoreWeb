
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Server, Layers } from 'lucide-react';


const services = [
  {
    title: "Desarrollo Web",
    icon: Monitor,
    description: "Sitios web y aplicaciones web de vanguardia que ofrecen experiencias de usuario incomparables con rendimiento ultrarrápido.",
    color: "neon-blue"
  },
  {
    title: "Aplicaciones Móviles",
    icon: Smartphone,
    description: "Apps móviles nativas y multiplataforma con UI/UX impresionante que involucran a usuarios en todos los dispositivos y plataformas.",
    color: "electric-purple"
  },
  {
    title: "Sistemas Personalizados",
    icon: Server,
    description: "Soluciones de software a medida adaptadas a las necesidades de tu negocio, automatizando flujos de trabajo y mejorando la productividad.",
    color: "neon-green"
  },
  {
    title: "Soluciones E-commerce",
    icon: Layers,
    description: "Tiendas en línea con todas las funciones que incluyen procesamiento de pagos sin problemas, gestión de inventario y herramientas de participación del cliente.",
    color: "neon-blue"
  }
];

const ServicesSection: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="relative py-24 bg-dark overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <div className="h-1 w-20 bg-neon-blue mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Entregamos soluciones digitales innovadoras que transforman negocios y crean experiencias de usuario extraordinarias.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card h-full"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: service.color === "neon-blue" 
                  ? "0 0 15px #1EAEDB" 
                  : service.color === "electric-purple" 
                  ? "0 0 15px #8B5CF6" 
                  : "0 0 15px #06D6A0"
              }}
            >
              <div className={`mb-6 w-16 h-16 rounded-lg flex items-center justify-center text-${service.color === "neon-blue" ? "neon-blue" : service.color === "electric-purple" ? "electric-purple" : "neon-green"}`}>
                {React.createElement(service.icon, { size: 32, className: `animate-pulse-glow text-${service.color === "neon-blue" ? "neon-blue" : service.color === "electric-purple" ? "electric-purple" : "neon-green"}` })}
              </div>
              <h3 className="text-xl font-orbitron mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <motion.div
                className="mt-6 flex items-center font-orbitron text-sm"
                whileHover={{ x: 5 }}
              >
                <a href="https://wa.me/+50672862183?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios" className={`text-${service.color === "neon-blue" ? "neon-blue" : service.color === "electric-purple" ? "electric-purple" : "neon-green"} hover:underline flex items-center`}>
                  Conoce Más
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;