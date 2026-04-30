import FadeIn from "../../ui/FadeIn";
import Image from "next/image";

export default function Quote() {
  return (
    <section className="py-15 bg-white text-center px-6">

      <FadeIn>
         <Image
                   src="/icons/dq.svg"
                   alt="Double Quote"
                   width={60}
                   height={60}
                    className="mx-auto mb-6"
                 />
        <p className="italic text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          “We firmly believe in the superior power of combination therapeutics to effectively treat complex, chronic diseases with multi-factorial etiologies. When combined with cutting-edge nanotechnologies, the potency, safety, and bioavailability are further enhanced.”
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="mt-6 font-semibold text-[#324a6d]">
          Navdeep Jaikaria, Ph.D., Founder, Chairman & CEO
        </p>
      </FadeIn>

    </section>
  );
}