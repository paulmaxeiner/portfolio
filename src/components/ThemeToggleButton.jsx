import { useEffect, useState } from 'react';

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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 stroke-zinc-500 dark:hidden group-hover:stroke-zinc-700"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M1.5 12H3M21 12h1.5M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06" />
      </svg>

      {/* Dark Mode Icon (Moon) */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="hidden h-6 w-6 text-zinc-700 dark:block group-hover:text-zinc-400"
      >
        <path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" />
      </svg>
    </button>
  );
}
