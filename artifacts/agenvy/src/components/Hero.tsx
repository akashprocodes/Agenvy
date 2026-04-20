import { motion } from "framer-motion";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid-pattern">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-gray-300">The New Standard in Digital</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[1.1] mb-6 max-w-5xl"
        >
          We Build Digital <br className="hidden md:block" />
          <span className="text-gradient">Growth Engines</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12"
        >
          Turning ambitious brands into unstoppable digital forces. 
          Where engineering precision meets artistic vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 neon-glow">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-full glass-panel text-white font-semibold hover:bg-white/10 transition-colors duration-300">
            View Work
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
