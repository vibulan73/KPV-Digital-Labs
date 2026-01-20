"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";

const projects = [
  {
    id: "p4",
    title: "A Quick Guide to Cloud Application Development",
    description:
      "Cloud computing has revolutionised the way businesses operate, innovate, and evolve in today’s fast-paced world. This guide covers core concepts, architectures, and best practices for building scalable, resilient cloud applications.",
    image: "/pr1.jpeg",
    href: "#",
  },
  {
    id: "p5",
    title: "Crafting the Best SEO Reports for Clients with Expert Tips and Tricks",
    description:
      "Crafting impactful SEO reports can be a challenge given the ever-changing search landscape. This post shares templates, key metrics, and storytelling techniques to clearly demonstrate value to clients.",
    image: "/pr2.png",
    href: "#",
  },
  {
    id: "p6",
    title: "Guide to Efficient Enterprise Software Development: Tackling Challenges",
    description:
      "In the rapidly evolving landscape of enterprise software, companies face a myriad of development, integration, and scaling challenges. Learn strategies for modular architectures, CI/CD, and effective team collaboration.",
    image: "/pr3.jpeg",
    href: "#",
  },
  {
    id: "p7",
    title: "Headless CMS: Why Should You Move from a Traditional CMS",
    description:
      "Your website is a critical element of your organisation’s digital footprint. Companies that adapt to trends and embrace a headless CMS gain flexibility, performance, and omnichannel delivery — here’s why and how to migrate.",
    image: "/bl9.jpeg",
    href: "#",
  },
];

export default function Insights() {
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
      id="projects"
      ref={sectionRef}
      className=" pt-16 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto flex  flex-col items-center">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">Our Latest Insights</span>
          </h2>
          <div>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out font-medium text-lg text-white/90 mb-4">
              Designed and delivered by our staff
            </p>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
             Stay ahead of the curve with our expert insights and updates on the latest in technology and software development. From emerging technologies to tips on optimising your business operations, our blog section offers valuable information for businesses of all sizes.
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

        
      </div>
    </section>
  );
}
