// app/components/StatCard.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

type StatCardProps = {
  title: string;
  value: number;
  duration?: number; // seconds
  suffix?: string; // e.g. "+", "k", etc.
  decimals?: number;
};

export default function StatCard({
  title,
  value,
  duration = 1.5,
  suffix = "",
  decimals = 0,
}: StatCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState<number>(0);

  useEffect(() => {
    // subscribe to motion value changes and update local display state
    const unsubscribe = motionVal.on("change", (v) => {
      // round to requested decimals
      const factor = Math.pow(10, decimals);
      setDisplay(Math.round(v * factor) / factor);
    });

    let controls: { stop: () => void } | null = null;

    if (inView) {
      // animate the motion value from current -> target
      controls = animate(motionVal, value, {
        duration,
        ease: "easeOut",
      });
    }

    return () => {
      unsubscribe();
      if (controls) controls.stop();
    };
  }, [inView, value, duration, decimals, motionVal]);

  const formatted =
    decimals === 0
      ? Math.floor(display).toLocaleString()
      : display.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });

  return (
    <div
      ref={ref}
      className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
    >
      <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
        {formatted}
        {suffix}
      </div>
      <p className="text-white/70 text-xs sm:text-sm">{title} </p>
    </div>
  );
}
