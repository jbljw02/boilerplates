import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js + Tailwind CSS",
  description: "Next.js + Tailwind CSS Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}