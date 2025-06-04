
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  const colors = ['#1EAEDB', '#8B5CF6', '#06D6A0'];

  const initParticles = () => {
    particles.current = [];
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particleCount = Math.min(window.innerWidth * 0.1, 100);
    
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  };

  const drawParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.current.forEach((particle, i) => {
      // Move particles
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
      
      // Calculate distance from mouse
      const dx = mousePosition.current.x - particle.x;
      const dy = mousePosition.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Apply slight attraction to mouse position
      if (distance < 100) {
        const angle = Math.atan2(dy, dx);
        const force = (100 - distance) / 2500;
        particle.speedX += Math.cos(angle) * force;
        particle.speedY += Math.sin(angle) * force;
      }
      
      // Limit speed
      const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
      if (speed > 1) {
        particle.speedX = (particle.speedX / speed) * 1;
        particle.speedY = (particle.speedY / speed) * 1;
      }
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Draw connections
      particles.current.forEach((otherParticle, j) => {
        if (i === j) return;
        
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = `${particle.color}${Math.floor((1 - distance / 100) * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });
    
    animationFrameId.current = requestAnimationFrame(drawParticles);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    initParticles();
    drawParticles();
    
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 opacity-70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 2 }}
    />
  );
};

export default ParticleBackground;
