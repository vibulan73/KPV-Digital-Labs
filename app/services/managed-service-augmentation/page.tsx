import { CTASection } from "@/app/components/CTASection";
import FAQ from "@/app/components/FAQ";
import WorkSteps from "@/app/components/WorkSteps";
import { ServiceHero } from "@/app/components/ServiceHero";
import Projects from "@/app/components/Projects";
import SubServices from "@/app/components/SubServices";

const heroProps = {
  title: "Scale Faster with Staff Augmentation",
  subtitle:
    "Our staff augmentation services provide a flexible and cost-effective way to supplement your existing team with skilled IT professionals. Whether you need temporary support for specific projects or long-term assistance, we can help you find the right talent to meet your needs. ",
};

const subServicesProps = {
  title: "Why Teams Choose SwivelTech to Build Smarter",
  subtitle:
    "On-demand, vetted engineering talent and flexible engagement models to accelerate delivery, improve quality, and scale as your needs evolve. We combine security-first practices, proven processes, and domain expertise to integrate seamlessly with your team.",
  services: [
    {
      title: "Scalability",
      disc: "Quickly scale engineering capacity with vetted specialists, parallel teams, and flexible ramp-up/ramp-down to meet peaks without long-term hiring.",
      icon: (
        <svg
          role="img"
          aria-label="stack of servers"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="5" rx="1" />
          <rect x="2" y="10" width="20" height="5" rx="1" />
          <rect x="2" y="17" width="20" height="4" rx="1" />
        </svg>
      ),
    },
    {
      title: "Speed",
      disc: "Accelerate delivery with experienced engineers, short ramp times, and iterative sprints to get features and fixes into production faster.",
      icon: (
        <svg
          role="img"
          aria-label="lightning bolt"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h7l-1 8L21 10h-8l1-8z" />
        </svg>
      ),
    },
    {
      title: "Flexibility",
      disc: "Flexible engagement models and cross-functional talent (frontend, backend, DevOps, data) so teams adapt quickly as priorities change.",
      icon: (
        <svg
          role="img"
          aria-label="adjustable sliders"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h10" />
          <circle cx="18" cy="6" r="1.5" />
          <path d="M4 12h6" />
          <circle cx="14" cy="12" r="1.5" />
          <path d="M4 18h8" />
          <circle cx="16" cy="18" r="1.5" />
        </svg>
      ),
    },
    {
      title: "Quality",
      disc: "Maintain high standards with senior engineers, automated testing, thorough code review, and proven delivery practices to reduce defects.",
      icon: (
        <svg
          role="img"
          aria-label="shield with check"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l7 4v6c0 5-3.8 9.7-7 10-3.2-.3-7-5-7-10V6l7-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Cost-effectiveness",
      disc: "Optimize costs with predictable rates, right-sized teams, reduced hiring overhead, and efficient delivery practices to maximize ROI.",
      icon: (
        <svg
          role="img"
          aria-label="stacked coins"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4" />
        </svg>
      ),
    },
  ],
};

const faqs = {
  subtitle:
    "Common questions about staff augmentation, engagement models, security, and pricing.",
  faqs: [
    {
      question: "What is staff augmentation and how does it work?",
      answer:
        "Staff augmentation provides vetted engineers who integrate with your team for the duration you need. You define scope and priorities, we match talent, and the augmented team works under your direction or alongside our leads depending on the engagement.",
    },
    {
      question: "What types of roles can you supply?",
      answer:
        "We provide frontend, backend, full‑stack, DevOps/SRE, QA, data engineers, product managers, and other specialists. Teams can be blended across roles to meet project requirements.",
    },
    {
      question: "How quickly can you ramp up resources?",
      answer:
        "Typical ramp time is 1–4 weeks depending on skillset and background checks. For urgent needs we maintain a bench of pre-vetted engineers to accelerate start dates.",
    },
    {
      question: "How do you vet and interview engineers?",
      answer:
        "Candidates go through technical screening, coding assessments, reference checks, and domain-specific interviews. We share profiles, interview notes, and can run trial periods or paid pilots.",
    },
    {
      question: "How do you handle onboarding and knowledge transfer?",
      answer:
        "We support a structured onboarding plan: documentation review, architecture walkthroughs, paired sessions with your leads, and ramp milestones to ensure productive contribution quickly.",
    },
    {
      question: "What happens if a resource isn't a good fit?",
      answer:
        "We offer replacement guarantees and a short transition window to swap engineers with minimal disruption. We also provide handover support to preserve continuity.",
    },
    {
      question: "How do you measure success and productivity?",
      answer:
        "We agree on KPIs up-front (delivery cadence, code quality, cycle time, OKRs). Regular check-ins, retrospectives, and reporting ensure visibility and continuous improvement.",
    },
  ],
};

const workSteps = {
  title: "Our 6-step Staff Augmentation Process",
  subtitle:
    "From need assessment to ongoing support — we match, onboard, and integrate engineers to accelerate delivery with minimal disruption.",
  steps: [
    {
      step: "1",
      title: "Discovery & Resource Planning",
      disc: "Clarify goals, scope, required skills, timeline, and KPIs. Define team composition, engagement model, and success criteria.",
    },
    {
      step: "2",
      title: "Sourcing & Screening",
      disc: "Identify candidates from our vetted pool, perform technical screenings, review portfolios, and verify references to ensure fit.",
    },
    {
      step: "3",
      title: "Client Interviews & Selection",
      disc: "Facilitate interviews, trial tasks, and cultural fit checks so you can select engineers who align with your team and workflow.",
    },
    {
      step: "4",
      title: "Onboarding & Knowledge Transfer",
      disc: "Execute a structured onboarding: access setup, documentation handoff, architecture walkthroughs, and paired sessions to shorten ramp time.",
    },
    {
      step: "5",
      title: "Integration & Delivery",
      disc: "Embed augmented engineers into your cadence with clear roles, sprint planning, code review, and QA to deliver value quickly and predictably.",
    },
    {
      step: "6",
      title: "Ongoing Support & Optimization",
      disc: "Provide replacements, performance reviews, scaling options, and continuous improvement to sustain productivity and meet evolving needs.",
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <ServiceHero title={heroProps.title} subtitle={heroProps.subtitle} />
      <SubServices
        title={subServicesProps.title}
        subtitle={subServicesProps.subtitle}
        services={subServicesProps.services}
      />
      <WorkSteps
        title={workSteps.title}
        subtitle={workSteps.subtitle}
        steps={workSteps.steps}
      />
      <FAQ faqs={faqs.faqs} subtitle={faqs.subtitle} />
      <Projects />
      <CTASection />
    </div>
  );
}
