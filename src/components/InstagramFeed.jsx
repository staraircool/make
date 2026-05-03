"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function InstagramFeed() {
  // We'll mock 8 images for the feed
  const feedImages = [
    "/assets/images/back1.jpg",
    "/assets/images/side1.jpg",
    "/assets/images/look-5.jpg",
    "/assets/images/look-6.jpg",
    "/assets/images/look-7.jpg",
    "/assets/images/back3.jpg",
    "/assets/images/side3.jpg",
    "/assets/images/back4.jpg",
  ];

  return (
    <section className="w-full bg-black text-white py-32 relative overflow-hidden border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-end mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
            08 // The Gram
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Follow Us
          </h2>
        </motion.div>

        <motion.a 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          href="https://www.instagram.com/4amhairstudio" 
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 mt-8 md:mt-0"
        >
          <span className="text-lg font-bold uppercase tracking-widest group-hover:text-white/70 transition-colors">
            @4amhairstudio
          </span>
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </motion.a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-1 md:gap-2">
        {feedImages.map((src, index) => (
          <motion.a
            key={index}
            href="https://www.instagram.com/4amhairstudio" 
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative aspect-square w-full bg-white/5 overflow-hidden group cursor-pointer"
          >
            <Image 
              src={src} 
              alt={`Instagram post ${index + 1}`} 
              fill 
              className="object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
