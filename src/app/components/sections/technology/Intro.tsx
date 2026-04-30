"use client";

import FadeIn from "../../ui/FadeIn";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#f8fafc]">

      {/* Subtle background detail — large faint circle */}
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-xl h-144 rounded-full bg-[#e8f0fb]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 w-64 h-64 rounded-full bg-amber-100/50 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <FadeIn>
          <div>

            {/* Eyebrow label */}
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-amber-500 mb-5">
              Science · Innovation · Delivery
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-[#0f2a4a] mb-8">
              Introduction to{" "}
              <span className="text-[#1a4a7a]">Nanopharmaceutics</span>
            </h2>

            {/* Decorative rule */}
            <div className="w-16 h-1 rounded-full bg-amber-400 mb-8" />

            <p className="text-lg md:text-xl font-medium text-[#324a6d] leading-relaxed mb-5">
              &quot;Nano-pharmaceutics&quot; is the science that deals with the application of nanotechnology in drug delivery. These systems can alter drug properties such as bioavailability, biodistribution, and pharmacokinetics.
            </p>

            <p className="text-lg md:text-xl font-medium text-[#324a6d]/75 leading-relaxed">
              Nanotechnology has enabled major breakthroughs in drug delivery and formulation development, improving therapeutic outcomes.
            </p>

          </div>
        </FadeIn>

        {/* IMAGE */}
        <FadeIn delay={0.2}>
          <div className="relative h-104 md:h-128 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#1a4a7a]/10">
            <Image
              src="/images/tech-intro.jpg"
              alt="nanotech"
              fill
              className="object-cover"
            />
            {/* Subtle tint overlay for cohesion */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#0f2a4a]/30 via-transparent to-transparent" />
          </div>
        </FadeIn>

      </div>

    </section>
  );
}