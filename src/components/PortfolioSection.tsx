import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hexagon, Circle, Triangle, Image, ChevronDown } from 'lucide-react';

const projects = [
   {
    title: "FastWay Box",
    category: "Paginas Web",
    image: "/img/Fatway.png",
    description: "Sitio web corporativo para FastWay Box, con un diseño limpio y funcional que destaca sus servicios de mensajería y logística."
  },
  {
    title: "ProPlastCR",
    category: "Paginas Web",
    image: "/img/ProPlastCR.png",
    description: "Sitio web corporativo moderno y responsivo para ProPlastCR, con un enfoque en la usabilidad y la estética visual."
  },
  {
    title: "LexIA",
    category: "Aplicación Web",
    image: "/img/LexIA.png",
    description: "Asistente legal impulsado por IA que ayuda a los usuarios a navegar por el sistema legal con respuestas precisas y rápidas."
  },
  {
    title: "Luz de Plata",
    category: "E-commerce",
    image: "/img/Luz de plata.png",
    description: "Tienda en línea de joyería con un diseño elegante y funcional, enfocada en la experiencia del usuario y la seguridad en las transacciones."
  },
  {
    title: "GoldStrike Casino",
    category: "Aplicación Web",
    image: "/img/GoldStrike.png",
    description: "Sitio web de casino en línea con juegos interactivos, promociones y un sistema de gestión de cuentas seguro."
  },

  {
    title: "Grupo Barak",
    category: "Paginas Web",
    image: "/img/GrupoBarak.png",
    description: "Sitio web corporativo moderno y responsivo para Grupo Barak, con un enfoque en la usabilidad y la estética visual."
  },
    {
    title: "BizVentory",
    category: "Aplicación Web",
    image: "/img/BizVentory.png",
    description: "Sistema de gestión de inventario inteligente con análisis en tiempo real y predicciones de demanda."
  },
  {
    title: "VitalForma",
    category: "Paginas Web",
    image: "/img/VitalForma.png",
    description: "Sitio web corporativo para VitalForma, con un diseño atractivo y profesional que destaca sus servicios de salud y bienestar."
  },
  {
    title: "Bella Natura",
    category: "E-commerce",
    image: "/img/Bella Natura.png",
    description: "Tienda en línea de productos naturales y orgánicos con un diseño limpio y funcional, enfocada en la sostenibilidad y el aumento de ventas a gran escala."
  },
  {
    title: "Cafe Nativo",
    category: "Paginas Web",
    image: "/img/Cafe Nativo.png",
    description: "Sitio web corporativo para Cafe Nativo, con un diseño atractivo y funcional que destaca sus productos y servicios de café."
  },
  {
    title: "Cakezone",
    category: "E-commerce",
    image: "/img/Cakezone.png",
    description: "Plataforma de e-commerce avanzada con integración de AR para vistas previas de productos y checkout instantáneo."
  },
   {
    title: "Belleza Divina",
    category: "Paginas Web",
    image: "/img/Belleza Divina.png",
    description: "Sitio web corporativo para Belleza Divina, con un diseño atractivo y funcional que destaca sus servicios de belleza y bienestar."
  },
  {
    title: "EcoVida",
    category: "E-commerce",
    image: "/img/EcoVida.png",
    description: "Tienda en línea de productos ecológicos con un diseño limpio y funcional, enfocada en la sostenibilidad y el comercio justo."
  },
  {
    title: "MoneyWise",
    category: "Aplicación Web",
    image: "/img/MoneyWise.png",
    description: "Herramienta de colaboración para que los usuarios manejen mejor sus finanzas personales."
  },
  {
    title: "Sabores del alma",
    category: "Paginas Web",
    image: "/img/Sabores del alma.png",
    description: "Sitio web corporativo para Sabores del Alma, con un diseño atractivo y funcional que destaca su menu y platos destacados."
  },

  {
    title: "TecnoPlus",
    category: "E-commerce",
    image: "/img/TecnoPlus.png",
    description: "Tienda en línea de tecnología con un diseño moderno y funcional, enfocada en la experiencia del usuario y la seguridad en las transacciones."
  },
  {
    title: "HRIS PRO",
    category: "Aplicación Web",
    image: "/img/HRIS PRO.png",
    description: "Sistema de gestión de recursos humanos que optimiza la administración del personal con funcionalidades avanzadas."
  },
  {
    title: "TicoBarbers",
    category: "E-commerce",
    image: "/img/TicoBarbers.png",
    description: "Plataforma de e-commerce para gestion de citas y venta de productos de barbería, con un diseño moderno y funcional."
  },
  {
    title: "Moda Urbana",
    category: "Paginas Web",
    image: "/img/Moda Urbana.png",
    description: "Sitio web profesional para Moda Urbana, con un diseño atractivo y funcional que destaca sus productos de moda urbana y potencia sus ventas."
  },
  {
    title: "Registro Horas",
    category: "Aplicación Web",
    image: "/img/HorasApp.png",
    description: "Un registro de horas intuitivo y fácil de usar para freelancers y equipos."
  }
];

