import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Plus, Minus, Search, BarChart2, Link2, FileText, Globe, TrendingUp, CheckCircle } from "lucide-react";
import { RecentProjects } from "../../components/RecentProjects";

const faqs = [
  { q: "How long does SEO take to show results?", a: "SEO is a long-term investment. You'll typically see technical improvements reflected within 4-6 weeks, initial ranking gains in 3-4 months, and significant organic traffic growth in 6-12 months. We provide monthly reports so you always know where you stand." },
  { q: "Do you do local SEO or only national/global?", a: "We handle both. For local businesses, we optimize Google Business Profile, local citations, geo-targeted content, and map pack rankings. For national or global brands, we focus on competitive keyword dominance and authority building." },
  { q: "What's included in your SEO audit?", a: "Our audit covers technical health (crawl errors, speed, Core Web Vitals, mobile UX), on-page optimization gaps, backlink profile analysis, competitor comparison, and a prioritized 90-day roadmap." },
  { q: "Do you provide link building?", a: "Yes — white-hat only. We build high-authority backlinks through digital PR, guest publishing, HARO responses, and strategic outreach. We never use spammy link farms that risk Google penalties." },
  { q: "Can you guarantee first-page rankings?", a: "No ethical SEO agency can guarantee specific rankings — Google's algorithm is complex and competitive. What we can guarantee is best-practice execution, transparent reporting, and a consistent upward trend based on our proven process." },
];

const offerings = [
  { icon: Search, label: "Technical SEO Audit", desc: "Full crawl analysis, Core Web Vitals, and site architecture optimization." },
  { icon: FileText, label: "On-Page Optimization", desc: "Title tags, meta descriptions, headers, schema markup, and content optimization." },
  { icon: Link2, label: "Link Building", desc: "White-hat outreach campaigns to build domain authority with quality backlinks." },
  { icon: BarChart2, label: "Keyword Strategy", desc: "Deep research to find high-intent, achievable keywords your competitors miss." },
  { icon: Globe, label: "Local & International SEO", desc: "Geo-targeted strategies for local dominance or multi-market expansion." },
  { icon: TrendingUp, label: "Reporting & Analytics", desc: "Monthly dashboards tracking rankings, traffic, and revenue attribution." },
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
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                <p className="px-7 pb-6 text-gray-400 leading-relaxed text-sm">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function SEO() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-1/4 left-1/4 w-2/3 h-2/3 rounded-full opacity-12" style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", filter: "blur(100px)" }} />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      </div>

      <div className="relative z-10">
        <div className="pt-28 pb-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-10 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
              <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-6">SEO Optimization</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Dominate <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">Search Results</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                We engineer your way to page one with data-driven keyword strategies, technical perfection, and authority-building link campaigns that deliver sustainable, compounding growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:hello@agenvy.com" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-blue-900/40">Get an SEO Audit</a>
                <a href="#what-we-do" className="px-8 py-4 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/25 transition-all font-semibold">See What's Included</a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[["8×", "Avg. Organic Traffic Increase"], ["#1", "Rankings Achieved for Clients"], ["95%", "Client Retention Rate"], ["6mo", "Avg. Time to Page 1"]].map(([val, lab]) => (
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
                  className="p-6 rounded-2xl border border-white/8 bg-white/[0.025] hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{label}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-24 px-6 border-t border-white/5">
          <div className="container mx-auto max-w-3xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold tracking-tighter mb-12">Frequently Asked Questions</motion.h2>
            <Accordion items={faqs} />
          </div>
        </div>

        <RecentProjects service="seo" accent="#3b82f6" />

        <div className="py-24 px-6 border-t border-white/5 text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-5">Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Rank #1?</span></h2>
            <p className="text-gray-400 mb-8">Get a comprehensive SEO audit and custom growth roadmap — no commitment required.</p>
            <a href="mailto:hello@agenvy.com" className="inline-flex px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-blue-900/40">Book Free SEO Audit</a>
          </div>
        </div>
      </div>
    </div>
  );
}
