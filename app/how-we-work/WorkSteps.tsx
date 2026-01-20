"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    step: "1",
    title: "Initial Consultation",
    disc: "We start by scheduling an initial meeting to discuss your project goals, requirements, and challenges",
  },
  {
    step: "2",
    title: "Follow Up Meeting",
    disc: "After our initial consultation, we schedule a follow-up meeting to dive deeper into your project needs and objectives.",
  },
  {
    step: "3",
    title: "Proposal & Scope",
    disc: "We prepare a detailed proposal outlining scope, timeline, deliverables, and cost so you have a clear plan to approve.",
  },
  {
    step: "4",
    title: "Design & Planning",
    disc: "Our team collaborates on UX/UI design, architecture, and a delivery plan to ensure alignment before development begins.",
  },
  {
    step: "5",
    title: "Development",
    disc: "Engineers build the solution iteratively, with regular demos and checkpoints to keep you informed and involved.",
  },
  {
    step: "6",
    title: "Testing & QA",
    disc: "We perform thorough testing, QA, and validation to ensure reliability, performance, and security prior to release.",
  },
  {
    step: "7",
    title: "Deployment & Handover",
    disc: "We deploy to production, provide documentation, and transfer knowledge so your team can operate and maintain the system.",
  },
  {
    step: "8",
    title: "Post-launch Support",
    disc: "Post-launch we offer support, monitoring, and optimization to address issues and iterate on improvements.",
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
