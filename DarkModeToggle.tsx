"use client";

import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

/**
 * DarkModeToggle persists the user's theme preference in localStorage and
 * toggles the `dark` class on the root html element. It displays a sun/moon
 * icon based on the current theme.
 */
export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  // On mount, read the stored preference or system preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="hoverable fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[10001] p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md"
      aria-label="Toggle dark mode"
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}