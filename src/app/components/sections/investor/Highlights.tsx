"use client";

import FadeIn from "../../ui/FadeIn";

const highlights = [
  "Proprietary nanotechnology platform with broad applications",
  "Clinically validated pipeline with proof-of-concept studies",
  "Targeting large unmet medical needs",
  "Capital-efficient development strategy",
];

export default function Highlights() {
  return (
    <section className="py-24 bg-[#f8fafc]">

      <div className="max-w-4xl mx-auto px-6">

        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#324a6d] text-center">
            Investment Highlights
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-6">
          {highlights.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex items-start gap-4">

                <div className="w-2 h-2 mt-2 rounded-full bg-[#ef8622]" />

                <p className="text-gray-600 leading-relaxed">
                  {item}
                </p>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>

    </section>
  );
}