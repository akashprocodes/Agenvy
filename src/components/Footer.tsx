import { ArrowUpRight, Instagram, Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import { Link } from "wouter";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Let's Talk", href: "/lets-talk" },
];

const serviceLinks = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "SEO Optimization", href: "/services/seo" },
  { label: "Meta Ads", href: "/services/meta-ads" },
];

const socialLinks = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/[0.06] bg-[#050507] pt-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.09),transparent_34%),radial-gradient(circle_at_84%_18%,rgba(168,85,247,0.1),transparent_30%)]" />
      <div className="absolute left-1/2 top-0 h-px w-[min(980px,90vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-400/35 to-transparent" />
      <div className="absolute bottom-[-35%] left-1/2 h-[420px] w-[min(860px,90vw)] -translate-x-1/2 rounded-full bg-purple-500/[0.05] blur-[130px]" />

      <div className="container relative z-10 mx-auto px-6">
        <Link
          href="/"
          aria-label="Agenvy home"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
            event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
          }}
          className="group relative block overflow-hidden rounded-[1.75rem] border border-white/[0.06] bg-white/[0.018] px-4 py-8 text-center shadow-2xl shadow-black/25 backdrop-blur-sm"
        >
          <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="absolute h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/15 blur-3xl [left:var(--x)] [top:var(--y)]" />
          </span>
          <span className="relative block select-none text-[17vw] font-black uppercase leading-none tracking-tighter text-white/[0.07] md:text-[13vw] lg:text-[11.5rem]">
            AGENVY
          </span>
          <span className="absolute inset-x-4 top-8 block select-none bg-[radial-gradient(240px_circle_at_var(--x)_var(--y),#ffffff_0%,#fed7aa_32%,#f97316_48%,#a855f7_72%,rgba(255,255,255,0.08)_100%)] bg-clip-text text-center text-[17vw] font-black uppercase leading-none tracking-tighter text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:text-[13vw] lg:text-[11.5rem]">
            AGENVY
          </span>
        </Link>

        <div className="grid gap-8 border-b border-white/[0.06] py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <p className="max-w-sm text-sm font-light leading-relaxed text-white/50">
              Premium websites, campaigns, automations, and digital systems for brands ready to scale with clarity.
            </p>
            <Link
              href="/lets-talk"
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 pl-5 text-sm font-semibold text-white transition-all duration-300 hover:border-orange-400/40 hover:bg-orange-500/10"
            >
              Start a project
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/35">Pages</h3>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white">
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/35">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white">
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/35">Contact</h3>
            <a href="mailto:hello@agenvy.com" className="group inline-flex items-center gap-3 text-sm font-medium text-white/70 transition-colors hover:text-orange-200">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03]">
                <Mail className="h-4 w-4" />
              </span>
              hello@agenvy.com
            </a>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-white/45 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-200"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/35 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Agenvy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
