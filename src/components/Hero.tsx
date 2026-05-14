import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Layers3, Sparkles, Target, Zap } from "lucide-react";

const words = ["Growth", "Revenue", "Impact", "Results", "Success"];

const proofCards = [
  {
    icon: Target,
    value: "80+",
    label: "Brands Scaled",
  },
  {
    icon: Layers3,
    value: "150+",
    label: "Projects Delivered",
  },
  {
    icon: Zap,
    value: "340%",
    label: "Average Growth",
  },
];

function AmbientSignals() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-1/2 top-[48%] h-[560px] w-[min(980px,120vw)] -translate-x-1/2 -translate-y-1/2 opacity-70 mix-blend-screen"
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]"
        animate={{ scale: [0.96, 1.08, 0.96], opacity: [0.28, 0.5, 0.28] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[18%] top-[28%] h-24 w-24 rounded-full bg-orange-500/[0.08] blur-[70px]"
        animate={{ x: [0, 24, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[18%] top-[48%] h-28 w-28 rounded-full bg-purple-500/[0.08] blur-[80px]"
        animate={{ x: [0, -22, 0], opacity: [0.18, 0.36, 0.18] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg
        viewBox="0 0 980 560"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="signalTrailWarm" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(249,115,22,0)" />
            <stop offset="45%" stopColor="rgba(249,115,22,0.24)" />
            <stop offset="100%" stopColor="rgba(249,115,22,0)" />
          </linearGradient>
          <linearGradient id="signalTrailCool" x1="1" x2="0" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(168,85,247,0)" />
            <stop offset="50%" stopColor="rgba(168,85,247,0.2)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0)" />
          </linearGradient>
          <radialGradient id="signalCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.38)" />
            <stop offset="42%" stopColor="rgba(249,115,22,0.16)" />
            <stop offset="100%" stopColor="rgba(249,115,22,0)" />
          </radialGradient>
          <filter id="signalGlow" x="-30%" y="-120%" width="160%" height="340%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M112 308 C246 222, 356 198, 488 280 C612 358, 728 318, 864 206"
          fill="none"
          stroke="url(#signalTrailWarm)"
          strokeLinecap="round"
          strokeWidth="1.6"
          filter="url(#signalGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 0.8, 0.32] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: 4.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
        <motion.path
          d="M166 184 C300 286, 414 320, 540 246 C662 176, 760 232, 842 326"
          fill="none"
          stroke="url(#signalTrailCool)"
          strokeLinecap="round"
          strokeWidth="1.4"
          filter="url(#signalGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 0.68, 0.28] }}
          transition={{
            duration: 6.4,
            delay: 0.7,
            repeat: Infinity,
            repeatDelay: 4.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
        <motion.circle
          cx="490"
          cy="280"
          r="74"
          fill="url(#signalCore)"
          animate={{ opacity: [0.18, 0.34, 0.18], scale: [0.96, 1.04, 0.96] }}
          style={{ transformOrigin: "490px 280px" }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <motion.span
        className="absolute left-[25%] top-[52%] h-1.5 w-1.5 rounded-full bg-orange-200 text-orange-200 shadow-[0_0_16px_currentColor]"
        animate={{ x: [0, 150, 320], y: [0, -74, -18], opacity: [0, 0.8, 0], scale: [0.8, 1.25, 0.8] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute left-[66%] top-[42%] h-1.5 w-1.5 rounded-full bg-purple-200 text-purple-200 shadow-[0_0_16px_currentColor]"
        animate={{ x: [0, -118, -260], y: [0, 54, -8], opacity: [0, 0.72, 0], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 5.8, delay: 1.1, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex min-w-[6.4ch] overflow-visible align-bottom text-orange-300">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 34, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -34, opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block bg-gradient-to-r from-orange-200 via-orange-300 to-purple-300 bg-clip-text text-transparent"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span className="absolute -bottom-7 left-0 h-8 w-full" aria-hidden="true">
        <motion.svg
          key={`underline-${index}`}
          viewBox="0 0 240 26"
          className="absolute left-0 top-1 h-5 w-full text-purple-300/80"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.path
            d="M8 15 C58 4, 154 3, 222 12"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1] }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.svg>
      </span>
    </span>
  );
}

function HeroAtmosphere() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(249,115,22,0.12),transparent_34%),radial-gradient(circle_at_78%_52%,rgba(168,85,247,0.13),transparent_30%),linear-gradient(180deg,#08080c_0%,#050507_72%,#0a0a0f_100%)]" />
      <AmbientSignals />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-[42%] h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div className="absolute inset-0 rounded-full border border-white/[0.028]" />
        <div className="absolute inset-[54px] rounded-full border border-orange-400/[0.035]" />
        <div className="absolute inset-[132px] rounded-full border border-purple-300/[0.035]" />
        <div className="absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-orange-300/45 to-transparent" />
        <div className="absolute bottom-[11%] left-[16%] h-20 w-px rotate-[130deg] bg-gradient-to-b from-purple-300/35 to-transparent" />
        <div className="absolute right-[10%] top-[24%] h-16 w-px rotate-[58deg] bg-gradient-to-b from-white/25 to-transparent" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 92, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-[42%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div className="absolute inset-0 rounded-full border border-orange-500/[0.05]" />
        <div className="absolute inset-[72px] rounded-full border border-white/[0.03]" />
        <div className="absolute left-[8%] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-orange-200/45 text-orange-200 blur-[0.5px] shadow-[0_0_22px_currentColor]" />
        <div className="absolute right-[18%] top-[16%] h-1 w-1 rounded-full bg-purple-200/45 text-purple-200 blur-[0.5px] shadow-[0_0_20px_currentColor]" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-[42%] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]"
        animate={{ scale: [0.9, 1.18, 0.9], opacity: [0.12, 0.32, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-1/2 top-[42%] h-[880px] w-[880px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_90deg,transparent_0deg,rgba(249,115,22,0.08)_48deg,transparent_90deg,transparent_180deg,rgba(168,85,247,0.07)_232deg,transparent_290deg)] opacity-50 blur-[1px] [mask-image:radial-gradient(circle,transparent_0%,black_34%,black_62%,transparent_74%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#0a0a0f]" />
    </div>
  );
}

function SignalPill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-3 rounded-full border border-white/8 bg-white/[0.025] px-4 py-2 shadow-[inset_0_0_20px_rgba(255,255,255,0.025)] backdrop-blur-md"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
      </span>
      <span className="text-xs font-medium uppercase tracking-widest text-white/70">
        Digital Growth Studio
      </span>
    </motion.div>
  );
}

function ProofCard({ item, index }: { item: (typeof proofCards)[number]; index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.86 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/25 hover:bg-white/[0.04]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-black/20 text-orange-200 shadow-[inset_0_0_18px_rgba(255,255,255,0.03)]">
          <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {item.value}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200/75">
              {item.label}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const eyebrowY = useTransform(scrollYProgress, [0, 1], [0, -76]);
  const titleYRaw = useTransform(scrollYProgress, [0, 1], [0, -210]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -126]);
  const statsY = useTransform(scrollYProgress, [0, 1], [0, -92]);
  const fade = useTransform(scrollYProgress, [0, 0.58], [1, 0]);
  const titleScaleRaw = useTransform(scrollYProgress, [0, 0.45, 1], [1, 1.18, 1.36]);
  const titleRotateRaw = useTransform(scrollYProgress, [0, 1], [0, -3.5]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.42, 0.82], [0.14, 0.58, 0.08]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.65]);
  const atmosphereYRaw = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const atmosphereScaleRaw = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const ghostYRaw = useTransform(scrollYProgress, [0, 1], [80, -190]);
  const ghostScaleRaw = useTransform(scrollYProgress, [0, 1], [0.82, 1.42]);
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.28, 0.82], [0.025, 0.09, 0]);
  const veilOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.42]);
  const heroProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const smoothConfig = { stiffness: 80, damping: 24, mass: 0.35 };
  const titleY = useSpring(titleYRaw, smoothConfig);
  const titleScale = useSpring(titleScaleRaw, smoothConfig);
  const titleRotate = useSpring(titleRotateRaw, smoothConfig);
  const atmosphereY = useSpring(atmosphereYRaw, smoothConfig);
  const atmosphereScale = useSpring(atmosphereScaleRaw, smoothConfig);
  const ghostY = useSpring(ghostYRaw, smoothConfig);
  const ghostScale = useSpring(ghostScaleRaw, smoothConfig);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[145vh] overflow-clip bg-[#08080c] px-6 text-white"
    >
      <motion.div className="absolute inset-0" style={{ y: atmosphereY, scale: atmosphereScale }}>
        <HeroAtmosphere />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[47vh] z-[1] -translate-x-1/2 select-none text-[24vw] font-black uppercase leading-none tracking-tighter text-white"
        style={{ y: ghostY, scale: ghostScale, opacity: ghostOpacity }}
      >
        AGENVY
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-[#08080c]/20 to-[#08080c]"
        style={{ opacity: veilOpacity }}
      />

      <div className="container sticky top-0 z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center pb-16 pt-28 sm:pt-32">
        <div className="mx-auto w-full max-w-6xl text-center">
          <motion.div style={{ y: eyebrowY, opacity: fade }}>
            <SignalPill />
          </motion.div>

          <motion.div
            className="relative transform-gpu will-change-transform [perspective:1000px]"
            style={{ y: titleY, opacity: fade, scale: titleScale, rotateX: titleRotate }}
          >
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-40 w-[min(720px,88vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.18),rgba(168,85,247,0.08)_45%,transparent_72%)] blur-[70px]"
              style={{ opacity: glowOpacity, scale: glowScale }}
            />
            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto mt-8 max-w-5xl text-[2.55rem] font-semibold leading-[1.06] tracking-tighter text-white drop-shadow-[0_18px_55px_rgba(0,0,0,0.42)] sm:text-5xl md:text-6xl lg:text-[5.25rem] xl:text-[5.85rem]"
            >
              Scale Your Brand For More <RotatingWord />
            </motion.h1>
          </motion.div>

          <motion.div style={{ y: copyY, opacity: fade }}>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-10 max-w-2xl bg-gradient-to-r from-white/48 via-orange-100/75 to-purple-100/60 bg-clip-text text-base font-light leading-relaxed text-transparent sm:text-lg"
            >
              A dedicated growth team building premium websites, campaigns, automations, and systems that convert attention into measurable revenue.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-5 max-w-2xl text-sm font-semibold tracking-wide text-white/72 sm:text-base"
            >
              5+ years | 80+ brands | 150+ projects delivered
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/lets-talk"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-2 py-2 pl-6 text-sm font-semibold text-black shadow-2xl shadow-black/20 transition-all duration-300 hover:bg-orange-500"
              >
                Book a Strategy Call
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-6 py-4 text-sm font-medium text-white/70 backdrop-blur-md transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-white"
              >
                <Sparkles className="h-4 w-4 text-orange-300" />
                View deployments
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          style={{ y: statsY, opacity: fade }}
          className="mx-auto mt-14 w-full max-w-5xl"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {proofCards.map((item, index) => (
              <ProofCard key={item.label} item={item} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-3 text-white/35"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.25em]">Scroll</span>
          <motion.div
            className="h-10 w-px bg-gradient-to-b from-orange-400/60 to-transparent"
            animate={{ scaleY: [1, 0.45, 1], opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 z-20 h-px origin-left bg-gradient-to-r from-orange-400/0 via-orange-300/70 to-purple-300/0"
        style={{ scaleX: heroProgress, width: "100%" }}
      />
    </section>
  );
}
