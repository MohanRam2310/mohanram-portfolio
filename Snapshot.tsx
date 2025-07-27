"use client";

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import {
  FaShopify,
  FaAmazon,
  FaFacebookF,
  FaGoogle,
  FaWhatsapp,
  FaDatabase,
} from 'react-icons/fa';

/**
 * Snapshot component displays key statistics about Mohan Ram's performance
 * alongside icons representing platforms he works with. Counters animate
 * upward when the component enters the viewport.
 */
export default function Snapshot() {
  const stats = [
    { end: 5, suffix: ' Cr+', prefix: '₹', label: 'Ad Spend' },
    { end: 3, suffix: 'x', label: 'ROAS' },
    { end: 10, suffix: '+', label: 'Brand Launches' },
  ];
  const icons = [
    { Icon: FaShopify, label: 'Shopify' },
    { Icon: FaAmazon, label: 'Amazon' },
    { Icon: FaFacebookF, label: 'Meta Ads' },
    { Icon: FaGoogle, label: 'Google Ads' },
    { Icon: FaDatabase, label: 'CRM' },
    { Icon: FaWhatsapp, label: 'WhatsApp' },
  ];

  return (
    <section className="mx-auto max-w-6xl py-16 px-4">
      <motion.div
        className="grid gap-8 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {stats.map(({ end, suffix, prefix, label }, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-4xl font-bold text-gold">
              <CountUp end={end} duration={2} prefix={prefix} suffix={suffix} />
            </span>
            <span className="mt-2 text-base font-medium text-neutral-700 dark:text-neutral-300">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gold dark:text-gold">
        {icons.map(({ Icon, label }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center hoverable"
          >
            <Icon size={32} />
            <span className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}