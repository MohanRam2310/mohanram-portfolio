"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CaseStudy {
  title: string;
  description: string;
  image: string;
}

/**
 * CaseStudies component showcases a set of interactive cards representing
 * successful campaigns. Each card reveals a description on hover and
 * animates into view when scrolled into the viewport.
 */
export default function CaseStudies() {
  const studies: CaseStudy[] = [
    {
      title: 'IshqMe',
      description: 'Boosted repeat sales by 42%.',
      image:
        'https://images.unsplash.com/photo-1520975918311-93f61c21c35c?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Wear Your Feeling',
      description: 'Built launch funnel for Gen Z moodwear label.',
      image:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'KCN Realty',
      description: 'Full funnel campaigns for 3 luxury projects.',
      image:
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Cocomo',
      description: 'Launched influencer driven growth campaign.',
      image:
        'https://images.unsplash.com/photo-1498598457799-f46876f0ef50?auto=format&fit=crop&w=800&q=60',
    },
  ];
  return (
    <section className="bg-neutral-50 dark:bg-neutral-800 py-16 px-4" id="case-studies">
      <h2 className="mb-10 text-center font-headline text-3xl font-bold text-neutral-900 dark:text-neutral-100 md:text-4xl">
        Featured Case Studies
      </h2>
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {studies.map((study, idx) => (
          <motion.div
            key={idx}
            className="group relative overflow-hidden rounded-xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
          >
            <Image
              src={study.image}
              alt={`${study.title} case study`}
              width={800}
              height={600}
              className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="font-headline text-lg font-semibold text-white">
                {study.title}
              </h3>
              <p className="mt-1 text-sm text-gray-200">
                {study.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
