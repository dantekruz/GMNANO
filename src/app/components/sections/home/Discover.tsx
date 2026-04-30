"use client";

import FadeIn from "../../ui/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function Discover() {
  return (
    <FadeIn>
      <div className="flex flex-col items-start max-w-md">

        {/* ICON */}
        <div className="w-16 h-16 flex items-center justify-center bg-linear-to-br from-[#0E5B9B] to-[#0a4278] rounded-2xl mb-6 shadow-lg shadow-[#0E5B9B]/20">
          <Image
            src="/icons/discover.svg"
            alt="discover"
            width={32}
            height={32}
            className="invert"
          />
        </div>

        {/* EYEBROW */}
        <p className="text-xs font-semibold uppercase tracking-widest text-[#0E5B9B] mb-2">
          About Us
        </p>

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-[#324a6d] leading-tight">
          Discover who we are.
        </h2>

        {/* DIVIDER */}
        <div className="mt-4 w-10 h-0.75 rounded-full bg-linear-to-r from-[#0E5B9B] to-[#ef8622]" />

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-500 leading-relaxed">
          Explore our <span className="font-semibold text-gray-700">vision, strategy, and capabilities</span> — and see how we&apos;re shaping the future of nanomedicine.
        </p>

        {/* BUTTON */}
        <Link
          href="/about"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#0E5B9B] px-5 py-2.5 rounded-lg shadow-md shadow-[#0E5B9B]/20 hover:bg-[#0a4278] hover:shadow-lg transition-all duration-200 group"
        >
          Learn more
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>

      </div>
    </FadeIn>
  );
}