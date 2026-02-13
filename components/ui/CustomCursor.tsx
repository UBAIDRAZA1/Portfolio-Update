'use client';

import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    const moveCursor = (e: MouseEvent) => {
      if (cursorDot && cursorOutline) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Add delay to outline for smooth effect
        setTimeout(() => {
          if (cursorOutline) {
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
          }
        }, 50);
      }
    };

    const handleMouseDown = () => {
      if (cursorDot) {
        cursorDot.classList.add('scale-0');
      }
    };

    const handleMouseUp = () => {
      if (cursorDot) {
        cursorDot.classList.remove('scale-0');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return null;
};

export default CustomCursor;