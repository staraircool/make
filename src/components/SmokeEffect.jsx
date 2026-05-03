"use client";

import { motion } from "framer-motion";

export default function SmokeEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-60">
      {/* Animated CSS gradients mimicking smoke/clouds */}
      <motion.div
        animate={{
          x: ["-10%", "10%", "-10%"],
          y: ["-10%", "5%", "-10%"],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400/20 via-white/5 to-transparent blur-[100px]"
      />
      
      <motion.div
        animate={{
          x: ["10%", "-10%", "10%"],
          y: ["5%", "-10%", "5%"],
          rotate: [0, -5, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-300/30 via-pink-100/10 to-transparent blur-[120px]"
        style={{ transformOrigin: "center right" }}
      />
    </div>
  );
}
