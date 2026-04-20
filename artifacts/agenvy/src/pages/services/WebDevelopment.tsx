import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Plus, Minus, Code2, Gauge, Shield, RefreshCw, Layers, Globe, Smartphone } from "lucide-react";
import { RecentProjects } from "../../components/RecentProjects";

const faqs = [
  { q: "What technologies do you build with?", a: "Our core stack is React / Next.js for the frontend, Node.js / Express or Python FastAPI for the backend, PostgreSQL or MongoDB for databases, and AWS / Vercel / Railway for infrastructure. We select the stack that best fits your project requirements, not the trendiest option." },
  { q: "How long does a website take to build?", a: "A landing page or brochure site takes 2-3 weeks. A full marketing site with CMS takes 4-6 weeks. A custom web application takes 8-16 weeks depending on complexity. We provide detailed timelines with milestones after our discovery session." },
  { q: "Do you handle design or just development?", a: "Both. We have in-house UI/UX designers who produce Figma prototypes before a single line of code is written. You approve the design before development begins, and we iterate until it's exactly right." },
  { q: "Will my website be fast and SEO-friendly?", a: "Performance and SEO are built in by default — not bolted on. We target Core Web Vitals in the 'Good' range, implement proper semantic HTML, structured data, server-side rendering where appropriate, and hand off with an SEO-ready foundation." },
  { q: "What does post-launch support look like?", a: "All projects include a 30-day bug-fix period after launch at no extra charge. We offer ongoing retainer plans for continued development, performance monitoring, security updates, and feature additions." },
];

const offerings = [
  { icon: Code2, label: "Custom Web Apps", desc: "Full-stack applications built for scale, performance, and exceptional UX." },
  { icon: Gauge, label: "Performance Optimization", desc: "Core Web Vitals, load time, and Lighthouse score improvements for existing sites." },
  { icon: Globe, label: "Marketing Sites & Landing Pages", desc: "High-converting, beautifully designed sites with CMS integration." },
  { icon: Shield, label: "Security & Infrastructure", desc: "Secure architecture, SSL, auth systems, and cloud infrastructure setup." },
  { icon: RefreshCw, label: "Legacy Migrations", desc: "Modernizing old codebases into clean, maintainable, scalable systems." },
  { icon: Layers, label: "API Development", desc: "RESTful and GraphQL API design, documentation, and integration." },
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

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-1/4 left-0 w-3/4 h-3/4 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)", filter: "blur(100px)" }} />
        <div className="absolute -bottom-1/4 right-0 w-1/2 h-1/2 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
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
              <span className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-6">Web Development</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Built to Convert. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400">Built to Last.</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                We craft lightning-fast, visually stunning web experiences that don't just look impressive — they generate leads, drive conversions, and scale with your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:hello@agenvy.com" className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-indigo-900/40">Start Your Project</a>
                <a href="#what-we-do" className="px-8 py-4 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/25 transition-all font-semibold">See What's Included</a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[["98", "Avg. Lighthouse Score"], ["< 2s", "Load Time Target"], ["150+", "Sites Launched"], ["30d", "Bug-Fix Guarantee"]].map(([val, lab]) => (
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
                  className="p-6 rounded-2xl border border-white/8 bg-white/[0.025] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-indigo-400" />
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

        <RecentProjects service="web-development" accent="#6366f1" />

        <div className="py-24 px-6 border-t border-white/5 text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-5">Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">Build?</span></h2>
            <p className="text-gray-400 mb-8">Tell us what you're building and we'll send you a detailed proposal within 48 hours.</p>
            <a href="mailto:hello@agenvy.com" className="inline-flex px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-indigo-900/40">Start Your Project</a>
          </div>
        </div>
      </div>
    </div>
  );
}
