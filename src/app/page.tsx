import Hero from "./components/sections/home/Hero";
import Stats from "./components/sections/home/Stats";
import Solution from "./components/sections/home/Solution";
import Quote from "./components/sections/home/Quote";
import DiscoverSection from "./components/sections/home/DiscoverSection";
import CTA from "./components/sections/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Solution />
      <Quote />
      <DiscoverSection />
      <CTA />
    </>
  );
}