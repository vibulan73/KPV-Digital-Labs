"use client";

import Link from "next/link";


export function Hero() {


  return (
    <section className="flex items-start justify-center px-4 pt-24 md:pt-32 pb-12 relative">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-8 md:mt-12 animate-fade-in-badge">
          <span className="w-2 h-2 bg-orange-500/80 rounded-full mr-2 animate-pulse"></span>
          200+ Projects Delivered Worldwide
        </div>
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance animate-fade-in-heading">
            About Us{" "}
          </h1>

          <div className="animate-fade-in-subheading">
           

            {/* Desktop version - single line */}
            <div className=" sm:flex items-center  justify-center gap-2 sm:gap-3 flex-wrap">
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-8 max-w-5xl text-left">
                <div className="text-slate-300 text-base text-md sm:text-lg space-y-3">
                  <p className="leading-relaxed text-center md:text-left">
                    We design and build production-ready web and mobile products for ambitious teams combining product strategy, elegant design and robust engineering to ship fast and scale with confidence.
                  </p>

                  <ul className="flex flex-wrap gap-3 text-sm text-slate-400">
                    <li className="inline-flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" aria-hidden></span>
                      Product & Design
                    </li>
                    <li className="inline-flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" aria-hidden></span>
                      Engineering & Architecture
                    </li>
                    <li className="inline-flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" aria-hidden></span>
                      Cloud & DevOps
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex whitespace-nowrap items-center px-4 py-2 rounded-full bg-white text-black font-medium shadow-md hover:scale-[1.02] transition-transform duration-200"
                  >
                    Work with us
                  </Link>

                  <a
                    href="/resources/case-studies"
                    className="inline-flex whitespace-nowrap items-center px-4 py-2 rounded-full border border-white/20 text-white/90 font-medium text-sm hover:bg-white/5 transition-colors duration-200"
                  >
                    View case studies
                  </a>
                </div>
              </div>
            </div>

        
          </div>

          {/* Video placeholder */}
          <div className="max-w-2xl sm:max-w-4xl mx-auto px-6 sm:px-0 mb-8 animate-fade-in-buttons">
            <div className="relative w-full aspect-video bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl group cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-500">
              <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-white/5"></div>

              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-xl">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-black ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center space-y-2 mt-24 sm:mt-32">
                  <p className="text-white/70 text-xs sm:text-base font-medium">
                    Demo Video Coming Soon
                  </p>
                </div>
              </div>

              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
