import { CTASection } from "@/app/components/CTASection";
import FAQ from "@/app/components/FAQ";
import WorkSteps from "@/app/components/WorkSteps";
import { ServiceHero } from "@/app/components/ServiceHero";
import Projects from "@/app/components/Projects";
import SubServices from "@/app/components/SubServices";

const heroProps = {
  title: "MVP Factory – Build. Launch. Validate.",
  subtitle:"MVP Factory is designed for  founders, executives, and innovation teams  looking to rapidly bring a new product to market. Instead of wasting time and money building a fully-fledged solution upfront, we help you develop a  Minimum Viable Product (MVP), a streamlined version of your idea that allows you to test, iterate, and scale with confidence."
};
const subServicesProps = {
  title: "Why Choose SwivelTech's MVP Factory?",
  subtitle:
    "Practical, secure, and scalable capabilities tailored to your business — from rapid prototyping and user validation to production-ready deployments, backed by hands-on expertise and measurable outcomes.",
  services: [
    {
      title: "Rapid Time to Market",
      disc:
        "Iterative prototyping, rapid sprints, and fast deployment so you can validate product-market fit and capture opportunities quickly.",
      icon: (
        <svg
          role="img"
          aria-label="launch"
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
          <path d="M2 21s4-1 6-3c3-2 6-3 8-3s5 1 5 1" />
          <path d="M14 9l7-7" />
          <path d="M9 14l7-7" />
          <path d="M9 14c-1 1-4 4-7 4" />
        </svg>
      ),
    },
    {
      title: "Structured 12-Week Process",
      disc:
        "A proven 12-week roadmap with clear milestones for discovery, prototyping, user testing, and launch — predictable progress and outcomes.",
      icon: (
        <svg
          role="img"
          aria-label="calendar timetable"
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
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4" />
          <path d="M8 2v4" />
          <path d="M3 10h18" />
        </svg>
      ),
    },
    {
      title: "Expert Guidance",
      disc:
        "Dedicated product and ML experts advising on strategy, architecture, risk mitigation, and go-to-market decisions throughout the engagement.",
      icon: (
        <svg
          role="img"
          aria-label="expert mentor"
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
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
          <path d="M18 8l3-1" />
        </svg>
      ),
    },
    {
      title: "AI-Powered Development",
      disc:
        "Integrate modern ML techniques — embeddings, models, feature stores and inference pipelines — to deliver intelligent, personalized features.",
      icon: (
        <svg
          role="img"
          aria-label="neural network"
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
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="3" />
          <path d="M8 7.5l4 8" />
          <path d="M16 7.5l-4 8" />
        </svg>
      ),
    },
    {
      title: "Scalable Solutions",
      disc:
        "Cloud-native architectures, CI/CD for models, autoscaling, and monitoring to ensure reliability and performance as usage grows.",
      icon: (
        <svg
          role="img"
          aria-label="scalable cloud"
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
          <path d="M20 17.5A4.5 4.5 0 0 0 15.5 13H15a4 4 0 1 0-7.9 1" />
          <path d="M16 16l3-3-3-3" />
          <path d="M3 21h18" />
        </svg>
      ),
    },
    {
      title: "Comprehensive Support",
      disc:
        "Ongoing support, SLAs, monitoring, and knowledge transfer so your team can operate, maintain, and evolve the product confidently.",
      icon: (
        <svg
          role="img"
          aria-label="support"
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
          <path d="M3 18v-6a7 7 0 0 1 14 0v6" />
          <path d="M21 19v-3a2 2 0 0 0-2-2h-1" />
          <path d="M3 19v-3a2 2 0 0 1 2-2h1" />
        </svg>
      ),
    },
  ],
};

const faqs = {
  subtitle:
    "Common questions about the MVP Factory engagement — process, deliverables, timelines, pricing, and ownership.",
  faqs: [
    {
      question: "What is the MVP Factory engagement?",
      answer:
        "A time-boxed engagement to rapidly build a validated, production-capable Minimum Viable Product. We focus on the smallest set of features that prove value, reduce risk, and enable fast iteration.",
    },
    {
      question: "How long does an MVP engagement usually take?",
      answer:
        "Typical engagements run 6–12 weeks depending on scope. A focused 12-week track covers discovery, prototype, validation, and a launch-ready MVP. Shorter pilots or extended programs are available based on needs.",
    },
    {
      question: "What will you deliver at the end?",
      answer:
        "A working MVP (web or API-backed), tested user flows, technical documentation, deployment scripts/CI, telemetry & analytics setup, a prioritized roadmap, and a handoff package for your team.",
    },
    {
      question: "Who owns the IP and code?",
      answer:
        "Clients retain ownership of the product IP and source code. We use open-source and third-party tools as appropriate and clarify licensing and transfer terms up front in the contract.",
    },
    {
      question: "How do you validate the product-market fit?",
      answer:
        "We validate with user interviews, usability testing, metrics-driven experiments, and prototype deployments. Validation criteria and success metrics are defined during discovery.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "We offer fixed-price for a scoped MVP, milestone-based engagements, or time-and-materials for flexible scopes. Detailed estimates are provided after discovery to align scope, risks, and timeline.",
    },
  ],
};

const workSteps = {
  title: "MVP Factory — Our 6-step process",
  subtitle:
    "A focused, repeatable approach to go from idea to validated product: discovery, prototype, iterate, and launch with a plan to scale.",
  steps: [
    {
      step: "1",
      title: "Discovery & Alignment",
      disc:
        "Clarify objectives, target users, success metrics, constraints, and risks. Produce a prioritized scope and go/no-go criteria for the MVP.",
    },
    {
      step: "2",
      title: "Technical Design & Roadmap",
      disc:
        "Define architecture, integrations, data needs, security/compliance requirements, and a phased roadmap with sprint-level milestones.",
    },
    {
      step: "3",
      title: "Prototype & UX Validation",
      disc:
        "Create interactive prototypes and UX flows to validate assumptions with users and stakeholders before full engineering investment.",
    },
    {
      step: "4",
      title: "Iterative Development Sprints",
      disc:
        "Deliver working increments in short sprints, integrate telemetry and QA, and incorporate user feedback to refine the product continuously.",
    },
    {
      step: "5",
      title: "Launch & Measure",
      disc:
        "Deploy the MVP to a controlled audience, monitor KPIs, run experiments, and collect qualitative feedback to confirm value and prioritize next steps.",
    },
    {
      step: "6",
      title: "Handoff & Scale Plan",
      disc:
        "Provide deployment tooling, runbooks, monitoring, and a growth/scale plan. Transfer knowledge to your team and establish ongoing support options.",
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
