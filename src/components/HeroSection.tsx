
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { Hexagon, Globe } from 'lucide-react';

// Fallback component during 3D model loading
const ModelLoader = () => (
  <Html center>
    <div className="flex flex-col items-center justify-center">
      <div className="animate-spin h-12 w-12 mb-3 border-4 border-t-neon-blue rounded-full"></div>
      <p className="text-sm text-neon-blue font-orbitron">Cargando Experiencia 3D</p>
    </div>
  </Html>
);

// Simple 3D scene with geometric shapes
const Scene = () => {
  return (
    <>
      {/* Sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#1EAEDB" wireframe />
      </mesh>
      
      {/* Torus */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4, 0.2, 16, 100]} />
        <meshStandardMaterial color="#8B5CF6" />
      </mesh>
      
      {/* Rotating torus */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[3, 0.1, 16, 100]} />
        <meshStandardMaterial color="#06D6A0" />
      </mesh>
      
      {/* Small floating spheres */}
      {[...Array(10)].map((_, i) => {
        const theta = (i / 10) * Math.PI * 2;
        const radius = 5;
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;
        return (
          <mesh key={i} position={[x, (Math.sin(theta * 3) * 2), z]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#1EAEDB" : "#8B5CF6"} />
          </mesh>
        );
      })}
      
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#1EAEDB" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8B5CF6" />
    </>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <Suspense fallback={<ModelLoader />}>
            <Scene />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate 
              autoRotateSpeed={0.5} 
            />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">INNOVACIÓN DIGITAL</span>
            <br /> MÁS ALLÁ DE LA IMAGINACIÓN
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Creamos soluciones digitales únicas que se adaptan a las necesidades de cada proyecto, desafiando los límites de lo posible.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.a
              href="https://wa.me/+50672862183?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="cyberpunk-btn group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Construyamos El Futuro </span>
              <Globe className="inline-block w-5 h-5" />
            </motion.a>

            <motion.a 
              href="#services" 
              className="cyberpunk-btn bg-transparent group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Explorar Servicios</span>
              <Hexagon className="inline-block w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <p className="text-sm font-orbitron mb-2 text-neon-blue">Desplázate Para Explorar</p>
          <motion.div 
            className="w-[1px] h-10 bg-neon-blue/50"
            animate={{ 
              height: ["10px", "40px", "10px"],
              opacity: [0.2, 1, 0.2]
            }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
