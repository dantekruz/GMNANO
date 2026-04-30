"use client";

import FadeIn from "../../ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative py-15 pb-15 text-center overflow-hidden bg-[#031d36]">

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial glow — orange */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 20% 30%, rgba(237,132,32,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 70%, rgba(14,91,155,0.3) 0%, transparent 60%)",
        }}
      />

      {/* Top-right orb */}
      <div className="absolute -top-28 -right-16 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(237,132,32,0.08) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 px-6">

        <FadeIn>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 border"
            style={{ background: "rgba(237,132,32,0.15)", borderColor: "rgba(237,132,32,0.3)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ED8420] animate-pulse" />
            <span className="text-[#ED8420] text-xs font-medium tracking-widest uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Get in touch
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1
            className="text-5xl md:text-6xl font-semibold leading-tight text-white max-w-2xl mx-auto mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let&apos;s Start a{" "}
            <em className="text-[#ED8420] not-italic">Conversation</em>
          </h1>
        </FadeIn>

      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(237,132,32,0.4), transparent)" }}
      />
    </section>
  );
}