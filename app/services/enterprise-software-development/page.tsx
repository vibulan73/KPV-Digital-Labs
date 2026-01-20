import { CTASection } from "@/app/components/CTASection";
import FAQ from "@/app/components/FAQ";
import WorkSteps from "@/app/components/WorkSteps";
import { ServiceHero } from "@/app/components/ServiceHero";
import Projects from "@/app/components/Projects";
import SubServices from "@/app/components/SubServices";

const heroProps = {
  title: "Custom Enterprise Software Development",
  subtitle:
"Elevate your business with our enterprise application software, where quality meets unmatched value. We specialise in top-level technologies such as JavaScript / Typescript, React Js, Next Js, Java, and .NET serving clients across the world. Our focus is on delivering long-term value with solutions that grow alongside your business."
};

const subServicesProps = {
  title: "Enterprise Software Development Services",
  subtitle:
    "End-to-end enterprise solutions: scalable, secure, and maintainable software tailored to complex business needs.",
  services: [
    {
      title: "Custom Application Development",
      disc: "Design and build web and mobile applications using TypeScript, React, Next.js, Java, and .NET with enterprise-grade patterns and testing.",
      icon: (
        <svg
          role="img"
          aria-label="code"
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
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6L2 12l6 6" />
        </svg>
      ),
    },
    {
      title: "Architecture & System Design",
      disc: "Define scalable, resilient architectures, microservices boundaries, event-driven patterns, and domain-driven design for long-lived systems.",
      icon: (
        <svg
          role="img"
          aria-label="architecture"
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
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      title: "Cloud Migration & Modernization",
      disc: "Migrate legacy systems to cloud-native platforms, refactor for serverless/microservices, and optimize cost, scalability, and reliability.",
      icon: (
        <svg
          role="img"
          aria-label="cloud migration"
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
          <path d="M20 17.5A4.5 4.5 0 0 0 16 10H15" />
          <path d="M3 15a4 4 0 0 1 4-4h1" />
          <path d="M12 7v10" />
          <path d="M9 10l3-3 3 3" />
        </svg>
      ),
    },
    {
      title: "Integration & API Strategy",
      disc: "Design robust APIs, event streams, and integration layers for seamless connectivity with CRMs, ERPs, and third-party services.",
      icon: (
        <svg
          role="img"
          aria-label="integration"
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
          <path d="M10 14l-3-3 3-3" />
          <path d="M14 14l3-3-3-3" />
          <path d="M21 12H3" />
        </svg>
      ),
    },
    {
      title: "Security, Compliance & Identity",
      disc: "Implement secure development practices, threat modeling, IAM, encryption, and compliance (ISO, SOC2, GDPR) to protect enterprise data.",
      icon: (
        <svg
          role="img"
          aria-label="security"
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
    "Answers to common questions about our enterprise software development services, integration, security, and delivery.",
  faqs: [
    {
      question: "What enterprise software services do you offer?",
      answer:
        "We deliver custom web and mobile applications, system architecture and design, cloud migration, API and integration strategies, automation/RPA, recommendation systems, and MLOps for production-grade solutions.",
    },
    {
      question: "Which technologies and stacks do you use?",
      answer:
        "We specialise in TypeScript/JavaScript (React, Next.js, Node), Java, and .NET, and use cloud platforms (AWS, Azure, GCP), containerization, and modern CI/CD/MLOps toolchains tailored to the project.",
    },
    {
      question: "How do you ensure scalability and performance?",
      answer:
        "We design for scalability using microservices or modular architectures, autoscaling infrastructure, caching, database partitioning, and performance testing to meet load and latency targets.",
    },
    {
      question: "Can you integrate with our existing systems (ERP, CRM, databases)?",
      answer:
        "Yes — we design and implement APIs, middleware, connectors, and event-driven integrations to securely connect with CRMs, ERPs, legacy databases, and third-party services.",
    },
    {
      question: "How do you handle security, compliance, and data protection?",
      answer:
        "We apply secure development practices, threat modeling, IAM, encryption in transit and at rest, and help meet compliance requirements (ISO, SOC2, GDPR) with documentation and controls.",
    },
    {
      question: "Who owns the source code and intellectual property?",
      answer:
        "Ownership is defined in the contract; typically clients receive full rights to the delivered source code and artifacts, while any third‑party licenses are disclosed up front.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes — we offer support and managed services including monitoring, bug fixes, patching, performance tuning, and feature enhancements under SLA-based agreements.",
    },
    {
      question: "What are typical timelines and delivery milestones?",
      answer:
        "Timelines depend on scope: discovery and prototypes in 3–6 weeks, MVPs in 6–12 weeks, and full production deliveries based on complexity and integrations; we provide a phased roadmap after discovery.",
    },
    {
      question: "How is pricing structured for enterprise projects?",
      answer:
        "We offer fixed-price for well-scoped work, time-and-materials for flexible engagements, and dedicated teams or outcome-based models; a detailed estimate follows the discovery phase.",
    },
  ],
};

const workSteps = {
  title: "Our 6-step Enterprise Software Development Process",
  subtitle:
    "From discovery and architecture to deployment and ongoing support — we deliver scalable, secure, and maintainable enterprise systems that align with your business goals.",
  steps: [
    {
      step: "1",
      title: "Discovery & Requirements",
      disc: "Align on business objectives, stakeholders, success metrics, constraints, and a phased roadmap. Capture functional and non‑functional requirements, integrations, and compliance needs.",
    },
    {
      step: "2",
      title: "Architecture & System Design",
      disc: "Design scalable, resilient architectures (monolith-to-microservices, event-driven, or hybrid), choose data/storage patterns, define APIs, and create a technical blueprint for implementation.",
    },
    {
      step: "3",
      title: "Implementation & Integration",
      disc: "Develop features using proven enterprise patterns, enforce coding standards and automated tests, and integrate with ERPs, CRMs, databases, and third‑party services securely.",
    },
    {
      step: "4",
      title: "Testing, QA & Security",
      disc: "Execute unit, integration, performance, and security testing, run automated pipelines, conduct threat modeling and vulnerability assessments, and validate against compliance requirements.",
    },
    {
      step: "5",
      title: "Deployment & Operations",
      disc: "Deploy to cloud or on‑prem environments with CI/CD, infrastructure as code, observability, autoscaling, and runbooks to ensure reliable, repeatable releases and fast rollback paths.",
    },
    {
      step: "6",
      title: "Maintenance, Monitoring & Continuous Improvement",
      disc: "Provide monitoring, incident response, SLA-based support, performance tuning, and roadmap-driven enhancements to keep the system secure, performant, and aligned with evolving business needs.",
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
