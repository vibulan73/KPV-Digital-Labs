"use client";

import { useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/lib/types";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then(setTestimonials)
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    slideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, [testimonials.length]);

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

  // Show section even if empty to allow dynamic loading
  // if (testimonials.length === 0) return null;

  return (
    <section
      id="testmonials"
      ref={sectionRef}
      className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      {" "}
      <div className="relative max-w-7xl mx-auto text-center mb-12 md:mb-16">
        {" "}
        <h2 className="fade-in-element transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
          {" "}
          <span className="font-medium">What Clients Say</span>{" "}
        </h2>{" "}
        <p className="fade-in-element transition-all duration-1000 ease-out text-lg text-white/90 mb-4">
          Trusted partners for mission‑critical software{" "}
        </p>{" "}
        <p className="fade-in-element transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
          We partner with product and engineering teams to design, build, and
          operate resilient systems that drive measurable business outcomes.{" "}
        </p>{" "}
      </div>
      {/* Slider */}
      {testimonials.length > 0 ? (
        <>
          <div className="relative fade-in-element transition-all duration-1000 ease-out max-w-5xl mx-auto overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="flex-none w-full px-4">
                  <div className="align-middle bg-white/3 dark:bg-white/2 ring-1 ring-white/6  rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-2 border-white/10">
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-20 h-20 rounded-full mb-4 object-cover"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white">
                        {t.name.charAt(0)}
                      </div>
                    )}
                    <p className="text-white/90 italic mb-4">{`"${t.quote}"`}</p>
                    <h3 className="text-white font-semibold">{t.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dots Navigation */}
          <div className="flex justify-center mt-16 space-x-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </>
      ) : (
        <p className="text-white/30 text-center">Loading testimonials...</p>
      )}
    </section>
  );
}
