"use client";

import FadeIn from "../../ui/FadeIn";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row overflow-hidden min-h-96 md:min-h-112 bg-linear-to-br from-[#0f2a4a] via-[#1a4a7a] to-[#163d62]">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-14 -right-14 w-56 h-56 rounded-full bg-amber-500/10" />
      <div className="pointer-events-none absolute -bottom-10 right-10 w-40 h-40 rounded-full bg-white/10" />

      {/* Hero Image */}
      <div className="relative w-full md:w-96 shrink-0 h-64 md:h-auto overflow-hidden">
        <Image
          src="/images/pipeline-hero.jpg"
          alt="Pipeline overview"
          fill
          priority
          className="object-cover brightness-75 saturate-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#163d62]/40 to-[#1a4a7a] md:bg-linear-to-l md:from-[#1a4a7a] md:via-[#163d62]/40 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-6 py-8 md:px-10 md:py-14">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-blue-300 mb-3 md:mb-4">
            Our Pipeline
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-base md:text-lg leading-relaxed text-white/80 max-w-md">
            An overview of the products being researched, developed, and our evolving pipeline.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}