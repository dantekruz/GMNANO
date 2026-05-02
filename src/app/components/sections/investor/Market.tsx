// components/sections/MarketDisplacement.tsx
"use client";

import FadeIn from "../../ui/FadeIn";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const stats = [
  {
    label: "Pain Market",
    value: "$88B",
    sub: "Opioids + Non-opioids",
    theme: "orange",
  },
  {
    label: "RA Market",
    value: "$38B",
    sub: "Rheumatoid Arthritis",
    theme: "blue",
  },
  {
    label: "Total Landscape",
    value: "$200B+",
    sub: "Combined addressable",
    theme: "gradient",
  },
];

const bullets = [
  {
    primary: false,
    text: "The $88B pain market is divided between opioid therapies burdened by systemic risk and non-opioid treatments limited by efficacy.",
  },
  {
    primary: true,
    text: "GM Nanotherapeutics bridges this gap with Abuse-Deterrent Fixed-Dose Combination Nanotherapeutics — delivering opioid-level potency without addiction risk.",
  },
  {
    primary: false,
    text: "Expanding into the $38B Rheumatoid Arthritis market with a triple-combination therapy entering the clinic in 2027.",
  },
  {
    primary: false,
    text: "By addressing Acute Post-Operative Pain, Sports Medicine, Chronic Pain, and RA, GM Nano is building a diversified platform targeting a $200B+ therapeutic landscape.",
  },
];

const indications = [
  { label: "Acute Post-Op Pain", theme: "orange" },
  { label: "Sports Medicine",    theme: "orange" },
  { label: "Chronic Pain",       theme: "blue"   },
  { label: "Rheumatoid Arthritis", theme: "blue" },
];

// ─── THEME MAPS ───────────────────────────────────────────────────────────────

const statTheme = {
  orange: {
    card:   "bg-[#FEF3E8] border border-[#FDDBB5]",
    label:  "text-[#B05E0E]",
    value:  "text-[#7A3F06]",
    sub:    "text-[#B05E0E]",
  },
  blue: {
    card:   "bg-[#E6EFF8] border border-[#B3CCE8]",
    label:  "text-[#0A4372]",
    value:  "text-[#082E50]",
    sub:    "text-[#0A4372]",
  },
  gradient: {
    card:   "bg-gradient-to-br from-[#EF8622] to-[#0D5B9B]",
    label:  "text-white/75",
    value:  "text-white",
    sub:    "text-white/80",
  },
};

const pillTheme = {
  orange: "bg-[#FEF3E8] text-[#B05E0E] border border-[#FDDBB5]",
  blue:   "bg-[#E6EFF8] text-[#0A4372] border border-[#B3CCE8]",
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function MarketDisplacement() {
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
          <div className="mb-12">
            {/* Brand rule */}
            <div className="flex items-center gap-2 mb-3">
              <div className="h-[3px] w-6 rounded-full bg-[#EF8622]" />
              <div className="h-[3px] w-3 rounded-full bg-[#0D5B9B]" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.13em] text-[#EF8622] font-semibold mb-2">
              Market Opportunity
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight mb-2">
              Strategic Market Displacement
            </h2>
            <p className="text-lg text-slate-500">
              Reshaping Pain &amp; Inflammation Markets
            </p>
          </div>
        </FadeIn>

        {/* STATS ROW */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-3 gap-3 mb-10">
            {stats.map((s, i) => {
              const t = statTheme[s.theme as keyof typeof statTheme];
              return (
                <div key={i} className={`rounded-2xl px-5 py-5 ${t.card}`}>
                  <p className={`text-[10px] font-bold tracking-[0.08em] uppercase mb-1.5 ${t.label}`}>
                    {s.label}
                  </p>
                  <p className={`text-3xl font-black leading-none mb-1 ${t.value}`}>
                    {s.value}
                  </p>
                  <p className={`text-xs ${t.sub}`}>{s.sub}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* BODY COPY */}
        <FadeIn delay={0.2}>
          <div className="border-l-2 border-[#FDDBB5] pl-5 flex flex-col gap-4 mb-10">
            {bullets.map((b, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span
                  className={`
                    mt-[7px] rounded-full flex-shrink-0
                    ${b.primary
                      ? "w-2 h-2 bg-[#EF8622]"
                      : "w-1.5 h-1.5 bg-[#FDDBB5]"}
                  `}
                />
                <p
                  className={`
                    text-sm leading-relaxed
                    ${b.primary
                      ? "text-slate-800 font-medium"
                      : "text-slate-500"}
                  `}
                >
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* INDICATION PILLS */}
        <FadeIn delay={0.3}>
          <div className="pt-5 border-t border-[#FDDBB5] flex flex-wrap gap-2">
            {indications.map((ind, i) => (
              <span
                key={i}
                className={`
                  text-[11px] font-semibold px-3 py-1 rounded-lg
                  ${pillTheme[ind.theme as keyof typeof pillTheme]}
                `}
              >
                {ind.label}
              </span>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}