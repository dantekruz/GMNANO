"use client";

import { useState } from "react";
import Image from "next/image";

const items = [
  {
    title: "The Power of Micellar Nanoparticle (MNP) Platform",
    image: "/images/mnp1.png",
  },
  {
    title: "Nanostructures within MNPs — Size Distribution Pattern",
    image: "/images/mnp2.png",
  },
  {
    title: "MNP: One Platform — Multiple Applications",
    image: "/images/mnp3.png",
  },
  {
    title: "Patents",
    content:
      "Two patents have been issued and four filed, with four additional patents currently being written and scheduled for filing in 2023.",
    tag: "Intellectual Property",
  },
  {
    title: "Process",
    image: "/images/process.png",
  },
];

export default function Accordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        {/* Section header */}
        <p className="text-base font-semibold tracking-[0.2em] uppercase text-[#0E5B9B]/40 mb-2">
          Technology Overview
        </p>
        <h2 className="text-4xl font-black text-[#0E5B9B] mb-10 leading-tight">
          Our Platform &amp; IP
        </h2>

        {/* Top border */}
        <div className="h-px w-full bg-[#0E5B9B]/10" />

        {/* Accordion items */}
        <div>
          {items.map((item, i) => {
            const isOpen = open === i;

            return (
              <div key={i} className="border-b border-[#0E5B9B]/10">

                {/* Header button */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-5 py-5 text-left group"
                >
                  {/* Title */}
                  <span className="flex-1 text-[20px] font-bold text-[#0E5B9B] leading-snug group-hover:opacity-60 transition-opacity duration-200">
                    {item.title}
                  </span>

                  {/* +/− circle icon */}
                  <span
                    className={[
                      "shrink-0 w-8 h-8 rounded-full border flex items-center justify-center",
                      "text-[18px] leading-none select-none",
                      "transition-all duration-300 ease-in-out",
                      isOpen
                        ? "bg-[#0E5B9B] border-[#0E5B9B] text-white rotate-45"
                        : "border-[#0E5B9B]/25 text-[#0E5B9B] rotate-0",
                    ].join(" ")}
                  >
                    +
                  </span>
                </button>

                {/* Collapsible body — grid-rows trick for smooth animation */}
                <div
                  className={[
                    "grid transition-[grid-template-rows] duration-380 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pr-1">

                      {/* Image — natural dimensions, no fixed box */}
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full h-auto"
                        />
                      )}

                      {/* Tag pill */}
                      {item.tag && (
                        <span className="inline-flex items-center gap-1.5 bg-[#0E5B9B]/8 text-[#0E5B9B] text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0E5B9B] inline-block" />
                          {item.tag}
                        </span>
                      )}

                      {/* Text content */}
                      {item.content && (
                        <p className="text-[14px] text-[#0E5B9B]/60 leading-[1.75] font-normal max-w-lg">
                          {item.content}
                        </p>
                      )}

                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}