import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Layers3,
  MousePointerClick,
  Sparkles,
  Zap,
} from "lucide-react";

type Accent = "orange" | "purple" | "emerald" | "cyan";

interface Deployment {
  year: string;
  category: string;
  title: string;
  description: string;
  image: string;
  status: string;
  accent: Accent;
  accentRgb: string;
  metric: string;
  metricLabel: string;
  outcome: string;
  challenge: string;
  stack: string[];
  stats: Array<{
    label: string;
    value: string;
  }>;
  timeline: string[];
}

const deployments: Deployment[] = [
  {
    year: "2024",
    category: "Commerce Engine",
    title: "E-Commerce Platform Redesign",
    description:
      "A high-converting storefront rebuilt around faster discovery, checkout recovery, and revenue analytics.",
    image: "/3D Modern Business Website website– Full Page Design from Header to Footer.jpeg",
    status: "Live",
    accent: "orange",
    accentRgb: "249, 115, 22",
    metric: "+35%",
    metricLabel: "Conversion lift",
    outcome: "Checkout became faster, product journeys became clearer, and the team finally had clean visibility into what was driving revenue.",
    challenge: "Legacy commerce flow with slow pages, weak merchandising, and too many decision points before purchase.",
    stack: ["React", "Next.js", "Stripe", "Tailwind"],
    stats: [
      { label: "Load time", value: "0.9s" },
      { label: "Uptime", value: "99.98%" },
      { label: "Recovered carts", value: "+22%" },
    ],
    timeline: ["UX audit", "Checkout rebuild", "Analytics layer", "Revenue launch"],
  },
  {
    year: "2024",
    category: "SaaS Intelligence",
    title: "Aura Analytics Platform",
    description:
      "Realtime dashboards, AI summaries, and custom reports for teams that need clarity without spreadsheet chaos.",
    image: "/portfolio-2.png",
    status: "Scaling",
    accent: "purple",
    accentRgb: "168, 85, 247",
    metric: "20k",
    metricLabel: "Monthly active users",
    outcome: "Leaders can scan performance in minutes, operators can build reports without engineering, and users stay inside the product longer.",
    challenge: "Data was spread across tools, reporting was slow, and every new question created another manual workflow.",
    stack: ["TypeScript", "D3.js", "PostgreSQL", "OpenAI"],
    stats: [
      { label: "Query speed", value: "1.1s" },
      { label: "Reports built", value: "8.4k" },
      { label: "Activation", value: "+48%" },
    ],
    timeline: ["Data model", "Dashboard system", "AI insights", "Team rollout"],
  },
  {
    year: "2023",
    category: "AI Operations",
    title: "Nexus Protocol AI Engine",
    description:
      "An agentic operations layer connecting CRM, support, reporting, and internal workflows into one automated system.",
    image: "/portfolio-3.png",
    status: "Optimized",
    accent: "emerald",
    accentRgb: "52, 211, 153",
    metric: "1,200",
    metricLabel: "Hours saved monthly",
    outcome: "Repetitive work moved into monitored automations, response times dropped, and the team reclaimed time for higher-value work.",
    challenge: "Operations relied on repetitive copy-paste tasks between 12 tools with no single source of truth.",
    stack: ["Python", "LangChain", "Zapier", "GPT-4"],
    stats: [
      { label: "Ops time", value: "-70%" },
      { label: "Workflows", value: "42" },
      { label: "Accuracy", value: "96%" },
    ],
    timeline: ["Process map", "Agent design", "Tool bridge", "QA monitor"],
  },
  {
    year: "2023",
    category: "Mobile Experience",
    title: "Zenith Flow Lifestyle App",
    description:
      "A cross-platform wellness product with habit tracking, coaching, subscriptions, and retention loops.",
    image: "/portfolio-4.png",
    status: "Active",
    accent: "cyan",
    accentRgb: "34, 211, 238",
    metric: "50k",
    metricLabel: "First-month installs",
    outcome: "The launch created a polished app-store presence, smoother onboarding, and stronger subscription conversion.",
    challenge: "The product needed to feel premium from day one while supporting content, coaching, and payments across platforms.",
    stack: ["React Native", "Expo", "Firebase", "RevenueCat"],
    stats: [
      { label: "Rating", value: "4.8" },
      { label: "Crash-free", value: "99.7%" },
      { label: "Retention", value: "+31%" },
    ],
    timeline: ["Product UX", "Mobile build", "Payments", "Store launch"],
  },
  {
    year: "2024",
    category: "Growth Funnel",
    title: "Nova Lead Generation System",
    description:
      "A high-intent landing funnel with qualification flows, CRM routing, and conversion tracking for faster sales follow-up.",
    image: "/portfolio-5.png",
    status: "Live",
    accent: "orange",
    accentRgb: "249, 115, 22",
    metric: "+62%",
    metricLabel: "Qualified lead lift",
    outcome: "The sales team received cleaner leads, faster routing, and a measurable path from campaign click to booked consultation.",
    challenge: "Traffic was arriving from paid campaigns, but the funnel was losing intent before prospects reached the sales team.",
    stack: ["Webflow", "HubSpot", "Meta Ads", "Analytics"],
    stats: [
      { label: "Lead quality", value: "+62%" },
      { label: "Form drop", value: "-28%" },
      { label: "Booked calls", value: "+41%" },
    ],
    timeline: ["Offer map", "Funnel UX", "CRM routing", "Campaign launch"],
  },
  {
    year: "2024",
    category: "Brand Platform",
    title: "Orbit Studio Brand System",
    description:
      "A refined digital brand platform with modular pages, reusable content sections, and a polished visual system.",
    image: "/portfolio-6.png",
    status: "Launched",
    accent: "purple",
    accentRgb: "168, 85, 247",
    metric: "3.1x",
    metricLabel: "Content velocity",
    outcome: "The brand team can launch pages faster, keep the website visually consistent, and present services with a sharper premium feel.",
    challenge: "The existing site looked fragmented, took too long to update, and did not match the quality of the studio's work.",
    stack: ["React", "Framer Motion", "CMS", "Design System"],
    stats: [
      { label: "Page speed", value: "92" },
      { label: "Publish time", value: "-68%" },
      { label: "Engagement", value: "+37%" },
    ],
    timeline: ["Brand audit", "UI system", "CMS setup", "Launch kit"],
  },
  {
    year: "2024",
    category: "Support Automation",
    title: "Helix AI Support Desk",
    description:
      "An AI-assisted support portal with smart ticket routing, instant answer suggestions, and customer health visibility.",
    image: "/portfolio-2.png",
    status: "Deploying",
    accent: "emerald",
    accentRgb: "52, 211, 153",
    metric: "-54%",
    metricLabel: "Response time",
    outcome: "Support agents can resolve tickets faster, customers get clearer answers, and leadership can see where friction is building.",
    challenge: "The support team was handling repetitive questions manually while priority tickets waited too long for the right specialist.",
    stack: ["AI Search", "CRM", "Automation", "Analytics"],
    stats: [
      { label: "First reply", value: "-54%" },
      { label: "Deflection", value: "+39%" },
      { label: "CSAT", value: "4.7" },
    ],
    timeline: ["Knowledge map", "Routing logic", "Agent assist", "Support launch"],
  },
];

