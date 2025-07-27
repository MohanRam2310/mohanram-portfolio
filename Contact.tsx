"use client";

import { FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

/**
 * Contact component invites visitors to get in touch. It includes quick links
 * to email, WhatsApp and LinkedIn, each styled with a ripple effect and
 * subtle hover animations.
 */
export default function Contact() {
  const contacts = [
    {
      label: 'Email',
      href: 'mailto:mohanram2310@gmail.com',
      Icon: FiMail,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/91XXXXXXXXXX',
      Icon: FaWhatsapp,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/mohanram',
      Icon: FaLinkedinIn,
    },
  ];
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-20 px-4" id="contact">
      <h2 className="mb-8 text-center font-headline text-3xl font-bold text-neutral-900 dark:text-neutral-100 md:text-4xl">
        Let’s build something that sells
      </h2>
      <div className="mx-auto flex max-w-md flex-col items-stretch gap-6 sm:flex-row sm:justify-center">
        {contacts.map(({ label, href, Icon }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hoverable btn-ripple flex-1 rounded-full border-2 border-gold px-6 py-3 text-center text-sm font-medium text-neutral-900 transition-all duration-200 hover:bg-gold hover:text-neutral-900 dark:border-gold dark:text-neutral-100 dark:hover:text-neutral-900"
          >
            <div className="flex items-center justify-center gap-2">
              <Icon size={16} />
              <span>{label}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}