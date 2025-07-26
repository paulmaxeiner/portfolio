import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      // Read from localStorage or system preference
      if (localStorage.theme === 'dark') return 'dark';
      if (localStorage.theme === 'light') return 'light';
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      aria-label="Switch theme"
      onClick={toggleTheme}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
    >
      {/* Light Mode Icon (Sun) */}
      <Sun className="h-6 w-6 stroke-zinc-500 block dark:hidden group-hover:stroke-zinc-700"/>

      {/* Dark Mode Icon (Moon) */}
      <Moon className="hidden h-6 w-6 text-zinc-700 dark:block group-hover:text-zinc-400"/>
    </button>
  );
}
