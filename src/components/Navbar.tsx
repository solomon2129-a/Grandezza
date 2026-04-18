"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: transparent ? "transparent" : "#F5F3EF",
        borderBottom: transparent ? "none" : "1px solid #DDD9D2",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="text-xl tracking-[0.3em] uppercase transition-colors duration-300"
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              color: transparent ? "#F5F3EF" : "#0D0D0D",
              fontWeight: 400,
            }}
          >
            Grandezza
          </span>
          <span
            className="text-[8px] tracking-[0.35em] uppercase mt-0.5"
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              color: "#C6A86B",
            }}
          >
            by Sharieff Creations
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-300 hover:text-[#C6A86B]"
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                color: transparent
                  ? pathname === link.href
                    ? "#C6A86B"
                    : "rgba(245,243,239,0.75)"
                  : pathname === link.href
                  ? "#C6A86B"
                  : "#0D0D0D",
              }}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#C6A86B]" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-7 py-2.5 text-[10px] tracking-[0.25em] uppercase font-medium border transition-all duration-300"
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              borderColor: transparent ? "rgba(245,243,239,0.4)" : "#C6A86B",
              color: transparent ? "#F5F3EF" : "#C6A86B",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#C6A86B";
              (e.currentTarget as HTMLAnchorElement).style.color = "#F5F3EF";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C6A86B";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = transparent ? "#F5F3EF" : "#C6A86B";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = transparent ? "rgba(245,243,239,0.4)" : "#C6A86B";
            }}
          >
            Enquire
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-1 transition-colors"
          style={{ color: transparent ? "#F5F3EF" : "#0D0D0D" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden"
            style={{ background: "#F5F3EF", borderTop: "1px solid #DDD9D2" }}
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[11px] tracking-[0.2em] uppercase font-medium transition-colors hover:text-[#C6A86B]"
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    color: pathname === link.href ? "#C6A86B" : "#0D0D0D",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 py-3 text-center text-[10px] tracking-[0.25em] uppercase font-medium border border-[#C6A86B] text-[#C6A86B] hover:bg-[#C6A86B] hover:text-[#F5F3EF] transition-all duration-300"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Enquire
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
