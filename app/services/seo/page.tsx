import { CTASection } from "@/app/components/CTASection";
import FAQ from "@/app/components/FAQ";
import WorkSteps from "@/app/components/WorkSteps";
import { ServiceHero } from "@/app/components/ServiceHero";
import Projects from "@/app/components/Projects";
import SubServices from "@/app/components/SubServices";

const heroProps = {
  title: "SEO Consultancy and Auditing Services",
  subtitle:"We are a leading organisation that provides top-notch SEO services in Australia. Our SEO consulting and auditing process helps businesses drive relevant organic traffic and improve website search rankings. Whether you're a startup or an enterprise, we have the expertise to deliver measurable results."
};

const subServicesProps = {
  title: "Comprehensive SEO Services",
  subtitle:
    "Practical, transparent SEO consulting and auditing to improve visibility, drive qualified organic traffic, and grow conversions.",
  services: [
    {
      title: "Technical SEO Audit",
      disc: "Identify and fix crawlability, indexing, site speed, schema, and mobile issues to make your site search-engine friendly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="technical">
          <path d="M12 2v3" />
          <path d="M12 19v3" />
          <path d="M4.2 4.2l2.1 2.1" />
          <path d="M17.7 17.7l2.1 2.1" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Keyword Research & Strategy",
      disc: "Discover high-value keywords, map intent by funnel stage, and prioritize opportunities that drive traffic and conversions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="keyword">
          <circle cx="11" cy="11" r="6" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <path d="M6 11h.01" />
        </svg>
      ),
    },
    {
      title: "On-Page SEO & Content Optimization",
      disc: "Optimize titles, meta, headers, internal linking and content structure to improve relevance and rankings for target queries.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="content">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="8" y1="7" x2="16" y2="7" />
          <line x1="8" y1="11" x2="16" y2="11" />
          <line x1="8" y1="15" x2="12" y2="15" />
        </svg>
      ),
    },
    {
      title: "Link Building & Off-Page SEO",
      disc: "Build authoritative, relevant backlinks and partnerships using ethical outreach to improve domain authority and referral traffic.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="link">
          <path d="M10 14a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10 6" />
          <path d="M14 10a5 5 0 0 0-7.07 0L5.52 11.41a5 5 0 0 0 7.07 7.07L14 18" />
        </svg>
      ),
    },
    {
      title: "Local & Technical Localisation",
      disc: "Optimize Google Business Profile, local citations, on-page signals, and structured data to win local pack visibility and maps traffic.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="local">
          <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      title: "Monitoring, Reporting & CRO",
      disc: "Continuous tracking of rankings, traffic and conversions, plus conversion-rate improvements to turn visitors into customers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="monitoring">
          <path d="M3 3h18v14H3z" />
          <line x1="7" y1="21" x2="17" y2="21" />
          <path d="M9 7v6l3-2 3 4" />
        </svg>
      ),
    },
  ],
};

const faqs = {
  subtitle:
    "Common questions about our SEO approach, timelines, reporting, and pricing.",
  faqs: [
    {
      question: "How long before we see SEO results?",
      answer:
        "SEO is a medium- to long-term channel. Depending on competition and site readiness, meaningful improvements typically appear within 3–6 months, with larger gains over 6–12 months.",
    },
    {
      question: "Do you guarantee #1 rankings?",
      answer:
        "No responsible consultant can guarantee a specific ranking. We focus on measurable improvements in visibility, traffic, and conversions using best practices and transparent reporting.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We track organic traffic, keyword visibility, conversions, revenue attribution, technical health, and other KPIs aligned to your business goals with regular reports.",
    },
    {
      question: "What does an SEO audit include?",
      answer:
        "A full audit covers technical crawlability, indexability, site speed, mobile UX, structured data, on-page optimization, content gaps, backlink profile, and prioritized recommendations.",
    },
    {
      question: "Can you work with our content team?",
      answer:
        "Yes. We collaborate on briefs, topic clusters, content optimization, and editorial workflows to ensure content is aligned with keyword intent and user needs.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "We offer project-based audits, retainer-based ongoing SEO, and performance-focused engagements. We provide a tailored proposal after an initial discovery session.",
    },
  ],
};

const workSteps = {
  title: "Our 6-step SEO Process",
  subtitle:
    "A pragmatic, data-driven process to audit, prioritize, implement, and measure SEO improvements that grow organic traffic and conversions.",
  steps: [
    {
      step: "1",
      title: "Discovery & Goals",
      disc: "Understand business objectives, target audiences, conversion goals, and existing analytics to define success metrics and scope.",
    },
    {
      step: "2",
      title: "Technical & Content Audit",
      disc: "Perform site-wide crawl, log analysis, speed and mobile checks, plus content gap analysis to identify quick wins and structural issues.",
    },
    {
      step: "3",
      title: "Keyword Strategy & Mapping",
      disc: "Prioritize target keywords by intent and value, map them to pages, and define content and optimization priorities across the site.",
    },
    {
      step: "4",
      title: "On-Page Optimization & Content",
      disc: "Implement meta, heading, schema and body-content improvements and produce or optimize content to satisfy user intent and search demand.",
    },
    {
      step: "5",
      title: "Off-Page & Local Authority",
      disc: "Build relevant outreach and citation strategies, earn high-quality links, and optimize local listings to improve domain and local authority.",
    },
    {
      step: "6",
      title: "Monitoring, Reporting & Iteration",
      disc: "Track performance, run A/B tests for conversion uplift, and iterate on technical and content priorities to sustain and grow results.",
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
