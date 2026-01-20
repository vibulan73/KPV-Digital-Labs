"use client";

import { useEffect, useRef } from "react";

const FAQs = [
    {
        question: "What is staff augmentation and how does it differ from hiring contractors or vendors?",
        answer:
            "Staff augmentation provides experienced practitioners who embed with your team to extend capacity and skills while you retain day-to-day control. Unlike turnkey vendor deliveries, augmented staff work alongside your engineers and follow your processes, and unlike typical contractors the focus is on rapid, knowledge‑transferable impact.",
    },
    {
        question: "How quickly can you onboard augmented engineers?",
        answer:
            "We typically place engineers within 1–4 weeks depending on role complexity and security checks. We prioritize a short ramp by pairing new teammates with existing engineers, sharing onboarding docs, and aligning on tooling and standards up front.",
    },
    {
        question: "How do you ensure cultural and technical fit with our team?",
        answer:
            "We screen for both technical skills and collaboration style, run technical interviews with your stakeholders if desired, and start with short trial periods or discovery sprints to validate fit before committing to longer engagements.",
    },
    {
        question: "What engagement models and contract terms do you offer?",
        answer:
            "We offer time-and-materials, fixed-scope discovery, and outcome-based engagements. Contracts can be monthly or multi-month, with flexible ramp-up/ramp-down clauses and options for transition to direct hire where appropriate.",
    },
    {
        question: "How do you handle IP, confidentiality, and compliance?",
        answer:
            "Standard agreements include IP assignment and NDAs. For regulated environments we adopt your compliance processes, perform background checks as required, and integrate controls into our delivery artifacts and pipelines.",
    },
    {
        question: "Do the augmented staff use our tools and processes?",
        answer:
            "Yes. Augmented staff work in your repos, issue trackers, CI/CD, and communication channels. We prioritize aligning to your definition of done, coding standards, and deployment workflows so work is production‑ready and maintainable.",
    },
    {
        question: "How do you measure success and knowledge transfer?",
        answer:
            "Success metrics are defined up front (e.g., features delivered, MTTR improvement, test coverage, deployment frequency). We emphasize paired work, documentation, runbooks, and upskilling sessions so your team retains the capabilities after engagement ends.",
    },
    {
        question: "Can you support hybrid or remote collaboration across time zones?",
        answer:
            "Yes. We staff for the collaboration pattern you need — overlapping hours for real‑time pairing, or handoff-driven work for asynchronous models. We also establish meeting rhythms, clear sprint goals, and communication SLAs.",
    },
    {
        question: "What happens if the augmented resource isn't meeting expectations?",
        answer:
            "We start with trial periods and regular check-ins. If expectations are not met we will replace the resource quickly, run a focused remediation plan, or adjust scope until agreed outcomes are being delivered.",
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
