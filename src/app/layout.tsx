import { Anonymous_Pro } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const anonymousPro = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://a2ys.dev"),
  title: "Aayush Shukla | Developer & Tech Enthusiast",
  description:
    "Welcome to my personal website! I'm Aayush, a passionate developer and tech enthusiast. Here, I share my projects, blog posts, and insights on the latest in technology. Explore my portfolio, read my thoughts on various tech topics, and feel free to reach out to connect or collaborate!",
  authors: [{ name: "Aayush Shukla", url: "https://a2ys.dev" }],
  creator: "Aayush Shukla",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Aayush Shukla | Developer & Tech Enthusiast",
    description:
      "Welcome to my personal website! I'm Aayush, a passionate developer and tech enthusiast. Here, I share my projects, blog posts, and insights on the latest in technology. Explore my portfolio, read my thoughts on various tech topics, and feel free to reach out to connect or collaborate!",
    url: "https://a2ys.dev",
    siteName: "Aayush Shukla",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "The personal website of Aayush Shukla",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Shukla | Developer & Tech Enthusiast",
    description:
      "Welcome to my personal website! I'm Aayush, a passionate developer and tech enthusiast. Here, I share my projects, blog posts, and insights on the latest in technology. Explore my portfolio, read my thoughts on various tech topics, and feel free to reach out to connect or collaborate!",
    images: ["/og.png"],
    creator: "@unreal_sapien",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anonymousPro.className} antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col min-h-screen">
            <Nav />
            <div className="grow">{children}</div>
            <Footer />
          </div>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
