// components/sections/Hero.tsx
"use client";

import FadeIn from "../../ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative py-36 text-center overflow-hidden bg-linear-to-b from-white to-[#f8fafc]">

      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 flex flex-col items-center">

        {/* EYEBROW PILL */}
        <FadeIn>
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-[#FEF3E8] border border-[#FDDBB5]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF8622]" />
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#B05E0E]">
              Investor Relations
            </span>
          </div>
        </FadeIn>

        {/* HEADLINE */}
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-[1.1] mb-5">
            Building the Future of{" "}
            <span className="text-[#0D5B9B]">Nano</span>
            <span className="text-[#EF8622]">medicine</span>
          </h1>
        </FadeIn>

        {/* SUBTEXT */}
        <FadeIn delay={0.2}>
          <p className="text-base text-slate-500 max-w-xl leading-relaxed mb-10">
            Through innovation, clinical validation, and strategic partnerships —
            GM Nanotherapeutics is reshaping how chronic disease is treated.
          </p>
        </FadeIn>

        {/* DECORATIVE RULE */}
        <FadeIn delay={0.3}>
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-[#FDDBB5]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF8622]" />
            <div className="h-px w-10 bg-[#B3CCE8]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D5B9B]" />
            <div className="h-px w-10 bg-[#FDDBB5]" />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}