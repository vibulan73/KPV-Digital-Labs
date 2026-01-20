"use client";

import { useEffect, useRef } from "react";

const steps = [
    {
        step: "1",
        title: "Discovery Call",
        disc: "We'll work with you to understand your specific requirements and identify the skills and experience needed.",
    },
    {
        step: "2",
        title: "Talent Sourcing",
        disc: "Our extensive network of IT professionals allows us to quickly source candidates that match your criteria.",
    },
    {
        step: "3",
        title: "Screening and Interviewing",
        disc: "We conduct a 6-step interview and assessment process to ensure candidates have the necessary skills and qualifications.",
    },
    {
        step: "4",
        title: "Onboarding and Integration",
        disc: "Once selected, we assist with the onboarding process and integrate the new team member into your existing team.",
    },
    {
        step: "5",
        title: "Ongoing HR Support",
        disc: "We provide ongoing HR support to ensure a smooth working relationship and address any issues that may arise.",
    },
];

export default function WorkSteps() {
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
      id="workSteps"
      ref={sectionRef}
      className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <article
                key={`step-${index} `}
                className="fade-in-element opacity-0 translate-y-8 transition-all duration-500 ease-out bg-white/3 rounded-xl pl-20 p-6 border border-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="absolute top-0 left-0 h-full w-16 felx flex-col rounded-xl rounded-r-none bg-linear-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-medium text-lg">
                    <span>Step</span>
                    {`0${step.step}`}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-white/70 leading-relaxed">
                  {step.disc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
