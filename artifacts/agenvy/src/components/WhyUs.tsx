import { motion } from "framer-motion";
import { Database, Zap, Cpu, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Data-Driven Strategy",
    desc: "Every decision backed by analytics and real data. No guesswork, just results."
  },
  {
    icon: Zap,
    title: "Creative + Technical",
    desc: "Where artistic vision meets engineering precision for flawless execution."
  },
  {
    icon: Cpu,
    title: "AI-Powered Solutions",
    desc: "Cutting-edge automation that gives you the competitive edge."
  },
  {
    icon: TrendingUp,
    title: "Result-Focused",
    desc: "We measure success in your growth metrics, not vanity stats."
  }
];

export function WhyUs() {
  return (
    <section className="py-32 relative bg-[#0a0a0f] border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Why Choose Agenvy
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-panel group hover:bg-white/5 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 neon-glow">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
