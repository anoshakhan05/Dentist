import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Dental Care | Your Smile, Our Priority",
  description: "Experience world-class dental care with our modern clinic and expert specialists. Book your appointment today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased flex min-h-screen flex-col`}>
        <Navbar />
        <main className="flex-1 mt-[76px] lg:mt-[88px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
