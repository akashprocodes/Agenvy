import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          AGENVY
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {["Services", "About", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="relative group px-6 py-2.5 rounded-full overflow-hidden bg-transparent border border-white/20 hover:border-transparent transition-all">
          <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 text-sm font-semibold text-white">Book a Call</span>
        </button>
      </div>
    </motion.header>
  );
}
