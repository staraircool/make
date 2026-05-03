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
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black">
            The <span className="text-accent">Lookbook</span>
          </h2>
          <p className="mt-4 text-xl text-black/60 font-medium max-w-xl">
            Signature styles crafted at 4AM Hair Studio. Where precision meets vibrant creativity.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {looks.map((look, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col md:flex-row items-center gap-10 lg:gap-20 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 relative group overflow-hidden">
                <div className="aspect-[3/4] md:aspect-[4/5] relative overflow-hidden rounded-md">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={look.img}
                      alt={look.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-color" />
                  </motion.div>
                </div>
              </div>

              {/* Text Container */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 text-black tracking-tight">
                  {look.title}
                </h3>
                <p className="text-lg md:text-xl text-black/70 leading-relaxed font-medium">
                  {look.desc}
                </p>
                
                <div className="mt-10">
                  <button className="text-accent font-bold uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">
                    Get this look
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
