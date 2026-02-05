"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Project } from "@/lib/types";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error("Projects data is not an array:", data);
          setProjects([]);
        }
      } catch (error) {
        console.error("Failed to fetch projects", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);


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
      id="projects"
      ref={sectionRef}
      className=" pt-16 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto flex  flex-col items-center">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">200+ Successful Client Projects</span>
          </h2>
          <div>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out font-medium text-lg text-white/90 mb-4">
              Designed and delivered by product engineers
            </p>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              For more than a decade we've helped startups and enterprises ship
              resilient, scalable software that drives measurable business
              outcomes. We combine pragmatic engineering with product-focused
              thinking to reduce risk, cut time-to-market, and unlock growth.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto ">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.id}
                className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out group rounded-2xl overflow-hidden bg-white/3 ring-1 ring-white/6"
                aria-labelledby={`proj-${p.id}-title`}
              >
                <div className="relative h-48 sm:h-56 lg:h-44 overflow-hidden bg-zinc-900">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6">
                  <h3
                    id={`proj-${p.id}-title`}
                    className="text-xl md:text-2xl font-medium text-white mb-2"
                  >
                    {p.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
                    {p.description}
                  </p>
                  <a
                    href={`/projects/${p.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white border border-white/10 bg-white/3 hover:bg-white/6 transition"
                    aria-label={`Learn more about ${p.title}`}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 opacity-90" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Link
          href={"#"}
          className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out w-fit mt-12 bg-white hover:bg-gray-300 text-background font-medium px-10 py-3 rounded-full flex items-center  hover:scale-105 hover:shadow-lg cursor-pointer group"
        >
          <span className="mr-2">Learn More</span>
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
