import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

const serviceLinks = [
  { label: "Social Media Marketing", href: "/services/social-media", color: "#ec4899" },
  { label: "SEO Optimization", href: "/services/seo", color: "#3b82f6" },
  { label: "Meta Ads", href: "/services/meta-ads", color: "#f97316" },
  { label: "Video Editing", href: "/services/video-editing", color: "#8b5cf6" },
  { label: "AI Automation", href: "/services/ai-automation", color: "#06b6d4" },
  { label: "Web Development", href: "/services/web-development", color: "#6366f1" },
  { label: "App Development", href: "/services/app-development", color: "#10b981" },
];

const workProjects = [
  { number: "01", title: "E-Commerce Platform", category: "Web Application", gradient: "from-violet-900/90 via-purple-800/80 to-indigo-900/90", accent: "#7c3aed" },
  { number: "02", title: "Aura Analytics", category: "SaaS Dashboard", gradient: "from-blue-900/90 via-cyan-800/80 to-teal-900/90", accent: "#2563eb" },
  { number: "03", title: "Nexus AI Engine", category: "AI Automation", gradient: "from-pink-900/90 via-rose-800/80 to-red-900/90", accent: "#ec4899" },
  { number: "04", title: "Zenith Flow App", category: "Mobile App", gradient: "from-emerald-900/90 via-green-800/80 to-teal-900/90", accent: "#10b981" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setWorkOpen(false);
  }, [location]);

  const closeAll = () => { setServicesOpen(false); setWorkOpen(false); };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav
          className={`relative flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-500 ${scrolled
            ? "bg-black/75 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/60"
            : "bg-black/40 backdrop-blur-xl border border-white/8"
            }`}
          style={{ width: "fit-content" }}
        >
          <Link href="/" className="flex items-center flex-shrink-0 px-1 mr-1">
            <img src="/logo.png" alt="Agenvy" className="h-7 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
            <Link
              href="/"
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${location === "/" ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              {location === "/" && (
                <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/10" />
              )}
              <span className="relative z-10">Home</span>
            </Link>

            <div className="relative">
              <button
                onClick={() => { setServicesOpen((v) => !v); setWorkOpen(false); }}
                onBlur={() => setTimeout(() => setServicesOpen(false), 160)}
                className="relative flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                Services
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl bg-[#111115]/95 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/60 py-2"
                  >
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="group flex items-center justify-between px-4 py-2.5 text-sm text-gray-400 hover:text-white transition-colors hover:bg-white/5 border-b border-white/[0.04] last:border-0"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150" style={{ background: s.color }} />
                          {s.label}
                        </span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button
                onClick={() => { setWorkOpen((v) => !v); setServicesOpen(false); }}
                onBlur={() => setTimeout(() => setWorkOpen(false), 160)}
                className="relative flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                Work
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${workOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {workOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-3 w-[480px] rounded-2xl bg-[#111115]/95 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/60 p-4"
                  >
                    <div className="flex items-center justify-between mb-3 px-1">
                      <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">Selected Work</span>
                      <a href="#work" className="text-xs text-primary hover:text-white transition-colors flex items-center gap-1">
                        View All <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      {workProjects.map((p) => (
                        <a
                          key={p.number}
                          href="#work"
                          className={`group relative rounded-xl overflow-hidden bg-gradient-to-br ${p.gradient} p-4 border border-white/8 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]`}
                        >
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="w-3.5 h-3.5 text-white/60" />
                          </div>
                          <div className="text-3xl font-black opacity-10 text-white mb-2 leading-none" style={{ WebkitTextStroke: `1px rgba(255,255,255,0.3)`, color: "transparent" }}>
                            {p.number}
                          </div>
                          <div className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: p.accent }}>
                            {p.category}
                          </div>
                          <div className="text-white font-semibold text-sm leading-tight">{p.title}</div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <Link
            href="/lets-talk"
            className="hidden md:flex items-center px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-white/90 transition-colors flex-shrink-0 ml-auto"
          >
            Let's Talk
          </Link>

          <button
            className="md:hidden ml-auto p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl bg-[#111115]/95 backdrop-blur-2xl border border-white/10 p-4 shadow-2xl"
          >
            <Link href="/" className="block px-4 py-3 text-sm font-medium text-white border-b border-white/5">Home</Link>
            <div className="border-b border-white/5">
              <p className="px-4 py-2 text-xs font-semibold tracking-widest uppercase text-gray-600">Services</p>
              {serviceLinks.map((s) => (
                <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white transition-colors pl-7">
                  {s.label}
                </Link>
              ))}
            </div>
            <div className="border-b border-white/5">
              <p className="px-4 py-2 text-xs font-semibold tracking-widest uppercase text-gray-600">Work</p>
              {workProjects.map((p) => (
                <a key={p.number} href="#work" className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white transition-colors pl-7">
                  {p.title}
                </a>
              ))}
            </div>
            <Link href="/lets-talk" className="block mt-3 px-4 py-3 rounded-full bg-white text-black text-sm font-bold text-center">
              Let's Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
