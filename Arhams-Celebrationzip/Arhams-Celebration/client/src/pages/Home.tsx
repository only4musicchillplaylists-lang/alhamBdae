import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import messiImg from "@assets/stock_images/messi.png";
import yejiImg from "@assets/stock_images/yeji.jpg";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [messiImg, yejiImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 font-heading">
          Dear Arham,
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-[2fr_1fr] gap-8">
        {/* Letter Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/50 relative overflow-hidden min-h-[500px]">
            {/* Lined paper effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(transparent 23px, #9ca3af 24px)', backgroundSize: '100% 24px' }}>
            </div>
            
            <ScrollArea className="h-[450px] pr-4">
              <div className="font-hand text-xl md:text-2xl leading-relaxed text-purple-900 space-y-6 pt-2">
                <p>Happy 18th Birthday! 🎉</p>
                
                <p>
                  I'm not good at writing birthday messages like you are but thank you for being such a fun, genuine friend. From Valorant chaos to discord movies to random conversations, you've made things brighter in your own way.
                </p>
                
                <p>
                  Thank you for trusting me soo much with your friends, with your privacy and also making me included in your games. No matter how many negative people you meet don't ever change yourself you are amazing human being.
                </p>
                
                <p>
                  And ok Yeji and Messi are the goats I totally agree I just like annoying you.
                </p>
                
                <p>
                  I hope today reminds you how appreciated you are.
                </p>
                
                <p>
                  Enjoy your day, but also padhle.
                </p>
                
                <p>
                  Wishing you happpiest birthday and all the best for your exams. As always I'm here whenever you need to relax for a movie or a game.
                </p>
                
                <p className="font-bold text-pink-600 mt-8">
                  — Gipsy D
                </p>
              </div>
            </ScrollArea>
            
            {/* Stamps/Stickers */}
            <motion.div 
              className="absolute top-4 right-4 rotate-12 opacity-80"
              animate={{ rotate: [12, 15, 12] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-24 h-24 border-4 border-pink-400 rounded-full flex items-center justify-center text-pink-400 font-bold text-lg uppercase tracking-widest p-2 border-dashed">
                Top<br/>Secret
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Side Widget / Bias Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-6"
        >
          <div className="glass-card rounded-xl p-4 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md">
               <AnimatePresence mode="wait">
                 <motion.img 
                   key={currentImage}
                   src={images[currentImage]}
                   alt="The GOATs"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.5 }}
                   className="w-full h-full object-cover"
                 />
               </AnimatePresence>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 text-center">
            <h3 className="font-bold text-purple-900 mb-2">Today's Mission</h3>
            <p className="text-sm text-purple-700 mb-4">Have the most amazing day ever and eat lots of cake!</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
              <div className="bg-pink-500 h-2.5 rounded-full w-[18%]" style={{ width: '100%' }}></div>
            </div>
            <span className="text-xs text-gray-500">100% Completed</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
