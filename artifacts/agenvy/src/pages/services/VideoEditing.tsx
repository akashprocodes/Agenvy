import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Plus, Minus, Film, Scissors, Music, Layers, Zap, MonitorPlay, Sparkles } from "lucide-react";

const faqs = [
  { q: "What types of videos do you edit?", a: "We edit everything — brand videos, product demos, social media reels, YouTube content, ad creative, explainer videos, testimonial videos, event recaps, and cinematic brand stories. If it has frames, we can craft it." },
  { q: "What's your typical turnaround time?", a: "Standard edits (under 5 min) are delivered in 3-5 business days. Complex productions with motion graphics or color grading take 7-10 days. We also offer a 48-hour rush service for time-sensitive campaigns." },
  { q: "Do you provide motion graphics and animations?", a: "Yes — title cards, lower thirds, animated logos, kinetic typography, and full motion graphic sequences. We use After Effects and Premiere Pro for professional-grade output." },
  { q: "Do you handle music and sound design?", a: "Absolutely. We source licensed music from premium libraries, handle audio mixing, add sound effects, and ensure your content sounds as good as it looks. We also work with custom soundtracks if you provide them." },
  { q: "What footage formats do you accept?", a: "We accept all major formats — MP4, MOV, ARRI RAW, RED, ProRes, and more. You can share footage via Google Drive, Dropbox, WeTransfer, or our secure project portal. Resolution up to 8K supported." },
];

const offerings = [
  { icon: Scissors, label: "Professional Editing", desc: "Story-first editing with perfect pacing, cuts, and narrative flow." },
  { icon: Sparkles, label: "Motion Graphics", desc: "Animated titles, lower thirds, overlays, and full motion graphic sequences." },
  { icon: Film, label: "Color Grading", desc: "Cinematic color correction and custom LUT application for visual consistency." },
  { icon: Music, label: "Audio Design", desc: "Music licensing, sound effects, audio mixing, and noise removal." },
  { icon: MonitorPlay, label: "Social-Ready Formats", desc: "Multi-format delivery for 16:9, 9:16 (Reels/TikTok), 1:1, and 4:5." },
  { icon: Zap, label: "Reels & Short-Form", desc: "Hook-driven short content engineered to stop the scroll and go viral." },
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

export default function VideoEditing() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-1/4 right-0 w-3/4 h-3/4 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)", filter: "blur(100px)" }} />
        <div className="absolute -bottom-1/4 left-0 w-1/2 h-1/2 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.03) 75%)", backgroundSize: "40px 40px" }} />
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
              <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-6">Video Editing</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Content That <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500">Stops the Scroll</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                Cinematic video editing and motion design that transforms raw footage into compelling stories your audience can't stop watching — and sharing.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:hello@agenvy.com" className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-900/40">Start a Project</a>
                <a href="#what-we-do" className="px-8 py-4 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/25 transition-all font-semibold">See What's Included</a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[["500+", "Videos Delivered"], ["48hrs", "Rush Turnaround"], ["8K", "Max Resolution"], ["4.9★", "Client Satisfaction"]].map(([val, lab]) => (
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
                  className="p-6 rounded-2xl border border-white/8 bg-white/[0.025] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-purple-400" />
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-5">Ready to Go <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Viral?</span></h2>
            <p className="text-gray-400 mb-8">Send us your footage and let's create something your audience will share for days.</p>
            <a href="mailto:hello@agenvy.com" className="inline-flex px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-900/40">Start Your Project</a>
          </div>
        </div>
      </div>
    </div>
  );
}
