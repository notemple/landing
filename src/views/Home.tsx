import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import HeroSection from '../domains/home/HeroSection';
import PlanSection from '../domains/home/PlanSection';
import { Play, X, Sparkle } from '@phosphor-icons/react';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative">

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Plan Section */}
      <PlanSection />

      {/* 6. Realistic Video Overlay Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-zinc-900 border border-zinc-800 rounded max-w-3xl w-full overflow-hidden shadow-2xl relative"
            >
              {/* Modal control bar */}
              <div className="bg-zinc-950 px-4 py-2 border-b border-zinc-800 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase flex items-center gap-1">
                  <Sparkle size={10} className="animate-pulse" />
                  templ intro_film_1080p.mp4
                </span>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>

              {/* simulated player body */}
              <div className="aspect-video bg-black relative flex flex-col justify-between p-6">

                {/* Simulated time overlay */}
                <div className="text-[10px] font-mono text-zinc-400 bg-zinc-950/60 self-start px-2 py-0.5 rounded backdrop-blur-sm">
                  0:42 / 1:30
                </div>

                {/* Main player visual: simple and monochromatic */}
                <div className="absolute inset-x-0 top-1/3 text-center space-y-3">
                  <span className="font-heading font-light text-xl tracking-widest text-zinc-300">
                    templ is a block of thoughts.
                  </span>
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-12 h-12 bg-white/10 rounded-full border border-white/25 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                    >
                      <Play size={20} className="text-white ml-0.5" weight="fill" />
                    </motion.div>
                  </div>
                </div>

                {/* Progress bar controller */}
                <div className="space-y-2 mt-auto">
                  <div className="h-1 bg-zinc-800 rounded w-full overflow-hidden">
                    <div className="h-full bg-zinc-300 w-[45%]" />
                  </div>
                  <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
                    <span>PLAYBACK SPEED: 1.0X</span>
                    <span>SOUND: BYRD OUTLINER SYSTEM</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

