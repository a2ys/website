import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-background text-foreground font-mono">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <Nav />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
