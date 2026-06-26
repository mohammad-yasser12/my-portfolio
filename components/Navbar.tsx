// components/Navbar.tsx
'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';


export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 max-w-4xl mx-auto">
      <Link href="/" className="text-2xl font-bold">MOHAMMAD YASSER</Link>
      <ul className="flex gap-6 items-center">
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  );
}