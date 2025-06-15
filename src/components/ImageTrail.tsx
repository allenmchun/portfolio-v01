import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ImageTrailProps {
  images: string[];
  renderImageCount?: number;
}

export function ImageTrail({ images, renderImageCount = 7 }: ImageTrailProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[600px] w-full overflow-hidden bg-black"
      initial="initial"
      animate="animate"
    >
      {Array.from({ length: renderImageCount }).map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute left-0 top-0 h-48 w-32 rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[i % images.length]})`,
            x: mousePosition.x - 64,
            y: mousePosition.y - 96,
            filter: 'brightness(0.8)',
            transition: {
              delay: i * 0.05,
              duration: 0.3,
              ease: 'linear',
            },
          }}
          animate={{
            scale: 1 - i * 0.05,
            opacity: 1 - i * 0.1,
          }}
        />
      ))}
    </motion.div>
  );
}