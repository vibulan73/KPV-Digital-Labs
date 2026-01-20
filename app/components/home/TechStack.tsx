"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import StatCard from "../StatCard";
import Link from "next/link";
import type { TechStackItem } from "@/lib/types";


export function TechStack() {
  const [techStack, setTechStack] = useState<TechStackItem[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch("/api/tech-stack")
      .then((res) => res.json())
      .then(setTechStack)
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up");
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Show section even if empty to allow dynamic loading
  // if (techStack.length === 0) return null;

  return (
    <section
      id="tehStack"
      ref={sectionRef}
      className=" flex flex-col items-center justify-center py-8 relative ">
      <div className="mx-auto max-w-7xl text-center relative z-10 animate-fade-in-hero">
        <div className="text-center mb-24 sm:mb-32 transition-all duration-1000 opacity-100 translate-y-8">
          <h2 className="fade-in-element transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-balance">
            We Are Proficient in Your{" "}
            <span className="font-medium italic"> Tech Stack</span>
          </h2>
          <p className="fade-in-element transition-all duration-1000 ease-out text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Building scalable, maintainable applications with React, Next.js,
            TypeScript, Node.js, Java, .NET, and Tailwind — fast, reliable, and
            production-ready.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-18 sm:mb-24 max-w-5xl px-4 hidden sm:block overflow-hidden animate-fade-in-trust">
          <div className=" relative overflow-hidden w-full max-w-5xl mx-auto">
            <div className="flex items-center gap-10 hover:opacity-80 transition-all duration-500 animate-slide-left">
              <div className="flex items-center gap-10 whitespace-nowrap text-9xl">
                {techStack.map((item) => (
                  <i key={`d1-${item.id}`} className={item.iconClass} title={item.name}></i>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-10 whitespace-nowrap text-6xl">
                {techStack.map((item) => (
                  <i key={`d2-${item.id}`} className={item.iconClass} title={item.name}></i>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Trust Indicators */}
        <div className="text-center px-4 mb-10 sm:hidden overflow-hidden animate-fade-in-trust">
          <div className="relative overflow-hidden w-full max-w-sm mx-auto">
            <div className="flex items-center gap-6 opacity-60 animate-slide-left-mobile">
              <div className="flex items-center gap-6 whitespace-nowrap text-4xl">
                {techStack.map((item) => (
                  <i key={`m1-${item.id}`} className={item.iconClass} title={item.name}></i>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-6 whitespace-nowrap text-4xl">
                {techStack.map((item) => (
                  <i key={`m2-${item.id}`} className={item.iconClass} title={item.name}></i>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 sm:mb-24 transition-all duration-1000 opacity-100 translate-y-8">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white text-balance mb-4 sm:mb-6">
            <span> Scale with AI-Powered Software</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
            We are a leading software development outsourcing company
            headquartered in Melbourne, Australia with a proven track record of
            delivering top-tier solutions for businesses worldwide.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 px-10 mb-16 transition-all duration-1000 delay-600 opacity-100 translate-y-8"

        >
          <StatCard title="Budget Saved" value={500} suffix="€+" />
          <StatCard title="Years in Feild" value={5} suffix="+" />
          <StatCard title="Client Trusted Us" value={78} suffix="%" />
          <StatCard title="Industries Covered" value={24} />
        </div>

        {/* Services Section */}
        <div className="w-full max-w-7xl px-4 mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white text-center mb-12">
            Software Services We Deliver
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/artificial-intelligence" className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">Artificial Intelligence</h4>
              <p className="text-white/60 text-sm">AI and machine learning solutions for automation and insights</p>
            </Link>
            <Link href="/services/devops" className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">DevOps as a Service</h4>
              <p className="text-white/60 text-sm">Automated CI/CD and cloud-native infrastructure</p>
            </Link>
            <Link href="/services/enterprise-software-development" className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">Enterprise Software Development</h4>
              <p className="text-white/60 text-sm">Scalable and secure enterprise applications</p>
            </Link>
            <Link href="/services/managed-service-augmentation" className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">Managed Service Augmentation</h4>
              <p className="text-white/60 text-sm">Skilled professionals to extend your team</p>
            </Link>
            <Link href="/services/mvp-factory" className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">MVP Factory</h4>
              <p className="text-white/60 text-sm">Rapidly build and launch minimum viable products</p>
            </Link>
            <Link href="/services/qa" className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">QA as a Service</h4>
              <p className="text-white/60 text-sm">Comprehensive testing and quality assurance</p>
            </Link>
            <Link href="/services/seo" className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">Search Engine Optimization</h4>
              <p className="text-white/60 text-sm">Data-driven SEO strategies for visibility</p>
            </Link>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="w-full max-w-7xl px-4 mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white text-center mb-12">
            How We Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/how-we-work/project-based" className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">Project Based</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                End-to-end project delivery with dedicated teams handling your entire software development lifecycle from conception to deployment.
              </p>
            </Link>
            <Link href="/how-we-work/staff-agumentation" className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">Staff Augmentation</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Extend your existing team with skilled professionals who seamlessly integrate with your processes and culture.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Link
        href={"/contact"}
        className="relative bg-white hover:bg-gray-300 text-background font-medium px-10 py-3 rounded-full flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group">
        <span className="mr-2">Let&apos;s Talk</span>
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </section>
  );
}
