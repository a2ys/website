import { getPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import rehypeSlug from "rehype-slug";

type Props = {
  params: { slug: string };
};

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const text = content.replace(/<\/?[^>]+(>|$)/g, "");
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

type Heading = { level: number; text: string; id: string };

function getHeadings(content: string): Heading[] {
  const headingLines = content.match(/^#{2,3}\s+.+$/gm) || [];

  return headingLines.map((line) => {
    const level = line.match(/^#+/)?.[0].length || 2;
    const text = line.replace(/^#+\s+/, "");

    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

    return { level, text, id };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { frontmatter } = await getPostBySlug(params.slug);
  return {
    title: frontmatter.title,
    description: frontmatter.summary,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.summary,
      url: `https://a2ys.dev/blog/${params.slug}`,
      images: [`/blog/${params.slug}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.summary,
      images: [`/blog/${params.slug}/opengraph-image`],
    },
  };
}

const CustomLink = (props: ComponentProps<"a">) => {
  const href = props.href;

  if (href?.startsWith("/")) {
    return (
      <Link
        href={href}
        {...props}
        className="font-bold! underline! decoration-2! decoration-foreground! underline-offset-4 hover:decoration-muted-foreground transition-colors"
      />
    );
  }

  if (href?.startsWith("#")) {
    return (
      <a
        {...props}
        className="hover:underline underline-offset-4 decoration-dotted decoration-muted-foreground"
      />
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="inline-flex items-center gap-1 font-bold! text-muted-foreground hover:text-foreground border-b border-muted-foreground/30 hover:border-foreground transition-colors"
    >
      {props.children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-px"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" x2="21" y1="14" y2="3" />
      </svg>
    </a>
  );
};

export const mdxComponents = {
  h1: (props: ComponentProps<"h1">) => (
    <h1
      className="mt-8 mb-4 text-4xl font-extrabold tracking-tight"
      {...props}
    />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="mt-8 mb-4 pb-2 text-3xl font-semibold tracking-tight border-b border-border scroll-m-20"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="mt-6 mb-3 text-2xl font-semibold tracking-tight scroll-m-20"
      {...props}
    />
  ),
  h4: (props: ComponentProps<"h4">) => (
    <h4 className="mt-6 mb-3 text-xl font-semibold tracking-tight" {...props} />
  ),
  h5: (props: ComponentProps<"h5">) => (
    <h5 className="mt-6 mb-3 text-lg font-semibold" {...props} />
  ),
  h6: (props: ComponentProps<"h6">) => (
    <h6
      className="mt-6 mb-3 text-base font-semibold text-muted-foreground"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="leading-7 not-first:mt-6" {...props} />
  ),
  a: CustomLink,
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="mt-6 pl-6 border-l-4 border-accent italic text-muted-foreground"
      {...props}
    />
  ),
  hr: (props: ComponentProps<"hr">) => (
    <hr className="my-8 border-border" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />
  ),
  li: (props: ComponentProps<"li">) => <li {...props} />,
  code: (props: ComponentProps<"code">) => (
    <code
      className="relative rounded-md bg-muted px-[0.4rem] py-[0.2rem] font-mono text-sm"
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="mt-6 mb-4 overflow-x-auto rounded-lg bg-card p-4 text-sm"
      {...props}
    />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold" {...props} />
  ),
  em: (props: ComponentProps<"em">) => <em className="italic" {...props} />,
  del: (props: ComponentProps<"del">) => (
    <del className="line-through" {...props} />
  ),
  img: (props: ComponentProps<"img">) => (
    <img
      className="my-6 rounded-lg w-full border-2 border-gray-600"
      {...props}
    />
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full" {...props} />
    </div>
  ),
  thead: (props: ComponentProps<"thead">) => <thead {...props} />,
  tbody: (props: ComponentProps<"tbody">) => <tbody {...props} />,
  tr: (props: ComponentProps<"tr">) => (
    <tr className="m-0 border-t border-border p-0 even:bg-muted" {...props} />
  ),
  th: (props: ComponentProps<"th">) => (
    <th
      className="border border-border px-4 py-2 text-left font-bold"
      {...props}
    />
  ),
  td: (props: ComponentProps<"td">) => (
    <td className="border border-border px-4 py-2 text-left" {...props} />
  ),
};

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { frontmatter, content } = await getPostBySlug(params.slug);

  const readingTime = calculateReadingTime(content);
  const headings = getHeadings(content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    author: [
      { "@type": "Person", name: frontmatter.author, url: "https://a2ys.dev/" },
    ],
    description: frontmatter.title,
  };

  return (
    <article className="max-w-3xl mx-auto xl:max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="pt-6 xl:pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {frontmatter.title}
        </h1>
        <div className="flex items-center gap-4 mt-4 text-muted-foreground text-sm">
          <time dateTime={frontmatter.date}>
            {new Date(frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>•</span>
          <span>{readingTime}</span>
        </div>
      </header>

      <hr className="my-8 border-border" />

      {headings.length > 0 && (
        <div className="my-8 p-6 bg-muted/50 rounded-lg border border-border">
          <p className="font-semibold text-lg mb-4">Table of Contents</p>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={`text-sm ${
                  heading.level === 3
                    ? "pl-4 text-muted-foreground"
                    : "text-foreground"
                }`}
              >
                <a
                  href={`#${heading.id}`}
                  className="hover:underline underline-offset-4 decoration-muted-foreground/50 transition-all"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="prose prose-neutral dark:prose-invert max-w-none pb-8 text-justify">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [rehypeSlug],
            },
          }}
        />
      </div>
    </article>
  );
}
