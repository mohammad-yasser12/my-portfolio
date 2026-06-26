import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'; // Code highlighting theme

// --- 1. Get all blog slugs for static generation ---
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/blog');

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir);

  return files
    .filter((f) => f.endsWith('.md'))
    .map((file) => ({
      slug: file.replace(/\.md$/, ''),
    }));
}

// --- 2. Fetch the markdown content for a given slug ---
async function getProject(slug: string) {
  if (!slug) {
    throw new Error("Missing slug");
  }

  const filePath = path.join(
    process.cwd(),
    'content/projects',
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`Project not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return { frontmatter: data, content };
}

// --- 3. The page component ---
export default async function ProjectPage({
  params,
}: {
  params: { slug: string | string[] };
}) {
  const slug = Array.isArray(params.slug)
    ? params.slug[0]
    : params.slug;

  if (!slug) {
    throw new Error("Invalid slug");
  }

  const { frontmatter, content } = await getProject(slug);

  return (
    <article>
      <h1>{frontmatter.title}</h1>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
