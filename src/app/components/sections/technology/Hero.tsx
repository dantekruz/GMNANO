"use client";

import FadeIn from "../../ui/FadeIn";
import Image from "next/image";

export default function MNPHero() {
  return (
    <section className="relative overflow-hidden mb-6 flex flex-col md:flex-row items-stretch bg-linear-to-br from-[#0f2a4a] via-[#1a4a7a] to-[#163d62]">

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-14 -right-14 w-56 h-56 rounded-full bg-amber-500/10" />
      <div className="pointer-events-none absolute -bottom-10 right-10 w-40 h-40 rounded-full bg-white/3" />

      {/* ── Image — TOP on mobile, LEFT on desktop ────────────────────────── */}
      <div className="relative shrink-0 w-full h-56 md:w-96 md:h-auto overflow-hidden rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
        <Image
          src="/images/mnp-hero.png"
          alt="MNP nanotechnology laboratory"
          fill
          className="object-cover brightness-75 saturate-110"
        />
        {/* On mobile: fade bottom into section bg. On desktop: fade right into text side. */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#163d62]/40 to-[#1a4a7a] md:bg-linear-to-l md:from-[#1a4a7a] md:via-[#163d62]/40 md:to-transparent" />
      </div>

      {/* ── Text Content — BOTTOM on mobile, RIGHT on desktop ─────────────── */}
      <div className="relative z-10 flex flex-col justify-center px-6 py-8 md:px-10 md:py-14 flex-1">

        <FadeIn>
          <h2 className="text-xs md:text-xl font-bold tracking-widest uppercase mb-3 md:mb-4 text-amber-400">
            Nano-Technology · Patents · Processes
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-3xl md:text-5xl font-black mb-3 md:mb-4 leading-tight text-blue-300">
            Our MNP Nano-Tech Platform
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-sm md:text-base leading-relaxed max-w-md text-white/70">
            A brief introduction to MNP nanotechnology, our patents, and our processes.
          </p>
        </FadeIn>

      </div>

    </section>
  );
}