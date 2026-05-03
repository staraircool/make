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
    <section ref={sectionRef} className="relative h-screen bg-white text-accent overflow-hidden">
      <div className="absolute top-10 left-10 z-10">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-md">
          The <br /> Experience
        </h2>
      </div>

      <div ref={containerRef} className="flex h-full w-[300vw] items-center pl-[20vw] md:pl-[30vw]">
        {videos.map((src, index) => (
          <div 
            key={index} 
            className="panel relative h-[60vh] md:h-[75vh] w-[70vw] md:w-[35vw] flex-shrink-0 mx-4 md:mx-8 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(255,0,127,0.2)] border-2 border-accent/20"
          >
            <video 
              src={src} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
            />
            {/* Pink gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <span className="bg-white text-accent px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-md">
                Look 0{index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
