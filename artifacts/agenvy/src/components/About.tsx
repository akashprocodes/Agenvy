import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

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
    { label: "Projects Delivered", value: 150, suffix: "+" },
    { label: "Clients Served", value: 80, suffix: "+" },
    { label: "Average Growth", value: 340, suffix: "%" },
    { label: "Years Experience", value: 5, suffix: "" }
  ];

  return (
    <section id="about" className="py-32 relative border-t border-white/5 bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-transparent z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              We don't just run campaigns.<br/>
              <span className="text-gray-500">We engineer digital dominance.</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Founded on the belief that beautiful design and ruthless performance shouldn't be mutually exclusive. Agenvy is where data science meets high-end aesthetics. We partner with founders who are ready to stop playing small and start dominating their market.
            </p>
            <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-medium">
              Meet the Team
            </button>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center border border-white/5 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="text-5xl font-bold text-white mb-2 font-mono">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
