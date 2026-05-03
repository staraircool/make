"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Reels() {
  const containerRef = useRef(null);

  const videos = [
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel-video.mp4",
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel3.mp4",
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel4.mp4",
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel5.mp4",
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel6.mp4",
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-white text-accent pb-32">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center -z-10 pointer-events-none">
        <h2 className="text-[12vw] font-black uppercase tracking-tighter opacity-5">
          Showcase
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative mt-[-100vh]">
        <div className="mb-32 text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-md">
            The <br /> Experience
          </h2>
        </div>

        <div className="flex flex-col gap-[10vh]">
          {videos.map((src, index) => {
            return (
              <Card 
                key={index} 
                src={src} 
                index={index} 
                total={videos.length} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Card({ src, index, total }) {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start top"]
  });

  // Calculate the scale and top offset so they stack nicely
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  
  return (
    <div 
      className="sticky flex items-center justify-center w-full h-[80vh]"
      style={{ top: `calc(10vh + ${index * 20}px)` }}
    >
      <motion.div 
        ref={cardRef}
        style={{ scale, opacity }}
        className="relative w-full md:w-[60%] h-[70vh] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(255,0,127,0.3)] border border-accent/30 origin-top bg-black"
      >
        <video 
          src={src} 
          autoPlay
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute top-6 left-6 mix-blend-difference text-white">
          <span className="text-sm font-bold tracking-widest uppercase">
            Look 0{index + 1}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
