import { Star } from "lucide-react";

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
  {
    name: "Aria Patel",
    company: "SkyScale Media",
    role: "CEO",
    quote: "Meta Ads ROI went from 1.8x to 7.4x in 90 days. They know the algorithm better than anyone we've worked with.",
    rating: 5,
    avatar: "AP",
    color: "from-fuchsia-600 to-pink-700",
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
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3.5 h-3.5 ${s <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600 fill-gray-700"}`}
        />
      ))}
    </div>
  );
}

function TestiCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-80 mx-3 p-6 rounded-2xl border border-white/8 bg-white/[0.025] hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300 group cursor-default">
      <StarRating rating={t.rating} />
      <p className="mt-4 text-gray-300 text-sm leading-relaxed">"{t.quote}"</p>
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/8">
        <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
          {t.avatar}
        </div>
        <div>
          <div className="text-white font-semibold text-sm leading-none">{t.name}</div>
          <div className="text-gray-500 text-xs mt-0.5">{t.role} · {t.company}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-32 bg-[#0a0a0f] relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Client Reviews</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm">
            Don't take our word for it — here's what real clients have experienced.
          </p>
        </div>
      </div>

      <div className="space-y-5 overflow-hidden">
        <div className="flex" style={{ animation: "marqueeLeft 35s linear infinite" }}>
          {row1.map((t, i) => (
            <TestiCard key={`r1-${i}`} t={t} />
          ))}
        </div>

        <div className="flex" style={{ animation: "marqueeRight 38s linear infinite" }}>
          {row2.map((t, i) => (
            <TestiCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
