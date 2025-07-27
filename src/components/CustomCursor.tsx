"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CustomCursor tracks the user's mouse and renders a small circle that expands
 * when hovering over interactive elements (links, buttons, elements with
 * `.hoverable` class). The cursor uses motion values and a spring animation
 * for smooth movement.
 */
export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 6);
      y.set(e.clientY - 6);
    };
    window.addEventListener('mousemove', move);
    // Identify elements that should trigger cursor enlargement
    const hoverables = document.querySelectorAll(
      'a, button, [data-cursor=pointer], .hoverable'
    );
    const handleEnter = () => setHovered(true);
    const handleLeave = () => setHovered(false);
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });
    return () => {
      window.removeEventListener('mousemove', move);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [x, y]);

  const springConfig = { damping: 30, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block mix-blend-difference rounded-full bg-gold"
      animate={{
        width: hovered ? 40 : 12,
        height: hovered ? 40 : 12,
      }}
      style={{
        translateX: springX,
        translateY: springY,
      }}
    />
  );
}
