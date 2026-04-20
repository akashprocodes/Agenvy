import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    year: "2024",
    category: "WEB APPLICATION",
    title: "E-Commerce Platform Redesign",
    description:
      "A complete overhaul of a legacy e-commerce platform, focusing on performance, accessibility, and a frictionless checkout experience. Improved conversion rates by 35%.",
    tags: ["React", "Next.js", "TailwindCSS", "Stripe"],
    gradient: "from-violet-900/80 via-purple-800/60 to-indigo-900/80",
    accent: "#7c3aed",
  },
  {
    year: "2024",
    category: "SAAS DASHBOARD",
    title: "Aura Analytics Platform",
    description:
      "End-to-end data analytics SaaS with real-time dashboards, custom report builder, and AI-generated insights. Scaled to 20,000 monthly active users within 6 months.",
    tags: ["TypeScript", "D3.js", "PostgreSQL", "OpenAI"],
    gradient: "from-blue-900/80 via-cyan-800/60 to-teal-900/80",
    accent: "#2563eb",
  },
  {
    year: "2023",
    category: "AI AUTOMATION",
    title: "Nexus Protocol AI Engine",
    description:
      "Intelligent workflow automation system integrating 12+ SaaS tools with custom AI agents. Reduced manual operations by 70% and saved the client 1,200 hours per month.",
    tags: ["Python", "LangChain", "Zapier API", "GPT-4"],
    gradient: "from-pink-900/80 via-rose-800/60 to-red-900/80",
    accent: "#ec4899",
  },
  {
    year: "2023",
    category: "MOBILE APP",
    title: "Zenith Flow Lifestyle App",
    description:
      "Cross-platform wellness app with personalized coaching, habit tracking, and community features. Launched to 50K downloads in the first month with a 4.8-star rating.",
    tags: ["React Native", "Expo", "Firebase", "RevenueCat"],
    gradient: "from-emerald-900/80 via-green-800/60 to-teal-900/80",
    accent: "#10b981",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay: 0.1 }}
      className="group relative rounded-3xl overflow-hidden border border-white/8 bg-white/[0.02]"
    >
      <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-sm text-gray-500 font-mono">{project.year}</span>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: project.accent }}
            />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: project.accent }}>
              {project.category}
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full border border-white/10 text-gray-300 text-xs font-medium bg-white/[0.03]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={`w-full md:w-[45%] relative min-h-[280px] md:min-h-[360px] flex-shrink-0 overflow-hidden ${isEven ? "" : ""}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
              style={{ background: project.accent }}
            >
              <ArrowUpRight className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <div className="absolute bottom-6 right-6 text-right">
            <span className="text-8xl font-bold opacity-[0.06] text-white select-none font-mono">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="work" className="py-32 relative bg-[#0a0a0f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Selected Work</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Featured Projects.
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs md:text-right leading-relaxed text-sm">
            A selection of recent work covering web development, product design, and interactive experiences.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 rounded-full border border-white/15 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 text-sm">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
