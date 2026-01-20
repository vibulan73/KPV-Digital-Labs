"use client";

export function Hero() {
  return (
    <section className="flex items-start justify-center px-4 pt-24 md:pt-32 pb-20 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-8 md:mt-12 animate-fade-in-badge">
          <span className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></span>
          Blogs{" "}
        </div>
        <div className="space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance animate-fade-in-heading">
            Resources{" "}
          </h1>

          <div className="animate-fade-in-subheading">
            {/* Desktop version - single line */}
            <div className=" sm:flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-xl md:text-2xl max-w-5xl text-slate-300">
                Sharing knowledge and giving back to the software community is
                very important to us. See views, thoughts and insights below
                from various parts of the business based on experience and past
                engagements.
              </span>
            </div>
          </div>

          {/* Video placeholder */}
          {/* <div className="max-w-xs sm:max-w-3xl mx-auto px-6 sm:px-0 mb-8 animate-fade-in-buttons">
            <div className="relative w-full aspect-video bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl group cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>

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
          </div> */}
        </div>{" "}
      </div>
    </section>
  );
}
