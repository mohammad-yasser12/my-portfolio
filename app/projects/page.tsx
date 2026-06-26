import Image from "next/image";
import projects from "@/data/project.json";

export default function ProjectsPage() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-48">
              <Image
    src={project.logo}
    alt={project.title}
    fill
    className="object-contain"
  />
            </div>

            <h2 className="text-xl font-semibold mt-3">
              {project.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href={project.github}
                target="_blank"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}