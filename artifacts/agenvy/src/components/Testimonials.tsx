import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
    rating: 4,
    avatar: "RV",
    color: "from-blue-600 to-cyan-700",
  },
  {
    name: "Neha Sharma",
    company: "Lumina Brands",
    role: "Marketing Head",
    quote: "Agenvy's team is incredibly professional and collaborative. They turned our vision into a beautiful online experience.",
    rating: 4,
    avatar: "NS",
    color: "from-pink-600 to-rose-700",
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
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-4 h-4 ${s <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600 fill-gray-600"}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-32 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Client Reviews</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Don't take our word for it — here's what real clients have experienced.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative p-7 rounded-3xl border border-white/8 bg-white/[0.025] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-400 flex flex-col"
            >
              <div className="absolute top-5 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-white" />
              </div>

              <StarRating rating={t.rating} />

              <p className="mt-5 text-gray-300 leading-relaxed flex-1 text-sm">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/8">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
