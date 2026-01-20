"use client";

import { useEffect, useRef } from "react";


const benifits = [
  {
    title: "Competitive Salary",
    desc: "Market‑leading compensation and regular reviews to reward performance and growth.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 1v22"></path>
        <path d="M17 5H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3z"></path>
        <path d="M9 9h6M9 15h6"></path>
      </svg>
    ),
  },
  {
    title: "Comprehensive Health",
    desc: "Medical, dental, and vision plans with employer contributions and mental health support.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
  },
  {
    title: "Flexible Time",
    desc: "Flexible hours and remote work options to support work‑life balance and focus.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 3"></path>
      </svg>
    ),
  },
  {
    title: "Generous PTO",
    desc: "Paid time off, flexible holidays, and encouraged unplugging to recharge.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="4" width="18" height="18" rx="2"></rect>
        <path d="M16 2v4M8 2v4M3 10h18"></path>
      </svg>
    ),
  },
  {
    title: "Career Development",
    desc: "Learning budgets, mentoring, and conference support to help you grow your skills and career.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 20v-6"></path>
        <path d="M5 12l7-8 7 8"></path>
        <path d="M3 21h18"></path>
      </svg>
    ),
  },
  {
    title: "Parental & Family Leave",
    desc: "Paid parental leave and flexible policies to support families at every stage.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    title: "Wellness Stipend",
    desc: "Monthly stipend for fitness, wellness, or home office improvements.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M21 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"></path>
        <path d="M7 10V7a5 5 0 0 1 10 0v3"></path>
        <path d="M12 14v6"></path>
      </svg>
    ),
  },
];

export default function OurBenifits() {
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
      id="ourBenifits"
      ref={sectionRef}
      className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">Our Benifits </span>
          </h2>
          <div>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out font-medium text-lg text-white/90 mb-4">
              People‑first teams building reliable, scalable software trusted by
              organizations across industries
            </p>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We design, build, and operate software that delivers measurable
              business outcomes. From discovery and product strategy through
              delivery and production operations, our cross‑functional teams
              focus on reducing risk, accelerating time‑to‑market, and creating
              durable value for customers.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benifits.map((benifit, idx) => (
              <article
                key={idx}
                className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/3 dark:bg-white/2 ring-1 ring-white/6 rounded-2xl p-6 flex flex-col justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-none rounded-lg bg-white/5 flex items-center justify-center text-green-500">
                    {benifit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white tracking-tight">
                      {benifit.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/75 max-w-prose leading-relaxed">
                      {benifit.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
