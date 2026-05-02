import Hero from "../components/sections/investor/Hero";
import Snapshot from "../components/sections/investor/Snapshot";
import Market from "../components/sections/investor/Market";
import Highlights from "../components/sections/investor/Highlights";
import PipelinePreview from "../components/sections/investor/PipelinePreview";
import WhyNow from "../components/sections/investor/WhyNow"; // 👈 ADD THIS
import Documents from "../components/sections/investor/Documents";
import CTA from "../components/sections/home/CTA";

export default function InvestorPage() {
  return (
    <>
      <Hero />
      <Snapshot />         
      <Market />
      <Highlights />
      <WhyNow />           
      <Documents />
      <CTA />
    </>
  );
}