import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2
                className="text-3xl font-light tracking-[0.25em] uppercase text-white"
                style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
              >
                Grandezza
              </h2>
              <p
                className="text-[9px] tracking-[0.3em] uppercase text-[#C9A84C] mt-1"
                style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
              >
                by Sharieff Creations
              </p>
            </div>
            <p
              className="text-[#9E9890] text-sm leading-7 max-w-sm"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              We deliver end-to-end luxury interior design and construction
              solutions. From concept to completion — every detail, perfectly
              executed.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#3A3A3A] flex items-center justify-center text-[#9E9890] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-300 text-xs tracking-wider"
                style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
              >
                IG
              </a>
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#3A3A3A] flex items-center justify-center text-[#9E9890] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-300 text-xs tracking-wider"
                style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
              >
                LI
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-6"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9E9890] text-sm hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-6"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-[#9E9890] text-sm hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-[#9E9890] text-sm hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span
                  className="text-[#9E9890] text-sm leading-6"
                  style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                >
                  {COMPANY.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2A2A2A] mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p
            className="text-[#4A4A4A] text-xs tracking-wider"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            © {new Date().getFullYear()} Grandezza. A Sharieff Creations Company.
          </p>
          <p
            className="text-[#4A4A4A] text-xs tracking-wider"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
