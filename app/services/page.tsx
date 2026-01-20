
import { CTASection } from "@/app/components/CTASection";
import { Hero } from "@/app/services/Hero";
import { Stats } from "./Stats"
import { ServicesOverview } from "./ServicesOverview";
import Projects from "@/app/how-we-work/Projects";
import Testimonials from "@/app/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <Hero />
      <Stats />
      <ServicesOverview />
      <Projects />
      <Testimonials />
      <CTASection />
    </div>
  );
}
