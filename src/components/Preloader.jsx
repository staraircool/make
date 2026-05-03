"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isLoading ? 0 : "-100vh" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="overflow-hidden mb-4">
        <motion.h1 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase"
        >
          4AM STUDIO
        </motion.h1>
      </div>
      <div className="w-64 md:w-96 h-1 bg-white/20 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-white"
          style={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <div className="mt-4 text-white font-bold tracking-widest text-sm">
        {Math.round(progress)}%
      </div>
    </motion.div>
  );
}
