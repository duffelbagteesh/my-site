import React, { useRef, useEffect } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to cover the entire viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray: {x: number, y: number, size: number, speedX: number, speedY: number, distance: number}[] = [];
    const numberOfParticles = 100;
    const maxParticleSize = 5;
    const minDistance = 100;

    const mouse = {
      x: null as unknown as number,
      y: null as unknown as number,
    };

    canvas.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * maxParticleSize + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        distance: 0,
      });
    }
    

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        const particle = particlesArray[i];
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.globalAlpha = 0.5; // Set the opacity
        ctx.fillStyle = '#d3d3d3'; // Set the fill color
  ctx.fill();
  ctx.strokeStyle = '#d3d3d3'; // Set the stroke color
  ctx.stroke();
        ctx.closePath();
        ctx.fill();

        // Update particle properties
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Detect edge collision
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Calculate distance to mouse
        particle.distance = Math.hypot(particle.x - mouse.x, particle.y - mouse.y);

        // Draw line to close particles
        for (let j = i; j < particlesArray.length; j++) {
          const particle2 = particlesArray[j];
          const distance = Math.hypot(particle.x - particle2.x, particle.y - particle2.y);
          if (distance < minDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    };

    animateParticles();

    // Clean up
    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: -1 
      }} 
    />
  );
};
export default ParticleBackground;
