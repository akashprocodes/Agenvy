import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Plus, Minus, Target, DollarSign, Eye, MousePointer, RefreshCw, PieChart, Layers } from "lucide-react";
import { RecentProjects } from "../../components/RecentProjects";

const faqs = [
  { q: "What budget do I need to start Meta Ads?", a: "We typically recommend a minimum ad spend of $1,500/month to have meaningful data for optimization. With smaller budgets, there isn't enough data to make informed decisions. Our management fee is separate from your ad spend." },
  { q: "What platforms do you advertise on?", a: "We manage campaigns across Facebook, Instagram, Messenger, and the Meta Audience Network. We also offer cross-platform strategies connecting Meta with Google Ads for full-funnel coverage." },
  { q: "How do you reduce cost per acquisition?", a: "Through aggressive A/B testing of creative and copy, audience segmentation, lookalike modeling, retargeting funnel optimization, and budget allocation algorithms. We constantly iterate to lower CAC while scaling volume." },
  { q: "Do you handle creative (ads) or just campaign management?", a: "We do both. Our in-house creative team designs and copywriters produce all ad creative — static images, carousel ads, video ads, and UGC-style content. Creative is often the biggest factor in ad performance." },
  { q: "How do you track conversions and attribution?", a: "We set up Meta Pixel, Conversions API (CAPI) for server-side tracking, and custom event tracking. We also use UTM parameters with your analytics platform for multi-touch attribution beyond Meta's reporting window." },
];

const offerings = [
  { icon: Target, label: "Campaign Architecture", desc: "Full-funnel campaign structure — awareness, consideration, and conversion objectives working together." },
  { icon: Eye, label: "Creative Production", desc: "High-converting static, carousel, video, and UGC-style ad creative produced in-house." },
  { icon: Layers, label: "Audience Segmentation", desc: "Custom audiences, lookalikes, interest targeting, and retargeting lists built for maximum precision." },
  { icon: RefreshCw, label: "A/B Testing", desc: "Systematic creative and audience testing to continuously improve performance." },
  { icon: DollarSign, label: "Budget Optimization", desc: "Daily budget reallocation to your best-performing ad sets to maximize ROAS." },
  { icon: PieChart, label: "Attribution & Reporting", desc: "Pixel + CAPI setup, custom dashboards, and weekly performance snapshots." },
];

function Accordion({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="rounded-2xl border border-white/8 overflow-hidden bg-white/[0.02]">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-7 py-5 text-left">
            <span className="text-white font-semibold text-base pr-4">{item.q}</span>
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              {open === i ? <Minus className="w-3 h-3 text-white" /> : <Plus className="w-3 h-3 text-white" />}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <p className="px-7 pb-6 text-gray-400 leading-relaxed text-sm">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function MetaAds() {
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
              <span className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-6">Meta Advertising</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Turn Ad Spend <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-rose-400 to-pink-500">Into Revenue</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                Precision-targeted Meta campaigns that reach your exact customer at the exact right moment. We engineer funnels that convert cold audiences into loyal, high-value buyers.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:hello@agenvy.com" className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-orange-900/40">Start Advertising</a>
                <a href="#what-we-do" className="px-8 py-4 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/25 transition-all font-semibold">See What's Included</a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[["4.2×", "Avg. ROAS Delivered"], ["62%", "Avg. CAC Reduction"], ["$8M+", "Ad Spend Managed"], ["48hrs", "To First Live Campaign"]].map(([val, lab]) => (
                <div key={lab} className="text-center"><div className="text-4xl font-bold text-white mb-1">{val}</div><div className="text-xs text-gray-500 uppercase tracking-wider">{lab}</div></div>
              ))}
            </div>
          </div>
        </div>

        <div id="what-we-do" className="py-24 px-6 border-t border-white/5">
          <div className="container mx-auto max-w-5xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold tracking-tighter mb-12">What's Included</motion.h2>
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

        <RecentProjects service="meta-ads" accent="#f97316" />

        
<div className="py-24 px-6 border-t border-white/5">
          <div className="container mx-auto max-w-3xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold tracking-tighter mb-12">Frequently Asked Questions</motion.h2>
            <Accordion items={faqs} />
          </div>
        </div>

        <div className="py-24 px-6 border-t border-white/5 text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-5">Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400">Scale?</span></h2>
            <p className="text-gray-400 mb-8">Book a free audit and we'll show you exactly how to squeeze more revenue from your existing ad budget.</p>
            <a href="mailto:hello@agenvy.com" className="inline-flex px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-orange-900/40">Get Your Free Audit</a>
          </div>
        </div>
      </div>
    </div>
  );
}
