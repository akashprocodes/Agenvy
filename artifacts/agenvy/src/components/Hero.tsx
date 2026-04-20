import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Globe } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import { Link } from "wouter";

const words = ["Growth", "Revenue", "Impact", "Results", "Success"];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block overflow-hidden" style={{ minWidth: "260px" }}>
      <motion.span
        key={index}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -80, opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="text-gradient inline-block"
      >
        {words[index]}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <ParticleBackground />

      <div className="absolute inset-0 bg-grid-pattern z-[1] opacity-40 pointer-events-none" />

      <motion.div
        className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Digital Growth Agency
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium">
            <Zap className="w-3 h-3 text-yellow-400" />
            AI-Powered Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-6 max-w-6xl"
        >
          We Build Digital
          <br />
          <RotatingWord /> Engines
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          Turning ambitious brands into unstoppable digital forces.
          Where engineering precision meets creative excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-semibold text-base shadow-lg shadow-purple-900/40 hover:shadow-purple-800/60 hover:scale-105 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#work"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-base backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            View Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {[
            { icon: TrendingUp, value: "340%", label: "Avg. Growth" },
            { icon: Globe, value: "80+", label: "Brands Scaled" },
            { icon: Zap, value: "150+", label: "Projects Done" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-lg font-bold text-white leading-none">{value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
