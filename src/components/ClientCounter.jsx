"use client";

import { motion, useInView, useAnimation, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ClientCounter() {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 2400, {
        duration: 3,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, count]);

  return (
    <section className="w-full bg-white text-black py-40 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/50">
            Social Proof
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center" ref={countRef}>
          <div className="flex items-end font-black uppercase tracking-tighter text-[15vw] md:text-[10vw] leading-none mb-6">
            <motion.span>{rounded}</motion.span>
            <span className="text-black/30 ml-2">+</span>
          </div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-black/80"
          >
            Happy Clients
          </motion.h3>
        </div>

      </div>
    </section>
  );
}
