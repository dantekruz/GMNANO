"use client";

import FadeIn from "../../ui/FadeIn";
import Image from "next/image";

const partnerships = [
  {
    title: "Strategic Partnership with a CDMO in USA",
    desc: "SGN entered a ~$6.5MM Strategic Development Partnership for three of its pipeline products with a US-based CDMO in Q2 2023. The CDMO partner is accepting equity for all CMC development including material & packaging costs and will acquire commercial manufacturing rights to the three SGN products. In addition, the CDMO partner will infuse $2.7MM in cash as an equity investment in SGN Nanopharma over the next year.",
    points: [
      "CDMO will generate CMC packages for Phase-3 IND filings for 3 pipeline products.",
      "CDMO will supply all clinical trial materials for the three products.",
    ],
    icon: "/icons/partnership1.svg",
    tag: "Development",
  },
  {
    title: "Academic Partnerships",
    desc: "SGN Nanopharma has three actively funded research programs — \"Micellar Nanoparticle Nanoformulations for the Treatment of Traumatic Brain Injury\", \"Nanoformulations of Cannabinoids for Nose-to-Brain Delivery\", and \"Nanoformulations of Cannabinoids and Other Drugs\" — from the State of Florida (Florida I4 HiTech Corridor Grants), receiving over $1 million in matching R&D funding administered through the University of South Florida. Over six-plus years, SGN's collaboration with the Florida HiTech Corridor and USF has thrived, with more than 65 USF Master's students conducting thesis research and internships at SGN labs under Dr. Pranav Patel's mentorship, and SGN hiring over two dozen USF graduates over that span.",
    link: "Learn more about our research collaborations",
    linkUrl:
      "https://floridahightech.com/insights/matching-graduate-students-with-area-employers-through-hands-on-experience/",
    icon: "/icons/partnership2.svg",
    tag: "Research",
  },
  {
    title: "Supply & Licensing Deals with Partners in India, Middle East & North Africa and South East Asia",
    desc: "Medicom Healthcare is a fast-growing company in the Global Ophthalmic Market with a mission to provide high-quality eyecare products designed to protect the cornea by eliminating preservatives and other cytotoxic additives. Medicom is our semi-exclusive partner for preservative-free MNP Cyclosporine in the Indian market. Wellesta Healthcare Singapore Pte. Ltd, a subsidiary of Wellesta Holdings Pte Ltd, is set up to support companies in the Healthcare sector to provide commercial support and market access in India, SEA and MENA through a footprint of their partners and subsidiaries. Wellesta is our partner for MNP Cyclosporine in India, SEA and MENA. In addition, they are the exclusive distribution partner for SGN's hair growth range of products in India.",
    icon: "/icons/partnership3.svg",
    tag: "Commercial",
  },
];

export default function PartnershipsList() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#f8fafc]">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4xl h-224 rounded-full bg-[#e8f0fb]/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-0 w-72 h-72 rounded-full bg-amber-100/40 blur-2xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 w-64 h-64 rounded-full bg-[#1a4a7a]/5 blur-2xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* ── Section Header ───────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-amber-500 mb-5">
              Collaborations · Alliances · Growth
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-[#0f2a4a] mb-5">
              Our Partnerships
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="w-16 h-1 rounded-full bg-amber-400 mx-auto" />
          </FadeIn>
        </div>

        {/* ── Cards Grid ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {partnerships.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group relative flex flex-col bg-white rounded-3xl shadow-lg ring-1 ring-[#1a4a7a]/8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* Top accent bar */}
                <div className="h-1 w-full bg-linear-to-r from-[#1a4a7a] to-amber-400" />

                <div className="flex flex-col flex-1 p-8">
                  {/* Icon + Tag row */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#0f2a4a]/8 rounded-2xl ring-1 ring-[#1a4a7a]/10 group-hover:bg-[#0f2a4a]/12 transition-colors">
                      <Image src={item.icon} alt="" width={28} height={28} />
                    </div>
                    <span className="text-xs font-bold tracking-[0.18em] uppercase text-amber-500 bg-amber-50 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-black leading-snug text-[#0f2a4a] mb-4">
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-10 h-0.5 rounded-full bg-amber-400 mb-5" />

                  {/* Description */}
                  <p className="text-base font-medium text-[#324a6d]/70 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bullet points */}
                  {item.points && (
                    <ul className="mt-3 space-y-3">
                      {item.points.map((p, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm font-medium text-[#324a6d]/70"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Link */}
                  {item.link && (
                    <a
                      href={item.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-sm font-bold tracking-wide text-[#1a4a7a] hover:text-amber-500 transition-colors cursor-pointer"
                    >
                      {item.link}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}