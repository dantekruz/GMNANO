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

  // Only start counting when the element enters the viewport
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

const stats = [
  {
    value: 700,
    suffix: "B+",
    desc: "in small-molecule pharmaceutical sales globally each year",
    color: "from-[#0E5B9B] to-[#1a7abf]",
    shadow: "shadow-blue-100",
  },
  {
    value: 500,
    suffix: "B+",
    desc: "in annual pharmaceutical sales (small & large molecule) in the US alone",
    color: "from-[#0d9488] to-[#14b8a6]",
    shadow: "shadow-teal-100",
  },
  {
    value: 63,
    suffix: "%",
    label: "of drugs",
    desc: "are constrained by poor API delivery, onerous regimens, or unwanted side effects",
    color: "from-[#ef8622] to-[#f59e0b]",
    shadow: "shadow-amber-100",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      {/* Section header */}
      <FadeIn>
        <div className="text-center mb-14 px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0E5B9B] mb-2">
            Market Opportunity
          </p>
          <h2 className="text-3xl font-bold text-[#324a6d]">
            The scale of the problem
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            A vast pharmaceutical market — constrained by delivery limitations
            that nanomedicine is uniquely positioned to solve.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <FadeIn key={i} delay={i * 0.2}>
            <div
              className={`group relative flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-md ${item.shadow} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            >
              {/* Subtle gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-linear-to-r ${item.color}`} />

              {/* NUMBER */}
              <p className={`text-5xl font-extrabold bg-linear-to-br ${item.color} bg-clip-text text-transparent`}>
                <Counter target={item.value} suffix={item.suffix} />
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