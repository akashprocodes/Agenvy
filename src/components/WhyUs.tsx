import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Database, Zap, Cpu, TrendingUp, ArrowUpRight } from "lucide-react";
import { MouseEvent } from "react";

const features = [
  {
    icon: Database,
    title: "Data-Driven Strategy",
    desc: "Every decision backed by analytics and real data. No guesswork, just results.",
    color: "orange",
    graphic: (
      <svg viewBox="0 0 100 100" className="absolute bottom-0 right-0 w-48 h-48 text-orange-500/10 pointer-events-none translate-x-12 translate-y-12 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:text-orange-500/20">
        <path fill="currentColor" d="M80,100 L80,40 L65,50 L65,100 Z" />
        <path fill="currentColor" opacity="0.6" d="M60,100 L60,60 L45,70 L45,100 Z" />
        <path fill="currentColor" opacity="0.3" d="M40,100 L40,80 L25,90 L25,100 Z" />
        <polygon fill="currentColor" opacity="0.8" points="80,40 65,50 50,40 65,30" />
        <polygon fill="currentColor" opacity="0.5" points="60,60 45,70 30,60 45,50" />
        <polygon fill="currentColor" opacity="0.2" points="40,80 25,90 10,80 25,70" />
      </svg>
    )
  },
  {
    icon: Cpu,
    title: "AI-Powered Solutions",
    desc: "Cutting-edge automation that gives you the competitive edge.",
    color: "purple",
    graphic: (
      <svg viewBox="0 0 100 100" className="absolute bottom-4 right-0 w-56 h-56 text-purple-500/20 pointer-events-none translate-x-16 translate-y-8 transition-all duration-1000 group-hover:scale-125 group-hover:text-purple-500/30">
        <g className="origin-center" style={{ animation: 'spin 20s linear infinite' }}>
          <ellipse cx="50" cy="50" rx="40" ry="20" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(-20 50 50)" />
          <ellipse cx="50" cy="50" rx="30" ry="15" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(40 50 50)" />
          <ellipse cx="50" cy="50" rx="20" ry="10" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(80 50 50)" />
        </g>
        <circle cx="50" cy="50" r="3" fill="#a855f7" className="drop-shadow-[0_0_10px_rgba(168,85,247,1)] animate-pulse" />
        <circle cx="15" cy="35" r="1.5" fill="#a855f7" opacity="0.5" />
        <circle cx="85" cy="65" r="1.5" fill="#a855f7" opacity="0.5" />
      </svg>
    )
  },
  {
    icon: Zap,
    title: "Creative + Technical",
    desc: "Where artistic vision meets engineering precision for flawless execution.",
    color: "purple",
    graphic: (
      <svg viewBox="0 0 100 100" className="absolute bottom-0 right-0 w-56 h-56 pointer-events-none transition-all duration-700 scale-110 -translate-x-4 -translate-y-4 text-purple-500/30">
        <path fill="none" stroke="currentColor" strokeWidth="0.5" d="M-20,100 C0,80 20,100 40,80 C60,60 80,80 100,60 C120,40 140,60 160,40" />
        <path fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" d="M-20,90 C0,70 20,90 40,70 C60,50 80,70 100,50 C120,30 140,50 160,30" />
        <path fill="none" stroke="currentColor" strokeWidth="0.5" d="M-20,80 C0,60 20,80 40,60 C60,40 80,60 100,40 C120,20 140,40 160,20" />
        <path fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" d="M-20,70 C0,50 20,70 40,50 C60,30 80,50 100,30 C120,10 140,30 160,10" />
      </svg>
    )
  },
  {
    icon: TrendingUp,
    title: "Result-Focused",
    desc: "We measure success in your growth metrics, not vanity stats.",
    color: "orange",
    graphic: (
      <svg viewBox="0 0 100 100" className="absolute bottom-4 right-0 w-56 h-56 text-orange-500/20 pointer-events-none translate-x-16 translate-y-4 transition-all duration-1000 group-hover:scale-125 group-hover:text-orange-500/30">
        <g className="origin-center" style={{ animation: 'spin 15s linear infinite' }}>
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
          <path fill="none" stroke="currentColor" strokeWidth="0.5" d="M50,10 L50,90 M10,50 L90,50" />
        </g>
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="3" fill="#f97316" className="drop-shadow-[0_0_10px_rgba(249,115,22,1)] animate-pulse" />
      </svg>
    )
  }
];

