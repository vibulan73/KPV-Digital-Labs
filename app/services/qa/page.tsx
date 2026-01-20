import { CTASection } from "@/app/components/CTASection";
import FAQ from "@/app/components/FAQ";
import WorkSteps from "@/app/components/WorkSteps";
import { ServiceHero } from "@/app/components/ServiceHero";
import Projects from "@/app/components/Projects";
import SubServices from "@/app/components/SubServices";

const heroProps = {
  title: "Smarter Outsourced QA Solutions",
  subtitle:"Partner with our expert quality assurance team for top-tier software testing services ensuring the highest standards for your digital products. As one of the leading software testing companies in Australia, we provide specialised services with dedicated teams, strong infrastructure and rigorous training on latest practices."
};

const subServicesProps = {
  title: "Comprehensive QA & Testing Services",
  subtitle:
    "End-to-end quality assurance: from manual exploration to automated pipelines, performance, security and accessibility testing to ensure reliable, user-friendly products.",
  services: [
    {
      title: "Manual & Exploratory Testing",
      disc:
        "Human-driven test design and exploratory sessions to find edge-case issues, validate UX flows, and verify business-critical scenarios.",
      icon: (
        <svg
          role="img"
          aria-label="magnifying glass and checklist"
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
          <path d="M21 21l-4.35-4.35" />
          <rect x="3" y="3" width="14" height="18" rx="2" />
          <path d="M7 7h6M7 12h6M7 17h4" />
        </svg>
      ),
    },
    {
      title: "Test Automation & Frameworks",
      disc:
        "Design and implement robust automation suites (Selenium, Playwright, Cypress, unit/integration) with maintainable patterns and reusable components.",
      icon: (
        <svg
          role="img"
          aria-label="automation robot"
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
          <rect x="3" y="7" width="18" height="11" rx="2" />
          <path d="M16 3v4M8 3v4" />
          <circle cx="8.5" cy="12.5" r="1" />
          <circle cx="15.5" cy="12.5" r="1" />
        </svg>
      ),
    },
    {
      title: "Performance & Load Testing",
      disc:
        "Simulate real-world load, identify bottlenecks, and tune systems for latency, throughput and resource efficiency at scale.",
      icon: (
        <svg
          role="img"
          aria-label="speedometer"
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
          <path d="M3 3v18h18" />
          <path d="M7 13l3-3 4 4 5-7" />
        </svg>
      ),
    },
    {
      title: "Recommendation Systems",
      disc: "Personalize product/content recommendations with collaborative and content-based approaches to increase engagement and conversions.",
      icon: (
        <svg
          role="img"
          aria-label="recommendation"
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
          <path d="M7 7h10" />
          <path d="M7 12h6" />
          <path d="M7 17h4" />
          <path d="M21 6l-4 4 4 4" />
        </svg>
      ),
    },
    {
      title: "MLOps & Productionization",
      disc: "Implement CI/CD for models, monitoring, model versioning, and scalable deployment to keep AI reliable and maintainable in production.",
      icon: (
        <svg
          role="img"
          aria-label="gear"
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
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 2.3 16.9l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.66 0 1.23-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82L4.3 4.3A2 2 0 1 1 7.13 1.47l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-.09V3a2 2 0 1 1 4 0v.09c.66 0 1.23.4 1.51 1a1.65 1.65 0 0 0 1.82.33l.06-.06A2 2 0 1 1 21.7 7.1l-.06.06a1.65 1.65 0 0 0-.33 1.82V10c0 .36.03.71.09 1.05z" />
        </svg>
      ),
    },
    {
      title: "Automation & RPA",
      disc: "Automate repetitive workflows and integrate intelligent automation to reduce costs and accelerate operations.",
      icon: (
        <svg
          role="img"
          aria-label="robot"
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
          <rect x="3" y="7" width="18" height="11" rx="2" />
          <path d="M16 3v4M8 3v4" />
          <circle cx="8.5" cy="12.5" r="1" />
          <circle cx="15.5" cy="12.5" r="1" />
        </svg>
      ),
    },
  ],
};
const faqs = {
  subtitle:
    "Common questions about our QA & testing services, engagement model, tools, and security.",
  faqs: [
    {
      question: "What QA and testing services do you provide?",
      answer:
        "We offer manual and exploratory testing, test automation, performance & load testing, security and accessibility testing, CI/CD integration, and QA staffing/outsourcing.",
    },
    {
      question: "How do I start a QA engagement?",
      answer:
        "Begin with a discovery workshop where we review your product, risk areas, existing tests and pipelines. We then propose a tailored test strategy, scope and phased plan.",
    },
    {
      question: "Which automation tools and frameworks do you use?",
      answer:
        "We use industry-standard tools like Playwright, Cypress, Selenium, Jest, TestCafe, and CI/CD integrations (GitHub Actions, Jenkins). We pick tools to fit your stack and maintainability needs.",
    },
    {
      question: "How do you ensure test reliability and maintenance?",
      answer:
        "We design modular, data-driven test suites, apply code-review and linting standards, add stability retries only where appropriate, and maintain tests as part of regular sprint work with clear ownership.",
    },
    {
      question: "Can you work with our existing development workflows?",
      answer:
        "Yes. We integrate into your CI/CD pipelines, create pull-request checks, provide test reports and dashboards, and can operate as an embedded QA team or a managed service.",
    },
    {
      question: "How is pricing structured for QA projects?",
      answer:
        "We offer time-and-materials for ongoing QA, fixed-price for well-scoped engagements (e.g., test automation backlog), and hybrid models for long-term partnerships. Estimates follow discovery.",
    },
    {
      question: "How do you handle sensitive data and security?",
      answer:
        "We follow secure handling policies: encrypted storage, least-privilege access, dedicated test environments, and contractual safeguards (NDA, DPA) to protect your data.",
    },
  ],
};

const workSteps = {
  title: "Our 6-step QA & Testing Process",
  subtitle:
    "A pragmatic, risk-focused approach to plan, design, execute and maintain high-quality test coverage that fits your delivery cadence.",
  steps: [
    {
      step: "1",
      title: "Discovery & Risk Assessment",
      disc:
        "Understand product goals, identify critical user journeys and technical risks, and prioritise areas that need immediate coverage or hardening.",
    },
    {
      step: "2",
      title: "Test Strategy & Planning",
      disc:
        "Define scope, test types (functional, regression, performance, security), environments, entry/exit criteria, and a phased roadmap aligned with releases.",
    },
    {
      step: "3",
      title: "Test Design & Manual Exploration",
      disc:
        "Create test cases, checklists and exploratory testing sessions to uncover edge cases and UX issues that automated checks may miss.",
    },
    {
      step: "4",
      title: "Automation & Framework Implementation",
      disc:
        "Build maintainable automation suites, CI integration, and reusable test helpers to accelerate regression testing and enable fast feedback loops.",
    },
    {
      step: "5",
      title: "Performance & Security Validation",
      disc:
        "Run load, stress and vulnerability checks, analyse bottlenecks, and provide remediation guidance to ensure reliability under real-world conditions.",
    },
    {
      step: "6",
      title: "Release Validation & Continuous Improvement",
      disc:
        "Validate each release, monitor test health, triage flaky tests, and iterate on coverage and process improvements to keep quality sustainable.",
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
