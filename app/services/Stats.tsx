"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import StatCard from "@/app/components/StatCard";

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="w-full flex flex-col items-center justify-center py-8 relative "
    >
      <div className="mx-auto text-center relative z-10 animate-fade-in-hero">
        <div className="text-center mb-16 sm:mb-24 transition-all duration-1000 opacity-100 translate-y-8">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            <span> Backed by Experience and Scale</span>
          </h2>
        <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
          We combine deep industry expertise with scalable processes and tools to deliver measurable results for clients across a wide range of industries.
        </p>
        </div>

        <div className=" max-w-4xl grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 px-10 mb-6 sm:mb-16 transition-all duration-1000 delay-600 opacity-100 translate-y-8">
          <StatCard title="Years in Buiness" value={5} suffix="+" />
          <StatCard title="Resources" value={500} suffix="+" />
          <StatCard title="Client Trusted Us" value={78} suffix="%" />
          <StatCard title="Industries Covered" value={24} />
        </div>
      </div>
    </section>
  );
}
