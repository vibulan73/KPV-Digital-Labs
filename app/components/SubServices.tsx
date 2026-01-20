"use client";
import { use, useEffect, useRef } from "react";
import Image from "next/image";

type service = {
  title: string;
  disc: string;
  icon: React.ReactNode;
};

type SubServiceProps = {
  title: string;
  subtitle: string;
  services: service[];
};

export default function SubServices({title,subtitle,services}:SubServiceProps) {
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
      id="subServices"
      ref={sectionRef}
      className="relative py-4 px-4 sm:px-6 lg:px-8 mb-16"
    >
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">{title}</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
            </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-start bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:p-6 hover:bg-white/10 transition-all duration-300 p-6 shadow-sm"
            >
              <div className="flex justify-start items-center gap-3 w-full">
                <div className="flex-none w-16 h-16 overflow-hidden relative ">
                  <div className="w-12 h-12 flex-none rounded-lg bg-white/5 flex items-center justify-center text-green-400">
                    {service.icon}
                  </div>
                </div>
                <div className="flex flex-col  items-start justify-center">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
              </div>
              <div>
                <p className="mt-2 text-md text-gray-200 leading-relaxed">
                  {service.disc}
                </p>
              </div>
            </div>
          ))}
        </div>{" "}
        <div></div>
      </div>
    </section>
  );
}
