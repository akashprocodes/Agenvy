import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    tag: "Social Media Marketing",
    dotColor: "bg-pink-500 text-pink-500",
    title: "Social Growth",
    desc: "Dominate the digital landscape. We craft campaigns that turn casual scrollers into loyal brand advocates.",
    pills: ["Strategy", "Content Creation", "Community"],
    mockupType: "video",
    asset: "/graph.mp4",
    href: "/services/social-media",
  },
  {
    tag: "SEO Optimization",
    dotColor: "bg-blue-500 text-blue-500",
    title: "Search Dominance",
    desc: "Own the search results. Data-driven optimization to ensure your brand is discovered by high-intent users.",
    pills: ["Technical SEO", "Backlinks", "Analytics"],
    mockupType: "video",
    asset: "/seo.mp4",
    href: "/services/seo",
  },
  {
    tag: "Meta Ads",
    dotColor: "bg-orange-500 text-orange-500",
    title: "Paid Acquisition",
    desc: "High-ROI advertising campaigns designed to scale your revenue predictably and efficiently.",
    pills: ["Strategy", "A/B Testing", "Scaling"],
    mockupType: "video",
    asset: "/meta.mp4",
    href: "/services/meta-ads",
  },
  {
    tag: "Video Editing",
    dotColor: "bg-purple-500 text-purple-500",
    title: "Cinematic Editing",
    desc: "Stop the scroll with motion. High-retention video content engineered for maximum engagement.",
    pills: ["Reels", "Commercials", "Animation"],
    mockupType: "video",
    asset: "/video_editing.mp4",
    href: "/services/video-editing",
  },
  {
    tag: "AI Automation",
    dotColor: "bg-cyan-400 text-cyan-400",
    title: "Intelligent Systems",
    desc: "Intelligent systems that work while you sleep. Scale operations seamlessly with cutting-edge AI.",
    pills: ["Chatbots", "Workflows", "Custom Agents"],
    mockupType: "video",
    asset: "/modal_ui-code.mp4",
    href: "/services/ai-automation",
  },
  {
    tag: "Web Development",
    dotColor: "bg-indigo-500 text-indigo-500",
    title: "Digital Platforms",
    desc: "Lightning-fast, high-converting websites. We build the foundation for your digital empire.",
    pills: ["React", "Performance", "E-commerce"],
    mockupType: "video",
    asset: "/modal_ui-code.mp4",
    href: "/services/web-development",
  },
  {
    tag: "App Development",
    dotColor: "bg-emerald-400 text-emerald-400",
    title: "Native Experiences",
    desc: "Native experiences users love. From zero to app store with flawless execution.",
    pills: ["iOS", "Android", "Cross-Platform"],
    mockupType: "video",
    asset: "/mobile_application.mp4",
    href: "/services/app-development",
  }
];

const PhoneMockup = () => (
  <div className="relative w-56 h-[340px] md:w-64 md:h-[400px] bg-black/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden mx-auto shadow-orange-500/10">
    <div className="absolute top-0 inset-x-0 h-5 bg-black rounded-b-xl w-24 mx-auto z-20 border-b border-x border-white/5"></div>
    <div className="absolute inset-0 p-4 pt-10 flex flex-col gap-3">
      <div className="w-full h-32 rounded-xl bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 relative overflow-hidden flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border border-orange-500/50 flex items-center justify-center">
          <div className="w-8 h-8 bg-orange-500 rounded-full blur-md"></div>
        </div>
      </div>
      <div className="w-3/4 h-2.5 rounded-full bg-orange-500/80"></div>
      <div className="w-1/2 h-2.5 rounded-full bg-white/20"></div>
      <div className="grid grid-cols-2 gap-2 mt-auto">
        <div className="h-16 rounded-xl bg-white/[0.03] border border-white/5 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-orange-500/20 rounded-full blur-xl"></div>
        </div>
        <div className="h-16 rounded-xl bg-white/[0.03] border border-white/5 relative overflow-hidden">
          <div className="absolute -left-4 -top-4 w-12 h-12 bg-orange-500/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  </div>
);

const BrowserMockup = () => (
  <div className="relative w-full max-w-sm aspect-[4/3] bg-black/80 backdrop-blur-2xl rounded-xl border border-white/10 shadow-2xl overflow-hidden mx-auto shadow-orange-500/10">
    <div className="h-8 bg-white/[0.02] flex items-center px-4 gap-1.5 border-b border-white/5">
      <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
    </div>
    <div className="p-4 flex flex-col gap-3 h-full">
      <div className="flex gap-4">
        <div className="w-1/3 h-20 rounded-lg bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 relative overflow-hidden flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-orange-500/50 flex items-center justify-center">
            <div className="w-4 h-4 bg-orange-500 rounded-full blur-[2px]"></div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-center">
          <div className="w-full h-2.5 rounded-full bg-orange-500/80"></div>
          <div className="w-5/6 h-2.5 rounded-full bg-white/20"></div>
          <div className="w-4/6 h-2.5 rounded-full bg-white/20"></div>
        </div>
      </div>
      <div className="w-full flex-1 rounded-lg bg-white/[0.02] border border-white/5 mt-2 relative overflow-hidden flex flex-col items-center justify-end pb-4">
        <div className="w-full h-1/2 bg-gradient-to-t from-orange-500/10 to-transparent absolute bottom-0"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="w-3/4 h-2 rounded-full bg-white/10 relative z-10"></div>
      </div>
    </div>
  </div>
);

