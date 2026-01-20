"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Server, Code, Users, Zap, Shield, Search } from "lucide-react";

const servicesData = [
    {
        name: "Artificial Intelligence",
        href: "/services/artificial-intelligence",
        description: "Harness the power of AI and machine learning to automate processes, gain insights, and create intelligent solutions.",
        icon: Sparkles,
    },
    {
        name: "DevOps as a Service",
        href: "/services/devops",
        description: "Streamline your development pipeline with automated CI/CD, infrastructure as code, and cloud-native practices.",
        icon: Server,
    },
    {
        name: "Enterprise Software Development",
        href: "/services/enterprise-software-development",
        description: "Build scalable, secure, and robust enterprise applications tailored to your business needs.",
        icon: Code,
    },
    {
        name: "Managed Service Augmentation",
        href: "/services/managed-service-augmentation",
        description: "Extend your team with skilled professionals who integrate seamlessly with your existing processes.",
        icon: Users,
    },
    {
        name: "MVP Factory",
        href: "/services/mvp-factory",
        description: "Rapidly build and launch minimum viable products to validate your ideas and enter the market faster.",
        icon: Zap,
    },
    {
        name: "QA as a Service",
        href: "/services/qa",
        description: "Ensure quality and reliability with comprehensive testing strategies, automation, and continuous quality assurance.",
        icon: Shield,
    },
    {
        name: "Search Engine Optimization",
        href: "/services/seo",
        description: "Increase your online visibility and drive organic traffic with data-driven SEO strategies and optimization.",
        icon: Search,
    },
];

export function ServicesOverview() {
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
                            }, index * 100);
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
            id="services-overview"
            ref={sectionRef}
            className="relative py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight text-balance">
                        Our Software Development Services
                    </h2>
                    <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive solutions to drive your digital transformation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={service.name}
                                href={service.href}
                                className="fade-in-element group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/10"
                            >
                                <div className="mb-4 p-3 w-fit rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20">
                                    <Icon className="w-6 h-6 text-indigo-400" />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                    {service.name}
                                </h3>

                                <p className="text-white/60 text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-indigo-400 text-sm font-medium group-hover:gap-2 transition-all">
                                    Learn more
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
