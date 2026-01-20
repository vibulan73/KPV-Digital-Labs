"use client";

import { useEffect, useRef } from "react";

const FAQs = [
  {
    question: "How do you typically start with a new client?",
    answer:
      "We begin with a short discovery engagement to align on outcomes, constraints, and success criteria. That lets us propose a pragmatic roadmap — from a focused prototype to a hardened production rollout — so you get value quickly while reducing long‑term risk.",
  },
  {
    question:
      "How do you integrate with our existing product and engineering teams?",
    answer:
      "Our practitioners embed alongside your team, pairing on code and processes. We prioritize knowledge transfer, standards alignment, and a shared definition of done so your engineers can continue delivering independently after the engagement.",
  },
  {
    question: "What kind of outcomes can we expect and how fast?",
    answer:
      "Outcomes vary by scope, but typical first‑mile deliverables — validated prototypes, CI/CD pipelines, or resilience improvements — are achievable in weeks. Our focus is on measurable progress that reduces uncertainty and accelerates time to value.",
  },
  {
    question: "How do you handle security and compliance requirements?",
    answer:
      "Security and compliance are part of our delivery checklist. We adopt your controls, run threat modelling where needed, and codify policies into pipelines and observability so compliance becomes repeatable, not an afterthought.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer engagement-based and time-and-materials models depending on your preference. Pricing is tied to scope and outcomes — we recommend an initial discovery to scope a fixed outcome where possible.",
  },
  {
    question: "What support do you provide after delivery?",
    answer:
      "We provide transition plans, runbooks, and optional handover support. For production engagements we can also offer follow‑on operational support and SLO‑driven maintenance arrangements.",
  },
];

export default function FAQ() {
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
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">FAQs</span>
          </h2>
          <div>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out font-medium text-lg text-white/90 mb-4">
              Trusted by teams building mission‑critical software
            </p>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We help product and engineering teams deliver predictable outcomes
              — from prototypes to resilient production systems. Our
              practitioners combine pragmatic engineering, product focus, and
              operational excellence to reduce risk and accelerate time to
              value.
            </p>
          </div>
        </div>

        <div className="">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 ">
              {FAQs.map((faq, index) => (
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
