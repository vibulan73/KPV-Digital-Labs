"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex items-start justify-center px-4 pt-24 md:pt-32 pb-20 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-8 md:mt-12 animate-fade-in-badge">
          <span className="w-2 h-2 bg-green-500/60 rounded-full mr-2 animate-pulse"></span>
          Careers
        </div>
        <div className="space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance animate-fade-in-heading">
            Join our team — Build the future with KPV Digital Labs
          </h1>

          <div className="animate-fade-in-subheading">
            <div className=" sm:flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-xl md:text-2xl max-w-5xl text-slate-300">
                We are constantly innovating and building great solutions in
                tech and finance for our global partners. If you would love to
                be where the action is, join our talented team today and take
                charge of your future!
              </span>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-4 sm:mb-12 animate-fade-in-buttons">
          
          <Link
            href="#ourOpenings"
            className="animate-fade-in-buttons w-fit mt-4 bg-white hover:bg-gray-300 text-background font-medium px-10 py-3 rounded-full flex items-center  hover:scale-105 hover:shadow-lg cursor-pointer group"
          >
            <span className="mr-2">Check Openings</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
