import React, { useState, useEffect } from 'react';
  
  // Effet de particules pour l'arrière-plan
  const ParticleEffect = () => {
    const [particles, setParticles] = useState([]);
  
    useEffect(() => {
      const createParticles = () => {
        const newParticles = [];
        for (let i = 0; i < 20; i++) {
          newParticles.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 6 + 2, // Augmenté pour être plus visible
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.1,
            color: [
              'amber', 'red', 'purple', 'teal', 'blue'
            ][Math.floor(Math.random() * 5)]
          });
        }
        setParticles(newParticles);
      };
  
      createParticles();
  
      const interval = setInterval(() => {
        setParticles(prev => prev.map(p => ({
          ...p,
          x: (p.x + p.speedX + 100) % 100,
          y: (p.y + p.speedY + 100) % 100
        })));
      }, 50);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map(p => (
          <div
            key={p.id}
            className={`absolute rounded-full bg-${p.color}-500`}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              boxShadow: `0 0 ${p.size * 2}px ${p.size / 2}px rgba(var(--${p.color}-rgb), 0.3)`
            }}
          />
        ))}
      </div>
    );
  };

  export default ParticleEffect