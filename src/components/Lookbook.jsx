"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Lookbook() {
  const looks = [
    {
      title: "The Warm Mocha",
      desc: "A perfect choice for the days leading up to Tết when you want a fresh look that stays refined and easy to wear. The warm mocha brown base keeps the hair soft looking and flattering on many skin tones.",
      img: "/assets/images/lookbook-1.jpg"
    },
    {
      title: "Vibrant Red",
      desc: "A vibrant red tone balanced with a soft hint of violet adding depth and a beautiful glow under festive lighting. Eye catching on camera yet refined in real life.",
      img: "/assets/images/lookbook-2.jpg"
    },
    {
      title: "Cool Neutral",
      desc: "Cool Brown is a neutral shade with a soft cool undertone loved for its natural and versatile appeal. When paired with extensions, the hair looks noticeably longer and fuller.",
      img: "/assets/images/lookbook-3.jpg"
    },
    {
      title: "Sculpted Fringe",
      desc: "A hairstyle where the fringe is cut diagonally and gently swept to one side of the face creating a soft appearance while still maintaining necessary neatness. Helps balance facial proportions naturally.",
      img: "/assets/images/lookbook-4.jpg"
    }
  ];

  return (
    <section className="w-full bg-white text-black py-32 px-4 md:px-10 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center md:text-left border-b border-black/10 pb-10"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/50 mb-4">
            03 // The Archive
          </p>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
            Signature <br/> Styles
          </h2>
        </motion.div>

        <div className="flex flex-col gap-32 mt-20">
          {looks.map((look, idx) => (
            <LookCard key={idx} look={look} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LookCard({ look, idx }) {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col md:flex-row items-center gap-10 lg:gap-20 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} relative`}
    >
      {/* Huge background number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-black/[0.03] -z-10 pointer-events-none tracking-tighter leading-none">
        0{idx + 1}
      </div>

      {/* Image Container */}
      <div className="w-full md:w-1/2 relative group overflow-hidden shadow-2xl">
        <div className="aspect-[3/4] md:aspect-[4/5] relative overflow-hidden bg-black/5">
          <motion.div 
            style={{ y }}
            className="w-full h-[120%] -top-[10%] relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              <Image
                src={look.img}
                alt={look.title}
                fill
                className="object-cover transition-all duration-700 brightness-95 group-hover:brightness-110"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Text Container */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-tight">
          {look.title}
        </h3>
        <p className="text-lg md:text-xl text-black/70 leading-relaxed font-medium">
          {look.desc}
        </p>
        
        <div className="mt-10">
          <button className="text-black font-bold uppercase tracking-[0.2em] relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-black hover:after:scale-y-[3] after:origin-bottom after:transition-transform after:duration-300">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
