"use client";

import FadeIn from "../../ui/FadeIn";
import Image from "next/image";

export default function PipelineChart() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#f8fafc]">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3xl h-192 rounded-full bg-[#e8f0fb]/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 w-72 h-72 rounded-full bg-amber-100/40 blur-2xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 w-64 h-64 rounded-full bg-[#1a4a7a]/5 blur-2xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <FadeIn>
          <p className="text-base md:text-lg font-bold tracking-[0.25em] uppercase text-amber-500 mb-5">
            Research · Development · Regulatory
          </p>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.05}>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] text-[#0f2a4a] mb-5">
            Current Pipeline
          </h1>
        </FadeIn>

        {/* Decorative rule */}
        <FadeIn delay={0.1}>
          <div className="w-16 h-1 rounded-full bg-amber-400 mx-auto mb-12" />
        </FadeIn>

        {/* Chart */}
        <FadeIn delay={0.2}>
          <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#1a4a7a]/10 bg-white p-6 md:p-10">
            <div className="relative w-full h-full md:h-72">
              <Image
                src="/images/pipelinech.png"
                alt="Current pipeline chart"
                width={1200}
                height={800}
                className="object-contain h-full"
              />
            </div>
          </div>
        </FadeIn>

        {/* Footnotes */}
        <FadeIn delay={0.3}>
          <div className="mt-8 space-y-2 text-sm md:text-base font-medium text-[#324a6d]/60 text-left max-w-3xl mx-auto">
            <p>
              * Human PoC – Human Proof-of-Concept Study, Open-label,
              Non-Randomized
            </p>
            <p>
              ** Pre-IND meeting with USFDA completed, feedback on Phase 3
              Clinical Development plan obtained
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
