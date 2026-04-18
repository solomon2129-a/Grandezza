"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import { fadeLeft, fadeRight } from "@/lib/animations";
import { COMPANY } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#DDD9D2] focus:border-[#C6A86B] outline-none py-3.5 text-sm text-[#0D0D0D] placeholder:text-[#BDBAB5] transition-colors duration-300";

  return (
    <>
      {/* PAGE HERO */}
      <section
        className="relative flex items-end justify-start overflow-hidden"
        style={{ height: "60vh", minHeight: "460px" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85"
          alt="Contact"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.75) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pb-20 w-full">
          <p
            className="text-[#C6A86B] text-[9px] tracking-[0.45em] uppercase mb-4"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            Let&apos;s Connect
          </p>
          <h1
            className="text-5xl md:text-7xl font-normal text-[#F5F3EF] leading-[1.0] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section style={{ background: "#F5F3EF" }} className="px-6 lg:px-16 py-28 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Info */}
            <AnimateIn variants={fadeLeft} className="lg:col-span-2">
              <p
                className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Reach Us
              </p>
              <h2
                className="text-4xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-5"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Let&apos;s Start a Conversation
              </h2>
              <p
                className="text-[#8A8580] text-sm leading-7 mb-14"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Whether you have a project in mind or are simply curious about what Grandezza
                can do for you, we&apos;d love to hear from you.
              </p>

              <div className="space-y-9">
                {[
                  { icon: Phone, href: `tel:${COMPANY.phone}`, label: "Phone", text: COMPANY.phone },
                  { icon: Mail, href: `mailto:${COMPANY.email}`, label: "Email", text: COMPANY.email },
                ].map(({ icon: Icon, href, label, text }) => (
                  <div key={label} className="flex items-start gap-5">
                    <div
                      className="w-9 h-9 border border-[#C6A86B] flex items-center justify-center shrink-0"
                    >
                      <Icon size={13} className="text-[#C6A86B]" />
                    </div>
                    <div>
                      <p
                        className="text-[9px] tracking-[0.25em] uppercase text-[#C6A86B] mb-1"
                        style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                      >
                        {label}
                      </p>
                      <a
                        href={href}
                        className="text-[#0D0D0D] text-sm hover:text-[#C6A86B] transition-colors"
                        style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                      >
                        {text}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-5">
                  <div className="w-9 h-9 border border-[#C6A86B] flex items-center justify-center shrink-0">
                    <MapPin size={13} className="text-[#C6A86B]" />
                  </div>
                  <div>
                    <p
                      className="text-[9px] tracking-[0.25em] uppercase text-[#C6A86B] mb-1"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      Address
                    </p>
                    <p
                      className="text-[#0D0D0D] text-sm leading-6"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      {COMPANY.address}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="mt-14 p-7 border-l-2 border-[#C6A86B]"
                style={{ background: "#ECEAE5" }}
              >
                <p
                  className="text-[9px] tracking-[0.25em] uppercase text-[#C6A86B] mb-3"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Office Hours
                </p>
                <p
                  className="text-[#0D0D0D] text-sm leading-7"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Monday – Saturday<br />
                  9:00 AM – 7:00 PM IST
                </p>
              </div>
            </AnimateIn>

            {/* Form */}
            <AnimateIn variants={fadeRight} className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-24 text-center">
                  <div className="w-14 h-14 border border-[#C6A86B] flex items-center justify-center mb-6">
                    <Check size={20} className="text-[#C6A86B]" />
                  </div>
                  <h3
                    className="text-3xl font-normal text-[#0D0D0D] mb-4"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    Thank You
                  </h3>
                  <p
                    className="text-[#8A8580] text-sm max-w-xs leading-7"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    We&apos;ve received your enquiry and will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <p
                    className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-2"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    Send a Message
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                      { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                      { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                    ].map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="text-[9px] tracking-[0.25em] uppercase text-[#BDBAB5] block mb-2"
                          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                        >
                          {field.label} *
                        </label>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          required
                          value={form[field.id as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className={inputClass}
                          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-[9px] tracking-[0.25em] uppercase text-[#BDBAB5] block mb-2"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="text-[9px] tracking-[0.25em] uppercase text-[#BDBAB5] block mb-2"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="interior-design">Interior Design</option>
                      <option value="turnkey">Turnkey Projects</option>
                      <option value="renovation">Renovation</option>
                      <option value="furniture">Custom Furniture</option>
                      <option value="construction">Construction</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-[9px] tracking-[0.25em] uppercase text-[#BDBAB5] block mb-2"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className={`${inputClass} resize-none`}
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-medium transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-inter, sans-serif)",
                      background: "#0D0D0D",
                      color: "#F5F3EF",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "#C6A86B";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "#0D0D0D";
                    }}
                  >
                    Send Enquiry <Send size={12} />
                  </button>
                </form>
              )}
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
