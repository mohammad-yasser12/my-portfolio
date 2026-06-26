import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'; // optional for code highlighting
import Image from 'next/image';

// --- Generate static paths for all projects ---
export async function generateStaticParams() {
  const projectsDirectory = path.join(process.cwd(), 'content/projects');
  const filenames = fs.readdirSync(projectsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

// --- Fetch project data from markdown ---
async function getProject(slug: string) {
  const filePath = path.join(process.cwd(), 'content/projects', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return { frontmatter: data, content };
}

// --- Project detail page ---
export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const { frontmatter, content } = await getProject(slug);

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <header className="mb-8">
        {/* Project title */}
        <h1 className="text-4xl font-bold">{frontmatter.title}</h1>

        {/* Project metadata (tech stack, date, live link, github) */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
          {frontmatter.tech && (
            <span>
              <strong>Tech:</strong> {frontmatter.tech.join(', ')}
            </span>
          )}
          {frontmatter.date && <span>• {frontmatter.date}</span>}
        </div>
        <div className="flex gap-4 mt-4">
          {frontmatter.github && (
            <a
              href={frontmatter.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-gray-800 text-white dark:bg-gray-700 rounded hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          )}
          {frontmatter.live && (
            <a
              href={frontmatter.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Live Demo
            </a>
          )}
        </div>
        {frontmatter.cover && (
          <div className="mt-6">
            <Image
              src={frontmatter.cover}
              alt={frontmatter.title}
              width={800}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        )}
      </header>

      {/* Markdown content (detailed description, features, etc.) */}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}