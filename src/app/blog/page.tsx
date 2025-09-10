import ScrambleTextComponent from "@/components/ScrambleTextComponent";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import React from "react";

const page = () => {
  const posts = getSortedPostsData();

  return (
    <main>
      <header className="mb-12">
        <div className="text-4xl font-bold mb-4">
          <span className="text-accent inline-block">~</span>{" "}
          <ScrambleTextComponent text="blogs" duration={1000} />
        </div>

        <p className="text-muted-foreground mb-8 text-lg">
          i love to share my thoughts and ideas through writing. although i have
          a separate blog as a project, here i share my personal blogs on
          various topics ranging from technology to life experiences.
        </p>
      </header>

      <div className="space-y-6 lowercase">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="flex justify-between items-center hover:text-primary transition-colors cursor-pointer py-2">
              <span>{post.title}</span>
              <span className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default page;
