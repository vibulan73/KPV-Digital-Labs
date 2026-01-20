"use client";

import { useEffect, useRef } from "react";
import { TrustedByColumn } from "@/app/components/ui/trustby-column";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img11,
  img12,
} from "@/app/assets";
import { title } from "process";

export function TrustedBy() {
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

  const trustedBy = [
    {
      logo: img1,
      title: "Company One",
    },
    {
      logo: img2,
      title: "Company One",
    },
    {
      logo: img3,
      title: "Company One",
    },
    {
      logo: img4,
      title: "Company One",
    },
    {
      logo: img5,
      title: "Company One",
    },
    {
      logo: img6,
      title: "Company One",
    },
    {
      logo: img7,
      title: "Company One",
    },
    {
      logo: img8,
      title: "Company One",
    },
  ];

  return (
    <section
      id="trustedBy"
      ref={sectionRef}
      className="relative pt-16 px-4 sm:px-6 lg:px-8"
    >
     
    

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section - Keep as user loves it */}
        <div className="text-center mb-6 ">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">Trusted By</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            We have had the opportunity to work in a wide range of domains,
            technologies, and processes with partners that have given us a deep
            understanding of industry standards and engineering best practices.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative flex justify-center items-center min-h-[600px] md:min-h-[800px] overflow-hidden">
          <div
            className="flex gap-12 max-w-6xl justify-between"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <TrustedByColumn
              trustedBy={trustedBy.slice(0, 5)}
              duration={15}
              className="flex-1"
            />
            <TrustedByColumn
              trustedBy={trustedBy.slice(3, 7)}
              duration={12}
              className="flex-1  md:block"
            />
            <TrustedByColumn
              trustedBy={trustedBy.slice(4, 7)}
              duration={18}
              className="flex-1  lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
