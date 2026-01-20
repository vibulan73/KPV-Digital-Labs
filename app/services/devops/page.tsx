import { CTASection } from "@/app/components/CTASection";
import FAQ from "@/app/components/FAQ";
import WorkSteps from "@/app/components/WorkSteps";
import { ServiceHero } from "@/app/components/ServiceHero";
import Projects from "@/app/components/Projects";
import SubServices from "@/app/components/SubServices";

const heroProps = {
  title: "AI-Enabled DevOps Consulting Services",
  subtitle:
"Unlock faster innovation and seamless collaboration with Swivel Tech’s DevOps consulting services. Our experienced DevOps engineers in Azure and AWS design, build, and automate infrastructure and deploy pipelines to optimise workflows. We offer DevOps as a service, delivering custom solutions that improve efficiency, enhance scalability, and reduce time-to-market."
};

const subServicesProps = {
  title: "DevOps Services & Capabilities",
  subtitle:
    "Practical, secure, and scalable DevOps solutions — from infrastructure and pipelines to monitoring, security, and SRE practices.",
  services: [
    {
      title: "CI/CD Pipelines",
      disc: "Design and implement repeatable, testable build/test/deploy pipelines using GitHub Actions, Azure DevOps, Jenkins or GitLab CI.",
      icon: (
        <svg
          role="img"
          aria-label="ci cd pipeline"
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
          <path d="M3 12h4" />
          <circle cx="8" cy="12" r="1.5" />
          <path d="M10 12h4" />
          <circle cx="15" cy="12" r="1.5" />
          <path d="M17 12h4" />
          <circle cx="21" cy="12" r="1.5" />
        </svg>
      ),
    },
    {
      title: "Infrastructure as Code",
      disc: "Author, test and maintain reproducible cloud resources using Terraform, ARM, Bicep or CloudFormation with policy-as-code.",
      icon: (
        <svg
          role="img"
          aria-label="infrastructure as code"
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
          <rect x="3" y="5" width="18" height="6" rx="1" />
          <rect x="6" y="13" width="12" height="6" rx="1" />
          <path d="M9 8v8" />
          <path d="M15 8v8" />
        </svg>
      ),
    },
    {
      title: "Containerization & Orchestration",
      disc: "Containerise applications and run reliable workloads on Kubernetes, AKS, EKS or container services with proper networking and storage.",
      icon: (
        <svg
          role="img"
          aria-label="container"
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
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M7 10h10M7 14h10" />
        </svg>
      ),
    },
    {
      title: "Monitoring & Observability",
      disc: "Implement logging, metrics, tracing and alerting with Prometheus, Grafana, ELK and APM to reduce MTTR and improve reliability.",
      icon: (
        <svg
          role="img"
          aria-label="monitoring"
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
          <rect x="3" y="4" width="18" height="14" rx="1" />
          <path d="M8 12l2-3 3 5 3-4" />
          <path d="M8 20h8" />
        </svg>
      ),
    },
    {
      title: "Security & Compliance",
      disc: "Embed security in pipelines and infrastructure: secrets management, IAM, vulnerability scanning, and compliance automation (SOC2, ISO).",
      icon: (
        <svg
          role="img"
          aria-label="security shield"
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
          <path d="M12 2l7 4v6c0 5-3.58 9.74-7 10-3.42-.26-7-5-7-10V6l7-4z" />
          <path d="M9.5 12.5l1.8 1.8L15 10" />
        </svg>
      ),
    },
    {
      title: "Cloud Migration & Architecture",
      disc: "Plan and execute migrations and modern cloud architectures: lift-and-shift, replatforming, and cost-aware refactors across Azure, AWS and GCP.",
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
    "Answers to common questions about our DevOps consulting, automation, security, and support offerings.",
  faqs: [
    {
      question: "What DevOps services do you offer?",
      answer:
        "We provide infrastructure as code (Terraform/ARM/Bicep), CI/CD pipeline design and implementation (GitHub Actions, Azure DevOps, Jenkins), containerization and orchestration (Docker, Kubernetes), configuration management, monitoring and logging, and platform automation for Azure, AWS, and GCP.",
    },
    {
      question: "Which cloud platforms and tools do you support?",
      answer:
        "We work with Azure, AWS, and Google Cloud Platform and integrate common tools such as GitHub, GitLab, Terraform, Ansible, Helm, ArgoCD, Prometheus, Grafana, and major CI/CD systems to fit your stack.",
    },
    {
      question: "How do you approach security and compliance?",
      answer:
        "Security is embedded from design: role-based access control, secret management, IaC policy checks, automated vulnerability scanning, secure CI/CD practices, and alignment with compliance standards (e.g., SOC2, ISO) as required.",
    },
    {
      question: "How long does a typical engagement take?",
      answer:
        "Times vary by scope: a cloud readiness or DevOps assessment is typically 1–3 weeks, pipeline and IaC implementations 3–8 weeks for common scenarios, and larger platform transformations are planned in phases over months.",
    },
    {
      question: "Can you integrate with our existing tools and workflows?",
      answer:
        "Yes — we audit your current toolchain and design integrations to preserve existing workflows where possible, migrating incrementally to reduce risk and downtime.",
    },
    {
      question: "What engagement and pricing models do you offer?",
      answer:
        "We offer fixed-price for well-scoped projects, time-and-materials for iterative work, and managed DevOps subscriptions for ongoing platform operations and support. Custom proposals follow an initial discovery.",
    },
  ],
};

const workSteps = {
  title: "Our 6-step DevSecOps Process",
  subtitle:
    "Integrating security, compliance, and reliability into every stage of the delivery lifecycle — from design and infrastructure to CI/CD, monitoring, and incident response.",
  steps: [
    {
      step: "1",
      title: "Assess & Prioritise",
      disc: "Perform a risk and attack-surface assessment, map assets and dependencies, define security and compliance requirements, and prioritise remediation and controls aligned to business risk.",
    },
    {
      step: "2",
      title: "Secure-by-Design Architecture",
      disc: "Design cloud and application architectures with least-privilege, network segmentation, secrets management, and threat modelling to reduce exposure from the outset.",
    },
    {
      step: "3",
      title: "Infrastructure as Code & Hardening",
      disc: "Implement reproducible IaC (Terraform/ARM/Bicep) with security guardrails, automated policy checks (policy-as-code), and environment hardening to ensure consistency and compliance.",
    },
    {
      step: "4",
      title: "Secure CI/CD & Shift-Left Testing",
      disc: "Integrate static analysis, dependency scanning, secret detection, and automated security tests into pipelines; enforce gates and approvals so vulnerabilities are caught early.",
    },
    {
      step: "5",
      title: "Continuous Monitoring & Response",
      disc: "Deploy logging, tracing, and SIEM/APM solutions to detect anomalies, set alerts for suspicious activity, and run automated or playbook-driven incident response workflows.",
    },
    {
      step: "6",
      title: "Governance, Compliance & Improvement",
      disc: "Maintain audit trails, policy automation, and reporting for compliance; run regular drills, post-incident reviews, and iterate on controls and pipelines to reduce risk over time.",
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
