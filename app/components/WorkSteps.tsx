"use client";

import { useEffect, useRef } from "react";

type Step = {
  step: string;
  title: string;
  disc: string;
};

type WorkStepsProps = {
  title: string;
  subtitle: string;
  steps: Step[];
};


export default function WorkSteps({ title, subtitle, steps }: WorkStepsProps) {
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
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">{title} </span>
          </h2>
          <div>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
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
