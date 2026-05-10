import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, CalendarClock, LineChart, Layers, Sparkles } from "lucide-react";
import type { MouseEvent, ReactNode } from "react";

type Highlight = {
  icon: typeof CalendarClock;
  title: string;
  desc: string;
  color: "orange" | "purple";
  graphic: ReactNode;
};

const highlights: Highlight[] = [
  {
    icon: CalendarClock,
    title: "Book in minutes",
    desc: "Choose a time that fits your calendar. No back-and-forth.",
    color: "orange",
    graphic: (
      <svg
        viewBox="0 0 100 100"
        className="absolute bottom-0 right-0 w-48 h-48 text-orange-500/10 pointer-events-none translate-x-12 translate-y-12 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:text-orange-500/20"
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <line x1="50" y1="50" x2="50" y2="26" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="50" y1="50" x2="70" y2="58" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.85" />
        <circle cx="50" cy="50" r="3" fill="#f97316" className="drop-shadow-[0_0_8px_rgba(249,115,22,0.9)] opacity-80" />
      </svg>
    ),
  },
  {
    icon: LineChart,
    title: "Clarity first",
    desc: "Walk away with priorities, risks, and a sane next step—not jargon.",
    color: "purple",
    graphic: (
      <svg
        viewBox="0 0 100 100"
        className="absolute bottom-4 right-0 w-56 h-56 text-purple-500/20 pointer-events-none translate-x-14 translate-y-6 transition-all duration-1000 group-hover:scale-125 group-hover:text-purple-500/30"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          d="M8,72 L22,58 L38,62 L52,38 L68,44 L82,22 L94,28"
        />
        <path fill="none" stroke="currentColor" strokeWidth="0.35" opacity="0.45" d="M8,82 L24,68 L40,72 L54,48 L70,54 L86,32 L96,38" />
        <circle cx="52" cy="38" r="2" fill="#a855f7" className="animate-pulse" opacity="0.9" />
        <circle cx="82" cy="22" r="1.5" fill="#a855f7" opacity="0.5" />
      </svg>
    ),
  },
  {
    icon: Layers,
    title: "One partner",
    desc: "Creative, performance, web, and automation aligned under one roof.",
    color: "purple",
    graphic: (
      <svg
        viewBox="0 0 100 100"
        className="absolute bottom-0 right-0 w-56 h-56 pointer-events-none scale-110 -translate-x-4 -translate-y-4 text-purple-500/25 transition-all duration-700 group-hover:scale-[1.18] group-hover:text-purple-500/35"
      >
        <path fill="currentColor" opacity="0.35" d="M50,28 L78,40 L50,52 L22,40 Z" />
        <path fill="currentColor" opacity="0.22" d="M50,42 L78,54 L50,66 L22,54 Z" />
        <path fill="currentColor" opacity="0.12" d="M50,56 L78,68 L50,80 L22,68 Z" />
        <path fill="none" stroke="currentColor" strokeWidth="0.4" d="M22,40 L50,28 L78,40 M22,54 L50,42 L78,54" opacity="0.5" />
      </svg>
    ),
  },
  {
    icon: Sparkles,
    title: "Built to scale",
    desc: "Systems and creative that compound as your brand grows.",
    color: "orange",
    graphic: (
      <svg
        viewBox="0 0 100 100"
        className="absolute bottom-4 right-0 w-56 h-56 text-orange-500/20 pointer-events-none translate-x-16 translate-y-4 transition-all duration-1000 group-hover:scale-125 group-hover:text-orange-500/30"
      >
        <g className="origin-center" style={{ animation: "spin 18s linear infinite" }}>
          <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 10" />
          <path fill="none" stroke="currentColor" strokeWidth="0.4" d="M50,18 L50,82 M18,50 L82,50" opacity="0.6" />
        </g>
        <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="0.45" />
        <circle cx="50" cy="50" r="3" fill="#f97316" className="drop-shadow-[0_0_10px_rgba(249,115,22,1)] animate-pulse" />
        <circle cx="28" cy="32" r="1.2" fill="currentColor" opacity="0.5" />
        <circle cx="74" cy="64" r="1.2" fill="currentColor" opacity="0.45" />
      </svg>
    ),
  },
];

