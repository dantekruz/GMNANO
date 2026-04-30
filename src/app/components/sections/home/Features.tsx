"use client";

import FadeIn from "../../ui/FadeIn";
import Image from "next/image";
import Link from "next/link";

// Each item gets a distinct accent color for its icon container
const items = [
  {
    title: "Technology",
    desc: "Learn about the technology we employ and intended applications.",
    icon: "/icons/technology.svg",
    link: "/technology",
    accent: "from-[#0E5B9B] to-[#1a7abf]",        // blue
    shadow: "shadow-blue-200",
    badge: "bg-blue-50 text-[#0E5B9B]",
  },
  {
    title: "Pipeline",
    desc: "Learn about what we're developing and the current stages of our pipeline.",
    icon: "/icons/pipeline.svg",
    link: "/pipeline",
    accent: "from-[#0d9488] to-[#14b8a6]",         // teal
    shadow: "shadow-teal-200",
    badge: "bg-teal-50 text-teal-700",
  },
  {
    title: "Partnerships",
    desc: "Learn about our strategic partnerships.",
    icon: "/icons/partnership.svg",
    link: "/partnerships",
    accent: "from-[#ef8622] to-[#f59e0b]",         // amber
    shadow: "shadow-amber-200",
    badge: "bg-amber-50 text-amber-700",
  },
  {
    title: "Team",
    desc: "Meet our world-class team, board members, and advisory board.",
    icon: "/icons/team.svg",
    link: "/team",
    accent: "from-[#7c3aed] to-[#a855f7]",         // violet
    shadow: "shadow-violet-200",
    badge: "bg-violet-50 text-violet-700",
  },
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map((item, i) => (
        <FadeIn key={i} delay={i * 0.15}>
          <Link
            href={item.link}
            className="group flex flex-col items-start p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* ICON */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-br ${item.accent} shadow-md ${item.shadow} mb-4`}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={24}
                height={24}
                className="invert"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-base font-bold text-[#324a6d] group-hover:text-[#0E5B9B] transition-colors duration-200">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              {item.desc}
            </p>

            {/* LEARN MORE */}
            <span className="mt-4 text-xs font-semibold text-[#0E5B9B] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Learn more <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}