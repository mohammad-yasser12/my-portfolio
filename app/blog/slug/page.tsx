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
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const { frontmatter, content } = await getPost(slug);

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
        <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
          <time>{frontmatter.date}</time>
          {frontmatter.author && <span>• {frontmatter.author}</span>}
        </div>
        {frontmatter.description && (
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            {frontmatter.description}
          </p>
        )}
      </header>

      {/* Render markdown content with plugins */}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Optional: customize heading tags, images, etc.
          img: ({ node, ...props }) => (
            <img {...props} className="rounded-lg shadow-md" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}