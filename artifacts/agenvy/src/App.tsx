import { useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
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

const SocialMedia = lazy(() => import("./pages/services/SocialMedia"));
const SEO = lazy(() => import("./pages/services/SEO"));
const MetaAds = lazy(() => import("./pages/services/MetaAds"));
const VideoEditing = lazy(() => import("./pages/services/VideoEditing"));
const AIAutomation = lazy(() => import("./pages/services/AIAutomation"));
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const AppDevelopment = lazy(() => import("./pages/services/AppDevelopment"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

function HomePage() {
  return (
    <div className="relative bg-[#0a0a0f] text-white min-h-screen">
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
  );
}

function ServicePageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[#0a0a0f] text-white min-h-screen">
      {children}
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => { lenis.destroy(); };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/services/social-media">
              <ServicePageWrapper><SocialMedia /></ServicePageWrapper>
            </Route>
            <Route path="/services/seo">
              <ServicePageWrapper><SEO /></ServicePageWrapper>
            </Route>
            <Route path="/services/meta-ads">
              <ServicePageWrapper><MetaAds /></ServicePageWrapper>
            </Route>
            <Route path="/services/video-editing">
              <ServicePageWrapper><VideoEditing /></ServicePageWrapper>
            </Route>
            <Route path="/services/ai-automation">
              <ServicePageWrapper><AIAutomation /></ServicePageWrapper>
            </Route>
            <Route path="/services/web-development">
              <ServicePageWrapper><WebDevelopment /></ServicePageWrapper>
            </Route>
            <Route path="/services/app-development">
              <ServicePageWrapper><AppDevelopment /></ServicePageWrapper>
            </Route>
          </Switch>
        </Suspense>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
