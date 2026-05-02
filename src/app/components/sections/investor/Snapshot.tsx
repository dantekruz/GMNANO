// components/sections/Snapshot.tsx
"use client";

import FadeIn from "../../ui/FadeIn";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const stats = [
  {
    label: "Stage",
    value: "Clinical-stage biotech",
    theme: "blue",
  },
  {
    label: "Platform",
    value: "Nanomedicine (MNP)",
    theme: "orange",
  },
  {
    label: "Pipeline",
    value: "Multiple indications",
    theme: "blue",
  },
  {
    label: "Focus",
    value: "Combination therapeutics",
    theme: "orange",
  },
] as const;

// ─── THEME MAP ────────────────────────────────────────────────────────────────

const theme = {
  blue: {
    wrap:  "bg-[#E6EFF8]",
    dot:   "bg-[#0D5B9B]",
    value: "text-[#082E50]",
  },
  orange: {
    wrap:  "bg-[#FEF3E8]",
    dot:   "bg-[#EF8622]",
    value: "text-[#7A3F06]",
  },
} as const;

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function Snapshot() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

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
              Overview
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800">
              Company Snapshot
            </h2>
          </div>
        </FadeIn>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((item, i) => {
            const t = theme[item.theme];
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center gap-3">

                  {/* Icon */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${t.wrap}`}>
                    <span className={`w-2.5 h-2.5 rounded-full ${t.dot}`} />
                  </div>

                  {/* Label */}
                  <p className="text-[10px] font-bold tracking-[0.08em] uppercase text-slate-400">
                    {item.label}
                  </p>

                  {/* Value */}
                  <p className={`text-sm font-semibold leading-snug ${t.value}`}>
                    {item.value}
                  </p>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}