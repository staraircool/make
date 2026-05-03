"use client";

import { motion } from "framer-motion";

export default function LiveAvailability() {
  return (
    <section className="w-full bg-white text-black py-32 px-4 md:px-10 relative overflow-hidden flex flex-col items-center border-t border-black/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 h-4 bg-green-500 rounded-full"
          />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-black/50">
            Live Availability
          </span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
          Limited Slots <br /> Available This Week
        </h2>
        
        <p className="text-xl text-black/70 font-medium mb-12 max-w-2xl mx-auto">
          Due to high demand, we are currently accepting limited walk-ins. Secure your preferred time slot to ensure an uninterrupted, premium experience.
        </p>

        <button className="px-10 py-5 bg-black text-white font-bold uppercase tracking-widest rounded-full hover:bg-black/80 transition-colors">
          Check Availability
        </button>
      </motion.div>
    </section>
  );
}
