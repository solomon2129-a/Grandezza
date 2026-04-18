import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Grandezza | Luxury Interior Design & Construction",
  description:
    "Grandezza delivers end-to-end luxury interior design, turnkey construction, and custom manufacturing. Backed by Sharieff Creations — 30+ years of legacy.",
  keywords:
    "luxury interior design, turnkey construction, custom furniture, renovation, Grandezza, Sharieff Creations",
  openGraph: {
    title: "Grandezza | Luxury Interior Design & Construction",
    description:
      "From design to execution — premium spaces, fully delivered. 30+ year legacy, 500+ workforce.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ background: "#F5F3EF", color: "#0D0D0D" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
