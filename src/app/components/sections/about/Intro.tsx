import FadeIn from "../../ui/FadeIn";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <FadeIn>
          <div className="flex justify-center mb-6">
            <Image
              src="/icons/about-icon.svg" // extract from HTML
              alt="about"
              width={60}
              height={60}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-[#0E5B9B] text-2xl leading-relaxed">
            GM Nanotherapeutics is an innovation-led, clinical-stage, nano-pharmaceutical company focused on creating impactful, best-in-class nanotherapeutics targeting large unmet medical needs, while reducing cost and time to commercialization.
          </h2>
        </FadeIn>

      </div>

    </section>
  );
}