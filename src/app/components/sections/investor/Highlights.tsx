// components/sections/Highlights.tsx
"use client";

import FadeIn from "../../ui/FadeIn";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const highlights = [
  {
    label: "Platform",
    text:  "Proprietary nanotechnology platform with broad applications",
    theme: "blue",
  },
  {
    label: "Validation",
    text:  "Clinically validated pipeline with proof-of-concept studies",
    theme: "orange",
  },
  {
    label: "Market",
    text:  "Targeting large unmet medical needs",
    theme: "orange",
  },
  {
    label: "Strategy",
    text:  "Capital-efficient development strategy",
    theme: "blue",
  },
] as const;

// ─── THEME MAP ────────────────────────────────────────────────────────────────

const theme = {
  blue: {
    wrap:  "bg-[#E6EFF8]",
    dot:   "bg-[#0D5B9B]",
    label: "text-[#0A4372]",
  },
  orange: {
    wrap:  "bg-[#FEF3E8]",
    dot:   "bg-[#EF8622]",
    label: "text-[#B05E0E]",
  },
} as const;

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function Highlights() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#f8fafc]">

      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-0.75 w-6 rounded-full bg-[#EF8622]" />
              <div className="h-0.75 w-3 rounded-full bg-[#0D5B9B]" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.13em] text-[#EF8622] font-semibold mb-2">
              Investment Case
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800">
              Investment Highlights
            </h2>
          </div>
        </FadeIn>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-3">
          {highlights.map((item, i) => {
            const t = theme[item.theme];
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">

                  {/* Icon */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${t.wrap}`}>
                    <span className={`w-2.5 h-2.5 rounded-full ${t.dot}`} />
                  </div>

                  {/* Content */}
                  <div>
                    <p className={`text-[10px] font-bold tracking-[0.08em] uppercase mb-1.5 ${t.label}`}>
                      {item.label}
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}