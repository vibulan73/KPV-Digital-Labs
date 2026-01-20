"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import type { Service } from "@/lib/types";

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/services");
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-element");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading, services]);

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden" id="services-section">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-black to-black pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-sm font-medium text-indigo-400 uppercase tracking-widest mb-4 fade-in-element opacity-0 translate-y-4 transition-all duration-700">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-['Onest'] font-light mb-6 fade-in-element opacity-0 translate-y-4 transition-all duration-700 delay-100 leading-tight">
            Comprehensive Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Solutions</span>
          </h3>
          <p className="text-lg text-white/50 max-w-2xl mx-auto fade-in-element opacity-0 translate-y-4 transition-all duration-700 delay-200 font-light">
            We combine strategic thinking with technical excellence to deliver products that drive growth and innovation.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <article className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Layers size={24} />
                    </div>
                    <h4 className="text-xl font-medium text-white mb-3 group-hover:text-indigo-300 transition-colors">{service.title}</h4>
                    <p className="text-white/50 leading-relaxed mb-6 text-sm">{service.desc}</p>
                  </div>

                  {service.href && (
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                      Learn more
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </article>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
