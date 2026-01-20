"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Career } from "@/lib/types";

export default function OurOpenings() {
  const sectionRef = useRef<HTMLElement>(null);
  const [vacancies, setVacancies] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await fetch('/api/careers');
        const data = await res.json();
        setVacancies(data);
      } catch (error) {
        console.error("Failed to fetch careers", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
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
      id="ourOpenings"
      ref={sectionRef}
      className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">Open Positions</span>
          </h2>
          <div>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out font-medium text-lg text-white/90 mb-4">
              Join people-first teams building reliable, scalable software used by
              organizations around the world.
            </p>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We’re hiring across engineering, product, and design. Work on
              end-to-end solutions alongside experienced mentors, take ownership
              of meaningful projects, and grow with a supportive, diverse team.
              Flexible work arrangements, continuous learning, and modern
              tooling are part of how we deliver impact.
            </p>
          </div>
        </div>
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <label htmlFor="job-search" className="sr-only">
              Search openings
            </label>
            <input
              id="job-search"
              type="search"
              placeholder="Search by role, location or skill..."
              className="w-full sm:flex-1 px-4 py-3 rounded-md bg-white/3 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/10"
              onInput={(e) => {
                const q = (e.currentTarget as HTMLInputElement).value.trim().toLowerCase();
                const locSelect = sectionRef.current?.querySelector<HTMLInputElement>("#loc-filter");
                const loc = locSelect?.value.toLowerCase() || "";
                const container = sectionRef.current;
                if (!container) return;
                const articles = Array.from(container.querySelectorAll("article"));
                articles.forEach((article) => {
                  const role = article.querySelector("h3")?.textContent?.toLowerCase() || "";
                  // the first small paragraph under the title is the location in the current markup
                  const location = article.querySelector("h3")?.nextElementSibling?.textContent?.toLowerCase() || article.querySelector("p")?.textContent?.toLowerCase() || "";
                  const skills = Array.from(article.querySelectorAll("ul li"))
                    .map((li) => li.textContent?.toLowerCase() || "")
                    .join(" ");
                  const hay = `${role} ${location} ${skills}`;
                  const matchesQuery = q === "" || hay.includes(q);
                  const matchesLoc = loc === "" || location.includes(loc);
                  const show = matchesQuery && matchesLoc;
                  article.classList.toggle("hidden", !show);
                });
              }}
            />

            <select
              id="loc-filter"
              className="w-full sm:w-56 px-3 py-3 rounded-md bg-white/3 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/10"
              onChange={(e) => {
                const loc = (e.currentTarget as HTMLSelectElement).value.toLowerCase();
                const searchInput = sectionRef.current?.querySelector<HTMLInputElement>("#job-search")?.value.trim().toLowerCase() || "";
                const container = sectionRef.current;
                if (!container) return;
                const articles = Array.from(container.querySelectorAll("article"));
                articles.forEach((article) => {
                  const role = article.querySelector("h3")?.textContent?.toLowerCase() || "";
                  const location = article.querySelector("h3")?.nextElementSibling?.textContent?.toLowerCase() || article.querySelector("p")?.textContent?.toLowerCase() || "";
                  const skills = Array.from(article.querySelectorAll("ul li"))
                    .map((li) => li.textContent?.toLowerCase() || "")
                    .join(" ");
                  const hay = `${role} ${location} ${skills}`;
                  const matchesQuery = searchInput === "" || hay.includes(searchInput);
                  const matchesLoc = loc === "" || location.includes(loc);
                  const show = matchesQuery && matchesLoc;
                  article.classList.toggle("hidden", !show);
                });
              }}
            >
              <option value="" className="bg-background">All locations</option>
              {Array.from(new Set(vacancies.map((v) => v.location))).map((loc) => (
                <option key={loc} value={loc} className="bg-background rounded-md hover:bg-white/20">
                  {loc}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-2 text-sm text-white/70">
            Tip: search by role, skill (e.g., React) or location. Results filter live as you type.
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
              {vacancies.map((vacancie, index) => (
                <article
                  key={index}
                  className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/3 rounded-xl p-6 border border-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-none w-16 h-16 rounded-full overflow-hidden relative ">
                      <div className={`w-full h-full rounded-full bg-linear-to-br ${vacancie.color} flex items-center justify-center shadow-md text-white`}>
                        {/* Default Icon */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {vacancie.role}
                      </h3>
                      <p className="text-sm text-white/70">{vacancie.location}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-white/70 leading-relaxed">
                    {vacancie.disc}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {vacancie.skills.map((skill) => (
                      <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">
                        {skill}
                      </li>
                    ))}

                  </ul>

                  <div className="mt-4">
                    <Link
                      href={`/careers/opening/${vacancie.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white border border-white/10 bg-white/3 hover:bg-white/6 transition"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 opacity-90" />
                    </Link>
                  </div>


                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}