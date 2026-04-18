import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased" style={{ background: "#FAF8F5", color: "#1A1A1A" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
