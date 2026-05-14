import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { RecentProjects } from "../../components/RecentProjects";
import { ArrowLeft, Plus, Minus, TrendingUp, Users, Heart, Zap, MessageCircle, BarChart2, Target } from "lucide-react";

const faqs = [
  {
    q: "Which social media platforms do you manage?",
    a: "We manage all major platforms — Instagram, TikTok, LinkedIn, Facebook, X (Twitter), YouTube, and Pinterest. We tailor the strategy to the platforms most relevant to your audience and business goals, not a one-size-fits-all approach.",
  },
  {
    q: "How do you measure success on social media?",
    a: "We track reach, impressions, engagement rate, follower growth, website referral traffic, and most importantly — conversions and revenue attributed to social. Every 30 days you receive a detailed performance report with insights and next-step recommendations.",
  },
  {
    q: "Do you create the content or do we supply it?",
    a: "We handle everything — strategy, copywriting, graphic design, video editing, scheduling, and community management. You can supply brand assets, but we manage the full creative pipeline so you don't have to.",
  },
  {
    q: "How long before we see results?",
    a: "You'll typically see early engagement improvements in weeks 2-4. Meaningful follower growth and conversion upticks usually appear by month 2-3. We're transparent about timelines and set realistic, data-backed expectations from day one.",
  },
  {
    q: "What makes your approach different from other agencies?",
    a: "We combine data analytics with genuine creativity — no recycled templates, no vanity metrics chasing. Every post serves a funnel purpose. We build communities that convert, not just audiences that scroll.",
  },
];

const offerings = [
  { icon: Target, label: "Platform Strategy", desc: "Custom roadmap for each channel based on where your audience actually lives." },
  { icon: Heart, label: "Content Creation", desc: "Scroll-stopping graphics, reels, and copy produced in-house by our creative team." },
  { icon: Users, label: "Community Management", desc: "Daily engagement, comment replies, and DM handling to build loyalty." },
  { icon: BarChart2, label: "Analytics & Reporting", desc: "Monthly deep-dive reports with actionable insights, not just vanity numbers." },
  { icon: TrendingUp, label: "Growth Campaigns", desc: "Targeted growth sprints using collaborations, giveaways, and paid amplification." },
  { icon: Zap, label: "Viral Strategy", desc: "Trend-tapping content calendars designed for maximum organic reach." },
];

function Accordion({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="rounded-2xl border border-white/8 overflow-hidden bg-white/[0.02]">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-7 py-5 text-left"
          >
            <span className="text-white font-semibold text-base pr-4">{item.q}</span>
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              {open === i ? <Minus className="w-3 h-3 text-white" /> : <Plus className="w-3 h-3 text-white" />}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="px-7 pb-6 text-gray-400 leading-relaxed text-sm">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function SocialMedia() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)", filter: "blur(100px)" }} />
        <div className="absolute -bottom-1/4 left-0 w-1/2 h-1/2 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="relative z-10">
        <div className="pt-28 pb-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
              <span className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-6">
                Social Media Marketing
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Build Audiences <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-rose-400 to-pink-500">That Convert</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                Social media isn't just about followers — it's about building an ecosystem that attracts, nurtures, and converts your ideal customers on autopilot.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-orange-900/40">
                  Start Your Campaign
                </a>
                <a href="#what-we-do" className="px-8 py-4 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/25 transition-all font-semibold">
                  See What's Included
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[["340%", "Avg. Engagement Lift"], ["12M+", "Total Reach Delivered"], ["80+", "Brands Grown"], ["2.4×", "Avg. ROAS"]].map(([val, lab]) => (
                <div key={lab} className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">{val}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{lab}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="what-we-do" className="py-24 px-6 border-t border-white/5">
          <div className="container mx-auto max-w-5xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold tracking-tighter mb-12">
              What's Included
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {offerings.map(({ icon: Icon, label, desc }, i) => (
                <motion.div key={label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="p-6 rounded-2xl border border-white/8 bg-white/[0.025] hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{label}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <RecentProjects service="social-media" accent="#f97316" />

        <div className="py-24 px-6 border-t border-white/5">
          <div className="container mx-auto max-w-3xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold tracking-tighter mb-12">
              Frequently Asked Questions
            </motion.h2>
            <Accordion items={faqs} />
          </div>
        </div>

        <div className="py-24 px-6 border-t border-white/5 text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-5">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-500">Go Viral?</span>
            </h2>
            <p className="text-gray-400 mb-8">Book a free strategy call and we'll audit your current social presence and show you exactly where the growth opportunities are.</p>
            <a href="mailto:hello@agenvy.com" className="inline-flex px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-orange-900/40">
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
