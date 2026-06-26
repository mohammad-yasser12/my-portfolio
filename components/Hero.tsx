// components/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Image
          src="/images/profile/profile-pic.jpg"
          alt="Yasser"
          width={150}
          height={150}
          className="rounded-full border-4 border-blue-500 dark:border-blue-400 object-cover"
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold"
      >
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Yasser</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300"
      >
        Full-Stack Developer | React & Next.js Enthusiast
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex flex-wrap gap-4 justify-center"
      >
        <a
          href="/files/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          📄 Download CV
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Get in Touch
        </a>
        <a
          href="/projects"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
}