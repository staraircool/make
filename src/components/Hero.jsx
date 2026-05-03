"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] flex flex-col justify-center bg-black text-white overflow-hidden px-4 md:px-10">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/images/hero.jpg" 
          alt="Hero Background" 
          fill 
          className="object-cover opacity-60" 
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Background Texture/Noise */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 overflow-hidden"
        >
          <p className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-white/70">
            Est. 2024 — Mastery in Every Cut
          </p>
        </motion.div>

        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 2.5 }
            }
          }}
          className="text-[14vw] md:text-[9vw] font-black tracking-tighter uppercase leading-[0.85] flex flex-col text-white/70 mix-blend-difference"
        >
          <span className="flex overflow-hidden">
            {["T", "H", "E", "\u00A0", "#", "1"].map((char, i) => (
              <motion.span
                key={`line1-${i}`}
                variants={{
                  hidden: { y: "100%", opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="flex overflow-hidden text-white/40">
            {["S", "A", "L", "O", "N", "\u00A0", "I", "N"].map((char, i) => (
              <motion.span
                key={`line2-${i}`}
                variants={{
                  hidden: { y: "100%", opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="flex overflow-hidden">
            {["H", "O", "\u00A0", "C", "H", "I", "\u00A0", "M", "I", "N", "H"].map((char, i) => (
              <motion.span
                key={`line3-${i}`}
                variants={{
                  hidden: { y: "100%", opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 border-t border-white/20 pt-10"
        >
          <p className="text-lg md:text-xl text-white/60 max-w-lg font-medium leading-relaxed">
            Elevating the standard of hair artistry. A sanctuary of modern aesthetics, precision tailoring, and unparalleled service.
          </p>
          <button className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-widest overflow-hidden rounded-full hover:scale-[1.02] transition-transform duration-300">
            <span className="relative z-10 transition-colors">Book Appointment</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 right-10 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50" style={{ writingMode: 'vertical-rl' }}>Scroll to Explore</span>
      </motion.div>
    </section>
  );
}
