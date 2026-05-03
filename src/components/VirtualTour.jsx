"use client";

import { motion } from "framer-motion";

export default function VirtualTour() {
  return (
    <section className="w-full bg-black text-white py-32 px-4 md:px-10 relative overflow-hidden border-t border-white/20">
      
      {/* Texture */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
            06 // The Space
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Virtual Tour
          </h2>
          <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto">
            Step inside our sanctuary. Explore the meticulously curated environment designed to elevate your aesthetic experience.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl aspect-video bg-white/5 border border-white/10 relative group overflow-hidden flex flex-col items-center justify-center cursor-pointer"
          onClick={() => window.open('https://share.google/pYTF50cKBcwbFBfp0', '_blank')}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
          
          <div className="relative z-20 flex flex-col items-center">
            <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <span className="text-2xl font-bold uppercase tracking-widest">Enter 360° View</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
