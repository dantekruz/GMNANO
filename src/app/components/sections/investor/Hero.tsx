"use client";

import FadeIn from "../../ui/FadeIn";

export default function Hero() {
  return (
    <section className="py-32 text-center 
     from-white to-[#f8fafc]">

      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#324a6d]">
          Investor Relations
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Building the future of nanomedicine through innovation, clinical validation, and strategic partnerships.
        </p>
      </FadeIn>

    </section>
  );
}