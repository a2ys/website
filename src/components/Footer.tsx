"use client";

const Footer = () => {
  return (
    <footer className="max-w-4xl mx-auto mt-16 text-sm text-muted-foreground">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-4">
          <a
            href="mailto:aayush@a2ys.dev"
            className="hover:text-primary transition-colors"
          >
            email
          </a>
          <a
            href="https://x.com/unreal_sapien"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            x.com
          </a>
          <a
            href="https://github.com/a2ys"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/a2ys"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            linkedin
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
