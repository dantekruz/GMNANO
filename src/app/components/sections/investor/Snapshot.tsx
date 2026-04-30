"use client";

import FadeIn from "../../ui/FadeIn";

const stats = [
  { label: "Stage", value: "Clinical-stage biotech" },
  { label: "Platform", value: "Nanomedicine (MNP)" },
  { label: "Pipeline", value: "Multiple indications" },
  { label: "Focus", value: "Combination therapeutics" },
];

export default function Snapshot() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#324a6d] text-center">
            Company Snapshot
          </h2>
        </FadeIn>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-6 border rounded-xl text-center">

                <p className="text-sm text-gray-500">{item.label}</p>

                <p className="mt-2 font-semibold text-[#324a6d]">
                  {item.value}
                </p>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>

    </section>
  );
}