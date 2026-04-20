import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Plus, Minus, Smartphone, Cpu, Bell, Star, RefreshCw, Shield, Layers } from "lucide-react";

const faqs = [
  { q: "Do you build native iOS/Android or cross-platform apps?", a: "We primarily build with React Native (Expo) which delivers near-native performance on both iOS and Android from a single codebase — cutting development time and cost significantly. For apps requiring deep native capabilities (complex AR, Bluetooth, specialized hardware), we build fully native Swift or Kotlin apps." },
  { q: "How long does app development take?", a: "An MVP (minimum viable product) with core features takes 8-12 weeks. A full-featured app with complex backend, payments, and social features typically takes 16-24 weeks. We always recommend starting with an MVP to validate before building everything." },
  { q: "Do you handle App Store and Google Play submission?", a: "Yes — we handle the full submission process including app store optimization (ASO), metadata, screenshots, preview videos, compliance checks, and managing review feedback. We've submitted 100+ apps and know exactly what reviewers look for." },
  { q: "What about backend and APIs for the app?", a: "We build the entire stack — mobile frontend, REST/GraphQL API, database, admin panel, and cloud infrastructure. You get a single team handling everything, which means no finger-pointing between vendors when something breaks." },
  { q: "Do you provide ongoing app maintenance?", a: "Yes. We offer maintenance retainers covering OS update compatibility, bug fixes, performance monitoring, security patches, and ongoing feature development. Apps require continuous care — we're your long-term engineering partner." },
];

const offerings = [
  { icon: Smartphone, label: "React Native Apps", desc: "Cross-platform iOS & Android development with native performance." },
  { icon: Layers, label: "UI/UX Design", desc: "Intuitive, beautiful interface design with full Figma prototyping." },
  { icon: Cpu, label: "Backend & APIs", desc: "Scalable backend infrastructure and API development built to grow with you." },
  { icon: Bell, label: "Push Notifications", desc: "Engagement systems, in-app messaging, and lifecycle notification flows." },
  { icon: Star, label: "App Store Launch", desc: "ASO optimization, store listing, and full submission management." },
  { icon: Shield, label: "Security & Compliance", desc: "Data encryption, secure auth, and GDPR/CCPA compliance built in." },
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

export default function AppDevelopment() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-1/4 right-0 w-2/3 h-2/3 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #10b981 0%, transparent 70%)", filter: "blur(100px)" }} />
        <div className="absolute -bottom-1/4 left-0 w-1/2 h-1/2 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(rgba(16,185,129,0.08) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
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
              <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6">App Development</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Apps Users <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Actually Love</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                We build high-performance mobile apps for iOS and Android that users rave about — combining stunning design, rock-solid engineering, and thoughtful UX that drives retention.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:hello@agenvy.com" className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-emerald-900/40">Start Your App</a>
                <a href="#what-we-do" className="px-8 py-4 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/25 transition-all font-semibold">See What's Included</a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[["50+", "Apps Shipped"], ["4.8★", "Avg. App Store Rating"], ["50K+", "Avg. Launch Downloads"], ["iOS+Android", "Both Platforms"]].map(([val, lab]) => (
                <div key={lab} className="text-center"><div className="text-3xl md:text-4xl font-bold text-white mb-1">{val}</div><div className="text-xs text-gray-500 uppercase tracking-wider">{lab}</div></div>
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
                  className="p-6 rounded-2xl border border-white/8 bg-white/[0.025] hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-emerald-400" />
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

        <div className="py-24 px-6 border-t border-white/5 text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-5">Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">Launch?</span></h2>
            <p className="text-gray-400 mb-8">Let's turn your app idea into a product your users can't live without.</p>
            <a href="mailto:hello@agenvy.com" className="inline-flex px-10 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-emerald-900/40">Book Discovery Call</a>
          </div>
        </div>
      </div>
    </div>
  );
}