const accentClasses: Record<Accent, { text: string; border: string; bg: string; subtle: string; ring: string }> = {
  orange: {
    text: "text-orange-300",
    border: "border-orange-500/35",
    bg: "bg-orange-500",
    subtle: "bg-orange-500/10",
    ring: "ring-orange-500/30",
  },
  purple: {
    text: "text-purple-300",
    border: "border-purple-500/35",
    bg: "bg-purple-500",
    subtle: "bg-purple-500/10",
    ring: "ring-purple-500/30",
  },
  emerald: {
    text: "text-emerald-300",
    border: "border-emerald-400/35",
    bg: "bg-emerald-400",
    subtle: "bg-emerald-400/10",
    ring: "ring-emerald-400/30",
  },
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-400/35",
    bg: "bg-cyan-400",
    subtle: "bg-cyan-400/10",
    ring: "ring-cyan-400/30",
  },
};

const platformStats = [
  { value: "14", label: "Launch sprints" },
  { value: "99.9%", label: "Avg uptime" },
  { value: "2.4x", label: "Faster iteration" },
];

function DeploymentSelector({
  deployment,
  index,
  isActive,
  onSelect,
}: {
  deployment: Deployment;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  const accent = accentClasses[deployment.accent];

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={onSelect}
      className={`group relative w-full overflow-hidden rounded-3xl border p-4 text-left transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.035] focus:outline-none focus-visible:ring-2 ${
        isActive ? `border-white/15 bg-white/[0.04] shadow-2xl shadow-black ${accent.ring}` : "border-white/[0.055] bg-white/[0.018] focus-visible:ring-white/20"
      }`}
      aria-pressed={isActive}
      aria-label={`Show deployment ${deployment.title}`}
    >
      <div
        className={`absolute inset-y-4 left-0 w-px transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        style={{ background: `linear-gradient(to bottom, transparent, rgba(${deployment.accentRgb}, 0.9), transparent)` }}
      />
      <div
        className={`absolute inset-x-4 bottom-0 h-px origin-left transition-transform duration-700 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
        style={{ background: `linear-gradient(to right, rgba(${deployment.accentRgb}, 0.95), transparent)` }}
      />

      <div className="relative z-10 flex items-start gap-4">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 ${isActive ? accent.border : "border-white/10"} ${isActive ? accent.subtle : "bg-white/[0.025] group-hover:bg-white/[0.04]"}`}>
          <span className={`text-sm font-semibold ${isActive ? accent.text : "text-white/45"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${accent.bg} ${isActive ? "animate-pulse" : "opacity-50"}`} />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
              {deployment.category}
            </span>
          </div>
          <h3 className="mt-2 text-base font-semibold tracking-tight text-white">
            {deployment.title}
          </h3>
          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="text-sm text-white/45">{deployment.status}</span>
            <span className={`text-sm font-semibold ${accent.text}`}>{deployment.metric}</span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function MetricTile({ label, value, accent }: { label: string; value: string; accent: Accent }) {
  return (
    <div className="group flex min-w-0 items-center justify-between gap-4 overflow-hidden rounded-2xl border border-white/[0.075] bg-black/20 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/12 hover:bg-white/[0.03]">
      <p className="min-w-0 text-[11px] font-medium uppercase leading-relaxed tracking-[0.24em] text-white/35">
        {label}
      </p>
      <p className={`shrink-0 whitespace-nowrap text-2xl font-semibold leading-none tracking-tight ${accentClasses[accent].text}`}>
        {value}
      </p>
    </div>
  );
}

function DeploymentStage({ deployment }: { deployment: Deployment }) {
  const accent = accentClasses[deployment.accent];

  return (
    <motion.div
      className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#08080c] shadow-2xl shadow-black"
    >
      <div
        className="absolute inset-x-0 top-0 h-40 opacity-60"
        style={{ background: `linear-gradient(to bottom, rgba(${deployment.accentRgb}, 0.12), transparent)` }}
      />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className={`h-2 w-2 rounded-full ${accent.bg}`} />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
              Deployment Command Center
            </span>
          </div>
          <span className={`rounded-full border ${accent.border} bg-white/[0.02] px-3 py-1.5 text-xs ${accent.text}`}>
            {deployment.status}
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.18fr_0.82fr]">
          <div className="relative min-h-[360px] overflow-hidden border-b border-white/[0.06] lg:min-h-[460px] lg:border-b-0 lg:border-r lg:border-white/[0.06]">
            <AnimatePresence mode="wait">
              <motion.img
                key={deployment.image}
                src={deployment.image}
                alt={`${deployment.title} preview`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 0.9, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover saturate-[0.82]"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-[#08080c]/18 to-black/20" />

            <div className="absolute left-5 top-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs text-white/60 backdrop-blur-xl">
                {deployment.year} / {deployment.category}
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <div className="max-w-xl rounded-[1.5rem] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={deployment.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                  >
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                      {deployment.title}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-white/58 sm:text-base">
                      {deployment.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-5 flex flex-wrap gap-2">
                  {deployment.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-h-[360px] flex-col justify-between p-5 sm:p-7 lg:min-h-[460px]">
            <div>
              <div className="mb-7 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/35">Deployment Command Center</p>
                  <p className="mt-2 text-sm text-white/50">Live performance snapshot</p>
                </div>
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${accent.border} ${accent.subtle}`}>
                  <BarChart3 className={`h-5 w-5 ${accent.text}`} />
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/35">{deployment.metricLabel}</p>
              <div className={`mt-3 text-5xl font-semibold tracking-tighter sm:text-6xl ${accent.text}`}>
                {deployment.metric}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/52">{deployment.outcome}</p>
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between text-xs text-white/40">
                <span>Launch readiness</span>
                <span className={accent.text}>100%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  key={deployment.title}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className={`h-full rounded-full ${accent.bg}`}
                />
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3">
              {deployment.stats.map((stat) => (
                <MetricTile key={stat.label} label={stat.label} value={stat.value} accent={deployment.accent} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DeliverySystem({ deployment }: { deployment: Deployment }) {
  const accent = accentClasses[deployment.accent];

  return (
    <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[1.5rem] border border-white/[0.07] bg-white/[0.018] p-5 shadow-2xl shadow-black/10 transition-colors duration-300 hover:border-white/12 hover:bg-white/[0.025]"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${accent.border} ${accent.subtle}`}>
            <Sparkles className={`h-4.5 w-4.5 ${accent.text}`} />
          </div>
          <div>
            <p className="font-medium text-white">Design challenge</p>
            <p className="text-sm text-white/40">What we solved first</p>
          </div>
        </div>
        <p className="text-sm font-light leading-relaxed text-white/56">{deployment.challenge}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[1.5rem] border border-white/[0.07] bg-white/[0.018] p-5 shadow-2xl shadow-black/10 transition-colors duration-300 hover:border-white/12 hover:bg-white/[0.025]"
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${accent.border} ${accent.subtle}`}>
              <Zap className={`h-4.5 w-4.5 ${accent.text}`} />
            </div>
            <div>
              <p className="font-medium text-white">Launch sequence</p>
              <p className="text-sm text-white/40">From idea to measurable lift</p>
            </div>
          </div>
          <span className={`hidden rounded-full border ${accent.border} px-3 py-1.5 text-xs ${accent.text} sm:inline-flex`}>
            {deployment.status}
          </span>
        </div>

        <div className="grid gap-2 sm:grid-cols-4">
          {deployment.timeline.map((step, index) => (
            <div key={step} className="relative">
              <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/12 hover:bg-black/30">
                <div className={`mb-3 flex h-7 w-7 items-center justify-center rounded-full ${index === deployment.timeline.length - 1 ? accent.bg : "bg-white/10"}`}>
                  {index === 0 ? (
                    <Layers3 className="h-3.5 w-3.5 text-white/55" />
                  ) : (
                    <Check className={`h-3.5 w-3.5 ${index === deployment.timeline.length - 1 ? "text-black" : "text-white/55"}`} />
                  )}
                </div>
                <p className="text-sm font-medium leading-snug text-white/80">{step}</p>
                <p className="mt-1 text-xs text-white/35">Phase {index + 1}</p>
              </div>
              {index < deployment.timeline.length - 1 && (
                <div className="absolute left-[calc(100%-4px)] top-1/2 hidden h-px w-3 bg-white/10 sm:block" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDeployment = deployments[activeIndex];

  return (
    <section id="work" className="relative overflow-hidden border-t border-white/[0.03] bg-[#040406] py-20 md:py-24">
      <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/25 to-transparent" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[min(900px,90vw)] -translate-x-1/2 rounded-full bg-orange-500/[0.035] blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full bg-purple-500/[0.05] blur-[130px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 md:mb-12 grid gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-end"
          >
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.01] px-4 py-2 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-white/70">
                  Featured Deployments
                </span>
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-tighter text-white md:text-5xl lg:text-7xl">
                Launches that feel premium and move the numbers.
              </h2>
            </div>

            <div className="relative border-l border-white/10 pl-6 md:pl-8">
              <div className="absolute left-[-1px] top-0 h-1/2 w-[2px] bg-gradient-to-b from-orange-500 to-transparent" />
              <p className="max-w-xl text-base font-light leading-relaxed text-white/52 md:text-lg">
                A curated look at production systems where strategy, interface design, engineering, and post-launch optimization worked together.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {platformStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                    <p className="text-xl font-semibold tracking-tight text-white">{stat.value}</p>
                    <p className="mt-1 text-xs text-white/40">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
            <div className="grid gap-4 self-start lg:sticky lg:top-24">
              {deployments.map((deployment, index) => (
                <DeploymentSelector
                  key={deployment.title}
                  deployment={deployment}
                  index={index}
                  isActive={activeIndex === index}
                  onSelect={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <div className="grid gap-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDeployment.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <DeploymentStage deployment={activeDeployment} />
                </motion.div>
              </AnimatePresence>

              <DeliverySystem deployment={activeDeployment} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-col items-start justify-between gap-5 rounded-[1.5rem] border border-white/[0.06] bg-white/[0.018] p-5 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10">
                <MousePointerClick className="h-4.5 w-4.5 text-orange-200" />
              </div>
              <div>
                <p className="text-base font-medium text-white">Have a product, funnel, or automation ready to ship?</p>
                <p className="mt-1 text-sm text-white/45">We can turn it into a polished deployment with measurable outcomes.</p>
              </div>
            </div>
            <button className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white px-2 py-2 pl-5 text-sm font-medium text-black transition-all duration-300 hover:border-orange-400 hover:bg-orange-500">
              Start a project
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
