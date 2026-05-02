import Hero from "../components/sections/technology/Hero";
import Intro from "../components/sections/technology/Intro";
import Accordion from "../components/sections/technology/Accordion";
import AISection from "../components/sections/technology/AISection";

export default function TechnologyPage() {
  return (
    <>
      <Hero />
      <Intro />
      <Accordion />
      <AISection />   {/* 👈 ADD HERE */}
    </>
  );
}