import Hero from "../components/sections/pipeline/Hero";
import Intro from "../components/sections/pipeline/Intro";
import PipelineChart from "../components/sections/pipeline/PipelineChart";
import Studies from "../components/sections/pipeline/Studies";
import FeaturedProgram from "../components/sections/pipeline/FeaturedProgram";

export default function PipelinePage() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedProgram />
      <PipelineChart />
      <Studies />
    </>
  );
}