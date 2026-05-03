"use client";

import { motion } from "framer-motion";

export default function Reels() {
  const videos = [
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel-video.mp4",
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel3.mp4",
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel4.mp4",
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel5.mp4",
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel6.mp4",
  ];

  // Duplicate for seamless marquee
  const marqueeVideos = [...videos, ...videos];

  return (
    <section className="relative w-full bg-black text-white py-32 overflow-hidden border-t border-white/20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 md:px-10 mb-20 flex flex-col md:flex-row items-end justify-between"
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
            02 // The Movement
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Living <br /> Portfolios
          </h2>
        </div>
        <p className="text-white/70 max-w-sm font-medium mt-6 md:mt-0">
          A dynamic look at our creations in motion. The true test of a cut is how it moves in the real world.
        </p>
      </motion.div>

      {/* Marquee Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="relative w-full flex overflow-hidden group"
      >
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeVideos.map((src, index) => (
            <div 
              key={index} 
              className="relative w-[70vw] md:w-[30vw] h-[60vh] md:h-[70vh] flex-shrink-0 mx-4 overflow-hidden bg-zinc-900 border border-white/10"
            >
              <video 
                src={src} 
                autoPlay
                muted 
                loop 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 mix-blend-difference text-white pointer-events-none">
                <span className="text-xs font-bold tracking-[0.2em] uppercase">
                  Look {String((index % videos.length) + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Custom Keyframes for Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}} />
    </section>
  );
}
