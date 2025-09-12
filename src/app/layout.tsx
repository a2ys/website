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
  title: {
    default: "Aayush Shukla",
    template: "%s | Aayush Shukla",
  },
  description:
    "Welcome to my personal website! I'm Aayush, a passionate developer and tech enthusiast. Here, I share my projects, blog posts, and insights on the latest in technology. Explore my portfolio, read my thoughts on various tech topics, and feel free to reach out to connect or collaborate!",
  keywords: [
    "Aayush Shukla",
    "a2ys",
    "React",
    "Website",
    "a2ys dev",
    "a2ys developer",
    "open source",
    "developer",
    "portfolio",
    "a2ys.dev",
    "a2ys developer",
    "a2ys portfolio",
    "a2ys website",
    "a2ys blog",
    "a2ys projects",
    "a2ys work",
    "a2ys contact",
    "a2ys about",
    "a2ys home",
    "a2ys resume",
    "a2ys cv",
    "a2ys aayush shukla",
    "a2ys aayush",
    "a2ys shukla",
    "a2ys aayush shukla developer",
    "a2ys aayush shukla portfolio",
    "a2ys aayush shukla website",
    "a2ys aayush shukla blog",
    "a2ys aayush shukla projects",
    "a2ys aayush shukla work",
    "a2ys aayush shukla contact",
    "a2ys aayush shukla about",
    "a2ys aayush shukla home",
  ],
  authors: [{ name: "Aayush Shukla", url: "https://a2ys.dev" }],
  creator: "Aayush Shukla",
  openGraph: {
    title: "Aayush Shukla",
    description:
      "Welcome to my personal website! I'm Aayush, a passionate developer and tech enthusiast. Here, I share my projects, blog posts, and insights on the latest in technology. Explore my portfolio, read my thoughts on various tech topics, and feel free to reach out to connect or collaborate!",
    url: "https://a2ys.dev",
    siteName: "Aayush Shukla",
    images: [
      {
        url: "https://a2ys.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Aayush Shukla",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Shukla",
    description:
      "Welcome to my personal website! I'm Aayush, a passionate developer and tech enthusiast. Here, I share my projects, blog posts, and insights on the latest in technology. Explore my portfolio, read my thoughts on various tech topics, and feel free to reach out to connect or collaborate!",
    images: ["https://a2ys.dev/og.png"],
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
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
