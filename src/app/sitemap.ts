// In src/app/sitemap.ts
import { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  const postUrls = posts.map((post) => ({
    url: `https://a2ys.dev/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: "https://a2ys.dev",
      lastModified: new Date(),
    },
    {
      url: "https://a2ys.dev/blog",
      lastModified: new Date(),
    },
    {
      url: "https://a2ys.dev/projects",
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
