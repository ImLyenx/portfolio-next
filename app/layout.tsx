// layout principal avec navigation et footer
import type { Metadata } from "next";
import { Alex_Brush, Inter } from "next/font/google";
import Nav from "@/components/nav";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";

// polices personnalisées
const AlexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
});

const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// configuration seo globale
export const metadata: Metadata = {
  title: {
    default: "Lyenx - Full Stack Developer",
    template: "%s | Lyenx",
  },
  description:
    "Full-stack developer and tech enthusiast based in Paris. Specialized in web development, with experience in modern frameworks and technologies.",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Eric Hubert" }],
  creator: "Eric Hubert",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lyenx.com",
    title: "Lyenx - Full Stack Developer",
    description: "Full-stack developer and tech enthusiast based in Paris",
    siteName: "Lyenx Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyenx - Full Stack Developer",
    description: "Full-stack developer and tech enthusiast based in Paris",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// structure commune à toutes les pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/iconify-icon@2.3.0/dist/iconify-icon.min.js"></script>
      </head>
      <body
        className={`${InterFont.variable} ${AlexBrush.variable} antialiased relative mx-6 flex min-h-screen flex-col items-center`}
      >
        <div className="w-full max-w-5xl flex-grow">
          <Nav />
          <div className="animate-content-fade pb-32 md:pb-28 ">
            {children}
            <Toaster />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
