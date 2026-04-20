import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    company: "TechFlow Solutions",
    quote: "Agenvy completely transformed our digital presence. Our conversion rates tripled in just 3 months.",
    rating: 5
  },
  {
    name: "Marcus Chen",
    company: "Lumina Corp",
    quote: "The attention to detail and engineering precision is unmatched. They built exactly what we envisioned, but better.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    company: "Vanguard Systems",
    quote: "Not just an agency, a true growth partner. The AI automation they implemented saved us thousands of hours.",
    rating: 5
  },
  {
    name: "David Kim",
    company: "Quantum Finance",
    quote: "Breathtaking design combined with lightning-fast performance. Agenvy set a new standard for our industry.",
    rating: 5
  },
  {
    name: "Jessica Walsh",
    company: "Elevate Lifestyle",
    quote: "From brand identity to the final code, the process was seamless. Our users love the new app experience.",
    rating: 5
  }
];

export function Testimonials() {
  const containerRef = useRef(null);
  
  return (
    <section className="py-32 overflow-hidden bg-[#0a0a0f] relative">
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Don't just take <span className="text-gray-500">our word for it.</span>
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group" ref={containerRef}>
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-6 py-10 px-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {/* Double the array for seamless loop */}
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div 
              key={idx} 
              className="glass-card min-w-[350px] md:min-w-[450px] p-8 rounded-3xl flex-shrink-0 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-white font-medium mb-8 whitespace-normal leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-sm text-gray-400">{t.company}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
