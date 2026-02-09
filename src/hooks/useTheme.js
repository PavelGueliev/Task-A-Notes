import { useEffect, useState } from 'react';
import { THEME_STORAGE_KEY, THEME } from '../lib/constants/theme.js';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return THEME.LIGHT;
  }

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === THEME.DARK || stored === THEME.LIGHT) {
    return stored;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT;
}

export function useTheme() {
  const [theme, setTheme] = useState(() => getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;

    if (theme === THEME.DARK) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === THEME.DARK ? THEME.LIGHT : THEME.DARK));

  return { theme, isDark: theme === THEME.DARK, setTheme, toggleTheme };
}
