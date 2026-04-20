import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    year: "2024",
    category: "WEB APPLICATION",
    title: "E-Commerce Platform Redesign",
    description:
      "A complete overhaul of a legacy e-commerce platform, focusing on performance, accessibility, and a frictionless checkout experience. Improved conversion rates by 35%.",
    tags: ["React", "Next.js", "TailwindCSS", "Stripe"],
    gradient: "from-violet-900 via-purple-800 to-indigo-900",
    accentRgb: "124,58,237",
    number: "01",
  },
  {
    year: "2024",
    category: "SAAS DASHBOARD",
    title: "Aura Analytics Platform",
    description:
      "End-to-end data analytics SaaS with real-time dashboards, custom report builder, and AI-generated insights. Scaled to 20,000 monthly active users within 6 months.",
    tags: ["TypeScript", "D3.js", "PostgreSQL", "OpenAI"],
    gradient: "from-blue-900 via-cyan-800 to-teal-900",
    accentRgb: "37,99,235",
    number: "02",
  },
  {
    year: "2023",
    category: "AI AUTOMATION",
    title: "Nexus Protocol AI Engine",
    description:
      "Intelligent workflow automation system integrating 12+ SaaS tools with custom AI agents. Reduced manual operations by 70% and saved the client 1,200 hours per month.",
    tags: ["Python", "LangChain", "Zapier API", "GPT-4"],
    gradient: "from-pink-900 via-rose-800 to-red-900",
    accentRgb: "236,72,153",
    number: "03",
  },
  {
    year: "2023",
    category: "MOBILE APP",
    title: "Zenith Flow Lifestyle App",
    description:
      "Cross-platform wellness app with personalized coaching, habit tracking, and community features. Launched to 50K downloads in the first month with a 4.8-star rating.",
    tags: ["React Native", "Expo", "Firebase", "RevenueCat"],
    gradient: "from-emerald-900 via-green-800 to-teal-900",
    accentRgb: "16,185,129",
    number: "04",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width / 2;
    const cy = e.clientY - rect.top - rect.height / 2;
    setRot({ x: (cy / rect.height) * -7, y: (cx / rect.width) * 7 });
  };

  const handleMouseLeave = () => {
    setRot({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      className="group relative rounded-3xl overflow-hidden border border-white/8 bg-white/[0.02] cursor-pointer"
      style={{
        transform: `perspective(1200px) rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateY(${hovered ? -6 : 0}px)`,
        transition: "transform 0.18s ease, box-shadow 0.3s ease",
        boxShadow: hovered ? `0 30px 80px rgba(${project.accentRgb},0.18), 0 0 0 1px rgba(${project.accentRgb},0.2)` : "none",
      }}
    >
      <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at ${isEven ? "right" : "left"} center, rgba(${project.accentRgb},0.06) 0%, transparent 70%)` }}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-sm text-gray-600 font-mono tabular-nums">{project.year}</span>
              <span className="w-1 h-1 rounded-full" style={{ background: `rgb(${project.accentRgb})` }} />
              <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: `rgb(${project.accentRgb})` }}>
                {project.category}
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md text-sm group-hover:text-gray-300 transition-colors">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border text-xs font-medium transition-all duration-300"
                  style={{
                    borderColor: `rgba(${project.accentRgb},${hovered ? 0.4 : 0.15})`,
                    color: hovered ? `rgb(${project.accentRgb})` : "#9ca3af",
                    background: hovered ? `rgba(${project.accentRgb},0.08)` : "rgba(255,255,255,0.02)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-[44%] relative min-h-[280px] md:min-h-[360px] flex-shrink-0 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-all duration-500`}
            style={{
              filter: hovered ? `brightness(1.15) saturate(1.3)` : "brightness(1) saturate(1)",
            }}
          />
          <div
            className="absolute inset-0 opacity-25 transition-opacity duration-300 group-hover:opacity-35"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="absolute bottom-5 left-6">
            <span
              className="text-[7rem] font-black leading-none select-none tabular-nums transition-all duration-300"
              style={{
                WebkitTextStroke: `1px rgba(255,255,255,${hovered ? 0.18 : 0.1})`,
                color: "transparent",
              }}
            >
              {project.number}
            </span>
          </div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: hovered
                ? `translate(${rot.y * 0.8}px, ${rot.x * 0.8}px)`
                : "translate(0,0)",
              transition: "transform 0.18s ease",
            }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110"
              style={{
                background: `rgb(${project.accentRgb})`,
                boxShadow: hovered ? `0 0 40px rgba(${project.accentRgb},0.6)` : `0 0 20px rgba(${project.accentRgb},0.3)`,
              }}
            >
              <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>
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
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-none">
              Featured
              <br />
              <span className="text-gradient">Projects.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs md:text-right leading-relaxed text-sm">
            A selection of recent work covering web development, product design, and interactive experiences.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
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
