"use client";
import { CTASection } from "@/app/components/CTASection";
import { Hero } from "./Hero";
import { useParams } from "next/navigation";


const blogs = [
    {
        id: "b1",
        title: "Crafting Accessible React Components",
        description:
            "Practical guide to building accessible, keyboard-friendly components in React — ARIA, focus management, and testing strategies.",
        category: "Frontend",
        image: "/bl1.png",
        href: "#",
    },
    {
        id: "b2",
        title: "Scaling Node APIs: Practical Patterns",
        description:
            "Proven patterns for designing scalable, maintainable Node.js APIs — pagination, caching, rate limiting, and observability.",
        category: "Backend",
        image: "/bl2.jpeg",
        href: "#",
    },
    {
        id: "b3",
        title: "Data-Driven Product Decisions",
        description:
            "How to use analytics and experimentation to prioritize features, validate hypotheses, and reduce time to impact.",
        category: "Product",
        image: "/bl3.jpeg",
        href: "#",
    },
    {
        id: "b4",
        title: "Design Systems at Scale",
        description:
            "Establishing tokens, components, and governance to keep UI consistent across teams and platforms.",
        category: "Design",
        image: "/bl4.png",
        href: "#",
    },
    {
        id: "b5",
        title: "Observability for Modern Apps",
        description:
            "Practical observability: metrics, tracing, and logs to reduce MTTR and improve system understanding.",
        category: "DevOps",
        image: "/bl5.jpeg",
        href: "#",
    },
    {
        id: "b6",
        title: "Building Offline-First Mobile Apps",
        description:
            "Patterns for reliable sync, local-first data, and graceful degradation when network connectivity is poor.",
        category: "Mobile",
        image: "/bl6.png",
        href: "#",
    },
    {
        id: "b7",
        title: "Optimizing React Performance",
        description:
            "Techniques to reduce render cost, avoid unnecessary work, and scale large React applications efficiently.",
        category: "Frontend",
        image: "/bl7.jpeg",
        href: "#",
    },
    {
        id: "b8",
        title: "Event-Driven Architectures in Practice",
        description:
            "When to use events, designing idempotent consumers, and patterns for eventual consistency.",
        category: "Backend",
        image: "/bl8.png",
        href: "#",
    },
    {
        id: "b9",
        title: "Applying Machine Learning to Product",
        description:
            "How to identify ML opportunities, measure impact, and ship models that drive product outcomes.",
        category: "Data",
        image: "/bl9.jpeg",
        href: "#",
    },
];

export default function Home() {
    const params = useParams();
      const { id } = params;

  const blog = blogs.find((p) => p.id === id);

  if (!blog) {
    return (
      <div className="text-center text-red-500 py-20">
        Project not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center font-sans dark:bg-black">
      <Hero title={blog.title} description={blog.description} />
      <CTASection />
    </div>
  );
}
