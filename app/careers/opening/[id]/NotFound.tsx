"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";


export default function NotFound() {
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
      id="notFound"
      ref={sectionRef}
      className=" px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto flex min-h-screen flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl md:text-2xl lg:text-3xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">Job Not Found!</span>
          </h2>
          <div>
            
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We couldn't find that opening. Try going back to the openings list.
            </p>
          </div>
        </div>

        <Link
          href={"/careers"}
          className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out w-fit mt-12 bg-white hover:bg-gray-300 text-background font-medium px-10 py-3 rounded-full flex items-center  hover:scale-105 hover:shadow-lg cursor-pointer group"
        >
          <span className="mr-2">Back to Openings</span>
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        
      </div>
    </section>
  );
}
