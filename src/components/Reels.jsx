"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Reels() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const videos = [
    "/assets/images/reel-video.mp4",
    "/assets/images/reel3.mp4",
    "/assets/images/reel4.mp4",
    "/assets/images/reel5.mp4",
    "/assets/images/reel6.mp4",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Horizontal scroll effect
    const ctx = gsap.context(() => {
      const scrollWidth = containerRef.current.scrollWidth - window.innerWidth;
      
      gsap.to(containerRef.current, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full bg-[#f8f8f8] overflow-hidden relative">
      <div className="absolute top-10 left-10 z-10 mix-blend-difference">
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter">
          The <span className="text-accent">Reels</span>
        </h2>
      </div>

      <div ref={containerRef} className="h-full flex items-center gap-10 px-[10vw] pt-[10vh]">
        {videos.map((src, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[70vh] min-w-[300px] md:min-w-[400px] shrink-0 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <video 
              src={src} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Colorful overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 text-white font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
              Play Video
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