const categories = [
  { id: "all", name: "Todos los Proyectos", icon: Hexagon },
  { id: "Aplicación Web", name: "Apps Web", icon: Circle },
  { id: "E-commerce", name: "E-commerce", icon: Triangle },
  { id: "Paginas Web", name: "Paginas Web", icon: Image }
];

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Determinar qué proyectos mostrar basado en showAll
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-dark to-dark-purple overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestro <span className="text-gradient">Portafolio</span>
          </h2>
          <div className="h-1 w-20 bg-neon-blue mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Explora nuestro showcase de soluciones digitales innovadoras que empujan los límites de lo posible.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full font-orbitron text-sm flex items-center space-x-2 
                ${activeCategory === category.id ? 'bg-neon-blue text-white' : 'bg-dark-purple/50 border border-neon-blue/30 text-white hover:border-neon-blue'}`}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAll(false); // Reset showAll cuando cambie la categoría
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon size={16} />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layoutId={project.title}
                className="rounded-lg overflow-hidden glass-panel cursor-pointer transform transition-all hover:-translate-y-2 hover:shadow-neon-blue"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-purple to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="inline-block px-3 py-1 bg-electric-purple/80 rounded-full text-xs font-orbitron mb-2">{project.category}</span>
                    <h3 className="text-xl font-bold font-orbitron">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {hasMoreProjects && !showAll && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-electric-purple rounded-full font-orbitron text-white font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
              onClick={handleShowMore}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Ver Más Proyectos</span>
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={selectedProject.title}
              className="relative bg-dark-purple border border-neon-blue/30 rounded-lg overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="h-80 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 bg-electric-purple/80 rounded-full text-xs font-orbitron mb-2">{selectedProject.category}</span>
                    <h3 className="text-2xl font-bold font-orbitron">{selectedProject.title}</h3>
                  </div>
                  <button
                    className="text-gray-400 hover:text-white p-2"
                    onClick={() => setSelectedProject(null)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-dark/70 border border-neon-blue/20">
                    <h4 className="font-orbitron text-neon-blue mb-2">Tecnologías</h4>
                    <p className="text-sm text-gray-300">React, TypeScript, NextJS, Three.js, etc</p>
                  </div>
                  <div className="p-4 rounded-lg bg-dark/70 border border-neon-blue/20">
                    <h4 className="font-orbitron text-neon-blue mb-2">Tiempo</h4>
                    <p className="text-sm text-gray-300">8 semanas</p>
                  </div>
                </div>
                
                <a 
                  href="https://wa.me/+50672862183?text=Hola,%20necesito%20solicitar%20un%20proyecto%20para%20mi%20empresa" 
                  className="inline-block cyberpunk-btn"
                  onClick={() => setSelectedProject(null)}
                >
                  Solicitar Proyecto Similar
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;