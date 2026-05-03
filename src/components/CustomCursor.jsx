"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "a" ||
        e.target.closest("button") ||
        e.target.closest("a") ||
        e.target.tagName.toLowerCase() === "video"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-accent rounded-full pointer-events-none z-[9999] flex items-center justify-center bg-accent/10 backdrop-blur-sm"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 1 : 0.5,
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.2 }}
      >
        {isHovering && (
          <span className="text-[8px] font-bold text-accent uppercase tracking-widest absolute">
            Explore
          </span>
        )}
      </motion.div>
    </>
  );
}
