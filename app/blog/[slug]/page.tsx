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

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return { frontmatter: data, content };
}