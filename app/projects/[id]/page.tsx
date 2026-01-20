"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { CTASection } from "@/app/components/CTASection";
import type { Project } from "@/lib/types";

export default function ProjectDetailPage() {
  const { id } = useParams() as { id: string };
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        if (res.ok) {
          const data = await res.json();
          setProject(data);
        } else {
          setProject(null);
        }
      } catch (error) {
        console.error("Failed to fetch project", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Loader2 className="animate-spin text-white" size={48} />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-black">
        <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-white/60 mb-8">The project you're looking for doesn't exist.</p>
        <Link href="/" className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-100 font-medium">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          {project.image && (
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            {project.title}
          </h1>

          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            {project.description}
          </p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium border border-indigo-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* About Client */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              About the Client
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              {project.aboutClient}
            </p>
          </section>

          {/* Problem Statement */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              The Challenge
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              {project.problemStatement}
            </p>
          </section>

          {/* Our Solution */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Our Solution
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              {project.ourSolution}
            </p>
          </section>

          {/* Results and Outcomes */}
          <section className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Results & Impact
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              {project.resultsAndOutcomes}
            </p>
          </section>

          {/* CTA */}
          <section className="text-center pt-8">
            <h3 className="text-2xl font-semibold mb-4">Ready to start your project?</h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-gray-100 font-semibold transition-all duration-300 hover:scale-105"
            >
              Let's Talk
              <ArrowLeft size={20} className="rotate-180" />
            </Link>
          </section>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
