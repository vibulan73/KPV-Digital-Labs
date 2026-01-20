"use client";

export function Hero() {
  return (
    <section className="flex items-start justify-center px-4 pt-24 md:pt-32 p-8 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-8 md:mt-12 animate-fade-in-badge">
          <span className="w-2 h-2 bg-yellow-300/60 rounded-full mr-2 animate-pulse"></span>
          Caase Studies{" "}
        </div>
        <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance animate-fade-in-heading">
            Case Studies — Real projects, measurable outcomes
            </h1>

          <div className="animate-fade-in-subheading">
            <div className=" sm:flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-xl md:text-2xl max-w-5xl text-slate-300">
                With a proven track record of over 200 successful client
                projects, SwivelTech has consistently delivered innovative
                solutions tailored to diverse business needs. We continue to
                excel, working tirelessly to exceed expectations. Have a look at
                some of our work.
              </span>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
