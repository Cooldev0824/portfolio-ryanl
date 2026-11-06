import { Hero } from "@/components/hero/Hero";
import { Companies } from "@/components/sections/Companies";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { CtaWaves } from "@/components/brand/Swoosh";
import { MotionGate } from "@/components/ui/MotionGate";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Work />
      <About />
      <Experience />
      {/* Education and the closing call to action share the golden wave backdrop. */}
      <div data-motion className="relative overflow-hidden">
        <CtaWaves className="absolute inset-0 h-full w-full" />
        <Education />
        <Contact />
      </div>
      <MotionGate />
    </>
  );
}
