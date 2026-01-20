"use client";
import { CTASection } from "@/app/components/CTASection";
import {Hero} from "@/app/careers/Hero";
import LifeAtHere from "@/app/careers/LifeAtHere";
import OurBenifits from "./OurBenifits";
import OurOpenings from "./OurOpenings";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <Hero/>
      <LifeAtHere/>
      <OurBenifits/>
      <OurOpenings/>
      <CTASection/>
    </div>
  );
}
