"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="w-full bg-white text-black py-32 px-4 md:px-10 lg:px-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        
        {/* Left Column - Large Typography */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1]"
          >
            We don't just cut hair.<br/>We architect identity.
          </motion.h2>

          <div className="hidden md:block mt-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/50">
              01 // The Philosophy
            </p>
          </div>
        </div>

        {/* Right Column - Editorial Copy */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="prose prose-lg text-black/80 font-medium leading-relaxed"
          >
            <p className="text-2xl mb-8">
              At 4AM Studio, we believe that true luxury lies in absolute precision. Our approach is fundamentally architectural—treating hair as a dynamic material that requires structure, balance, and bespoke tailoring to frame the individual.
            </p>
            <p>
              Located in the heart of Ho Chi Minh City, we have established ourselves as the premier destination for those who demand mastery. From avant-garde color transformations to meticulous sculptural cuts, every appointment is a collaborative pursuit of aesthetic perfection.
            </p>
            <p className="mt-8">
              We reject the generic. We embrace the extraordinary. Welcome to the new standard of hair design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16"
          >
            <button className="text-black font-bold uppercase tracking-[0.2em] relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-black hover:after:scale-y-[3] after:origin-bottom after:transition-transform after:duration-300">
              Read Our Full Story
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
