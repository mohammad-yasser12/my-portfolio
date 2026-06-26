'use client';

import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';

    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;

    setDark(newDark);

    localStorage.setItem('theme', newDark ? 'dark' : 'light');

    document.documentElement.classList.toggle('dark', newDark);
  };

  return (
    <button onClick={toggleTheme} className="p-2">
      {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}