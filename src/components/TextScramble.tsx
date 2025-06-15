import React, { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
  text: string;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';

export function TextScramble({ text }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number>(0);
  const lastUpdateRef = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = () => {
    let iterations = 0;
    const maxIterations = 30;
    const iterationDelay = 35; // Increased to 35ms
    
    const animate = (timestamp: number) => {
      if (iterations >= maxIterations) {
        setDisplayText(text);
        return;
      }

      if (timestamp - lastUpdateRef.current >= iterationDelay) {
        setDisplayText(
          text
            .split('')
            .map((char, idx) => {
              if (idx < iterations) return text[idx];
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        iterations += 1;
        lastUpdateRef.current = timestamp;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Initial animation
    startScramble();

    // Set up interval for repeated animations
    intervalRef.current = setInterval(startScramble, 5000); // Changed to 5 seconds
    
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  return <span className="font-mono">{displayText}</span>;
}