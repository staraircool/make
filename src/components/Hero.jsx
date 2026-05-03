"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import SmokeEffect from "./SmokeEffect";

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={container} className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center">
      {/* Three.js Smoke Background */}
      <SmokeEffect />

      {/* Background Image Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-[1]">
        <Image
          src="/assets/images/hero.png"
          alt="4AM Hair Studio Hero"
          fill
          className="object-cover object-center opacity-30 mix-blend-multiply"
          priority
        />
        {/* Pink accent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-accent/10 pointer-events-none" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-20">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 2.5 } // delay for preloader
            }
          }}
          className="text-7xl md:text-9xl font-black text-accent tracking-tighter uppercase leading-[0.8] drop-shadow-sm flex flex-col items-center"
        >
          <span className="flex overflow-hidden">
            {["4", "A", "M"].map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { y: "100%", opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          
          <span className="flex overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-300 drop-shadow-md pb-4">
            {["S", "T", "U", "D", "I", "O"].map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { y: "100%", opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-8 flex flex-col items-center gap-6"
        >
          <p className="text-xl md:text-2xl text-pink-500/80 max-w-md font-medium tracking-wide">
            Elevating your look with modern aesthetics and colorful vibrancy.
          </p>
          <button className="group relative px-10 py-5 bg-white border-2 border-accent text-accent font-bold uppercase tracking-widest overflow-hidden rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,0,127,0.3)] hover:shadow-[0_0_60px_rgba(255,0,127,0.5)]">
            <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-white transition-colors">Book Appointment</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-bold text-accent">Scroll to Discover</span>
        <div className="w-[2px] h-16 bg-accent/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
