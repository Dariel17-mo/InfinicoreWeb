
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Award, Globe, Zap } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Años de Experiencia' },
  { value: '50+', label: 'Proyectos Completados' },
  { value: '50+', label: 'Clientes Satisfechos' },
  { value: '4', label: 'Premios de la Industria' },
];

const valuesData = [
  {
    icon: Layers,
    title: 'Crecimiento Digital',
    description: 'Diseñamos experiencias digitales pensadas para convertir, aumentar ventas y posicionar a nuestros clientes por encima de su competencia.'
  },

  { 
    icon: Award, 
    title: 'Excelencia', 
    description: "Entregamos calidad excepcional en cada proyecto que emprendemos."
  },
  { 
    icon: Globe, 
    title: 'Visión Global', 
    description: "Creamos soluciones con alcance internacional y relevancia local."
  },
  { 
    icon: Zap, 
    title: 'Rendimiento', 
    description: "Optimizamos cada aspecto de nuestro trabajo para velocidad y eficiencia."
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-neon-blue/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-electric-purple/5 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Acerca de <span className="text-gradient">INFINICORE</span>
          </h2>
          <div className="h-1 w-20 bg-neon-blue mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Somos un equipo de innovadores digitales, creando experiencias web revolucionarias que definen el futuro de las empresas que nos contratan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Company description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-orbitron mb-6 text-gradient">Nuestra Historia</h3>
            <p className="mb-6 text-gray-300">
              INFINICORE fue fundada con una visión: Transformar cómo las empresas se conectan con sus clientes en el ámbito digital. No somos solo otra agencia de desarrollo web  somos arquitectos de la innovación digital.
            </p>
            <p className="mb-6 text-gray-300">
              Nuestro equipo está compuesto por desarrolladores, diseñadores y estrategas de élite que comparten una pasión por empujar los límites tecnológicos y crear experiencias digitales que cautivan y convierten.
            </p>
            <p className="text-gray-300">
              Combinamos tecnología avanzada, visión comercial y diseño inteligente para desarrollar sitios web y aplicaciones que no solo lucen bien, sino que generan ventas y posicionan marcas.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="p-6 glass-panel rounded-lg border border-neon-blue/20 text-center"
                whileHover={{ y: -10, boxShadow: '0 0 15px rgba(30, 174, 219, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="block text-4xl font-bold font-orbitron mb-2 text-gradient"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-gray-300">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-orbitron mb-8 text-center text-gradient">Nuestros Valores Fundamentales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesData.map((value, index) => (
              <motion.div
                key={index}
                className="p-6 glass-panel rounded-lg border border-electric-purple/20 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 0 15px rgba(139, 92, 246, 0.3)' }}
              >
                <div className="flex items-center justify-center mb-4">
                  <value.icon size={32} className="text-electric-purple" />
                </div>
                <h4 className="text-xl font-orbitron mb-3 text-center">{value.title}</h4>
                <p className="text-gray-300 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Team section placeholder - can be expanded in future iterations */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-orbitron mb-4 text-gradient">Conoce Nuestro Equipo</h3>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            Nuestro diverso equipo de ingenieros creativos aporta perspectivas únicas a cada proyecto.
          </p>
          <motion.a
            href="https://wa.me/+50672862183?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20su%20equipo%20de%20trabajo"
            className="cyberpunk-btn inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Trabaja Con Nuestro Equipo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;