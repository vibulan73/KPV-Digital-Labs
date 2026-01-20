"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";


export function Hero() {
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
    <section ref={sectionRef}
     className="flex items-start justify-center px-4 pt-24 md:pt-32 pb-20 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-8 md:mt-12 animate-fade-in-badge">
          <span className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></span>
          Services{" "}
        </div>
        <div className="space-y-8 flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance animate-fade-in-heading">
            Software Development Services{" "}
          </h1>

          <div className="animate-fade-in-subheading">
            {/* Desktop version - single line */}
            <div className="sm:flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <p className="text-xl md:text-2xl max-w-5xl text-slate-300">
                We build tailored software solutions and provide ongoing
                technical support to simplify operations, reduce costs, and
                accelerate your digital transformation with experienced teams
                across industries.
              </p>
            </div>
          </div>
          <Link
            href={"/contact"}
            className=" w-fit  bg-white hover:bg-gray-300 text-background font-medium px-10 py-3 rounded-full flex items-center  hover:scale-105 hover:shadow-lg cursor-pointer group animate-fade-in-buttons"
          >
            <span className="mr-2">Book a Call</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>{" "}
      </div>
    </section>
  );
}
