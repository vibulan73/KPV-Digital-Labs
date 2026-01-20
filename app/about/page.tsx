
import { CTASection } from "@/app/components/CTASection";
import {Hero} from "@/app/about/Hero";
import MeetTheLeaders from "./MeetTheLeaders";
import PeopleInBusiness from "./PeopleInBusiness";
import TeamCulture from "./TeamCulture";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <Hero/>
      <MeetTheLeaders/>
      <TeamCulture/>
      <PeopleInBusiness/> 
      <CTASection/>
    </div>
  );
}


