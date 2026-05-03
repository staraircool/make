import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "4AM Hair Studio | Futuristic Hair Art",
  description: "Elevating your look with modern aesthetics and colorful vibrancy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
