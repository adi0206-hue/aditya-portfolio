import React, { useEffect, useRef } from 'react';

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate Stars
    const numStars = Math.floor((width * height) / 3000);
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2,
      alpha: Math.random(),
      speed: Math.random() * 0.4 + 0.1,
      delta: Math.random() * 0.02 + 0.005
    }));

    // Floating Crewmates in Space
    const crewmatesInSpace = [
      { x: width * 0.15, y: height * 0.25, vx: 0.2, vy: 0.15, rotation: 0, rotSpeed: 0.005, color: '#c51111', scale: 0.4 },
      { x: width * 0.85, y: height * 0.7, vx: -0.15, vy: -0.1, rotation: 0.5, rotSpeed: -0.004, color: '#38fedc', scale: 0.35 }
    ];

    const render = () => {
      ctx.fillStyle = '#07090e';
      ctx.fillRect(0, 0, width, height);

      // Deep space nebula glow gradient
      const grad1 = ctx.createRadialGradient(width * 0.2, height * 0.3, 0, width * 0.2, height * 0.3, width * 0.5);
      grad1.addColorStop(0, 'rgba(56, 254, 220, 0.04)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(width * 0.8, height * 0.7, 0, width * 0.8, height * 0.7, width * 0.5);
      grad2.addColorStop(0, 'rgba(237, 84, 186, 0.03)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Render Stars
      ctx.fillStyle = '#ffffff';
      stars.forEach(star => {
        star.alpha += star.delta;
        if (star.alpha > 1 || star.alpha < 0.1) {
          star.delta = -star.delta;
        }

        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });

      // Render Floating Space Crewmates
      crewmatesInSpace.forEach(cm => {
        cm.x += cm.vx;
        cm.y += cm.vy;
        cm.rotation += cm.rotSpeed;

        if (cm.x < -100) cm.x = width + 100;
        if (cm.x > width + 100) cm.x = -100;
        if (cm.y < -100) cm.y = height + 100;
        if (cm.y > height + 100) cm.y = -100;

        ctx.save();
        ctx.translate(cm.x, cm.y);
        ctx.rotate(cm.rotation);
        ctx.scale(cm.scale, cm.scale);
        ctx.globalAlpha = 0.6;

        // Draw simple mini crewmate silhouette
        ctx.fillStyle = cm.color;
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 5;

        // Body
        ctx.beginPath();
        ctx.roundRect(-30, -40, 60, 80, [30, 30, 20, 20]);
        ctx.fill();
        ctx.stroke();

        // Visor
        ctx.fillStyle = '#71d4ec';
        ctx.beginPath();
        ctx.ellipse(10, -15, 22, 14, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Backpack
        ctx.fillStyle = cm.color;
        ctx.beginPath();
        ctx.roundRect(-45, -20, 20, 50, 8);
        ctx.fill();
        ctx.stroke();

        ctx.restore();
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
