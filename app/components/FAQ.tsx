"use client";

import { useEffect, useRef } from "react";

type faq = {
  question: string;
  answer: string;
};

type faqProps = {
  faqs: faq[],
  subtitle:string
};

export default function FAQ({faqs,subtitle}: faqProps) {
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
      id="FAQ"
      ref={sectionRef}
      className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">FAQs</span>
          </h2>
          <div>
            
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
        </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 ">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out p-6 rounded-lg border border-white/10 self-start"
                >
                  <summary className="text-md md:text-lg font-medium text-white/90 cursor-pointer">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
