"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Nav = () => {
  const pathName = usePathname();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "h") {
        window.location.href = "/";
      } else if (e.key === "b") {
        window.location.href = "/blog";
      } else if (e.key === "p") {
        window.location.href = "/projects";
      } else if (e.key === "s") {
        window.open("https://blog.a2ys.dev", "_blank");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <nav className="max-w-4xl mx-auto mb-12">
      <div className="flex gap-4">
        <Link
          href="/"
          className={`hover:text-primary transition-colors ${
            pathName === "/" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          [h] home
        </Link>
        <Link
          href="/blog"
          className={`hover:text-primary transition-colors ${
            pathName.startsWith("/blog")
              ? "text-primary"
              : "text-muted-foreground"
          }`}
        >
          [b] blog
        </Link>
        <Link
          href="/projects"
          className={`hover:text-primary transition-colors ${
            pathName === "/projects" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          [p] projects
        </Link>
        <Link
          href="https://blog.a2ys.dev"
          className="hover:text-primary transition-colors text-muted-foreground"
        >
          [s] SAVANT
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
