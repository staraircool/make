"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StylistsProfiles() {
  const stylists = [
    {
      name: "Elara Vance",
      role: "Creative Director",
      desc: "Specializes in avant-garde color and structural cutting. Over 15 years crafting global editorial looks.",
      img: "/assets/images/look-5.jpg"
    },
    {
      name: "Julian Cross",
      role: "Master Colorist",
      desc: "An alchemist of tone. Known for his seamless balayage and corrective color transformations.",
      img: "/assets/images/look-6.jpg"
    },
    {
      name: "Sienna Ray",
      role: "Extension Specialist",
      desc: "Master of volume and length. Creating invisible blends for flawless, natural-looking results.",
      img: "/assets/images/look-7.jpg"
    }
  ];

  return (
    <section className="w-full bg-black text-white py-32 px-4 md:px-10 lg:px-20 relative z-10 border-t border-white/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
            07 // The Artisans
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Master Stylists
          </h2>
          <p className="text-xl text-white/70 font-medium max-w-2xl">
            Meet the visionaries. A curated team of industry-leading talent, dedicated to elevating your personal aesthetic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stylists.map((stylist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden mb-6 bg-white/5">
                <Image 
                  src={stylist.img} 
                  alt={stylist.name} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-2">
                {stylist.name}
              </h3>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
                {stylist.role}
              </p>
              <p className="text-white/70 font-medium">
                {stylist.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
