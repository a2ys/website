import { getPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

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
    <article className="prose dark:prose-invert">
      <h1 className="text-4xl font-extrabold tracking-tight">
        {frontmatter.title}
      </h1>
      <p className="text-gray-500 mt-2">
        By {frontmatter.author} on{" "}
        {new Date(frontmatter.date).toLocaleDateString()}
      </p>

      <div className="mt-8">
        <MDXRemote source={content} components={components} />
      </div>
    </article>
  );
}
