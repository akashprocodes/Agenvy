import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ServiceKey =
  | "social-media"
  | "seo"
  | "meta-ads"
  | "video-editing"
  | "ai-automation"
  | "web-development"
  | "app-development";

interface Project {
  title: string;
  category: string;
  result: string;
  tags: string[];
  year: string;
}

const projectsData: Record<ServiceKey, Project[]> = {
  "social-media": [
    { title: "UrbanBrew Co.", category: "Organic Growth Campaign", result: "+820% Reach", tags: ["Instagram", "TikTok", "Reels"], year: "2024" },
    { title: "Luxe Living", category: "Brand Launch Strategy", result: "1.2M Impressions", tags: ["LinkedIn", "Content", "Strategy"], year: "2024" },
    { title: "FitCore App", category: "Rapid Growth Sprint", result: "48K Followers in 60 Days", tags: ["TikTok", "Community", "UGC"], year: "2023" },
  ],
  seo: [
    { title: "TechVault", category: "Technical SEO Overhaul", result: "340+ Page-1 Keywords", tags: ["Technical", "Content", "Link Building"], year: "2024" },
    { title: "Bloom Beauty", category: "E-Commerce SEO", result: "4.2x Organic Revenue", tags: ["On-Page", "Schema", "CRO"], year: "2024" },
    { title: "Nexus Finance", category: "B2B SEO Strategy", result: "280% Qualified Lead Lift", tags: ["Content", "Authority", "Local"], year: "2023" },
  ],
  "meta-ads": [
    { title: "StyleHaus", category: "Fashion Ads Campaign", result: "6.8x ROAS", tags: ["Retargeting", "Dynamic Ads", "Lookalike"], year: "2024" },
    { title: "CloudStack", category: "SaaS Meta Campaign", result: "$1.2M Pipeline Generated", tags: ["Lead Gen", "Conversion", "B2B"], year: "2024" },
    { title: "FreshBox", category: "DTC Scaling Campaign", result: "42% Lower CPA", tags: ["Creative Testing", "Scaling", "Catalog"], year: "2023" },
  ],
  "video-editing": [
    { title: "Vortex Sports", category: "Brand Film Production", result: "2.4M Organic Views", tags: ["4K", "Color Grade", "Motion"], year: "2024" },
    { title: "SavorBox", category: "Product Video Series", result: "180% Conversion Lift", tags: ["Lifestyle", "Product Demo", "Reels"], year: "2024" },
    { title: "Cascade Tech", category: "Corporate Thought Leadership", result: "12-Episode Series", tags: ["Interview", "Motion Graphics", "Brand"], year: "2023" },
  ],
  "ai-automation": [
    { title: "Apex Logistics", category: "Supply Chain AI", result: "70% Less Manual Ops", tags: ["LangChain", "n8n", "GPT-4"], year: "2024" },
    { title: "ClearBank", category: "Customer Service AI", result: "$2.4M Saved Annually", tags: ["Chatbot", "RAG", "Integration"], year: "2024" },
    { title: "HarvestPlus", category: "Agriculture Intelligence", result: "Real-Time Crop AI", tags: ["Computer Vision", "Python", "APIs"], year: "2023" },
  ],
  "web-development": [
    { title: "Prism Studio", category: "Agency Website", result: "3.8s → 0.6s Load Time", tags: ["Next.js", "Three.js", "Vercel"], year: "2024" },
    { title: "TradeDesk", category: "SaaS Platform", result: "20K+ MAU Dashboard", tags: ["React", "PostgreSQL", "Stripe"], year: "2024" },
    { title: "Opulent Stays", category: "Luxury Booking Platform", result: "58% More Direct Bookings", tags: ["Next.js", "Prisma", "Payments"], year: "2023" },
  ],
  "app-development": [
    { title: "Zenith Flow", category: "Wellness App", result: "50K Downloads · 4.8 Stars", tags: ["React Native", "Expo", "Firebase"], year: "2024" },
    { title: "QuickServe", category: "Restaurant App", result: "$4M Orders in Month 1", tags: ["iOS", "Android", "Payments"], year: "2024" },
    { title: "PocketCFO", category: "Finance App", result: "App Store Best New Apps", tags: ["Swift", "Kotlin", "Open Banking"], year: "2023" },
  ],
};

function ProjectCard({ project, accent, index }: { project: Project; accent: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width / 2;
    const cy = e.clientY - rect.top - rect.height / 2;
    setRot({ x: (cy / rect.height) * -10, y: (cx / rect.width) * 10 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setRot({ x: 0, y: 0 }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      className="group relative rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden cursor-pointer flex flex-col"
      style={{
        transform: `perspective(900px) rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateY(${hovered ? -5 : 0}px)`,
        transition: "transform 0.15s ease",
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${accent}33` : "none",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${accent}12 0%, transparent 65%)` }}
      />

      <div className="p-6 flex flex-col flex-1 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs text-gray-600 font-mono mb-1">{project.year}</p>
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: accent }}>
              {project.category}
            </p>
          </div>
          <div
            className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{
              borderColor: `${accent}40`,
              background: hovered ? `${accent}20` : "transparent",
            }}
          >
            <ArrowUpRight
              className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: hovered ? accent : "#6b7280" }}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors leading-tight">
          {project.title}
        </h3>

        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-bold"
          style={{
            background: `${accent}15`,
            color: accent,
            border: `1px solid ${accent}30`,
          }}
        >
          <span className="w-1 h-1 rounded-full" style={{ background: accent }} />
          {project.result}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium border border-white/8 text-gray-500 group-hover:border-white/15 group-hover:text-gray-400 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
      />
    </motion.div>
  );
}

interface RecentProjectsProps {
  service: ServiceKey;
  accent: string;
}

export function RecentProjects({ service, accent }: RecentProjectsProps) {
  const projects = projectsData[service] ?? [];

  return (
    <div className="py-24 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: accent }}>
              Recent Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
              Projects We're
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(135deg, ${accent}, #8b5cf6)` }}
              >
                Proud Of
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Real results for real clients — each project is a case study in growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} accent={accent} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