function HighlightCard({
  item,
  idx,
}: {
  item: Highlight;
  idx: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isOrange = item.color === "orange";
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative p-8 sm:p-10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:bg-[#0d0d12] hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black bg-[#0a0a0c] border border-white/[0.04] border-t-white/[0.08]"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              ${isOrange ? "rgba(249, 115, 22, 0.12)" : "rgba(168, 85, 247, 0.12)"},
              transparent 80%
            )
          `,
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100">
        {item.graphic}
      </div>

      <div className="relative z-10 flex flex-col h-full mt-4">
        <div
          className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-700 ease-out border backdrop-blur-md ${
            isOrange
              ? "bg-gradient-to-b from-orange-500/10 to-orange-500/5 border-orange-500/20 group-hover:border-orange-500/50 group-hover:shadow-[inset_0_0_20px_rgba(249,115,22,0.2),0_0_20px_rgba(249,115,22,0.2)] group-hover:bg-orange-500/20"
              : "bg-gradient-to-b from-purple-500/10 to-purple-500/5 border-purple-500/20 group-hover:border-purple-500/50 group-hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.2),0_0_20px_rgba(168,85,247,0.2)] group-hover:bg-purple-500/20"
          }`}
        >
          <div
            className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${isOrange ? "from-orange-400/20" : "from-purple-400/20"} to-transparent rounded-t-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
          />
          <Icon
            className={`relative w-7 h-7 transition-transform duration-500 group-hover:scale-110 text-white ${isOrange ? "group-hover:text-orange-200" : "group-hover:text-purple-200"}`}
            strokeWidth={1.5}
          />
        </div>

        <h3 className="text-xl font-semibold mb-4 tracking-tight text-white transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 sm:text-2xl">
          {item.title}
        </h3>

        <div
          className={`h-[2px] mb-4 w-8 transition-all duration-500 group-hover:w-16 ${
            isOrange ? "bg-gradient-to-r from-orange-500 to-transparent" : "bg-gradient-to-r from-purple-500 to-transparent"
          }`}
        />

        <p className="text-sm sm:text-base leading-relaxed font-light text-gray-400/80 transition-colors duration-500 group-hover:text-gray-300">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function CTASection() {
  return (
    <section className="py-20 md:py-24 relative bg-[#030305] border-t border-white/[0.02] overflow-hidden">
      <div className="absolute top-[12%] right-[8%] w-[720px] h-[720px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[0%] left-[-8%] w-[560px] h-[560px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div
        className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/5 bg-white/[0.01] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-100" />
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </div>
              <span className="text-xs font-medium text-white/70 tracking-widest uppercase relative z-10">
                Start a conversation
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-6 leading-[1.05] text-white">
              Ready to build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-200 to-purple-300">
                extraordinary?
              </span>
            </h2>

            <div className="relative pl-6 md:pl-8 border-l border-white/10 mb-8">
              <div className="absolute left-[-1px] top-0 w-[2px] h-1/3 bg-gradient-to-b from-orange-500 to-transparent" />
              <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-lg">
                Let&apos;s turn your vision into a digital reality that drives real results. Tell us what you&apos;re building—we&apos;ll
                map the fastest path from idea to impact.
              </p>
            </div>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-4 px-2 py-2 pr-6 bg-white/[0.03] border border-white/10 rounded-full overflow-hidden hover:border-orange-500/50 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-orange-500 group-hover:rotate-45 transition-all duration-500 shadow-lg">
                <ArrowUpRight className="w-5 h-5 text-black" />
              </div>
              <span className="relative z-10 text-white font-medium tracking-wide">Book a free call</span>
            </a>
          </motion.div>

          <div className="flex-[1.2] w-full grid sm:grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-purple-500/5 blur-[80px] -z-10 rounded-full" />

            <div className="flex flex-col gap-6 sm:mt-12">
              {highlights.slice(0, 2).map((item, idx) => (
                <HighlightCard key={item.title} item={item} idx={idx} />
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {highlights.slice(2, 4).map((item, idx) => (
                <HighlightCard key={item.title} item={item} idx={idx + 2} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
