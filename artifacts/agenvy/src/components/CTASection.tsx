import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-secondary/20 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-accent opacity-20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent" />
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Ready to Build Something <span className="text-gradient">Extraordinary?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's turn your vision into a digital reality that drives real results. The future of your brand starts here.
          </p>
          <button className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-300 neon-glow">
            Book a Free Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
