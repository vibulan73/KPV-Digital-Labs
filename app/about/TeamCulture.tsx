"use client";
import { use, useEffect, useRef } from "react";
import Image from "next/image";

export default function TeamCulture() {

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
  
  const pillars = [
    {
      title: "Curiosity",
      desc: "We ask better questions and learn fast. We experiment, iterate, and share findings to continuously improve our products and processes.",
      color: "from-green-400 to-blue-500",
      icon: (props: any) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      title: "Craftsmanship",
      desc: "Quality over shortcuts—every time. We take pride in well-tested, maintainable code and thoughtful design that scales.",
      color: "from-yellow-400 to-orange-500",
      icon: (props: any) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 3l7 7-4 4-7-7" />
          <path d="M7 10L3 14l4 4 4-4" />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      desc: "Cross-functional teams, shared outcomes. We communicate openly, give constructive feedback, and align on goals to deliver impact together.",
      color: "from-purple-400 to-pink-500",
      icon: (props: any) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <circle cx="17" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: "Ownership",
      desc: "We take responsibility end-to-end for outcomes and follow through. We proactively remove blockers, measure results, and learn from failures.",
      color: "from-teal-400 to-cyan-500",
      icon: (props: any) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Adaptability",
      desc: "We embrace change and respond quickly to new information. We balance long-term vision with pragmatic pivots when needed.",
      color: "from-indigo-400 to-purple-500",
      icon: (props: any) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 6.49-6.49" />
          <path d="M20.49 15a9 9 0 0 1-6.49 6.49" />
        </svg>
      ),
    },
  ];

  return (
      <section
        id="teamCulture"
        ref={sectionRef}
        className="relative py-4 px-4 sm:px-6 lg:px-8 mb-16"
      >
       
  
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-balance">
              <span className="font-medium">Our Team Culture</span>
            </h2>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We build reliable products through shared ownership, clear communication, and rigorous engineering. By iterating quickly, learning openly, and prioritizing user outcomes, we deliver scalable solutions that stand the test of time.
            </p>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            {pillars.map((l,index) => (
              <div
                key={index}
                className="flex flex-col gap-4 items-start bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:p-6 hover:bg-white/10 transition-all duration-300 p-6 shadow-sm"
              >
                <div className="flex justify-start items-center gap-3 w-full">
                  <div className="flex-none w-16 h-16 rounded-full overflow-hidden relative ">
                    <div className={`w-full h-full rounded-full bg-linear-to-br ${l.color} flex items-center justify-center shadow-md`}>
                      {(() => {
                        const Icon = l.icon;
                        return Icon ? <Icon className="w-7 h-7 text-white" /> : null;
                      })()}
                    </div>
                  </div>
                  <div className="flex flex-col  items-start justify-center">
                    <h3 className="text-lg font-semibold">{l.title}</h3>
                  </div>
                </div>
                <div>
                  <p className="mt-2 text-md text-gray-200 leading-relaxed">
                    {l.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>{" "}
          <div>
          </div>
        </div>
      </section>
    );
}
