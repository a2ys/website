import ScrambleTextComponent from "@/components/ScrambleTextComponent";
import { getPosts } from "@/lib/posts";
import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const posts = getPosts().slice(0, 4);

  return (
    <main>
      <header className="mb-12">
        <ScrambleTextComponent text="aayush shukla" duration={1000} />
        <div className="space-y-2 text-muted-foreground">
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>chennai, india</span>
          </p>
          <p className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>building a stealth startup</span>
          </p>
        </div>
        <p className="mt-6 text-foreground text-lg leading-relaxed max-w-3xl">
          a 20 y/o cs undergrad passionate about finding simple solutions to
          common problems. i love theoretical computer science, solving
          intuitive problems and exploring open source. i mostly share my
          thoughts on my blog and keep building stuff on the side.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          <span className="text-accent">~</span> blog
        </h2>

        <div className="space-y-4 lowercase text-lg">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex justify-between items-center hover:text-primary transition-colors cursor-pointer"
            >
              <span>{post.title}</span>
              <span className="text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/blog"
            className="text-primary hover:text-accent transition-colors text-lg items-center flex gap-2"
          >
            <span>all posts</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
