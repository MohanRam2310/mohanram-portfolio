"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Hero component renders a full‑screen introduction with the name and role
 * accompanied by a subtle gradient backdrop. A call‑to‑action button
 * encourages visitors to get in touch. Framer Motion animates the entrance.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-20">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-white via-amber-50 to-gold/20 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700" />
      {/* Animated headline */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="mb-4 px-4 text-center font-headline text-5xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100 md:text-7xl"
      >
        Mohan Ram
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
        className="mb-8 px-6 text-center text-lg md:text-2xl text-neutral-700 dark:text-neutral-300 max-w-2xl"
      >
        E‑commerce & Digital Marketing Specialist
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4, ease: 'easeOut' }}
      >
        <Link
          href="#contact"
          className="hoverable btn-ripple inline-block rounded-full bg-gold px-8 py-3 text-base font-medium text-black shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl dark:text-neutral-900"
        >
          Work With Me
        </Link>
      </motion.div>
    </section>
  );
}