import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { 
  Megaphone, 
  Search, 
  Target, 
  Video, 
  Bot, 
  Code2, 
  Smartphone,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "Build communities that convert and content that goes viral.",
    color: "from-purple-500/20 to-purple-500/0",
    href: "/services/social-media",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Dominate search results with data-driven keyword strategies.",
    color: "from-blue-500/20 to-blue-500/0",
    href: "/services/seo",
  },
  {
    icon: Target,
    title: "Meta Ads",
    desc: "Precision targeting that turns ad spend into measurable revenue.",
    color: "from-pink-500/20 to-pink-500/0",
    href: "/services/meta-ads",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Cinematic content that stops the scroll and drives engagement.",
    color: "from-indigo-500/20 to-indigo-500/0",
    href: "/services/video-editing",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Automate workflows and scale operations with intelligent AI systems.",
    color: "from-cyan-500/20 to-cyan-500/0",
    href: "/services/ai-automation",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Lightning-fast websites built to convert and built to last.",
    color: "from-fuchsia-500/20 to-fuchsia-500/0",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native mobile experiences your users will actually love.",
    color: "from-violet-500/20 to-violet-500/0",
    href: "/services/app-development",
  }
];

function ServiceCard({ service, index }: { service: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer transition-transform duration-200 ease-out h-full`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Link href={service.href} className="absolute inset-0 z-20" />
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
            <service.icon className="w-7 h-7 text-white" />
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-sm">{service.desc}</p>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32 relative z-10 bg-[#0a0a0f]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Services that <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            We don't just deliver projects. We build comprehensive ecosystems designed for exponential growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className={idx === 0 ? "lg:col-span-2" : ""}>
               <ServiceCard service={service} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
