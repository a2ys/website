import ScrambleTextComponent from "@/components/ScrambleTextComponent";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="mb-16">
        <ScrambleTextComponent text="aayush shukla" duration={2000} />
        <div className="space-y-2 text-muted-foreground">
          <p className="flex items-center gap-2">
            <span>📍</span>
            <span>chennai, india</span>
          </p>
          <p className="flex items-center gap-2">
            <span>💼</span>
            <span>building a stealth startup</span>
          </p>
        </div>
        <p className="mt-6 text-foreground leading-relaxed max-w-3xl">
          {
            "a 20 y/o cs undergrad passionate about building simple solutions to more common problems. i love theoretical computer science, solving intuitive problems and exploring open source. i mostly share my thoughts on my blogs and keep building stuff on the side."
          }
        </p>
      </header>
    </main>
  );
}
