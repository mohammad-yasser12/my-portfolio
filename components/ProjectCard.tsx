// components/ProjectCard.tsx
'use client';

import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  logo: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, image, github, live , logo} = project;

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
      <div className="relative w-100 h-100">
        <Image
          src={logo}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 568px) 80vw, 30vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        <div className="mt-4 flex gap-4">
          <a
           href={`${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FaGithub /> Code
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}