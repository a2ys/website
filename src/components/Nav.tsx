"use client";

import Link from "next/link";
import { useEffect } from "react";

const Nav = () => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "h") {
        window.location.href = "/";
      } else if (e.key === "b") {
        window.location.href = "/blog";
      } else if (e.key === "p") {
        window.location.href = "/projects";
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <nav className="mb-12">
        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            [h] home
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors">
            [b] blog
          </Link>
          <Link
            href="/projects"
            className="hover:text-primary transition-colors"
          >
            [p] projects
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
