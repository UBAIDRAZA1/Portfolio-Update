'use client';

import { useState, useRef, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

const useTiltEffect = () => {
  const [rotation, setRotation] = useState<Position>({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState<Position>({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position
    const rotateY = ((x - rect.width / 2) / rect.width) * 20; // Max 20 degrees
    const rotateX = -((y - rect.height / 2) / rect.height) * 20; // Max 20 degrees
    
    setRotation({ x: rotateX, y: rotateY });
    
    // Calculate glow position percentage
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    
    setGlowPosition({ x: glowX, y: glowY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove as any);
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove as any);
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return {
    elementRef,
    rotation,
    glowPosition,
    isHovering
  };
};

export default useTiltEffect;