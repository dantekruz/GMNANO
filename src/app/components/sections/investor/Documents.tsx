"use client";

import FadeIn from "../../ui/FadeIn";

export default function Documents() {
  return (
    <section className="py-24 bg-[#f8fafc] text-center">

      <FadeIn>
        <h2 className="text-2xl font-semibold text-[#324a6d]">
          Investor Resources
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="mt-4 text-gray-600">
          Coming soon: presentations, reports, and investor materials.
        </p>
      </FadeIn>

    </section>
  );
}