"use client";

import { useState } from "react";

type FormFields = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
};
import FadeIn from "../../ui/FadeIn";

export default function ContactForm() {
  const [form, setForm] = useState<FormFields>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  return (
    <section className="py-24 px-6 bg-[#f7f9fc]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">

        {/* LEFT: CONTACT INFO */}
        <FadeIn>
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border"
              style={{ background: "rgba(237,132,32,0.1)", borderColor: "rgba(237,132,32,0.25)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED8420]" />
              <span className="text-[#ED8420] text-[11px] font-medium tracking-widest uppercase">
                Get in touch
              </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-[2rem] font-semibold text-[#031d36] leading-tight mb-3">
              We&apos;d love to<br />hear from you
            </h2>
            <p className="text-[0.92rem] font-light text-[#6b7a8d] leading-relaxed max-w-xs">
              Reach out for partnerships, collaborations, or general inquiries.
            </p>

            <div className="mt-9 flex flex-col gap-6">
              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 min-w-10 rounded-lg flex items-center justify-center bg-[#0e5b9b]/8">
                  <svg className="w-4 h-4 stroke-[#0e5b9b]" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-widest uppercase text-[#9aa3ad] mb-1">Email</p>
                  <p className="text-[0.88rem] text-[#1a2e45] leading-relaxed">info@gmnanotherapeutics.com</p>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 min-w-10 rounded-lg flex items-center justify-center bg-[#0e5b9b]/8">
                  <svg className="w-4 h-4 stroke-[#0e5b9b]" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-widest uppercase text-[#9aa3ad] mb-1">Address</p>
                  <p className="text-[0.88rem] text-[#1a2e45] leading-relaxed">
                    3720 Spectrum Boulevard<br />Suite 125, Tampa, FL 33612
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* RIGHT: FORM CARD */}
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-2xl p-10 border border-[#0e5b9b]/8 shadow-[0_4px_32px_rgba(14,91,155,0.06),0_1px_4px_rgba(0,0,0,0.04)]">
            <form className="space-y-3.5">

              {/* NAME ROW */}
              <div className="grid grid-cols-2 gap-3.5">
                {([
                  { key: "firstName", label: "First Name", placeholder: "John", required: true },
                  { key: "lastName",  label: "Last Name",  placeholder: "Doe",  required: true },
                ] as const).map(({ key, label, placeholder, required }) => (
                  <div key={key} className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-medium tracking-widest uppercase text-[#7a8899]">
                      {label} {required && <span className="text-[#ED8420]">*</span>}
                    </label>
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="bg-[#f7f9fc] border border-[#dde3ea] rounded-lg px-3.5 py-2.5 text-sm text-[#1a2e45] placeholder:text-[#a8b4bf] focus:outline-none focus:border-[#0e5b9b] focus:ring-2 focus:ring-[#0e5b9b]/10 focus:bg-white transition"
                      value={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    />
                  </div>
                ))}
              </div>

              {/* CONTACT ROW */}
              <div className="grid grid-cols-2 gap-3.5">
                {([
                  { key: "phone", label: "Phone Number", type: "tel",   placeholder: "+1 (000) 000-0000", required: false },
                  { key: "email", label: "Email",         type: "email", placeholder: "john@example.com",   required: true  },
                ] as const).map(({ key, label, type, placeholder, required }) => (
                  <div key={key} className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-medium tracking-widest uppercase text-[#7a8899]">
                      {label} {required && <span className="text-[#ED8420]">*</span>}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="bg-[#f7f9fc] border border-[#dde3ea] rounded-lg px-3.5 py-2.5 text-sm text-[#1a2e45] placeholder:text-[#a8b4bf] focus:outline-none focus:border-[#0e5b9b] focus:ring-2 focus:ring-[#0e5b9b]/10 focus:bg-white transition"
                      value={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    />
                  </div>
                ))}
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium tracking-widest uppercase text-[#7a8899]">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project or inquiry…"
                  className="bg-[#f7f9fc] border border-[#dde3ea] rounded-lg px-3.5 py-2.5 text-sm text-[#1a2e45] placeholder:text-[#a8b4bf] focus:outline-none focus:border-[#0e5b9b] focus:ring-2 focus:ring-[#0e5b9b]/10 focus:bg-white transition resize-none"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {/* DIVIDER */}
              <div className="h-px my-1" style={{ background: "linear-gradient(90deg, transparent, rgba(14,91,155,0.12), transparent)" }} />

              {/* SUBMIT */}
              <button
                type="submit"
                className="relative w-full py-3.5 rounded-lg text-white text-sm font-medium tracking-wide overflow-hidden hover:opacity-90 hover:-translate-y-px transition-all"
                style={{ background: "linear-gradient(135deg, #0e5b9b 0%, #0a4070 100%)" }}
              >
                {/* orange sheen */}
                <span className="absolute top-0 right-0 w-20 h-full pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(237,132,32,0.18))" }} />
                <span className="relative flex items-center justify-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Message
                </span>
              </button>

              <p className="text-center text-[11px] text-[#9aa3ad] pt-1">
                We typically respond within 24 hours.
              </p>

            </form>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}