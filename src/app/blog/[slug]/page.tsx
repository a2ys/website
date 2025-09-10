import { getPostData } from "@/lib/posts";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);

  return (
    <article className="prose dark:prose-invert">
      <h1>{post.title}</h1>
      <p className="text-sm text-muted-foreground">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
