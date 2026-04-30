"use client";

import FadeIn from "../../ui/FadeIn";
import Image from "next/image";

export default function PipelinePreview() {
  return (
    <section className="py-24 bg-white text-center">

      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#324a6d]">
          Pipeline Overview
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-10 relative h-55 md:h-75 max-w-5xl mx-auto">
          <Image
            src="/images/pipeline-chart.png"
            alt="pipeline"
            fill
            className="object-contain"
          />
        </div>
      </FadeIn>

    </section>
  );
}