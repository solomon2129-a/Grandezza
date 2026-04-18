"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg =
    !isHome || scrolled
      ? "bg-[#FAF8F5] shadow-sm border-b border-[#E8E0D5]"
      : "bg-transparent";

  const textColor =
    !isHome || scrolled ? "text-[#1A1A1A]" : "text-white";

  const logoColor =
    !isHome || scrolled ? "text-[#1A1A1A]" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className={`text-2xl font-light tracking-[0.25em] uppercase transition-colors duration-500 ${logoColor}`}
            style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
          >
            Grandezza
          </span>
          <span
            className={`text-[9px] tracking-[0.3em] uppercase transition-colors duration-500 ${!isHome || scrolled ? "text-[#C9A84C]" : "text-[#E8D5A3]"}`}
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            by Sharieff Creations
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 hover:text-[#C9A84C] ${
                pathname === link.href
                  ? "text-[#C9A84C]"
                  : textColor
              }`}
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-6 py-2.5 border border-[#C9A84C] text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-[#C9A84C] hover:text-white transition-all duration-300"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden transition-colors ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-[#FAF8F5] border-t border-[#E8E0D5]`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-colors hover:text-[#C9A84C] ${
                pathname === link.href ? "text-[#C9A84C]" : "text-[#1A1A1A]"
              }`}
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-6 py-3 border border-[#C9A84C] text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-medium text-center hover:bg-[#C9A84C] hover:text-white transition-all duration-300"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
