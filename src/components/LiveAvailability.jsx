"use client";

import { motion } from "framer-motion";

export default function LiveAvailability() {
  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-10 relative overflow-hidden flex justify-center border-y border-white/10">
      
      {/* Background Texture/Noise */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[150%] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
          {/* Animated Status Indicator */}
          <div className="relative flex items-center justify-center shrink-0 w-16 h-16 rounded-full bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-8 h-8 bg-emerald-500 rounded-full blur-[2px]"
            />
            <div className="relative w-4 h-4 bg-emerald-400 rounded-full z-10 shadow-[0_0_10px_rgba(52,211,153,1)]" />
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                Live Status
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-3">
              Limited Appointments <br className="hidden md:block" /> Available This Week
            </h2>
            <p className="text-lg text-white/60 font-medium max-w-xl">
              Due to high demand and our commitment to unhurried, precision artistry, we only accept a select number of clients per day.
            </p>
          </div>
        </div>

        <button className="shrink-0 relative overflow-hidden group px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 w-full h-full bg-emerald-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          <span className="relative z-10">Secure Your Slot</span>
        </button>
      </motion.div>
    </section>
  );
}
