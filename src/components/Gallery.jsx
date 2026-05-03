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
    <section ref={containerRef} className="py-32 w-full bg-white text-accent relative overflow-hidden">
      {/* Soft pink ambient gradient instead of dark hero image */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50 to-white opacity-80 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 mb-20 text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-sm">
          The Gallery
        </h2>
        <p className="mt-4 text-xl text-pink-500/80 font-medium tracking-wide">
          Angles, precision, and artistry.
        </p>
      </div>

      <div className="flex justify-center gap-4 md:gap-8 px-4 h-[120vh] md:h-[150vh] overflow-hidden relative z-10">
        {/* Column 1 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-4 md:gap-8 w-1/3 md:w-1/4 pt-20">
          {images.col1.map((src, i) => (
            <div key={i} className="relative aspect-[3/4] w-full rounded-lg overflow-hidden group">
              <Image src={src} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-accent/40 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-4 md:gap-8 w-1/3 md:w-1/4 -mt-[30vh]">
          {images.col2.map((src, i) => (
            <div key={i} className="relative aspect-[4/5] w-full rounded-lg overflow-hidden group">
              <Image src={src} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-accent/40 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: y3 }} className="flex flex-col gap-4 md:gap-8 w-1/3 md:w-1/4 pt-40">
          {images.col3.map((src, i) => (
            <div key={i} className="relative aspect-[3/4] w-full rounded-lg overflow-hidden group">
              <Image src={src} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-accent/40 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
