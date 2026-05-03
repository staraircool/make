"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ServicesMenu() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      name: "Precision Tailoring",
      desc: "Bespoke architectural cutting focused on your natural bone structure and hair fall.",
      price: "From $120",
    },
    {
      name: "Color Alchemy",
      desc: "Advanced multi-dimensional coloring, balayage, and corrective color mastery.",
      price: "From $250",
    },
    {
      name: "Keratin Rituals",
      desc: "Deep structural repair and smoothing treatments for glass-like shine.",
      price: "From $300",
    },
    {
      name: "Extension Artistry",
      desc: "Invisible, weightless volume and length using premium hand-tied wefts.",
      price: "Consultation",
    },
  ];

  return (
    <section className="w-full bg-white text-black py-32 px-4 md:px-10 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        
        {/* Left: Sticky Header */}
        <div className="w-full md:w-1/3">
          <div className="sticky top-32">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/50 mb-4">
                05 // The Menu
              </p>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                Curated <br/> Services
              </h2>
              <p className="text-lg text-black/70 font-medium">
                We believe in transparent, premium pricing for unparalleled artistry. Every service includes a personalized consultation.
              </p>
              <button className="mt-10 px-8 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/80 transition-colors">
                Book Consultation
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right: Service List */}
        <div className="w-full md:w-2/3 flex flex-col border-t border-black/10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group border-b border-black/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] pointer-events-none" />
              
              <div className="relative z-10 flex-1">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2 group-hover:pl-4 transition-all duration-300">
                  {service.name}
                </h3>
                <p className="text-black/60 font-medium max-w-md group-hover:pl-4 transition-all duration-300 delay-75">
                  {service.desc}
                </p>
              </div>
              
              <div className="relative z-10">
                <span className="text-xl font-bold tracking-widest uppercase text-black/80">
                  {service.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
