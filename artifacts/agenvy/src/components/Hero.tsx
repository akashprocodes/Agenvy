import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Globe } from "lucide-react";

const words = ["Growth", "Revenue", "Impact", "Results", "Success"];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block overflow-hidden align-bottom" style={{ minWidth: "280px" }}>
      <motion.span
        key={index}
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -90, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-gradient inline-block"
      >
        {words[index]}
      </motion.span>
    </span>
  );
}

function WaveMeshCanvas({ mouseRef }: { mouseRef: React.MutableRefObject<{ x: number; y: number }> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);
    let raf: number;
    let t = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);

    const COLS = 26;
    const ROWS = 18;
    const PERSP = 520;
    const AMP = 75;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      type Pt = { sx: number; sy: number; nz: number };
      const pts: Pt[][] = [];

      for (let r = 0; r <= ROWS; r++) {
        pts[r] = [];
        for (let c = 0; c <= COLS; c++) {
          const bx = (c / COLS) * W;
          const by = (r / ROWS) * H;
          const dx = c / COLS - mx;
          const dy = r / ROWS - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const z = AMP * Math.sin(dist * 4.5 - t) * Math.exp(-dist * 2.2);
          const nz = (z + AMP) / (2 * AMP);
          const s = PERSP / (PERSP - z * 0.4);
          const sx = W / 2 + (bx - W / 2) * s * 0.97 + (bx - W / 2) * 0.03;
          const sy = H / 2 + (by - H / 2) * s * 0.97 + (by - H / 2) * 0.03;
          pts[r][c] = { sx, sy, nz };
        }
      }

      for (let r = 0; r <= ROWS; r++) {
        for (let c = 0; c <= COLS; c++) {
          const p = pts[r][c];
          if (c < COLS) {
            const q = pts[r][c + 1];
            const a = 0.04 + ((p.nz + q.nz) / 2) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.sx, p.sy);
            ctx.lineTo(q.sx, q.sy);
            ctx.strokeStyle = `rgba(139,92,246,${a})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
          if (r < ROWS) {
            const q = pts[r + 1][c];
            const a = 0.04 + ((p.nz + q.nz) / 2) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.sx, p.sy);
            ctx.lineTo(q.sx, q.sy);
            ctx.strokeStyle = `rgba(139,92,246,${a})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (let r = 0; r <= ROWS; r++) {
        for (let c = 0; c <= COLS; c++) {
          const p = pts[r][c];
          const radius = 1.0 + p.nz * 4.5;
          const alpha = 0.06 + p.nz * 0.92;
          const rv = Math.round(139 + (236 - 139) * p.nz);
          const gv = Math.round(92 + (72 - 92) * p.nz);
          const bv = Math.round(246 + (153 - 246) * p.nz);
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rv},${gv},${bv},${alpha})`;
          ctx.fill();
        }
      }

      t += 0.02;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [mouseRef]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    mouseRef.current = { x: nx, y: ny };
    setMousePos({
      x: (nx - 0.5) * 2,
      y: (ny - 0.5) * 2,
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-0 overflow-hidden bg-white"
    >
      <WaveMeshCanvas mouseRef={mouseRef} />

      <div
        className="absolute top-16 right-16 w-52 h-52 rounded-full border border-violet-200/50 pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -18}px)` }}
      />
      <div
        className="absolute top-28 right-28 w-32 h-32 rounded-full border border-pink-200/40 pointer-events-none transition-transform duration-500 ease-out"
        style={{ transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` }}
      />
      <div
        className="absolute bottom-40 left-10 w-36 h-36 pointer-events-none transition-transform duration-400 ease-out"
        style={{ transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px) rotate(${mousePos.x * 12}deg)` }}
      >
        <div className="w-full h-full rounded-3xl border border-violet-300/30 rotate-12" />
      </div>
      <div
        className="absolute top-1/3 left-16 w-20 h-20 pointer-events-none transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePos.x * -45}px, ${mousePos.y * -45}px)` }}
      >
        <div className="w-full h-full border-2 border-blue-300/30" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
      </div>
      <div
        className="absolute bottom-1/3 right-20 w-14 h-14 rounded-xl border border-pink-300/30 pointer-events-none transition-transform duration-600 ease-out"
        style={{ transform: `translate(${mousePos.x * 55}px, ${mousePos.y * 40}px) rotate(${mousePos.y * -20}deg)` }}
      />
      <div
        className="absolute top-1/2 right-10 w-8 h-8 rounded-full bg-violet-400/10 pointer-events-none transition-transform duration-150 ease-out"
        style={{ transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)` }}
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            Digital Growth Agency
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-500 text-xs font-medium">
            <Zap className="w-3 h-3 text-yellow-500" />
            AI-Powered Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-6 max-w-6xl text-[#0a0a0f]"
        >
          We Build Digital
          <br />
          <RotatingWord /> Engines
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed"
        >
          Turning ambitious brands into unstoppable digital forces.
          Where engineering precision meets creative excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-semibold text-base shadow-xl shadow-purple-200/70 hover:shadow-purple-300/90 hover:scale-105 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#work"
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 text-gray-700 font-semibold text-base hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
          >
            View Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {[
            { icon: TrendingUp, value: "340%", label: "Avg. Growth" },
            { icon: Globe, value: "80+", label: "Brands Scaled" },
            { icon: Zap, value: "150+", label: "Projects Done" },
          ].map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center">
                <Icon className="w-4 h-4 text-violet-600" />
              </div>
              <div>
                <div className="text-lg font-bold text-[#0a0a0f] leading-none">{value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-14 flex flex-col items-center gap-2 text-gray-400 z-20"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-gray-400/60 to-transparent"
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0a0a0f] z-10 pointer-events-none" />
    </section>
  );
}
