"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LuxurySpace() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={containerRef} className="py-32 w-full bg-white text-black relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 mb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/50 mb-4">
            06 // The Sanctuary
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Luxury Space
          </h2>
          <p className="text-xl md:text-2xl text-black/70 font-medium">
            Designed as an intimate oasis in the heart of the city. We have meticulously curated every detail to ensure your time with us is a retreat from the ordinary.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row gap-10 h-[80vh] relative z-10">
        <motion.div style={{ y: y1 }} className="relative w-full md:w-3/5 h-full bg-black/5 overflow-hidden">
          {/* We'll use look-1 as placeholder for space image, or create an upscale placeholder */}
          <Image src="/assets/images/back1.jpg" alt="Salon Interior" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="relative w-full md:w-2/5 h-3/4 self-end bg-black/5 overflow-hidden">
          <Image src="/assets/images/side1.jpg" alt="Salon Details" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>
    </section>
  );
}
