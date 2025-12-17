import React, { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import envelopeImg from "@assets/generated_images/pink_envelope.png";
import { Button } from "@/components/ui/button";

export default function Landing() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleOpen = () => {
    setIsOpen(true);
    // Trigger confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#d946ef', '#a855f7', '#f472b6']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#d946ef', '#a855f7', '#f472b6']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Navigate after animation
    setTimeout(() => {
      setLocation("/home");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-200 via-pink-100 to-purple-200">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#a855f7 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0, rotate: 10 }}
            className="z-10 flex flex-col items-center gap-8"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-center text-purple-800 drop-shadow-sm font-heading"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Happy 18th Birthday<br/>
              <span className="text-pink-600">Arham!</span>
            </motion.h1>

            <motion.div
              className="cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
            >
              <div className="absolute inset-0 bg-pink-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <img 
                src={envelopeImg} 
                alt="Birthday Envelope" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl relative z-10"
              />
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-pink-200 shadow-lg z-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-purple-800 font-bold tracking-wider">Open Me!</span>
              </motion.div>
            </motion.div>

            <p className="text-purple-600/70 text-sm font-medium">A special surprise awaits...</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center text-center z-10"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              className="text-8xl mb-4"
            >
              🎉
            </motion.div>
            <h2 className="text-3xl font-bold text-purple-800">Opening your letter...</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
