"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CaseStudy } from "@/lib/types";

export default function CaseStudies() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(6);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    useEffect(() => {
        fetch("/api/case-studies")
            .then(res => res.json())
            .then(setCaseStudies)
            .catch(console.error);
    }, []);

    const categories = ["All", ...Array.from(new Set(caseStudies.map((b) => b.industry || "Other")))];

    // Filtered list based on selection
    const filtered = selectedCategory === "All" ? caseStudies : caseStudies.filter((c) => (c.industry || "Other") === selectedCategory);
    const visibleCaseStudies = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;

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
    }, [caseStudies]);

    // run fade-in on newly revealed cards
    useEffect(() => {
        const t = setTimeout(() => {
            const el = sectionRef.current;
            if (!el) return;
            const elements = el.querySelectorAll(".fade-in-element.opacity-0");
            elements.forEach((element, index) => {
                setTimeout(() => element.classList.add("animate-fade-in-up"), index * 120);
            });
        }, 50);
        return () => clearTimeout(t);
    }, [visibleCount, selectedCategory, caseStudies]);

    // reset visible count when category changes
    useEffect(() => {
        setVisibleCount(6);
    }, [selectedCategory]);

    const showMore = () => setVisibleCount(filtered.length);
    const showLess = () => setVisibleCount(6);

    return (
        <section id="caseStudies" ref={sectionRef} className="pb-16 px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-7xl mx-auto flex  flex-col items-center">
                <div className="text-center mb-8 md:mb-12">
                    <div className="w-full flex flex-col items-center gap-8 mt-8">
                        <div className="inline-flex items-center bg-white/3 ring-1 ring-white/6 rounded-full  px-3 py-1 animate-fade-in-buttons flex-wrap justify-center">
                            {categories.map((cat, idx) => {
                                const id = `cat-${cat.toLowerCase().replace(/\s+/g, "-")}`;
                                return (
                                    <div key={id} className="relative">
                                        <input
                                            id={id}
                                            name="blog-category"
                                            type="radio"
                                            value={cat}
                                            checked={selectedCategory === cat}
                                            onChange={() => setSelectedCategory(cat)}
                                            className="sr-only cat-input"
                                        />
                                        <label
                                            htmlFor={id}
                                            className={`cursor-pointer select-none px-6 py-2 text-md md:text-base rounded-full transition-all duration-200 flex items-center gap-2 ${selectedCategory === cat ? "text-white" : "text-white/80"
                                                }`}
                                            aria-pressed={selectedCategory === cat}
                                        >
                                            {cat}
                                        </label>
                                    </div>
                                );
                            })}
                        </div>

                        <style>{`
                            input.cat-input:checked + label {
                                background: linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04));
                                color: #fff;
                            }
                            input.cat-input:focus-visible + label {
                                outline: 2px solid rgba(255,255,255,0.08);
                                outline-offset: 2px;
                            }
                            label:hover {
                                color: #fff;
                                transform: translateY(-1px);
                            }
                        `}</style>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto ">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {visibleCaseStudies.map((p) => (
                            <article
                                key={p.id}
                                className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out group rounded-2xl overflow-hidden bg-white/3 ring-1 ring-white/6"
                                aria-labelledby={`proj-${p.id}-title`}
                            >
                                <div className="relative h-48 sm:h-56 lg:h-44 overflow-hidden bg-zinc-900">
                                    {p.image ? (
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-white/10 flex items-center justify-center text-white/20">NO IMAGE</div>
                                    )}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                                </div>

                                <div className="p-6">
                                    <h3
                                        id={`proj-${p.id}-title`}
                                        className="text-xl md:text-2xl font-medium text-white mb-2"
                                    >
                                        {p.title}
                                    </h3>
                                    <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed line-clamp-3">
                                        {p.challenge}
                                    </p>
                                    <Link
                                        href={`/resources/case-studies/${p.id}`}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white border border-white/10 bg-white/3 hover:bg-white/6 transition"
                                        aria-label={`Learn more about ${p.title}`}
                                    >
                                        Learn more
                                        <ArrowRight className="w-4 h-4 opacity-90" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="w-fit mt-12">
                    {hasMore ? (
                        <button
                            onClick={showMore}
                            className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/6 hover:bg-white/8 text-white font-medium px-6 py-2 rounded-full flex items-center cursor-pointer"
                            aria-label="Load more case studies"
                        >
                            <span className="mr-2">Load more</span>
                        </button>
                    ) : (
                        caseStudies.length > 0 && (
                            <button
                                onClick={showLess}
                                className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/6 hover:bg-white/8 text-white font-medium px-6 py-2 rounded-full flex items-center cursor-pointer"
                                aria-label="Show less case studies"
                            >
                                Show less
                            </button>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
