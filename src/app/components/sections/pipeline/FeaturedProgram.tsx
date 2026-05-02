// components/sections/FeaturedProgram.tsx
"use client";

import FadeIn from "../../ui/FadeIn";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const blocks = [
  {
    id: "mechanism",
    label: "Mechanism",
    title: "Combination Nanotherapeutic",
    desc: "Pairs a fast-acting neuropathic agent with a long-lasting NSAID to address multiple pain pathways simultaneously.",
    theme: "blue",
    span: "col-span-1",
  },
  {
    id: "engineering",
    label: "Engineering Advantage",
    title: "Enhanced Delivery",
    desc: "Transdermal delivery with 3x+ higher bioavailability enables reduced dosage and minimal systemic exposure.",
    theme: "orange",
    span: "col-span-1",
  },
];

const clinicalStats = [
  { value: "98%", desc: "of patients discontinued oral NSAIDs" },
  { value: "74%", desc: "reduced opioid use by over 50% within four weeks" },
];

// ─── THEME MAP ────────────────────────────────────────────────────────────────

const dotTheme = {
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
};

// ─── SUBCOMPONENTS ────────────────────────────────────────────────────────────

function BlockIcon({ theme }: { theme: "blue" | "orange" }) {
  const t = dotTheme[theme];
  return (
    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${t.wrap}`}>
      <span className={`w-2.5 h-2.5 rounded-full ${t.dot}`} />
    </div>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function FeaturedProgram() {
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
              <div className="h-0.75 w-6 rounded-full bg-[#EF8622]" />
              <div className="h-0.75 w-3 rounded-full bg-[#0D5B9B]" />
            </div>
            <h2 className="text-4xl md:text-4xl font-black text-slate-800 leading-tight mb-3">
              Lead Program: SGNP-624
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
              SGNP-624 represents our multi-target nanotherapeutic approach, combining a
              fast-acting neuropathic agent with a long-lasting NSAID in a micellar
              nanotechnology formulation.
            </p>
          </div>
        </FadeIn>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-3">

          {/* TOP TWO CARDS */}
          {blocks.map((block, i) => {
            const t = dotTheme[block.theme as keyof typeof dotTheme];
            return (
              <FadeIn key={block.id} delay={i * 0.12}>
                <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-3">
                    <BlockIcon theme={block.theme as "blue" | "orange"} />
                    <span className={`text-[10px] font-bold tracking-[0.08em] uppercase ${t.label}`}>
                      {block.label}
                    </span>
                  </div>
                  <p className="text-base font-semibold text-slate-800 mb-1.5">
                    {block.title}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {block.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}

          {/* CLINICAL RESULTS — FULL WIDTH, HIGHLIGHTED */}
          <div className="col-span-2">
            <FadeIn delay={0.24}>
              <div className="bg-[#E6EFF8] rounded-2xl p-5 border-2 border-[#0D5B9B]">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-[#0D5B9B] flex items-center justify-center shrink-0">
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#0A4372]">
                    Clinical Impact
                  </span>
                  <span className="ml-auto text-[10px] font-bold tracking-[0.06em] uppercase px-2.5 py-1 rounded-md bg-[#0D5B9B] text-white">
                    Phase 2 Results
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {clinicalStats.map((s, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 border border-[#B3CCE8]"
                    >
                      <p className="text-4xl font-black text-[#082E50] leading-none mb-1.5">
                        {s.value}
                      </p>
                      <p className="text-xs text-[#0A4372] leading-snug">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* TIMELINE — FULL WIDTH */}
          <div className="col-span-2">
            <FadeIn delay={0.36}>
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="w-7 h-7 rounded-lg bg-[#FEF3E8] flex items-center justify-center shrink-0">
                  <span className="w-2.5 h-0.75 rounded-full bg-[#EF8622]" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#B05E0E]">
                    Development Timeline
                  </span>
                  <p className="text-sm text-slate-500 leading-relaxed mt-0.5">
                    On track to initiate Phase 3 clinical trials in Q1 2027 following FDA discussions.
                  </p>
                </div>
                <span className="shrink-0 text-[10px] font-bold tracking-[0.06em] uppercase px-3 py-1.5 rounded-lg bg-[#FEF3E8] text-[#B05E0E] border border-[#FDDBB5]">
                  Q1 2027
                </span>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}