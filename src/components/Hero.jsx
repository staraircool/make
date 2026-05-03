"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

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
      {/* Background Image Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/images/hero.png"
          alt="4AM Hair Studio Hero"
          fill
          className="object-cover object-center opacity-40 mix-blend-multiply"
          priority
        />
        {/* Colorful accent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay pointer-events-none" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
          className="overflow-hidden"
        >
          <h1 className="text-7xl md:text-9xl font-black text-black tracking-tighter uppercase leading-[0.8]">
            4AM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">
              Studio
            </span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <p className="text-lg md:text-xl text-black/70 max-w-md font-medium">
            Elevating your look with modern aesthetics and colorful vibrancy.
          </p>
          <button className="group relative px-8 py-4 bg-black text-white font-bold uppercase tracking-widest overflow-hidden rounded-full hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-white transition-colors">Book Appointment</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-bold">Scroll to Discover</span>
        <div className="w-[2px] h-16 bg-black/20 relative overflow-hidden">
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
