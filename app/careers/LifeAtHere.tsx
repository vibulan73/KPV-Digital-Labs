"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import React from "react";

const images = [
  "/lifeat/1.jpg",
  "/lifeat/2.jpg",
  "/lifeat/3.jpg",
  "/lifeat/4.jpg",
  "/lifeat/5.jpg"
];

export default function LifeAtHere() {
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

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const intervalRef = React.useRef<number | null>(null);
  const pausedRef = React.useRef(false);

  const restartAuto = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    if (images.length <= 1) return;
    intervalRef.current = window.setInterval(() => {
      if (!pausedRef.current) {
        setCurrentIndex((s) => (s + 1) % images.length);
      }
    }, 4000);
  };

  React.useEffect(() => {
    restartAuto();
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [images.length]);

  return (
    <section
      id="lifeAtHere"
      ref={sectionRef}
      className="  pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto flex  flex-col items-center">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">Life at KPV Digital Labs</span>
          </h2>
          <div>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out font-medium text-lg text-white/90 mb-4">
              A product-engineering culture focused on craftsmanship and
              measurable impact
            </p>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              For over a decade we've partnered with startups and enterprises to
              design, build, and scale mission‑critical products. We combine
              user-centered design, pragmatic engineering, and data-driven
              decision making to speed delivery, reduce risk, and drive real
              business outcomes.
            </p>
          </div>
        </div>

        <div className="max-w-5xl w-full mx-auto ">
          <div
            className="relative mx-auto fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out "
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
          >
            <div className="relative w-full h-[300px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-xl">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`slide-${i}`}
                  loading="lazy"
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out 
        ${
          i === currentIndex
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-95"
        }`}
                  style={{ willChange: "opacity, transform" }}
                />
              ))}
            </div>

            {/* Indicators */}
            {images.length > 1 && (
              <div className="mt-4 flex items-center justify-center space-x-2 fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out ">
                {images.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => {
                      setCurrentIndex(i);
                      // reset timer so user click delays the next auto advance
                      restartAuto();
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "bg-white"
                        : "bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
