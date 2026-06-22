import { ProjectCard } from "@/components/ProjectCard";
import ScrambleTextComponent from "@/components/ScrambleTextComponent";
import { Metadata } from "next";

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
    title: "meshsync",
    description:
      "android-first offline synchronization framework. persistent queues, automatic retries, conflict resolution, and peer-to-peer sync for reliable offline-first apps.",
    technologies: [
      "kotlin",
      "android",
      "room",
      "workmanager",
      "kotlinx-serialization",
    ],
    href: "https://github.com/a2ys/meshsync",
  },
  {
    title: "turflang",
    description:
      "an ahead-of-time compiled language featuring intelligent diagnostics, powerful tooling, and native performance. source code is currently private due to legal considerations.",
    technologies: ["c++", "llvm", "compiler", "language-design"],
    href: "https://github.com/turf-lang",
  },
  {
    title: "celeris",
    description:
      "offline-first mobile payment system. transactions are queued locally and settled when connectivity resumes, designed for areas where internet access is unreliable or intermittent.",
    technologies: ["kotlin", "fastapi", "java", "supabase"],
    href: "https://github.com/celeris-schnell",
  },
  {
    title: "bitboard chess engine and supervised ai",
    description:
      "chess engine using bitboards for compact, fast move generation. paired with a classical ai using negamax and a hand-crafted evaluation function to search and score positions.",
    technologies: ["java", "maven", "junit", "swing"],
    href: "https://github.com/a2ys/java-engine",
  },
  {
    title: "savant",
    description:
      "community blog platform built on astro. markdown-powered, fast by default, and designed for developer writing. still actively being shaped.",
    technologies: ["astro", "react", "tailwindcss", "remark"],
    href: "https://blog.a2ys.dev",
  },
  {
    title: "conversa",
    description:
      "real-time android chat app backed by firebase. handles messaging, live sync, and auth. development is currently paused.",
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

        <p className="text-muted-foreground mb-8 text-lg text-justify">
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
