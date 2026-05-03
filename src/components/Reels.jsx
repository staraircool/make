"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Reels() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const videos = [
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel-video.mp4",
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel3.mp4",
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel4.mp4",
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel5.mp4",
    "https://varpec.sfo3.cdn.digitaloceanspaces.com/4am/reel6.mp4",
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
          </div>
        ))}
      </div>
    </section>
  );
}
