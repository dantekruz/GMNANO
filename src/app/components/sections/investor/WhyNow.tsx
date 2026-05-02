// components/sections/WhyNow.tsx
"use client";

import FadeIn from "../../ui/FadeIn";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const paragraphs = [
  {
    text: "Recent failures of selective monotherapies have highlighted the limitations of single-target approaches in complex diseases.",
    primary: false,
  },
  {
    text: "GM Nanotherapeutics combines multi-target synergies, nanotechnology, and proprietary AI to address this unmet need at scale.",
    primary: true,
  },
  {
    text: "With several value-driving milestones expected over the next 24 months, the company represents a compelling inflection-point opportunity.",
    primary: false,
  },
];

const anchors = [
  { text: "Multi-target therapeutic approach", theme: "blue"   },
  { text: "Clinically validated platform",     theme: "orange" },
  { text: "Near-term development milestones",  theme: "blue"   },
] as const;

// ─── THEME MAP ────────────────────────────────────────────────────────────────

const anchorTheme = {
  blue: {
    card:  "bg-[#E6EFF8] border-[#B3CCE8]",
    dot:   "bg-[#0D5B9B]",
    text:  "text-[#082E50]",
  },
  orange: {
    card:  "bg-[#FEF3E8] border-[#FDDBB5]",
    dot:   "bg-[#EF8622]",
    text:  "text-[#7A3F06]",
  },
} as const;

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function WhyNow() {
  return (
    <section className="relative py-32 overflow-hidden bg-linear-to-b from-white to-slate-50">

      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <FadeIn>
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-[3px] w-6 rounded-full bg-[#EF8622]" />
              <div className="h-[3px] w-3 rounded-full bg-[#0D5B9B]" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.13em] text-[#EF8622] font-semibold mb-2">
              Why Now
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
              Why GM Nanotherapeutics?
            </h2>
          </div>
        </FadeIn>

        {/* BODY — two-column split */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT — prose */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-4">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-sm leading-relaxed ${
                    p.primary
                      ? "text-slate-800 font-medium"
                      : "text-slate-500"
                  }`}
                >
                  {p.text}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* RIGHT — anchor pills */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-2.5">
              {anchors.map((a, i) => {
                const t = anchorTheme[a.theme];
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3.5 border ${t.card}`}
                  >
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${t.dot}`} />
                    <p className={`text-sm font-semibold ${t.text}`}>{a.text}</p>
                  </div>
                );
              })}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}