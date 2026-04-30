"use client";

import FadeIn from "../../ui/FadeIn";
import Image from "next/image";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const items = [
  {
    number: "01",
    label: "Challenge",
    title: "Inadequacy of the Current Paradigm",
    desc: "We believe the algorithm that monotherapies can effectively cure or manage chronic diseases — which are caused by multiple biochemical defects — is simplistic and outdated.",
    icon: "/icons/arrow.svg",
    // Amber
    accentBar: "bg-amber-500",
    iconBg: "bg-amber-50",
    iconBorder: "border-amber-200",
    cardBg: "bg-amber-50/60",
    cardBorder: "border-amber-200",
    pillBg: "bg-amber-100",
    pillText: "text-amber-800",
    pillBorder: "border-amber-200",
    numberText: "text-amber-200",
    hoverShadow: "hover:shadow-amber-100",
  },
  {
    number: "02",
    label: "Strategy",
    title: "Our Strategy",
    desc: "Attacking chronic diseases with a combination of two or more effective drugs targeting multiple underlying biochemical causes simultaneously in one formulation will generate more impactful medicines.",
    icon: "/icons/arrow.svg",
    // Blue
    accentBar: "bg-blue-600",
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-200",
    cardBg: "bg-blue-50/60",
    cardBorder: "border-blue-200",
    pillBg: "bg-blue-100",
    pillText: "text-blue-800",
    pillBorder: "border-blue-200",
    numberText: "text-blue-200",
    hoverShadow: "hover:shadow-blue-100",
  },
  {
    number: "03",
    label: "Approach",
    title: "Our Approach",
    desc: "We harness our proprietary nanotechnology in a capital-efficient manner to create a novel pipeline of superior, clinically differentiated small-molecule combination nanomedicines.",
    icon: "/icons/check.svg",
    // Emerald
    accentBar: "bg-emerald-500",
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-200",
    cardBg: "bg-emerald-50/60",
    cardBorder: "border-emerald-200",
    pillBg: "bg-emerald-100",
    pillText: "text-emerald-800",
    pillBorder: "border-emerald-200",
    numberText: "text-emerald-200",
    hoverShadow: "hover:shadow-emerald-100",
  },
];

// ─── CONNECTOR ────────────────────────────────────────────────────────────────

const connectorColors = [
  { line: "bg-gradient-to-b from-amber-300 to-blue-300", dot: "border-blue-400 bg-blue-100" },
  { line: "bg-gradient-to-b from-blue-300 to-emerald-300", dot: "border-emerald-400 bg-emerald-100" },
];

const Connector = ({ index }: { index: number }) => (
  <div className="flex flex-col items-center my-1 select-none" aria-hidden="true">
    <div className={`w-px h-8 ${connectorColors[index].line}`} />
    <div className={`w-2 h-2 rounded-full border-2 mt-0.5 ${connectorColors[index].dot}`} />
  </div>
);

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function Approach() {
  return (
    <section className="relative py-32 overflow-hidden bg-linear-to-b from-white to-slate-50">

      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* TOP ICON */}
        <FadeIn>
          <div className="flex justify-center mb-10">
            <div className="flex items-center justify-center ">
              <Image
                src="/icons/bulleye.svg"
                alt="approach"
                width={90}
                height={90}
              />
            </div>
          </div>
        </FadeIn>

        {/* HEADER */}
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-lg uppercase tracking-[0.16em] text-amber-500 font-extrabold mb-4">
              Our cutting edge approach
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
              Creating Best-in-Class,{" "}
              <span className="text-amber-500">Fixed-Dose</span>{" "}
              Combination Nanomedicines
            </h2>
            {/* Decorative rule */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-12 bg-amber-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <div className="h-px w-12 bg-blue-200" />
            </div>
          </div>
        </FadeIn>

        {/* ITEMS */}
        <div>
          {items.map((item, i) => (
            <div key={i}>
              <FadeIn delay={i * 0.18}>
                <div
                  className={`
                    group relative flex items-start gap-6 rounded-2xl p-7
                    border transition-shadow duration-300 hover:shadow-lg
                    ${item.cardBg} ${item.cardBorder} ${item.hoverShadow}
                  `}
                >
                  {/* Left accent bar */}
                  <div className={`absolute left-0 top-6 bottom-6 w-0.75 rounded-full ${item.accentBar}`} />

                  {/* Icon */}
                  <div
                    className={`
                      shrink-0 w-11 h-11 flex items-center justify-center
                      rounded-xl mt-0.5 border shadow-sm
                      ${item.iconBg} ${item.iconBorder}
                    `}
                  >
                    <Image src={item.icon} alt="" width={16} height={16} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Label pill */}
                    <span
                      className={`
                        inline-block text-[10px] font-bold tracking-[0.14em] uppercase
                        px-2.5 py-0.5 rounded-full mb-2 border
                        ${item.pillBg} ${item.pillText} ${item.pillBorder}
                      `}
                    >
                      {item.label}
                    </span>

                    <h3 className="text-xl font-semibold text-slate-800 leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Ghost step number */}
                  <div className={`hidden md:block shrink-0 text-6xl font-light leading-none select-none self-center pr-2 ${item.numberText}`}>
                    {item.number}
                  </div>
                </div>
              </FadeIn>

              {/* Colored connector between cards */}
              {i < items.length - 1 && <Connector index={i} />}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}