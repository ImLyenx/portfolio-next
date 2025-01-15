import type { Metadata } from "next";
import { Alex_Brush, Inter } from "next/font/google";
import Nav from "@/components/nav";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";

const AlexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
});

const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  description:
    "Lyenx's portfolio and blog, made with Next.js and Tailwind CSS.",
};

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
