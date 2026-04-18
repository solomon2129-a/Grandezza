"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#E8E0D5] focus:border-[#C9A84C] outline-none py-3 text-sm text-[#1A1A1A] placeholder:text-[#9E9890] transition-colors duration-300";

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end justify-start overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85"
          alt="Contact hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
          <p
            className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            Let&apos;s Connect
          </p>
          <h1
            className="text-5xl md:text-7xl font-light text-white leading-tight"
            style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="bg-[#FAF8F5] px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <p
                className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-4"
                style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
              >
                Reach Us
              </p>
              <div className="w-12 h-px bg-[#C9A84C] mb-6" />
              <h2
                className="text-4xl font-light text-[#1A1A1A] leading-tight mb-4"
                style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
              >
                Let&apos;s Start a Conversation
              </h2>
              <p
                className="text-[#6B6560] text-sm leading-7 mb-12"
                style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
              >
                Whether you have a project in mind or are simply curious about
                what Grandezza can do for you, we&apos;d love to hear from you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#C9A84C] flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p
                      className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-1"
                      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                    >
                      Phone
                    </p>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-[#1A1A1A] text-sm hover:text-[#C9A84C] transition-colors"
                      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#C9A84C] flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p
                      className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-1"
                      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                    >
                      Email
                    </p>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-[#1A1A1A] text-sm hover:text-[#C9A84C] transition-colors"
                      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#C9A84C] flex items-center justify-center shrink-0">
                    <MapPin size={14} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p
                      className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-1"
                      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                    >
                      Address
                    </p>
                    <p
                      className="text-[#1A1A1A] text-sm leading-6"
                      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                    >
                      {COMPANY.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Office hours */}
              <div className="mt-12 p-8 bg-[#F2EDE8] border-l-2 border-[#C9A84C]">
                <p
                  className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-3"
                  style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                >
                  Office Hours
                </p>
                <p
                  className="text-[#1A1A1A] text-sm leading-7"
                  style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                >
                  Monday – Saturday<br />
                  9:00 AM – 7:00 PM IST
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <div className="w-16 h-16 border border-[#C9A84C] flex items-center justify-center mb-6">
                    <Check size={24} className="text-[#C9A84C]" />
                  </div>
                  <h3
                    className="text-3xl font-light text-[#1A1A1A] mb-4"
                    style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
                  >
                    Thank You
                  </h3>
                  <p
                    className="text-[#6B6560] text-sm max-w-sm leading-7"
                    style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                  >
                    We've received your enquiry and will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <p
                    className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-2"
                    style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                  >
                    Send a Message
                  </p>
                  <div className="w-12 h-px bg-[#C9A84C] mb-8" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-[9px] tracking-[0.25em] uppercase text-[#9E9890] block mb-2"
                        style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                        style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-[9px] tracking-[0.25em] uppercase text-[#9E9890] block mb-2"
                        style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                        style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-[9px] tracking-[0.25em] uppercase text-[#9E9890] block mb-2"
                      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
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
                      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="text-[9px] tracking-[0.25em] uppercase text-[#9E9890] block mb-2"
                      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
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
                      className="text-[9px] tracking-[0.25em] uppercase text-[#9E9890] block mb-2"
                      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
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
                      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-[#1A1A1A] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#C9A84C] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                  >
                    Send Enquiry <Send size={13} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
