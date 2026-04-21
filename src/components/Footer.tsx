import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ background: "#060606", color: "#F0EDE8" }}>
      {/* Top gold line */}
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, #C6A86B40, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-[#141412]">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-7">
              <h2
                className="text-2xl tracking-[0.3em] uppercase text-[#F0EDE8] font-normal"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Grandezza
              </h2>
              <p
                className="text-[8px] tracking-[0.35em] uppercase text-[#C6A86B] mt-1"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                by Sharieff Creations
              </p>
            </div>
            <p
              className="text-[#4A4A46] text-sm leading-7 max-w-xs"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              End-to-end luxury interior design and construction. From the first concept to the final handover — delivered with precision.
            </p>
            <div className="flex gap-3 mt-8">
              {[
                { label: "Instagram", href: COMPANY.instagram },
                { label: "LinkedIn", href: COMPANY.linkedin },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-[9px] tracking-[0.2em] uppercase border border-[#1E1E1A] text-[#4A4A46] hover:border-[#C6A86B] hover:text-[#C6A86B] transition-all duration-300"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[9px] tracking-[0.3em] uppercase text-[#C6A86B] mb-6"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Navigation
            </p>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#4A4A46] text-sm hover:text-[#F0EDE8] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[9px] tracking-[0.3em] uppercase text-[#C6A86B] mb-6"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Contact
            </p>
            <ul className="space-y-5">
              {[
                { icon: Phone, href: `tel:${COMPANY.phone}`, text: COMPANY.phone },
                { icon: Mail, href: `mailto:${COMPANY.email}`, text: COMPANY.email },
              ].map(({ icon: Icon, href, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={13} className="text-[#C6A86B] mt-0.5 shrink-0" />
                  <a
                    href={href}
                    className="text-[#4A4A46] text-sm hover:text-[#F0EDE8] transition-colors"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    {text}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <MapPin size={13} className="text-[#C6A86B] mt-0.5 shrink-0" />
                <span
                  className="text-[#4A4A46] text-sm leading-6"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  {COMPANY.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p
            className="text-[#282825] text-xs tracking-wider"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            © {new Date().getFullYear()} Grandezza — A Sharieff Creations Company
          </p>
          <p
            className="text-[#282825] text-xs tracking-wider"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
