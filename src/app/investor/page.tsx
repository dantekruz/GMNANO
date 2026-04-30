import Hero from "../components/sections/investor/Hero";
import Snapshot from "../components/sections/investor/Snapshot";
import Highlights from "../components/sections/investor/Highlights";
import PipelinePreview from "../components/sections/investor/PipelinePreview";
import Documents from "../components/sections/investor/Documents";
import CTA from "../components/sections/home/CTA";

export default function InvestorPage() {
  return (
    <>
      <Hero />
      <Snapshot />
      <Highlights />
      <PipelinePreview />
      <Documents />
      <CTA />
    </>
  );
}