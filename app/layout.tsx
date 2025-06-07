import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Shubham Kumar",
  description:
    "Shubham Kumar is a Full Stack Developer from India, with expertise in Next.js, React, TypeScript, Node.js, Express, PostgreSQL, Prisma and MongoDB. I create modern web applications and have a passion for writing clean and efficient code, optimizing performance and building scalable web applications. View my portfolio to see my latest projects and reach out to me for any freelance projects",

  keywords: [
    "Shubham Kumar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Web Developer India",
    "Software Engineer",
    "Software Developer",
    "Front-end Developer",
    "Backend Developer",
    "portfolio",
    "nextjs portfolio",
  ],
  authors: [{ name: "Shubham Kumar" }],
  creator: "Shubham Kumar",
  publisher: "Shubham Kumar",
  icons: {
    icon: "/portfolio-favicon-48.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-838YGZ8N8V" />
    </html>
  );
}
