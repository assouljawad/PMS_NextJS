import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/frontend/homepage/header";

import "./globals.css";
import Footer from "@/components/frontend/homepage/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PMS - BlogPost",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F4F4F4]">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
