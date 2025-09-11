import { getPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";
import Link from "next/link";
import Image from "next/image";

const CustomLink = (props: ComponentProps<"a">) => {
  const href = props.href;

  if (href && href.startsWith("/")) {
    return <Link {...props} href={href} />;
  }

  if (href && href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
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
      className="mt-8 mb-4 pb-2 text-3xl font-semibold tracking-tight border-b border-border"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="mt-6 mb-3 text-2xl font-semibold tracking-tight"
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
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
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
    <img className="my-6 rounded-md" {...props} />
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
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { frontmatter, content } = await getPostBySlug(params.slug);

  return (
    <article>
      <h1 className="text-4xl font-extrabold tracking-tight">
        {frontmatter.title}
      </h1>
      <p className="text-gray-500 mt-2">
        By {frontmatter.author} on{" "}
        {new Date(frontmatter.date).toLocaleDateString()}
      </p>

      <div className="mt-8">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </article>
  );
}
