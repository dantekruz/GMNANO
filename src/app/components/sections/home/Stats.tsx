"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "../../ui/FadeIn";

function Counter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const stats = [
  {
    value: 88,
    suffix: "B",
    prefix: "$",
    label: "Pain Market",
    desc: "Opioid therapies burdened by systemic risk and non-opioid treatments limited by efficacy — a gap GM Nano is built to close.",
    color: "from-[#EF8622] to-[#f5a754]",
    shadow: "shadow-orange-100",
  },
  {
    value: 38,
    suffix: "B",
    prefix: "$",
    label: "RA Market",
    desc: "Rheumatoid Arthritis addressable market, targeted with a triple-combination nanotherapy entering the clinic in 2027.",
    color: "from-[#0D5B9B] to-[#1a7abf]",
    shadow: "shadow-blue-100",
  },
  {
    value: 200,
    suffix: "B+",
    prefix: "$",
    label: "Total Landscape",
    desc: "Combined addressable market across Acute Post-Op Pain, Sports Medicine, Chronic Pain, and Rheumatoid Arthritis.",
    color: "from-[#EF8622] to-[#0D5B9B]",
    shadow: "shadow-slate-100",
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function Stats() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <FadeIn>
        <div className="text-center mb-14 px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#EF8622] mb-2">
            Market Opportunity
          </p>
          <h2 className="text-3xl font-bold text-[#324a6d]">
            Strategic Market Displacement
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Reshaping Pain &amp; Inflammation Markets with Abuse-Deterrent
            Fixed-Dose Combination Nanotherapeutics.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <FadeIn key={i} delay={i * 0.2}>
            <div
              className={`group relative flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-md ${item.shadow} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-linear-to-r ${item.color}`} />

              {/* LABEL */}
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400 mb-3">
                {item.label}
              </p>

              {/* NUMBER */}
              <p className={`text-5xl font-extrabold bg-linear-to-br ${item.color} bg-clip-text text-transparent`}>
                {item.prefix}<Counter target={item.value} suffix={item.suffix} />
              </p>

              {/* DIVIDER */}
              <div className="my-4 w-8 h-px bg-gray-200" />

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}