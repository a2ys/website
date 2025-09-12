import { ProjectCard } from "@/components/ProjectCard";
import ScrambleTextComponent from "@/components/ScrambleTextComponent";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects | Aayush Shukla",
  description: "A collection of projects I've worked on.",
  openGraph: {
    title: "Projects | Aayush Shukla",
    description: "A collection of projects I've worked on.",
    url: "https://a2ys.dev/projects",
  },
};

const projects = [
  {
    title: "celeris",
    description:
      "offline mobile payment system for areas with limited internet access.",
    technologies: ["kotlin", "fastapi", "java", "supabase"],
    href: "https://github.com/celeris-schnell",
  },
  {
    title: "bitboard chess engine and supervised ai",
    description: "chess engine using bitboards for efficient move generation.",
    technologies: ["java", "maven", "junit", "swing"],
    href: "https://github.com/a2ys/java-engine",
  },
  {
    title: "savant",
    description: "a community blog written in astro, still in development.",
    technologies: ["astro", "react", "tailwindcss", "remark"],
    href: "https://blog.a2ys.dev",
  },
  {
    title: "conversa",
    description:
      "a chat application developed in kotlin and firebase for android. development is currently paused.",
    technologies: ["kotlin", "java", "firebase", "android"],
    href: "https://github.com/a2ys/conversa",
  },
];

const page = () => {
  return (
    <main>
      <header className="mb-12">
        <div className="text-4xl font-bold mb-4">
          <span className="text-accent inline-block">~</span>{" "}
          <ScrambleTextComponent text="projects" duration={1000} />
        </div>

        <p className="text-muted-foreground mb-8 text-lg">
          here are some cool projects i have worked upon. most of the times, it
          was the complexity of the projects which motivated me, and other
          times, it was the opportunity to learn new technologies and
          frameworks.
        </p>
      </header>

      <section>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
