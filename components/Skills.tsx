// components/Skills.tsx
'use client';

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaAws,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
];

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:shadow-md transition-shadow"
          >
            <skill.icon className="text-4xl mb-2" style={{ color: skill.color }} />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}