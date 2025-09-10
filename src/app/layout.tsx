import { Anonymous_Pro } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const anonymousPro = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anonymousPro.className} antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <Nav />
            {children}
          </div>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
