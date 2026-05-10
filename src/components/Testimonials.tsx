import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Star } from "lucide-react";
import { MouseEvent } from "react";

const testimonials = [
  {
    name: "Simran Kapoor",
    company: "Kapoor Ventures",
    role: "Founder & CEO",
    quote: "Their attention to detail and commitment to deadlines truly impressed us. Would definitely recommend their services.",
    rating: 5,
    avatar: "SK",
    color: "from-violet-600 to-purple-700",
  },
  {
    name: "Rahul Verma",
    company: "TechFlow Solutions",
    role: "Product Director",
    quote: "Exceptional service and creativity. The UI/UX they created was both functional and visually stunning. Conversion up 42%.",
    rating: 5,
    avatar: "RV",
    color: "from-blue-600 to-cyan-700",
  },
  {
    name: "Neha Sharma",
    company: "Lumina Brands",
    role: "Marketing Head",
    quote: "Agenvy's team is incredibly professional and collaborative. They turned our vision into a beautiful online experience.",
    rating: 5,
    avatar: "NS",
    color: "from-orange-500 to-rose-700",
  },
  {
    name: "David Kim",
    company: "Quantum Finance",
    role: "CTO",
    quote: "Breathtaking design combined with lightning-fast performance. Agenvy set a new standard for our entire industry.",
    rating: 5,
    avatar: "DK",
    color: "from-emerald-600 to-teal-700",
  },
  {
    name: "Jessica Walsh",
    company: "Elevate Lifestyle",
    role: "Creative Director",
    quote: "From brand identity to the final code, the process was seamless. Our users love the new app — 4.9 stars on App Store.",
    rating: 5,
    avatar: "JW",
    color: "from-orange-500 to-amber-600",
  },
  {
    name: "Marcus Chen",
    company: "Nexus Systems",
    role: "Operations Lead",
    quote: "The AI automation they built saved us 1,200 hours per month. ROI was visible within the first 30 days. Mind-blowing.",
    rating: 5,
    avatar: "MC",
    color: "from-indigo-600 to-violet-700",
  },
  {
    name: "Aria Patel",
    company: "SkyScale Media",
    role: "CEO",
    quote: "Meta Ads ROI went from 1.8x to 7.4x in 90 days. They know the algorithm better than anyone we've worked with.",
    rating: 5,
    avatar: "AP",
    color: "from-purple-600 to-pink-700",
  },
  {
    name: "Tom Eriksson",
    company: "Apex Nordic",
    role: "Marketing Director",
    quote: "Went from page 5 to position 1 for our top keywords in four months. Organic revenue tripled. That's all I need to say.",
    rating: 5,
    avatar: "TE",
    color: "from-cyan-600 to-blue-700",
  },
];

const row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
const row2 = [...testimonials.slice(4), ...testimonials.slice(4)];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-6">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-4 h-4 ${s <= rating ? "fill-orange-400 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.6)]" : "text-white/10 fill-white/5"}`}
        />
      ))}
    </div>
  );
}

function TestiCard({ t }: { t: typeof testimonials[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="flex-shrink-0 w-[380px] mx-4 p-8 rounded-3xl border border-white/[0.04] bg-[#0a0a0c] hover:bg-[#0d0d12] hover:border-white/[0.12] transition-all duration-500 group relative overflow-hidden"
    >
      {/* Dynamic Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(249, 115, 22, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <StarRating rating={t.rating} />
          <p className="text-gray-300/90 text-base leading-relaxed font-light">"{t.quote}"</p>
        </div>

        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/[0.04] group-hover:border-white/10 transition-colors duration-500">
          <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-br from-white/10 to-transparent flex-shrink-0">
            <div className={`w-full h-full rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold shadow-inner`}>
              {t.avatar}
            </div>
          </div>
          <div>
            <div className="text-white font-medium text-sm tracking-wide">{t.name}</div>
            <div className="text-orange-500/80 text-xs mt-1 font-mono tracking-wider">{t.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-[#030305] relative overflow-hidden border-t border-white/[0.02]">
      {/* Ambient Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      {/* Minimal Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 mb-12 md:mb-14 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Glassmorphic Badge */}
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/5 bg-white/[0.01] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-100" />
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </div>
            <span className="text-xs font-medium text-white/70 tracking-widest uppercase relative z-10">Client Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6 leading-[1.05]">
            Trusted by the best.
          </h2>
        </div>
      </div>

      <div className="relative z-10 w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div className="space-y-8 flex flex-col items-center w-full">
          {/* Row 1 - Left Scrolling */}
          <div className="flex w-full group">
            <div className="flex shrink-0 w-max group-hover:[animation-play-state:paused]" style={{ animation: "marqueeLeft 40s linear infinite" }}>
              {row1.map((t, i) => (
                <TestiCard key={`r1-${i}`} t={t} />
              ))}
            </div>
            <div className="flex shrink-0 w-max group-hover:[animation-play-state:paused]" style={{ animation: "marqueeLeft 40s linear infinite" }}>
              {row1.map((t, i) => (
                <TestiCard key={`r1-dup-${i}`} t={t} />
              ))}
            </div>
          </div>

          {/* Row 2 - Right Scrolling */}
          <div className="flex w-full group">
            <div className="flex shrink-0 w-max group-hover:[animation-play-state:paused]" style={{ animation: "marqueeRight 45s linear infinite" }}>
              {row2.map((t, i) => (
                <TestiCard key={`r2-${i}`} t={t} />
              ))}
            </div>
            <div className="flex shrink-0 w-max group-hover:[animation-play-state:paused]" style={{ animation: "marqueeRight 45s linear infinite" }}>
              {row2.map((t, i) => (
                <TestiCard key={`r2-dup-${i}`} t={t} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
