"use client";

import Image from "next/image";
import FadeIn from "../../ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-svh flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background.jpg"
          alt="background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0e5b9b]/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 py-20 sm:py-24">

        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.25em] sm:tracking-widest text-orange-400 uppercase">
            Welcome to
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mt-3 sm:mt-4 leading-tight">
            GM Nanotherapeutics
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/80 font-medium max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          Advancing multi-target nanotherapeutics for superior patient outcomes.<br /> 
          We develop clinically superior and cost-effective nanotherapeutics by integrating multiple drugs into a single optimized nanoformulation.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="/contact"
              className="w-full sm:w-auto bg-[#ef8622] text-black px-10 py-3.5 rounded-3xl font-bold text-sm sm:text-base hover:scale-105 hover:bg-[#f5962e] transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </FadeIn>

      </div>

    </section>
  );
}