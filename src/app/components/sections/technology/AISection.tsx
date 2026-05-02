"use client";

import FadeIn from "../../ui/FadeIn";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const blocks = [
  {
    label: "Data Foundation",
    title: "2,000+ Nanoformulations",
    desc: "A growing proprietary dataset that enables deep insights into formulation behavior and drug interactions.",
    theme: "blue",
    icon: "dot",
  },
  {
    label: "AI Prediction",
    title: "Predictive Modeling",
    desc: "AI-driven models identify optimal drug combinations and stability profiles before clinical trials.",
    theme: "orange",
    icon: "dot",
  },
  {
    label: "Impact",
    title: "Accelerated Development",
    desc: "Reduces R&D costs, minimizes trial-and-error, and significantly shortens time-to-market.",
    theme: "blue",
    icon: "bar",
  },
] as const;

// ─── THEME MAP ────────────────────────────────────────────────────────────────

const theme = {
  blue: {
    wrap:  "bg-[#E6EFF8]",
    icon:  "bg-[#0D5B9B]",
    label: "text-[#0A4372]",
  },
  orange: {
    wrap:  "bg-[#FEF3E8]",
    icon:  "bg-[#EF8622]",
    label: "text-[#B05E0E]",
  },
} as const;

// ─── SUBCOMPONENT ─────────────────────────────────────────────────────────────

function BlockIcon({
  t,
  icon,
}: {
  t: (typeof theme)[keyof typeof theme];
  icon: "dot" | "bar";
}) {
  return (
    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${t.wrap}`}>
      {icon === "dot" ? (
        <span className={`w-2.5 h-2.5 rounded-full ${t.icon}`} />
      ) : (
        <span className={`w-2.5 h-[3px] rounded-full ${t.icon}`} />
      )}
    </div>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function AISection() {
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
              The Future
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight mb-3">
              AI-Driven Precision Scaling
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
              We are building a scalable discovery engine by integrating our proprietary
              database of 2,000+ nanoformulations into a custom AI-driven platform.
            </p>
          </div>
        </FadeIn>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-3">
          {blocks.map((block, i) => {
            const t = theme[block.theme];
            return (
              <FadeIn key={block.label} delay={i * 0.14}>
                <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div className="flex items-center gap-2.5 mb-3">
                    <BlockIcon t={t} icon={block.icon} />
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
        </div>

      </div>
    </section>
  );
}