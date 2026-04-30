"use client";

import FadeIn from "../../ui/FadeIn";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden mb-10 h-100">

      {/* 🔵 BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0f2a4a] via-[#1a4a7a] to-[#163d62]" />

      {/* 🔵 DECORATIVE BLOBS */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#ef8622]/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 right-10 w-40 h-40 rounded-full bg-white/5 blur-xl" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col md:flex-row items-stretch h-full">

        {/* 🖼 IMAGE (LEFT) */}
        <div
          className="relative h-64 md:h-full overflow-hidden w-full md:w-1/2"
         
        >
          <Image
            src="/images/about-hero.jpg"
            alt="Pharmaceutical research laboratory"
            fill
            className="object-cover brightness-[0.75] saturate-110"
            priority
          />

          {/* Gradient blend */}
          <div className="absolute inset-0 bg-linear-to-l from-[#1a4a7a] via-[#163d62]/40 to-transparent" />
        </div>

        {/* 🧾 TEXT (RIGHT) */}
        <div className="flex flex-col justify-center px-8 md:px-12 py-10 flex-1">

          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#ef8622] mb-4">
              Innovation-led · Clinical-stage
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl leading-tight text-white font-serif">
              About Us
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-4 text-white/70 max-w-md leading-relaxed">
              Learn more about our vision and goals to revolutionize the world
              of nano-pharmaceuticals.
            </p>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}