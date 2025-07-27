"use client";

import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelopeOpenText, FaProjectDiagram } from 'react-icons/fa';

/**
 * AutomationJourneys component illustrates how Mohan Ram designs automated
 * communication journeys using WhatsApp, email and multi‑step flows. It also
 * lists some of the tools employed to orchestrate these experiences.
 */
export default function AutomationJourneys() {
  const tools = ['Klaviyo', 'Freshworks', 'Systeme.io', 'CleverTap'];
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-16 px-4" id="automation">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row">
        {/* Icon stack */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-row md:flex-col items-center justify-center gap-6"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-gold dark:bg-neutral-800">
            <FaWhatsapp size={24} />
          </span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-gold dark:bg-neutral-800">
            <FaEnvelopeOpenText size={24} />
          </span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-gold dark:bg-neutral-800">
            <FaProjectDiagram size={24} />
          </span>
        </motion.div>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1 space-y-6"
        >
          <h2 className="font-headline text-3xl font-bold text-neutral-900 dark:text-neutral-100 md:text-4xl">
            Automation & Journeys
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-300">
            Reach your customers where they are with drip campaigns, personalised messaging and
            multi‑touch journeys. I design flows that nurture relationships and build loyalty—whether
            it’s a WhatsApp drip after purchase, an onboarding sequence by email or segmented journeys that
            adapt to customer behaviour.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-neutral-200 px-4 py-1 text-sm font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
