import Discover from "./Discover";
import Features from "./Features";

export default function DiscoverSection() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <Discover />

        {/* RIGHT */}
        <Features />

      </div>

    </section>
  );
}