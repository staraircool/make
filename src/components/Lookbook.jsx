"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Lookbook() {
  const looks = [
    {
      title: "Warm Mocha & Burnt Orange",
      desc: "A perfect choice for the days leading up to Tết when you want a fresh look that stays refined and easy to wear. The warm mocha brown base keeps the hair soft looking and flattering on many skin tones, while the burnt orange highlights add pop.",
      img: "/assets/images/lookbook-1.jpg"
    },
    {
      title: "Vibrant Red & Soft Violet",
      desc: "A vibrant red tone balanced with a soft hint of violet adding depth and a beautiful glow under festive lighting. Perfect for the holiday season, eye catching on camera yet refined in real life.",
      img: "/assets/images/lookbook-2.jpg"
    },
    {
      title: "Cool Brown",
      desc: "Cool Brown is a neutral shade with a soft cool undertone loved for its natural and versatile appeal. When paired with 4AM hair extensions, the hair looks noticeably longer and fuller while remaining smooth and natural.",
      img: "/assets/images/lookbook-3.jpg"
    },
    {
      title: "Side Bangs",
      desc: "Side bangs are a hairstyle where the fringe is cut diagonally and gently swept to one side of the face creating a soft appearance while still maintaining necessary neatness. This style helps balance facial proportions naturally.",
      img: "/assets/images/lookbook-4.jpg"
    }
  ];

  return (
    <section className="w-full bg-white py-32 px-4 md:px-10 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-accent drop-shadow-sm">
            The Lookbook
          </h2>
          <p className="mt-4 text-xl text-pink-500/80 font-medium max-w-xl tracking-wide">
            Signature styles crafted at 4AM Hair Studio. Where precision meets vibrant creativity.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {looks.map((look, idx) => (
            <LookCard key={idx} look={look} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-pink-500/5 -z-10 pointer-events-none tracking-tighter leading-none">
        0{idx + 1}
      </div>

      {/* Image Container */}
      <div className="w-full md:w-1/2 relative group overflow-hidden">
        <div className="aspect-[3/4] md:aspect-[4/5] relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(255,0,127,0.15)] border-2 border-accent/10">
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
                className="object-cover mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-color" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Text Container */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 text-accent tracking-tight drop-shadow-sm">
          {look.title}
        </h3>
        <p className="text-lg md:text-xl text-pink-500/80 leading-relaxed font-medium">
          {look.desc}
        </p>
        
        <div className="mt-10">
          <button className="text-accent font-bold uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">
            Get this look
          </button>
        </div>
      </div>
    </motion.div>
  );
}
