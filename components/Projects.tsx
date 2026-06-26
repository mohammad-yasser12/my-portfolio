// components/Projects.tsx
import projects from '@/data/project.json';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
{projects.map((project) => (
  <ProjectCard
    key={project.title}
    project={project}
  />
))}
      </div>
    </section>
  );
}