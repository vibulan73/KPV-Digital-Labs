"use client";
import { CTASection } from "@/app/components/CTASection";
import { Hero } from "./Hero";
import { useParams } from "next/navigation";




const caseStudies = [
    {
        id: "cs1",
        title: "Redesigning Checkout Flow",
        description:
            "Reworked the e-commerce checkout to simplify steps, improve accessibility, and reduce friction. Result: 18% increase in completed purchases and 24% fewer support tickets related to checkout errors.",
        category: "Product",
        image: "/case-studies/cs1.png",
        href: "#checkout-redesign",
    },
    {
        id: "cs2",
        title: "Headless CMS Migration",
        description:
            "Migrated a legacy CMS to a headless architecture with incremental rollout. Improved page load performance and enabled faster content iteration across platforms.",
        category: "Backend",
        image: "/case-studies/cs2.jpeg",
        href: "#headless-cms-migration",
    },
    {
        id: "cs3",
        title: "Design System Adoption",
        description:
            "Built a cross-team design system with tokens, component library, and governance. Reduced UI inconsistencies and sped up feature delivery by ~30%.",
        category: "Design",
        image: "/case-studies/cs3.jpeg",
        href: "#design-system",
    },
    {
        id: "cs4",
        title: "Realtime Collaboration Engine",
        description:
            "Engineered a low-latency realtime collaboration service using CRDTs and WebSockets. Enabled multi-user editing with conflict-free merges and sub-200ms sync times.",
        category: "Frontend",
        image: "/case-studies/cs4.jpeg",
        href: "#realtime-collaboration",
    },
    {
        id: "cs5",
        title: "Platform Observability Overhaul",
        description:
            "Introduced centralized tracing, metrics, and logging. Reduced mean time to resolution by 40% and surfaced critical reliability issues proactively.",
        category: "DevOps",
        image: "/case-studies/cs5.png",
        href: "#observability-overhaul",
    },
    {
        id: "cs6",
        title: "Offline-First Mobile Sync",
        description:
            "Implemented robust local-first storage and conflict-resolution sync for intermittent connectivity. Resulted in 95% task completion rate while offline.",
        category: "Mobile",
        image: "/case-studies/cs6.png",
        href: "#offline-first-mobile",
    },
    {
        id: "cs7",
        title: "ML-Powered Recommendations",
        description:
            "Deployed a lightweight recommendations service using item- and session-based models. Lifted click-through by 12% and average order value by 7%.",
        category: "Data",
        image: "/case-studies/cs7.jpeg",
        href: "#ml-recommendations",
    },
    {
        id: "cs8",
        title: "API Rate Limiting & Resilience",
        description:
            "Designed a tiered rate-limiting strategy with graceful degradation and retries. Protected public APIs from traffic spikes and improved overall SLA adherence.",
        category: "Security",
        image: "/case-studies/cs8.jpeg",
        href: "#api-rate-limiting",
    },
    {
        id: "cs9",
        title: "Internationalization at Scale",
        description:
            "Launched multilingual support and locale-aware formatting across web and mobile. Reduced localization cycle time and improved global conversion rates.",
        category: "Product",
        image: "/case-studies/cs9.png",
        href: "#internationalization",
    },
];

export default function Home() {
    const params = useParams();
      const { id } = params;

  const caseStudy = caseStudies.find((p) => p.id === id);

  if (!caseStudy) {
    return (
      <div className="text-center text-red-500 py-20">
        Project not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center font-sans dark:bg-black">
      <Hero title={caseStudy.title} description={caseStudy.description} />
      <CTASection />
    </div>
  );
}
