"use client"
import React from "react"
import { motion } from "framer-motion"
import { StaticImageData } from "next/image"
import Image from "next/image"

interface TrustedBy {
  logo:StaticImageData
  title:string
}

export const TrustedByColumn = (props: {
  className?: string
  trustedBy: TrustedBy[],
  duration?: number
}) => {
  return (
    <div className={`relative overflow-hidden h-[400px] sm:h-[600px] ${props.className}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 "
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.trustedBy.map(({ logo,title }, i) => (
                <div
                  className=" flex items-center p-4 sm:p-8 rounded-3xl border border-white/20 shadow-lg bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/15%),theme(backgroundColor.white/5%))] backdrop-blur-sm max-w-xs w-full shadow-gray-500/10"
                  style={{
                    boxShadow:
                      "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(156, 163, 175, 0.1), 0 0 20px rgba(156, 163, 175, 0.05)",
                  }}
                  key={i}
                >
                    <Image
                      src={logo}
                      alt={title}
                    ></Image>
                   
                 
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}
