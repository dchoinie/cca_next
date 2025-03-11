import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/custom/header/nav";
import { PageWrapper } from "@/components/custom/page-wrapper";
import { Footer } from "@/components/custom/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Concordia Classical Academy",
  description: "Excellence in classical Lutheran education",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://player.vimeo.com/api/player.js"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <NavBar />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
