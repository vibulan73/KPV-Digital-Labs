"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";

export function CareersCTA() {
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
                            }, index * 200);
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
            id="careers-cta"
            ref={sectionRef}
            className="relative py-8 px-4 sm:px-6 lg:px-8 mb-24"
        >
            <div className="relative max-w-4xl mx-auto">
                <div className="fade-in-element transition-all duration-1000 ease-out text-center p-8 md:p-12 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10">
                    <div className="mb-6 flex justify-center">
                        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                            <Briefcase className="w-8 h-8 text-emerald-400" />
                        </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 text-balance leading-tight">
                        <span className="font-medium bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Looking to Build Your Career?
                        </span>
                    </h3>

                    <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Join our talented team and work on cutting-edge projects with leading global companies. We're always looking for passionate individuals.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/careers"
                            className="group inline-flex items-center gap-3 px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-semibold text-base md:text-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-2xl shadow-emerald-500/20"
                        >
                            View Open Positions
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
