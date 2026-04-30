"use client";

import FadeIn from "../../ui/FadeIn";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-28 bg-[#2071b486] text-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-white/70">
              Want to know more?
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-bold mt-2">
              Let&apos;s have a conversation.
            </h2>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-white/80">
              Exploring new technologies in pharmaceuticals and their
              applications to address unmet medical needs remains of paramount
              interest to us.
            </p>
            <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-white/80">
              We are committed to making the promise of nanomedicines a reality
              by delivering clinically superior and cost-effective
              nanotherapeutics that beat the current gold standards in medicine
              and significantly improve the quality of global healthcare.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <a
              href="/contact"
              className="mt-8 text-black inline-block bg-[#ef8622] px-8 py-3 rounded-4xl hover:scale-105 transition text-sm font-semibold"
            >
              Contact Us Today
            </a>
          </FadeIn>
        </div>

        {/* Logo — right on desktop, top on mobile */}
        <FadeIn delay={0.3}>
          <div className="shrink-0 flex justify-center">
            <Image
              src="/gmlogo.png"
              alt="GM Logo"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}