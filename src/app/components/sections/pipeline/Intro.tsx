"use client";

import FadeIn from "../../ui/FadeIn";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#ef8622]/10">
              <Image
                src="/icons/pipe.svg"
                alt="pipeline"
                width={60}
                height={60}
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h3 className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed">
            Chronic diseases continue to be underserved by the current,
            prevalent mono-therapeutic approaches (which are partially effective
            at best), creating persisting unmet medical needs. Our objective is
            to select for and bring to market, clinically differentiated,
            superior combination nanomedicines that mitigate unmet medical needs
            in large therapeutic areas to create maximal patient impact.
          </h3>
        </FadeIn>
      </div>
    </section>
  );
}
