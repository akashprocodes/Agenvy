import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);

        setCount(Math.floor(easeProgress * (to - from) + from));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function About() {
  const stats = [
    {
      label: "Projects Delivered",
      value: 150,
      suffix: "+",
      graphic: (
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center">
          {/* Back folder shape */}
          <svg viewBox="0 0 24 24" fill="none" className="absolute w-16 h-16 text-white/5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
          {/* Front folder shape */}
          <svg viewBox="0 0 24 24" className="absolute w-16 h-16 text-white/10 translate-y-1 translate-x-1" fill="rgba(255,255,255,0.03)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
          {/* Glowing checkmark */}
          <div className="absolute translate-y-1">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
      )
    },
    {
      label: "Clients Served",
      value: 80,
      suffix: "+",
      graphic: (
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center">
          {/* Back person */}
          <svg viewBox="0 0 24 24" fill="none" className="absolute top-3 right-3 w-12 h-12 text-white/10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
          {/* Front person */}
          <svg viewBox="0 0 24 24" className="absolute bottom-3 left-3 w-12 h-12 text-white/20" fill="rgba(255,255,255,0.03)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="10" cy="7" r="4" />
          </svg>
          {/* Glowing dot */}
          <div className="absolute bottom-4 right-1 w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_12px_rgba(249,115,22,1)]" />
        </div>
      )
    },
    {
      label: "Average Growth",
      value: 340,
      suffix: "%",
      graphic: (
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-24 h-16">
          {/* Background bars */}
          <div className="absolute bottom-0 left-0 flex items-end justify-between w-full h-full px-2 opacity-30">
            <div className="w-2.5 h-[30%] bg-white/5 rounded-t-sm" />
            <div className="w-2.5 h-[45%] bg-white/5 rounded-t-sm" />
            <div className="w-2.5 h-[65%] bg-white/10 rounded-t-sm" />
            <div className="w-2.5 h-[85%] bg-white/10 rounded-t-sm" />
          </div>

          {/* Curved line */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
            <path d="M 5 95 Q 40 80 95 5" fill="none" stroke="url(#growth-gradient)" strokeWidth="3" strokeLinecap="round" />
            <defs>
              <linearGradient id="growth-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
          {/* Dots */}
          <div className="absolute top-[0%] right-[-5px] w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_12px_rgba(249,115,22,1)]" />
          <div className="absolute bottom-[-2px] left-[0px] w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
        </div>
      )
    },
    {
      label: "Years Experience",
      value: 5,
      suffix: "",
      graphic: (
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center">
          <div className="absolute w-[90%] h-[90%] rounded-full border border-white/5" />
          <div className="absolute w-[60%] h-[60%] rounded-full border border-white/[0.08]" />
          <div className="absolute w-[30%] h-[30%] rounded-full border border-purple-500/20 shadow-[inset_0_0_10px_rgba(168,85,247,0.1)]" />
          {/* Glowing center dot */}
          <div className="w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,1)]" />
        </div>
      )
    }
  ];

  return (
    <section id="about" className="py-20 md:py-24 relative bg-[#0a0a0f] overflow-hidden border-t border-white/5">
      {/* Background Orbs & Minimal Grid */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_50%,transparent_100%)]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/5 bg-white/[0.01] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-100" />
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </div>
              <span className="text-xs font-medium text-white/70 tracking-widest uppercase relative z-10">Core Philosophy</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-6 leading-[1.05]">
              <span className="text-white">We don't just run campaigns.</span><br />
              {/* <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-white/60 to-white/20 inline-block mt-2">
                We engineer digital dominance.
              </span> */}
            </h2>

            <div className="relative pl-6 md:pl-8 border-l border-white/10 mb-8">
              <div className="absolute left-[-1px] top-0 w-[2px] h-1/3 bg-gradient-to-b from-orange-500 to-transparent" />
              <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-lg">
                Founded on the belief that beautiful design and ruthless performance shouldn't be mutually exclusive. Agenvy is where data science meets high-end aesthetics. We partner with founders who are ready to stop playing small and start dominating their market.
              </p>
            </div>

            <button className="group relative inline-flex items-center gap-4 px-2 py-2 pr-6 bg-white/[0.03] border border-white/10 rounded-full overflow-hidden hover:border-orange-500/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-orange-500 group-hover:rotate-45 transition-all duration-500">
                <ArrowUpRight className="w-5 h-5 text-black" />
              </div>

              <span className="relative z-10 text-white font-medium tracking-wide">Meet the Team</span>
            </button>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 bg-[#111116] border border-white/[0.04] rounded-[2rem] overflow-hidden hover:bg-[#16161c] hover:border-white/10 transition-all duration-500 flex flex-col justify-center min-h-[180px]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-1 max-w-[60%]">
                  <div className="text-4xl md:text-5xl font-medium text-white tracking-tight">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500/80 shadow-[0_0_5px_rgba(249,115,22,0.8)]" />
                    <div className="text-sm font-normal text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </div>

                {stat.graphic}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
