"use client";

import { useState } from "react";
import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  degree: string;
  role: string;
  image: string;
  bio: string[];
  className?: string;
}

export default function TeamMemberCard({
  name,
  degree,
  role,
  image,
  bio,
  className = "w-full",
}: TeamMemberCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${className} relative rounded-2xl overflow-hidden bg-white transition-all duration-300`}
      style={{
        border: "1px solid rgba(14,91,155,0.10)",
        boxShadow: isOpen
          ? "0 8px 32px rgba(14,91,155,0.10), 0 1px 4px rgba(14,91,155,0.06)"
          : "0 2px 12px rgba(14,91,155,0.06), 0 1px 3px rgba(0,0,0,0.04)",
        transform: isOpen ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {/* Left accent bar */}
      <div
        className="absolute top-0 left-0 w-0.75 h-full"
        style={{ background: "#0e5b9b", opacity: isOpen ? 1 : 0.35, transition: "opacity 0.3s" }}
      />

      {/* Toggle trigger */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="w-full flex flex-col items-center gap-5 px-8 pt-10 pb-7 text-center focus:outline-none group"
      >
        {/* Avatar */}
        <div
          className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-[1.03]"
          style={{
            boxShadow: "0 0 0 1px rgba(14,91,155,0.12), 0 4px 16px rgba(14,91,155,0.10)",
          }}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>

        {/* Name & credentials */}
        <div className="space-y-1.5 w-full">
          <p
            className="text-[17px] leading-snug text-[#0a1f35]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
          >
            {name}
          </p>
          <p className="text-sm font-medium" style={{ color: "#0e5b9b" }}>
            {degree}
          </p>
          <p
            className="text-[11px] font-medium tracking-[0.15em] uppercase"
            style={{ color: "rgba(14,91,155,0.5)" }}
          >
            {role}
          </p>
        </div>

        {/* Chevron */}
        <svg
          className="w-4 h-4 transition-transform duration-300"
          style={{
            color: "#0e5b9b",
            opacity: 0.5,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Collapsible Bio */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-9">
            <div
              className="mb-6"
              style={{ height: "1px", background: "rgba(14,91,155,0.10)" }}
            />
            <div
              className="space-y-4 text-sm leading-relaxed"
              style={{ color: "#5a6a7a", fontWeight: 300 }}
            >
              {bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}