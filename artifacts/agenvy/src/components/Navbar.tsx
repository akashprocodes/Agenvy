import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Social Media Marketing", href: "/services/social-media" },
  { label: "SEO Optimization", href: "/services/seo" },
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "Video Editing", href: "/services/video-editing" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-500 ${
            isScrolled
              ? "bg-black/70 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50"
              : "bg-black/40 backdrop-blur-xl border border-white/10"
          }`}
          style={{ maxWidth: 700, width: "100%" }}
        >
          <Link href="/" className="text-lg font-bold tracking-tighter text-white mr-2 px-2 flex-shrink-0">
            AGENVY
          </Link>

          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                    className={`relative flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      active === link.label ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    {active === link.label && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-2 w-60 rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-2xl"
                      >
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    active === link.label ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {active === link.label && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                    />
                  )}
                </a>
              )
            )}
          </div>

          <Link
            href="#contact"
            className="hidden md:flex items-center px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors flex-shrink-0 ml-2"
          >
            Let's Talk
          </Link>

          <button
            className="md:hidden ml-auto p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/10 p-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white transition-colors border-b border-white/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
            {serviceLinks.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 pl-8 text-xs font-medium text-gray-400 hover:text-white transition-colors border-b border-white/5 last:border-0"
              >
                → {s.label}
              </Link>
            ))}
            <Link href="#contact" className="block mt-3 px-4 py-3 rounded-full bg-white text-black text-sm font-semibold text-center">
              Let's Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
