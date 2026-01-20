"use client";
import { HeroSection } from "./components/home/hero";
import { TechStack } from "./components/home/TechStack";
import { CTASection } from "./components/CTASection";
import { CareersCTA } from "./components/CareersCTA";
import { TrustedBy } from "./components/home/TrustedBy";
import Testimonials from "./components/Testimonials";
import Projects from "./how-we-work/Projects";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <HeroSection />
      <TechStack></TechStack>
      <Projects />
      <TrustedBy />
      <Testimonials />
      <CTASection />
      <CareersCTA />
    </div>
  );
}
