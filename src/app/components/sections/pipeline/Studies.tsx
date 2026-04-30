"use client";

import FadeIn from "../../ui/FadeIn";
import Image from "next/image";

const studies = [
  {
    id: "sgn-101",
    imagePos: "left" as const,
    imageSrc: "/images/sgn-101.png",
    imageAlt: "MNP-Cyclosporine clinical study",
    title: `A Head-to-Head, Randomized, Controlled, Clinical Study Demonstrates Superiority of SGN's MNP-Cyclosporine (SGN-101) vs the Current "Standard of Care" RESTASIS`,
    description:
      "In a study (published by BMC Ophthalmology) for Dry Eye Disease (DED), MNP Cyclosporine was (1) statistically superior to Restasis beginning 4 weeks of treatment and (2) more tolerable.",
    steps: [
      "Guidance for Phase 3 studies has been received from the USFDA.",
      "We are in active out-licensing discussions with potential partners and expect to complete the out-licensing in 2H 2023.",
    ],
    imageStyle: "contain" as const,
  },
  {
    id: "sgn-624",
    imagePos: "right" as const,
    imageSrc: "/images/sgn-624.jpg",
    imageAlt: "Pain topical nanolotion SGN-624",
    title: "Pain Topical Nanolotion (SGN-624)",
    description:
      `Comprises of a transdermal, fixed-dose combination of two active pharma ingredients targeting inflammation and neuropathic components of pain. SGN-624 demonstrated significant efficacy in patients deemed "Medically Refractory" or whose pain was uncontrolled despite taking oral NSAIDs and Opioids in a 48-patient, single-center study. 16/25 patients in the study taking opioids either came off opioids completely or cut their dose in half after treatment for 1 month. Overall, more than 50% of the patients experienced >50% improvement in pain reduction within two weeks of initiation of therapy.`,
    steps: [
      "Guidance for Phase 3 studies has been received from the USFDA.",
      "Two premiere medical research institutes are initiating studies with SGN-624 in 3Q of 2023 for post-surgical improvement of recovery times in whole knee and hip-replacement surgical patients.",
    ],
    imageStyle: "cover" as const,
  },
  {
    id: "sgn-516",
    imagePos: "left" as const,
    imageSrc: "/images/sgn-516.jpg",
    imageAlt: "Diabetic Neuropathy treatment SGN-516",
    title: "MNP Topical Nano-Lotion for Treatment of Diabetic Neuropathy (SGN-516)",
    description:
      "In a recently concluded 19-patient, two-center, open-label study of patients with uncontrolled diabetic neuropathy treated with SGN-516, 15/19 patients treated so saw a 50–80% improvement from baseline within one month of treatment.",
    steps: [
      "Initiate a controlled 80-patient study in 2H of 2023.",
    ],
    imageStyle: "cover" as const,
  },
];

export default function ClinicalStudies() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-4xl h-224 rounded-full bg-[#e8f0fb]/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ── Section Header ───────────────────────────────────────────── */}
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-amber-500 mb-5">
              Clinical Evidence · Proof of Concept
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-[#0f2a4a] mb-6">
              Three Clinical POC Studies
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="w-16 h-1 rounded-full bg-amber-400 mx-auto mb-8" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg md:text-xl font-medium text-[#324a6d]/75 max-w-2xl mx-auto leading-relaxed">
              Studies demonstrating Superiority vs. &quot;Standard of Care,&quot; Establish &amp; De-Risk the MNP Platform.
            </p>
          </FadeIn>
        </div>

        {/* ── Study Cards ───────────────────────────────────────────────── */}
        <div className="space-y-10">
          {studies.map((study, i) => (
            <FadeIn key={study.id} delay={i * 0.1}>
              <div
                className={`relative flex flex-col ${
                  study.imagePos === "right" ? "md:flex-row-reverse" : "md:flex-row"
                } rounded-3xl overflow-hidden shadow-xl ring-1 ring-[#1a4a7a]/10 bg-white min-h-88`}
              >
                {/* Image */}
                <div
                  className={`relative w-full shrink-0 md:w-2/5 ${
                    study.imageStyle === "contain"
                      ? "h-56 md:h-auto bg-[#f0f5fc] flex items-center justify-center p-6"
                      : "h-64 md:h-auto"
                  }`}
                >
                  {study.imageStyle === "contain" ? (
                    <div className="relative w-full h-full min-h-56">
                      <Image
                        src={study.imageSrc}
                        alt={study.imageAlt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <>
                      <Image
                        src={study.imageSrc}
                        alt={study.imageAlt}
                        fill
                        className="object-cover"
                      />
                      <div
                        className={`absolute inset-0 ${
                          study.imagePos === "left"
                            ? "bg-linear-to-r from-transparent to-[#0f2a4a]/30"
                            : "bg-linear-to-l from-transparent to-[#0f2a4a]/30"
                        }`}
                      />
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-12 flex-1">

                  <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-amber-500 mb-4">
                    {study.id.toUpperCase()}
                  </span>

                  <h3 className="text-xl md:text-2xl font-black leading-snug text-[#0f2a4a] mb-5">
                    {study.title}
                  </h3>

                  <p className="text-base md:text-lg font-medium text-[#324a6d]/75 leading-relaxed mb-6">
                    {study.description}
                  </p>

                  <div>
                    <p className="text-sm font-black tracking-wide uppercase text-[#0f2a4a] mb-3">
                      Current / Future Steps
                    </p>
                    <ol className="space-y-2 list-decimal list-inside">
                      {study.steps.map((step, j) => (
                        <li
                          key={j}
                          className="text-base font-medium text-[#324a6d]/70 leading-relaxed"
                        >
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}