function FeatureCard({ item, idx }: { item: any; idx: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isOrange = item.color === "orange";
  const isActive = item.title === "Creative + Technical";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={`group relative p-8 sm:p-10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:bg-[#0d0d12] hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black ${
        isActive 
          ? 'bg-[#0d0d12] border border-white/[0.12] border-t-white/[0.12] -translate-y-1 shadow-2xl shadow-black' 
          : 'bg-[#0a0a0c] border border-white/[0.04] border-t-white/[0.08]'
      }`}
    >
      {/* Dynamic Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              ${isOrange ? 'rgba(249, 115, 22, 0.12)' : 'rgba(168, 85, 247, 0.12)'},
              transparent 80%
            )
          `,
        }}
      />

      {/* Background Graphic */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-700 group-hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
        {item.graphic}
      </div>

      <div className="relative z-10 flex flex-col h-full mt-4">
        <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-700 ease-out border backdrop-blur-md ${
          isOrange 
            ? `bg-gradient-to-b from-orange-500/10 to-orange-500/5 border-orange-500/20 group-hover:border-orange-500/50 group-hover:shadow-[inset_0_0_20px_rgba(249,115,22,0.2),0_0_20px_rgba(249,115,22,0.2)] group-hover:bg-orange-500/20 ${isActive ? 'border-orange-500/50 shadow-[inset_0_0_20px_rgba(249,115,22,0.2),0_0_20px_rgba(249,115,22,0.2)] bg-orange-500/20' : ''}`
            : `bg-gradient-to-b from-purple-500/10 to-purple-500/5 border-purple-500/20 group-hover:border-purple-500/50 group-hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.2),0_0_20px_rgba(168,85,247,0.2)] group-hover:bg-purple-500/20 ${isActive ? 'border-purple-500/50 shadow-[inset_0_0_20px_rgba(168,85,247,0.2),0_0_20px_rgba(168,85,247,0.2)] bg-purple-500/20' : ''}`
        }`}>
          {/* Subtle inner corner glow for the icon box */}
          <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${isOrange ? 'from-orange-400/20' : 'from-purple-400/20'} to-transparent rounded-t-2xl transition-opacity duration-500 group-hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
          <item.icon className={`w-7 h-7 transition-transform duration-500 group-hover:scale-110 ${isOrange ? 'group-hover:text-orange-200' : 'group-hover:text-purple-200'} ${isActive ? `scale-110 ${isOrange ? 'text-orange-200' : 'text-purple-200'}` : 'text-white'}`} strokeWidth={1.5} />
        </div>
        
        <h3 className={`text-2xl font-semibold mb-4 tracking-tight transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400' : 'text-white'}`}>
          {item.title}
        </h3>
        
        {/* Tiny Gradient Line */}
        <div className={`h-[2px] mb-4 transition-all duration-500 group-hover:w-16 ${
          isOrange ? 'bg-gradient-to-r from-orange-500 to-transparent' : 'bg-gradient-to-r from-purple-500 to-transparent'
        } ${isActive ? 'w-16' : 'w-8'}`} />

        <p className={`text-base leading-relaxed font-light transition-colors duration-500 group-hover:text-gray-300 ${isActive ? 'text-gray-300' : 'text-gray-400/80'}`}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function WhyUs() {
  return (
    <section className="py-20 md:py-24 relative bg-[#030305] border-t border-white/[0.02] overflow-hidden">
      {/* Minimalistic Ambient Glows */}
      <div className="absolute top-[10%] right-[10%] w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[0%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      {/* Super subtle dot grid */}
      <div className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/5 bg-white/[0.01] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-100" />
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </div>
              <span className="text-xs font-medium text-white/70 tracking-widest uppercase relative z-10">Why Choose Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-6 leading-[1.05]">
              <span className="text-white">We architect digital empires.</span>
            </h2>
            
            <div className="relative pl-6 md:pl-8 border-l border-white/10 mb-8">
              <div className="absolute left-[-1px] top-0 w-[2px] h-1/3 bg-gradient-to-b from-orange-500 to-transparent" />
              <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-lg">
                Experience the perfect synthesis of breathtaking aesthetics and ruthless technical precision. We partner with visionaries to scale brands and dominate the market.
              </p>
            </div>

            <button className="group relative inline-flex items-center gap-4 px-2 py-2 pr-6 bg-white/[0.03] border border-white/10 rounded-full overflow-hidden hover:border-orange-500/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-orange-500 group-hover:rotate-45 transition-all duration-500 shadow-lg">
                <ArrowUpRight className="w-5 h-5 text-black" />
              </div>
              <span className="relative z-10 text-white font-medium tracking-wide">Start Your Project</span>
            </button>
          </motion.div>

          <div className="flex-[1.2] w-full grid sm:grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-purple-500/5 blur-[80px] -z-10 rounded-full" />
            
            {/* Left Staggered Column */}
            <div className="flex flex-col gap-6 sm:mt-12">
              {features.slice(0, 2).map((item, idx) => (
                <FeatureCard key={idx} item={item} idx={idx} />
              ))}
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {features.slice(2, 4).map((item, idx) => (
                <FeatureCard key={idx + 2} item={item} idx={idx + 2} />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
