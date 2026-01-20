
import { CTASection } from "@/app/components/CTASection";
import {Hero} from "@/app/resources/kpv-talk/Hero";
import Blogs from "./Blogs";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <Hero/>
      <Blogs/>
      <CTASection/>
    </div>
  );
}
