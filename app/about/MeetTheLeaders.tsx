"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Leader } from "@/lib/types";

export default function MeetTheLeaders() {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch("/api/leaders")
      .then((res) => res.json())
      .then(setLeaders)
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
  }, [leaders]);

  return (
    <section
      id="meetTheLeaders"
      ref={sectionRef}
      className="relative py-4 px-4 sm:px-6 lg:px-8 mb-16"
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">Meet The Leaders</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            We have had the opportunity to work in a wide range of domains,
            technologies, and processes with partners that have given us a deep
            understanding of industry standards and engineering best practices.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          {leaders.map((l) => (
            <div
              key={l.id || l.name}
              className="flex flex-col gap-4 items-start bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:p-6 hover:bg-white/10 transition-all duration-300 p-6 shadow-sm"
            >
              <div className="flex justify-start items-center gap-4 w-full">
                <div className="flex-none w-16 h-16 rounded-full overflow-hidden relative bg-gray-700">
                  {l.image ? (
                    <img
                      src={l.image}
                      alt={l.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/50 text-xl font-bold">
                      {l.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="flex flex-col  items-start justify-center">
                  <h3 className="text-lg font-semibold text-white">{l.name}</h3>
                  <p className="text-sm text-white/70">{l.title}</p>
                </div>
              </div>
              <div>
                <p className="mt-2 text-md text-gray-200 leading-relaxed">
                  {l.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
