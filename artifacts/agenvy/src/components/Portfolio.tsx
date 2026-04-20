import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Nexus Protocol", category: "Web3 Platform", image: "/portfolio-1.png" },
  { id: 2, title: "Aura Analytics", category: "SaaS Dashboard", image: "/portfolio-2.png" },
  { id: 3, title: "Lumina Edge", category: "Brand Identity", image: "/portfolio-3.png" },
  { id: 4, title: "Echo Systems", category: "AI Interface", image: "/portfolio-4.png" },
  { id: 5, title: "Vortex Engine", category: "Enterprise App", image: "/portfolio-5.png" },
  { id: 6, title: "Zenith Flow", category: "E-Commerce", image: "/portfolio-6.png" },
];

export function Portfolio() {
  return (
    <section id="work" className="py-32 relative bg-[#0a0a0f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A curated selection of our finest digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gray-900 z-0">
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-in-out" />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-sm bg-black/20">
                <span className="px-6 py-3 rounded-full border border-white/30 text-white font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  View Case Study
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 z-30 translate-y-0 group-hover:-translate-y-4 transition-transform duration-500 ease-out">
                <p className="text-primary font-medium mb-2 uppercase tracking-wider text-xs">
                  {project.category}
                </p>
                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
