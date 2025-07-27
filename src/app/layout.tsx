import './globals.css';
import type { ReactNode } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import CustomCursor from '@/components/CustomCursor';
import DarkModeToggle from '@/components/DarkModeToggle';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700'], variable: '--font-headline' });

export const metadata = {
  title: 'Mohan Ram | E‑commerce & Digital Marketing Specialist',
  description: 'Portfolio website for Mohan Ram, showcasing expertise in e‑commerce and digital marketing.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} font-body`}>
      <body className="relative bg-white text-black dark:bg-neutral-900 dark:text-neutral-100 overflow-x-hidden">
        {/* Custom cursor follows the mouse and expands on hoverable elements */}
        <CustomCursor />
        {children}
        {/* Dark mode toggle floating in the corner */}
        <DarkModeToggle />
      </body>
    </html>
  );
}
