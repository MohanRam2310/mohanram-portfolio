"use client";

import { useEffect } from 'react';

// NOTE: Locomotive Scroll accesses `window` and `document` when it is imported. When
// Next.js pre-renders pages on the server, those globals do not exist and the
// import will throw a `ReferenceError: document is not defined`. To avoid
// breaking the static build we lazily import the library inside `useEffect` so
// that it only runs in the browser. See
// https://nextjs.org/docs/messages/prerender-error for details.

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
    let scrollInstance: any;
    // Dynamically import locomotive-scroll only on the client. This avoids
    // referencing `window`/`document` during server-side rendering.
    import('locomotive-scroll').then((mod) => {
      const LocomotiveScroll = mod.default;
      scrollInstance = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]') as HTMLElement,
        smooth: true,
        multiplier: 1,
        // Use `class` option to add class to HTML when smooth scroll is active
      });
    });
    return () => {
      if (scrollInstance) {
        scrollInstance.destroy();
      }
    };
  }, []);
  return <div data-scroll-container>{children}</div>;
}