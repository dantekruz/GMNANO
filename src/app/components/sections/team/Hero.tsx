"use client";
import FadeIn from "../../ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative py-15 text-center overflow-hidden bg-[#040f1c]">

      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(14,91,155,0.45) 0%, transparent 70%)",
        }}
      />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative horizontal rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#0e5b9b] to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 px-6">


        {/* Headline */}
        <FadeIn delay={0.15}>
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              background:
                "linear-gradient(160deg, #ffffff 30%, #7bbfef 70%, #0e5b9b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Team
          </h1>
        </FadeIn>

        {/* Divider accent */}
        <FadeIn delay={0.28}>
          <div className="flex items-center justify-center gap-3 my-8">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-[#0e5b9b]" />
            <div
              className="w-2 h-2 rounded-full bg-[#0e5b9b]"
              style={{ boxShadow: "0 0 10px rgba(14,91,155,0.8)" }}
            />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-[#0e5b9b]" />
          </div>
        </FadeIn>

        {/* Subheading */}
        <FadeIn delay={0.4}>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(180,210,240,0.75)" }}
          >
          A short introduction to our team members and why their background should inspire your confidence.
          </p>
        </FadeIn>

      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(4,15,28,0.95))",
        }}
      />
    </section>
  );
}