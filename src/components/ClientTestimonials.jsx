"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ClientTestimonials() {
  const testimonials = [
    {
      quote: "The attention to detail is unparalleled. They don't just cut hair; they sculpt it to fit your lifestyle.",
      author: "Vogue Editor",
    },
    {
      quote: "An oasis of calm and unparalleled expertise. My color has never looked so natural and vibrant.",
      author: "Sarah J.",
    },
    {
      quote: "From the moment you walk in, you know you're in the hands of absolute masters. Pure luxury.",
      author: "Michael T.",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white text-black py-40 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/50 mb-4">
            08 // The Word
          </p>
        </motion.div>

        <div className="relative w-full h-[300px] flex items-center justify-center">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0,
                scale: activeIndex === index ? 1 : 0.95,
                zIndex: activeIndex === index ? 10 : 0,
                pointerEvents: activeIndex === index ? "auto" : "none"
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-full max-w-4xl"
            >
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-10">
                "{test.quote}"
              </h3>
              <p className="text-xl font-bold tracking-widest uppercase text-black/60">
                — {test.author}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-4 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 transition-all duration-500 ease-out ${
                activeIndex === index ? "w-12 bg-black" : "w-4 bg-black/20"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
