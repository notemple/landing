import React from 'react';
import { motion } from 'motion/react';
import {
  Target,
  CheckSquare,
  Brain,
  Clock,
  Lightbulb,
  Star,
  Coffee,
  Sparkle,
  Calendar,
  Heart,
  Compass,
  Hourglass,
  PaperPlane,
  Sun,
  MapPin,
  Flame,
  ListChecks,
  Flower
} from '@phosphor-icons/react';

interface PageHeroProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  actionButton?: React.ReactNode;
  compact?: boolean;
}

export default function PageHero({
  title,
  description,
  actionButton,
  compact = false
}: PageHeroProps) {
  return (
    <div className={`w-full ${compact ? 'py-16' : 'h-screen'} p-2 sm:p-3 md:p-4 overflow-hidden flex items-center justify-center bg-[#f4f5f6]`}>
      <div className={`relative rounded overflow-hidden border border-zinc-200/80 shadow-md w-full ${compact ? '' : 'h-full'} flex flex-col justify-between p-6 sm:p-15 select-none bg-transparent`}>

        {/* Ambient Minimalist Frosted Glass Background Design */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Base Matte Light/Frosted Backdrop */}
          <div className="absolute inset-0 bg-[#fafafc]/95 backdrop-blur-[35px]" />

          {/* Extremely elegant custom pastel ambient glows optimized for light canvas using the exact templ logo gradient colors */}
          <motion.div
            animate={{
              x: [-20, 20, -20],
              y: [-15, 15, -15],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-[10%] -left-[10%] w-[55%] h-[55%] rounded-full bg-[#9aa3f7]/13 blur-[130px] pointer-events-none"
          />

          <motion.div
            animate={{
              x: [20, -20, 20],
              y: [15, -15, 15],
              scale: [1.15, 0.9, 1.15]
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-[20%] -right-[10%] w-[65%] h-[65%] rounded-full bg-[#ea648d]/13 blur-[140px] pointer-events-none"
          />

          <motion.div
            animate={{
              y: [-15, 15, -15],
              x: [10, -10, 10],
              scale: [0.95, 1.1, 0.95]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[25%] left-[25%] w-[45%] h-[45%] rounded-full bg-[#dc70ab]/9 blur-[150px] pointer-events-none"
          />

          {/* Scattered Hand-Drawn Styled Glowing Outline Icons - Matching Work Page Exactly */}

          {/* 1. Target (top-left) */}
          <motion.div
            animate={{
              y: [-6, 6, -6],
              x: [-4, 4, -4],
              rotate: [-3, 3, -3]
            }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[8%] left-[28%] md:left-[32%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-amber-500/15 blur-xl" />
            <Target size={28} weight="regular" className="text-amber-600/65" />
          </motion.div>

          {/* 2. Hand-drawn Curve/Arrow (top-right) */}
          <motion.div
            animate={{
              y: [4, -4, 4],
              x: [3, -3, 3],
              rotate: [4, -4, 4]
            }}
            transition={{
              duration: 6.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[10%] right-[15%] md:right-[20%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-14 h-14 rounded-full bg-indigo-550/15 blur-xl" />
            <svg className="w-14 h-14 text-indigo-650/60" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d="M14 16 C30 8, 50 12, 48 26 C46 34, 34 38, 26 32" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 28 L26 32 L32 28" strokeLinecap="round" strokeLinejoin="round" />
              <text x="10" y="32" fontSize="13" fontFamily="sans-serif" fontStyle="italic" fill="currentColor" opacity="0.65">2</text>
            </svg>
          </motion.div>

          {/* 3. Checkmark checkbox (middle-top) */}
          <motion.div
            animate={{
              y: [-5, 5, -5],
              x: [3, -3, 3],
              rotate: [-4, 4, -4]
            }}
            transition={{
              duration: 5.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[22%] left-[45%] md:left-[48%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-blue-500/15 blur-xl" />
            <CheckSquare size={24} weight="regular" className="text-blue-600/65" />
          </motion.div>

          {/* 4. ECG Activity Pulse line (middle-left) */}
          <motion.div
            animate={{
              y: [6, -6, 6],
              x: [-2, 2, -2],
              rotate: [3, -3, 3]
            }}
            transition={{
              duration: 7.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[38%] left-[8%] md:left-[12%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-14 h-14 rounded-full bg-emerald-500/15 blur-xl" />
            <svg className="w-10 h-10 text-emerald-600/65" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 16h6l3-8 4 18 3-13 2 3h6" />
            </svg>
          </motion.div>

          {/* 5. Brain outline (middle center-left) */}
          <motion.div
            animate={{
              y: [-4, 4, -4],
              x: [4, -4, 4],
              rotate: [-3, 3, -3]
            }}
            transition={{
              duration: 6.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[40%] left-[28%] md:left-[35%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-purple-500/15 blur-xl" />
            <Brain size={24} weight="regular" className="text-purple-650/65" />
          </motion.div>

          {/* 6. Clock (middle-right) */}
          <motion.div
            animate={{
              y: [6, -6, 6],
              x: [-4, 4, -4],
              rotate: [5, -5, 5]
            }}
            transition={{
              duration: 6.0,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[50%] right-[10%] md:right-[15%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-slate-500/15 blur-xl" />
            <Clock size={24} weight="regular" className="text-slate-700/65" />
          </motion.div>

          {/* 7. Lightbulb (lower middle) */}
          <motion.div
            animate={{
              y: [-5, 5, -5],
              x: [2, -2, 2],
              rotate: [-3, 3, -3]
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-[35%] left-[46%] md:left-[49%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-yellow-500/15 blur-xl" />
            <Lightbulb size={24} weight="regular" className="text-amber-600/70" />
          </motion.div>

          {/* 8. Star (bottom-left) */}
          <motion.div
            animate={{
              y: [5, -5, 5],
              x: [-3, 3, -3],
              rotate: [6, -6, 6]
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-[12%] left-[8%] md:left-[10%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-14 h-14 rounded-full bg-teal-500/15 blur-xl" />
            <Star size={32} weight="regular" className="text-teal-600/65" />
          </motion.div>

          {/* 9. Coffee cup (bottom-right) */}
          <motion.div
            animate={{
              y: [-4, 4, -4],
              x: [4, -4, 4],
              rotate: [-4, 4, -4]
            }}
            transition={{
              duration: 5.4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-[6%] right-[6%] md:right-[8%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-orange-550/15 blur-xl" />
            <Coffee size={24} weight="regular" className="text-orange-655/65" />
          </motion.div>

          {/* 10. Sparkles */}
          <motion.div
            animate={{
              y: [-6, 6, -6],
              x: [-2, 2, -2],
              scale: [0.95, 1.05, 0.95],
              rotate: [10, -10, 10]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[14%] left-[6%] md:left-[10%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-fuchsia-400/15 blur-xl" />
            <Sparkle size={24} weight="regular" className="text-fuchsia-600/65" />
          </motion.div>

          {/* 11. Calendar */}
          <motion.div
            animate={{
              y: [5, -5, 5],
              x: [3, -3, 3],
              rotate: [-3, 3, -3]
            }}
            transition={{
              duration: 6.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[25%] right-[6%] md:right-[10%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-indigo-500/15 blur-xl" />
            <Calendar size={24} weight="regular" className="text-indigo-600/65" />
          </motion.div>

          {/* 12. Heart */}
          <motion.div
            animate={{
              y: [-4, 4, -4],
              x: [3, -3, 3],
              scale: [1, 1.08, 1],
              rotate: [-4, 4, -4]
            }}
            transition={{
              duration: 5.0,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[28%] left-[20%] md:left-[24%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-rose-400/15 blur-xl" />
            <Heart size={21} weight="regular" className="text-rose-600/65" />
          </motion.div>

          {/* 13. Compass */}
          <motion.div
            animate={{
              y: [4, -4, 4],
              x: [-4, 4, -4],
              rotate: [8, -8, 8]
            }}
            transition={{
              duration: 7.0,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[30%] right-[25%] md:right-[30%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-cyan-400/15 blur-xl" />
            <Compass size={22} weight="regular" className="text-cyan-600/65" />
          </motion.div>

          {/* 14. Hourglass */}
          <motion.div
            animate={{
              y: [-6, 6, -6],
              x: [-3, 3, -3],
              rotate: [15, -15, 15]
            }}
            transition={{
              duration: 5.9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[48%] left-[16%] md:left-[21%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-11 h-11 rounded-full bg-amber-600/15 blur-xl" />
            <Hourglass size={20} weight="regular" className="text-amber-700/65" />
          </motion.div>

          {/* 15. PaperPlane */}
          <motion.div
            animate={{
              y: [5, -5, 5],
              x: [4, -4, 4],
              rotate: [-6, 6, -6]
            }}
            transition={{
              duration: 6.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-[28%] right-[24%] md:right-[28%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-sky-400/15 blur-xl" />
            <PaperPlane size={21} weight="regular" className="text-sky-600/65" />
          </motion.div>

          {/* 16. Sun */}
          <motion.div
            animate={{
              y: [-4, 4, -4],
              x: [3, -3, 3],
              rotate: [12, -12, 12]
            }}
            transition={{
              duration: 5.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-[20%] left-[26%] md:left-[30%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-yellow-400/15 blur-xl" />
            <Sun size={23} weight="regular" className="text-yellow-600/65" />
          </motion.div>

          {/* 17. MapPin */}
          <motion.div
            animate={{
              y: [4, -4, 4],
              x: [-3, 3, -3],
              rotate: [-5, 5, -5]
            }}
            transition={{
              duration: 6.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-[22%] right-[8%] md:right-[12%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-rose-500/15 blur-xl" />
            <MapPin size={23} weight="regular" className="text-rose-600/65" />
          </motion.div>

          {/* 18. Flame */}
          <motion.div
            animate={{
              y: [-5, 5, -5],
              x: [3, -3, 3],
              scale: [0.95, 1.05, 0.95],
              rotate: [8, -8, 8]
            }}
            transition={{
              duration: 4.7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-[38%] right-[4%] md:right-[7%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-orange-500/15 blur-xl" />
            <Flame size={23} weight="regular" className="text-orange-600/65" />
          </motion.div>

          {/* 19. ListChecks */}
          <motion.div
            animate={{
              y: [6, -6, 6],
              x: [2, -2, 2],
              rotate: [-3, 3, -3]
            }}
            transition={{
              duration: 6.9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[55%] left-[4%] md:left-[7%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-indigo-400/15 blur-xl" />
            <ListChecks size={24} weight="regular" className="text-indigo-600/65" />
          </motion.div>

          {/* 20. Flower */}
          <motion.div
            animate={{
              y: [-5, 5, -5],
              x: [-4, 4, -4],
              rotate: [15, -15, 15]
            }}
            transition={{
              duration: 5.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-[12%] left-[20%] md:left-[24%] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-12 h-12 rounded-full bg-emerald-400/15 blur-xl" />
            <Flower size={22} weight="regular" className="text-emerald-600/65" />
          </motion.div>

          {/* Grain Noise Overlay effect */}
          <div className="absolute inset-0 opacity-[0.02] bg-repeat pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </div>

        {/* TOP ROW Invisible spacer */}
        {!compact && <div className="h-14 sm:h-16" />}

        {/* MAIN BODY: Centered Content */}
        <div className={`relative z-10 flex-grow flex flex-col items-center justify-center max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-6 sm:space-y-8 ${compact ? 'py-4' : 'my-auto'}`}>

          <div className="space-y-4">
            {/* Title / Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`font-sans font-semibold tracking-tight text-zinc-950 leading-[1.1] sm:leading-[1.08] max-w-3xl mx-auto ${compact ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-6xl md:text-7xl lg:text-[76px]'}`}
            >
              {title}
            </motion.h1>

            {/* Description Paragraph */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-heading font-light text-zinc-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </div>

          {/* Render Action button if provided */}
          {actionButton && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center w-full sm:w-auto"
            >
              {actionButton}
            </motion.div>
          )}

        </div>

      </div>
    </div>
  );
}

