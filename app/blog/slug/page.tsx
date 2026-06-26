import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'; // Code highlighting theme

// --- 1. Get all blog slugs for static generation ---
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

// --- 2. Fetch the markdown content for a given slug ---
async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return { frontmatter: data, content };
}

// --- 3. The page component ---
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const { frontmatter, content } = await getPost(slug);

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
