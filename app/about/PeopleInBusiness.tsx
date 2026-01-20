"use client";

import { useEffect, useRef, useState } from "react";
import type { Employee } from "@/lib/types";

export default function PeopleInBusiness() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch("/api/employees")
      .then((res) => res.json())
      .then(setEmployees)
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
  }, [employees]);

  return (
    <section
      id="peopleInBuisness"
      ref={sectionRef}
      className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">Our People is Our Business</span>
          </h2>
          <div>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out font-medium text-lg text-white/90 mb-4">
              Built by practitioners — trusted by industry
            </p>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              For over a decade we've partnered with startups and enterprises to design, build, and operate reliable software. Our team combines deep technical expertise with product-focused thinking to solve real business problems, reduce risk, and accelerate outcomes.
            </p>
          </div>
        </div>

        <div className="">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {employees.map((emp) => (
                <article key={emp.id} className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/3 rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="shrink-0">
                      <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${emp.color || 'from-gray-600 to-gray-500'} flex items-center justify-center text-white font-medium text-lg`}>
                        {emp.initials}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{emp.name}</h3>
                      <p className="text-sm text-white/70">{emp.title}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-white/70 leading-relaxed">
                    {emp.bio}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {emp.skills.map(skill => (
                      <li key={skill} className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
