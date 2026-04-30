import FadeIn from "../../ui/FadeIn";
import Image from "next/image";
export default function Vision() {
  return (
    <section className="py-24 bg-[#f8fafc] text-center">

      <FadeIn>
        <div className="flex justify-center mb-6 ">
          <Image
                        src="/icons/dq1.svg" // extract from HTML
                        alt="about"
                        width={60}
                        height={60}
                        className="color-[#0e5b9b]"
                      />
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="text-4xl font-bold text-[#324a6d]">
          Creating Impactful, Clinically Differentiated Medicines
        </h2>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="mt-3 text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
          our Company&apos;s vision
        </p>
      </FadeIn>

    </section>
  );
}