"use client";

import { motion } from 'framer-motion';
import { FaShoppingBag, FaChartLine, FaUsers, FaRocket } from 'react-icons/fa';

interface Service {
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: number }>;
}

/**
 * WhatIDo component presents Mohan Ram's core services in a responsive grid.
 * Each item animates in via Framer Motion and features an icon, headline
 * and short description.
 */
export default function WhatIDo() {
  const services: Service[] = [
    {
      title: 'E‑commerce Store Management',
      description:
        'End‑to‑end oversight of your online store: catalog, operations and optimisation.',
      Icon: FaShoppingBag,
    },
    {
      title: 'Performance Marketing',
      description:
        'ROI‑driven ads across Meta, Google and marketplaces to scale your sales.',
      Icon: FaChartLine,
    },
    {
      title: 'CRM & Retention Funnels',
      description:
        'Automated email, SMS and WhatsApp flows that keep customers coming back.',
      Icon: FaUsers,
    },
    {
      title: 'Brand Strategy & Launches',
      description:
        'Positioning, storytelling and campaign strategy to launch or relaunch your brand.',
      Icon: FaRocket,
    },
  ];
  return (
    <section className="py-16 px-4" id="services">
      <h2 className="mb-10 text-center font-headline text-3xl font-bold text-neutral-900 dark:text-neutral-100 md:text-4xl">
        What I Do
      </h2>
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-start rounded-lg bg-neutral-100 p-6 shadow-md dark:bg-neutral-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
          >
            {/*
              We wrap the icon in a span with styling instead of passing
              className directly to the icon component. React Icons
              components only accept a limited set of props (size, color,
              strokeWidth, etc.), so TypeScript complains when additional
              props like `className` are provided. Wrapping the icon
              allows us to style it via Tailwind classes without
              modifying its props.
            */}
            <span className="mb-4 text-gold">
              <service.Icon size={32} />
            </span>
            <h3 className="mb-2 font-headline text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {service.title}
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}