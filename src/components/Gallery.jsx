"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Gallery() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for different columns
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const images = {
    col1: [
      "/assets/images/back1.jpg",
      "/assets/images/side1.jpg",
      "/assets/images/back5.jpg",
      "/assets/images/side5.jpg",
    ],
    col2: [
      "/assets/images/back3.jpg",
      "/assets/images/side3.jpg",
      "/assets/images/look-5.jpg",
      "/assets/images/look-6.jpg",
    ],
    col3: [
      "/assets/images/back4.jpg",
      "/assets/images/side4.jpg",
      "/assets/images/back6.jpg",
      "/assets/images/side6.jpg",
      "/assets/images/look-7.jpg",
    ]
  };

  return (
    <section ref={containerRef} className="py-32 w-full bg-black text-white relative overflow-hidden border-t border-white/20">
      
      {/* Texture */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 md:px-10 mb-20 relative z-10 flex flex-col items-center text-center"
      >
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
          04 // The Visuals
        </p>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
          The Gallery
        </h2>
      </motion.div>

      <div className="flex justify-center gap-4 md:gap-8 px-4 h-[120vh] md:h-[150vh] overflow-hidden relative z-10">
        {/* Column 1 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-4 md:gap-8 w-1/3 md:w-1/4 pt-20">
          {images.col1.map((src, i) => (
            <div key={i} className="relative aspect-[3/4] w-full bg-white/5 overflow-hidden group border border-white/10 shadow-2xl">
              <Image src={src} alt="Gallery image" fill className="object-cover transition-all duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-110" />
            </div>
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-4 md:gap-8 w-1/3 md:w-1/4 -mt-[30vh]">
          {images.col2.map((src, i) => (
            <div key={i} className="relative aspect-[4/5] w-full bg-white/5 overflow-hidden group border border-white/10 shadow-2xl">
              <Image src={src} alt="Gallery image" fill className="object-cover transition-all duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-110" />
            </div>
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: y3 }} className="flex flex-col gap-4 md:gap-8 w-1/3 md:w-1/4 pt-40">
          {images.col3.map((src, i) => (
            <div key={i} className="relative aspect-[3/4] w-full bg-white/5 overflow-hidden group border border-white/10 shadow-2xl">
              <Image src={src} alt="Gallery image" fill className="object-cover transition-all duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-110" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
