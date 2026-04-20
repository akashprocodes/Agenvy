import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Plus, Minus, Bot, Cpu, GitBranch, Webhook, BarChart2, Lock, Layers } from "lucide-react";

const faqs = [
  { q: "What kinds of workflows can you automate?", a: "Nearly anything repetitive — lead qualification, CRM data entry, invoice processing, onboarding sequences, inventory alerts, social publishing, customer support routing, reporting, and internal approval workflows. If a human does it manually on a computer, we can probably automate it." },
  { q: "Do you build custom AI agents or use off-the-shelf tools?", a: "Both, depending on your needs. We build custom LLM-powered agents using frameworks like LangChain and OpenAI APIs for complex tasks. For simpler automation, we use best-in-class no-code tools like Make, Zapier, and n8n — whichever delivers the best outcome fastest." },
  { q: "Is my data safe with AI automation?", a: "Yes. We design with data security in mind — no sensitive data is stored unnecessarily, we follow GDPR/CCPA principles, and all API connections are secured with OAuth and encrypted credentials. We document every automation we build so you retain full ownership." },
  { q: "How do you measure the ROI of automation?", a: "Before starting, we document the current manual time spent on each process. After deployment, we measure time saved, error rate reduction, speed improvement, and cost per transaction. Most clients see full ROI within 3-6 months." },
  { q: "What integrations do you support?", a: "We connect to 500+ apps including Salesforce, HubSpot, Notion, Slack, Google Workspace, Shopify, Stripe, Airtable, and custom APIs. If it has an API, we can connect it." },
];

const offerings = [
  { icon: Bot, label: "AI Agent Development", desc: "Custom LLM-powered agents that handle complex decision-making tasks autonomously." },
  { icon: GitBranch, label: "Workflow Automation", desc: "Multi-step business process automation eliminating manual, repetitive work." },
  { icon: Webhook, label: "API Integration", desc: "Connecting your existing tools into seamless, data-consistent workflows." },
  { icon: Cpu, label: "Custom AI Models", desc: "Fine-tuned models trained on your data for company-specific intelligence." },
  { icon: Layers, label: "No-Code Automation", desc: "Zapier, Make, and n8n workflows for fast deployment without engineering overhead." },
  { icon: BarChart2, label: "Process Analytics", desc: "ROI tracking dashboards to measure time saved and efficiency gains." },
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

export default function AIAutomation() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2/3 rounded-full opacity-10" style={{ background: "radial-gradient(ellipse, #06b6d4 0%, transparent 60%)", filter: "blur(100px)" }} />
        <div className="absolute -bottom-1/4 left-0 w-1/2 h-1/2 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(to right, rgba(6,182,212,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,182,212,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
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
              <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">AI Automation</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Work Smarter. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">Scale Faster.</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                We build intelligent automation systems and AI agents that eliminate manual work, reduce errors, and unlock exponential scalability — without adding headcount.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:hello@agenvy.com" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-cyan-900/40">Book Discovery Call</a>
                <a href="#what-we-do" className="px-8 py-4 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/25 transition-all font-semibold">See What's Included</a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[["70%", "Avg. Manual Work Reduced"], ["1,200h", "Hours Saved Per Month (Avg)"], ["500+", "Integrations Supported"], ["3mo", "Avg. Full ROI Timeline"]].map(([val, lab]) => (
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
                  className="p-6 rounded-2xl border border-white/8 bg-white/[0.025] hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-cyan-400" />
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-5">Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">Automate?</span></h2>
            <p className="text-gray-400 mb-8">Let's map your manual processes and identify the highest-impact automation opportunities for your business.</p>
            <a href="mailto:hello@agenvy.com" className="inline-flex px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-cyan-900/40">Book Discovery Call</a>
          </div>
        </div>
      </div>
    </div>
  );
}
