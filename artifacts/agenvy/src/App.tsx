import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Lenis from "lenis";

import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { WhyUs } from "./components/WhyUs";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative bg-[#0a0a0f] text-white min-h-screen selection:bg-primary/30 selection:text-white">
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <WhyUs />
            <Testimonials />
            <CTASection />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
