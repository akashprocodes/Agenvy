import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Code2, Megaphone, Sparkles, Video } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

const projectTypes = [
  { icon: Megaphone, title: "Growth Campaigns", desc: "Paid ads, social growth, SEO, and content systems." },
  { icon: Code2, title: "Web Platforms", desc: "Premium websites, funnels, dashboards, and e-commerce builds." },
  { icon: Bot, title: "AI Automation", desc: "Workflows, agents, CRM automations, and internal tools." },
  { icon: Video, title: "Creative Systems", desc: "Video editing, launch assets, brand motion, and conversion creatives." },
];

const processSteps = [
  "Audit your current digital presence",
  "Map the fastest path to measurable growth",
  "Build the system with weekly execution",
];

export default function LetsTalk() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
      });
      return;
    }
    try {
      setIsSubmitting(true);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          subject: `New Project Brief from ${formData.name}`,
          from_name: "Agenvy Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] pt-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(249,115,22,0.12),transparent_30%),radial-gradient(circle_at_84%_30%,rgba(168,85,247,0.12),transparent_28%),linear-gradient(180deg,#08080c_0%,#050507_62%,#0a0a0f_100%)]" />
      <div className="absolute left-1/2 top-24 h-[560px] w-[min(900px,90vw)] -translate-x-1/2 rounded-full border border-white/[0.035]" />
      <div className="absolute right-[-10%] top-1/3 h-[520px] w-[520px] rounded-full bg-purple-500/[0.06] blur-[140px]" />
      <div className="absolute bottom-0 left-[-12%] h-[520px] w-[520px] rounded-full bg-orange-500/[0.06] blur-[140px]" />

      <section className="container relative z-10 mx-auto px-6 pb-20 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/8 bg-white/[0.025] px-4 py-2 shadow-[inset_0_0_20px_rgba(255,255,255,0.025)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-white/70">Let&apos;s Talk</span>
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tighter text-white md:text-6xl lg:text-7xl">
              Build a growth system that feels premium and performs.
            </h1>
            <p className="mt-7 max-w-xl bg-gradient-to-r from-white/54 via-orange-100/78 to-purple-100/62 bg-clip-text text-base font-light leading-relaxed text-transparent md:text-lg">
              Tell us what you&apos;re building. Agenvy will help shape the strategy, creative, website, automation, and launch plan around one clear outcome: revenue.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-4 backdrop-blur-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/10 text-xs font-semibold text-orange-200">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-medium leading-snug text-white/72">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {projectTypes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.28 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="group rounded-2xl border border-white/[0.06] bg-black/20 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/25 hover:bg-white/[0.035]"
                  >
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-orange-200">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                    </div>
                    <h2 className="text-base font-semibold tracking-tight text-white">{item.title}</h2>
                    <p className="mt-2 text-sm font-light leading-relaxed text-white/45 group-hover:text-white/60">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`h-12 w-full rounded-2xl border px-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-orange-400/40 ${
                      errors.name ? "border-red-500" : "border-white/[0.08] bg-black/25"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`h-12 w-full rounded-2xl border px-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-orange-400/40 ${
                      errors.email ? "border-red-500" : "border-white/[0.08] bg-black/25"
                    }`}
                    placeholder="Email address"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>
              <div>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`h-12 w-full rounded-2xl border px-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-orange-400/40 ${
                    errors.company ? "border-red-500" : "border-white/[0.08] bg-black/25"
                  }`}
                  placeholder="Company or brand"
                />
                {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`min-h-36 w-full resize-none rounded-2xl border px-4 py-4 text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-white/30 focus:border-orange-400/40 ${
                    errors.message ? "border-red-500" : "border-white/[0.08] bg-black/25"
                  }`}
                  placeholder="What do you want Agenvy to help you build or scale?"
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-4 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-black shadow-2xl shadow-black/20 transition-all duration-300 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[236px] sm:justify-self-start"
              >
                <span className="whitespace-nowrap">
                  {isSubmitting ? "Sending..." : "Send Project Brief"}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4" />
                  )}
                </span>
              </button>
            </form>

            <div className="mt-6 grid gap-3 border-t border-white/[0.06] pt-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Email</p>
                <a href="mailto:hello@agenvy.com" className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/75 hover:text-orange-200">
                  hello@agenvy.com <Sparkles className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Best For</p>
                <p className="mt-2 text-sm font-medium text-white/75">Founders, creators, and brands ready to scale.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
