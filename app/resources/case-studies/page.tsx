
import { CTASection } from "@/app/components/CTASection";
import {Hero} from "@/app/resources/case-studies/Hero";
import CaseStudies from "./CaseStudies";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <Hero/>
      <CaseStudies/>
      <CTASection/>
    </div>
  );
}
