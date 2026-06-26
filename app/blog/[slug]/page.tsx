import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'; // optional for code highlighting
import Image from 'next/image';


const dir = path.join(process.cwd(), 'content/blog');

export async function generateStaticParams() {
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir);

  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      slug: file.replace('.md', ''),
    }));
}

async function getPost(slug: string) {
  const filePath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Blog post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return { frontmatter: data, content };
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { frontmatter, content } = await getPost(params.slug);

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}