const PostMockup = () => (
  <div className="relative w-64 md:w-72 bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden mx-auto shadow-orange-500/10">
    <div className="p-4 flex items-center gap-3 border-b border-white/5">
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-300 p-[2px]">
        <div className="w-full h-full rounded-full bg-black"></div>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="w-20 h-2 rounded-full bg-white/30"></div>
        <div className="w-12 h-1.5 rounded-full bg-white/10"></div>
      </div>
    </div>
    <div className="w-full aspect-square bg-white/[0.02] flex items-center justify-center p-4">
      <div className="w-full h-full rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 relative overflow-hidden shadow-inner flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
          <div className="w-8 h-8 bg-orange-500 rounded-full blur-md"></div>
        </div>
        <div className="w-24 h-2.5 rounded-full bg-orange-500/60"></div>
      </div>
    </div>
    <div className="p-4 flex flex-col gap-3">
      <div className="flex gap-3">
        <div className="w-4 h-4 rounded-full border border-orange-500/60"></div>
        <div className="w-4 h-4 rounded-full border border-white/30"></div>
      </div>
      <div className="w-3/4 h-2 rounded-full bg-white/30"></div>
      <div className="w-1/2 h-2 rounded-full bg-white/10"></div>
    </div>
  </div>
);

function ServiceCard({ service, index, isLast }: { service: any, index: number, isLast: boolean }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
      }}
      className={`group relative w-full ${!isLast ? 'mb-5 md:mb-6' : ''} overflow-hidden rounded-[2rem] border border-white/[0.055] bg-[#07070b]/95 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.11] hover:bg-[#0c0c11]`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/[0.045] blur-3xl [left:var(--x)] [top:var(--y)]" />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute -right-28 -top-28 h-64 w-64 rounded-full bg-purple-500/[0.035] blur-[90px]" />
      <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-orange-500/[0.03] blur-[90px]" />

      <div className={`relative z-10 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-10 px-6 py-9 md:px-10 md:py-11`}>
        <div className="flex-1 w-full relative z-10 flex flex-col items-start text-left">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 backdrop-blur-sm">
              <div className={`h-1.5 w-1.5 rounded-full ${service.dotColor} opacity-80 shadow-[0_0_10px_currentColor]`} />
              <span className="text-xs font-medium text-white/82 tracking-wide uppercase">{service.tag}</span>
            </div>
            <span className="rounded-full border border-white/[0.06] bg-white/[0.018] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
              0{index + 1}
            </span>
          </div>

          <h3 className="mb-5 text-4xl md:text-5xl font-medium text-white tracking-tight">
            {service.title}
          </h3>

          <p className="text-base md:text-lg text-white/48 group-hover:text-white/68 transition-colors duration-300 mb-7 leading-relaxed max-w-lg font-light">
            {service.desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {service.pills.map((pill: string, idx: number) => (
              <span key={idx} className="px-4 py-2 rounded-full border border-white/[0.08] bg-black/20 text-white/55 text-xs font-medium hover:bg-white/10 hover:text-white hover:border-white/18 transition-all duration-300 cursor-default">
                {pill}
              </span>
            ))}
          </div>

          <Link href={service.href} className="group/btn inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 pl-5 text-sm font-medium text-white/84 transition-all duration-300 hover:border-orange-400/35 hover:bg-orange-500/10 hover:text-white">
            Explore Detail
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover/btn:rotate-45">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="flex-1 w-full relative z-10 flex justify-center items-center">
          <div className="relative w-full max-w-[320px] aspect-square rounded-[2rem] flex justify-center items-center">
            <div className="absolute inset-4 rounded-full border border-white/[0.035]" />
            <div className="absolute inset-12 rounded-full bg-orange-500/[0.03] blur-3xl" />
            <div className="relative z-10 w-full flex justify-center items-center transition-transform duration-500 group-hover:scale-[1.025]">
              {service.mockupType === 'phone' && <PhoneMockup />}
              {service.mockupType === 'browser' && <BrowserMockup />}
              {service.mockupType === 'post' && <PostMockup />}
              {service.mockupType === 'video' && service.asset && (
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 shadow-orange-500/10">
                  <div className="absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-white/[0.07]" />
                  <video src={service.asset} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20 md:py-24 relative z-10 overflow-hidden bg-[#030305]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.055),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.055),transparent_32%)]" />
      <div className="absolute left-1/2 top-20 h-[680px] w-[680px] -translate-x-1/2 rounded-full border border-white/[0.018]" />
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '42px 42px' }} />

      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-14 text-center"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full border border-white/8 bg-white/[0.02] px-4 py-2 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/65">Agenvy execution stack</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-5 text-white leading-[1.02]">
            Services that <span className="bg-gradient-to-r from-orange-200 via-orange-300 to-purple-300 bg-clip-text italic text-transparent">Scale</span>
          </h2>
          <p className="text-base md:text-lg text-white/42 max-w-2xl mx-auto font-light leading-relaxed">
            Strategy, creative, engineering, and automation connected into one dark, focused growth system.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} isLast={idx === services.length - 1} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
