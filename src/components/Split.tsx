import React, { useEffect, useRef, useState } from 'react';

export function Split() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      setSize({ width, height });
    };

    setContext(ctx);
    updateSize();

    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    if (!context || !size.width || !size.height) return;

    const draw = () => {
      context.fillStyle = '#000';
      context.fillRect(0, 0, size.width, size.height);

      // Draw grid
      context.strokeStyle = '#333';
      context.lineWidth = 1;
      const gridSize = 20;

      for (let x = 0; x < size.width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, size.height);
        context.stroke();
      }

      for (let y = 0; y < size.height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(size.width, y);
        context.stroke();
      }

      // Draw ripple effect
      const maxRadius = Math.max(size.width, size.height);
      const numRings = 5;
      const spacing = 50;
      
      context.strokeStyle = '#666';
      context.lineWidth = 2;

      for (let i = 0; i < numRings; i++) {
        const radius = ((Date.now() / 20) + (i * spacing)) % maxRadius;
        context.beginPath();
        context.arc(mousePos.x, mousePos.y, radius, 0, Math.PI * 2);
        context.stroke();
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();
  }, [context, size, mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full bg-black"
      onMouseMove={handleMouseMove}
    />
  );
}