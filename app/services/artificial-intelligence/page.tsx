import { CTASection } from "@/app/components/CTASection";
import FAQ from "@/app/components/FAQ";
import WorkSteps from "@/app/components/WorkSteps";
import { ServiceHero } from "@/app/components/ServiceHero";
import Projects from "@/app/components/Projects";
import SubServices from "@/app/components/SubServices";

const heroProps = {
  title: "Artificial Intelligence Consulting Services",
  subtitle:
    "We are a team of experts across multiple tech disciplines eager to provide a well-rounded custom artificial intelligence consulting services to help you meet your business needs. We aim to craft top-tier solutions that combine advanced technology with detailed insights to provide a real-world impact. Whether it’s streamlining operations, enhancing customer engagement, or unlocking new revenue streams, our data driven AI expertise ensures measurable success.",
};

const subServicesProps = {
  title: "Smarter Choice for AI Consulting Services",
  subtitle: "Practical, secure, and scalable AI capabilities tailored to your business.",
  services: [
    {
      title: "NLP & Conversational AI",
      disc: "Design and deploy chatbots, virtual assistants, and text analytics to automate support, surface insights, and improve customer experience.",
      icon: (
        <svg
          role="img"
          aria-label="speech bubble"
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
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      title: "Computer Vision",
      disc: "Build image and video understanding systems for detection, classification, OCR, and visual search to unlock visual data value.",
      icon: (
        <svg
          role="img"
          aria-label="camera"
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
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
    },
    {
      title: "Predictive Analytics & Machine Learning",
      disc: "Create forecasting, classification, and anomaly-detection models to drive data-informed decisions and reduce risk.",
      icon: (
        <svg
          role="img"
          aria-label="chart with trend"
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
    "Answers to common questions about our AI services, integration, security, and pricing.",
  faqs: [
    {
      question: "What AI services do you offer?",
      answer:
        "We build custom solutions including natural language processing, computer vision, recommendation systems, and automation pipelines tailored to business needs.",
    },
    {
      question: "How do I get started with a project?",
      answer:
        "Reach out for an initial consultation. We run a discovery phase to define goals, data requirements, and a project plan with milestones and deliverables.",
    },
    {
      question: "How do you protect our data and privacy?",
      answer:
        "We use industry-standard encryption, strict access controls, and contractual agreements (e.g., NDA, data processing addendum). We don’t use customer data to train public models without consent.",
    },
    {
      question: "Can you integrate the solution with our existing systems?",
      answer:
        "Yes. We provide APIs, webhooks, and SDKs, and can build connectors to CRMs, databases, or cloud services to fit your architecture.",
    },
    {
      question: "What is a typical timeline for delivery?",
      answer:
        "Timelines vary by scope: a proof-of-concept can take 3–6 weeks, an MVP 6–12 weeks, and full production deliveries depend on complexity and integration needs.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "We offer flexible models: fixed-price for scoped projects, time-and-materials, or usage-based pricing for managed AI services. We provide a custom estimate after discovery.",
    },
  ],
};

const workSteps = {
  title: "Our 6-step AI Consulting Process",
  subtitle:
    "We partner with you to understand goals, prepare data, build and validate models, and deploy reliable, maintainable AI into production with ongoing monitoring and improvements.",
  steps: [
    {
      step: "1",
      title: "Discovery & Strategy",
      disc: "Define business objectives, success metrics, technical constraints, and a phased project roadmap including feasibility and ROI assessment.",
    },
    {
      step: "2",
      title: "Data Preparation & Engineering",
      disc: "Collect, clean, label, and transform data; build scalable data pipelines and storage that ensure quality and reproducibility.",
    },
    {
      step: "3",
      title: "Model Development & Prototyping",
      disc: "Iterate on model options, architectures, and features; produce proof-of-concept prototypes to validate technical approach and value.",
    },
    {
      step: "4",
      title: "Evaluation & Validation",
      disc: "Evaluate models using business and technical metrics, perform robustness and fairness checks, and validate on holdout and real-world data.",
    },
    {
      step: "5",
      title: "Integration & Deployment",
      disc: "Package models as APIs or services, integrate with existing systems, implement CI/CD and MLOps practices for scalable, reliable deployments.",
    },
    {
      step: "6",
      title: "Monitoring & Continuous Improvement",
      disc: "Monitor performance, data drift, and costs in production; iterate with retraining, updates, and ongoing support to sustain value.",
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
