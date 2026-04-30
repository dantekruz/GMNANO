"use client";

import FadeIn from "../../ui/FadeIn";

export default function Solution() {
  return (
    <section className="py-24 bg-[#0E5B9B] text-center">

      <FadeIn>
        <div className="flex flex-col items-center">

          {/* ICON */}
          <div className="flex items-center justify-center rounded-full mb-6 shadow-md hover:scale-105 transition">

            {/* Inline SVG (white) */}
            <svg
              viewBox="0 0 496 512"
              className="w-20 h-20 fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z" />
            </svg>

          </div>

          {/* TEXT */}
          <h3 className="text-4xl md:text-3xl font-bold text-white tracking-wide">
            GM IS DELIVERING THE SOLUTION.
          </h3>

        </div>
      </FadeIn>

    </section>
  );
}