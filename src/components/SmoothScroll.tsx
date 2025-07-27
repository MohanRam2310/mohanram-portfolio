"use client";

import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

interface Props {
  children: React.ReactNode;
}

/**
 * SmoothScroll wraps its children and applies a smooth scrolling experience
 * using the Locomotive Scroll library. It instantiates the scroll on mount
 * and cleans up on unmount. Locomotive Scroll provides inertia and subtle
 * acceleration that gives the page a premium feel.
 */
export default function SmoothScroll({ children }: Props) {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]') as HTMLElement,
      smooth: true,
      multiplier: 1,
      // Use `class` option to add class to HTML when smooth scroll is active
    });
    return () => {
      scroll.destroy();
    };
  }, []);
  return <div data-scroll-container>{children}</div>;
}
