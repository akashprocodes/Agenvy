# Agenvy - AI Agent Guide

**Project Type:** Modern Agency Landing Page (React + TypeScript)  
**Tech Stack:** React 19, TypeScript, Vite, TailwindCSS, Framer Motion, Radix UI  
**Design System:** Minimal, futuristic with orange/purple accent colors  
**Target:** Help agents quickly understand codebase conventions and accelerate feature development

---

## 📋 Quick Start Commands

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm serve

# Type checking
pnpm typecheck
```

---

## 🏗️ Project Architecture

### Homepage Structure
The landing page (`src/App.tsx`) is composed of modular sections rendered sequentially:

```tsx
HomePage:
├── Hero                  // Animated hero with rotating words, cyber rings, data streams
├── Services             // 6 service cards with video mockups (clickable for detail pages)
├── About                // Company background and value proposition
├── Portfolio            // Featured client projects with alternating left/right layout
├── WhyUs                // 4 feature cards highlighting company strengths
├── Testimonials         // Client testimonials carousel
├── CTASection           // Final call-to-action
└── Footer               // Navigation and social links
```

### Service Pages
Each service has a detail page in `src/pages/services/`:
- SocialMedia.tsx
- SEO.tsx
- MetaAds.tsx
- VideoEditing.tsx
- AIAutomation.tsx
- WebDevelopment.tsx
- AppDevelopment.tsx

Each service page displays related project case studies via the `RecentProjects` component.

---

## 🎨 Design System & Patterns

### Color Palette
- **Primary Accent:** Orange (`#f97316`, `rgb(249, 115, 22)`)
- **Secondary Accent:** Purple (`#a855f7`, `rgb(168, 85, 247)`)
- **Background:** Deep dark (`#0a0a0f`, `#0d0d12`)
- **Text:** White with opacity variants (`text-white/40`, `text-white/60`)
- **Borders:** Subtle white (`border-white/[0.04]` to `border-white/[0.12]`)

### Tailwind Conventions
- **Spacing:** Use `px-8 md:px-12` for horizontal padding, `py-8` for vertical
- **Shadows:** Primarily `shadow-2xl shadow-black` or `drop-shadow-[0_0_10px_rgba(...)]`
- **Borders:** Rounded corners with `rounded-[2rem]` or `rounded-2xl`
- **Responsive:** Mobile-first with `sm:`, `md:`, `lg:` breakpoints

### Animation Patterns (Framer Motion)
All components use consistent animation patterns:

```tsx
// Scroll-triggered animations
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-50px" }}
transition={{ duration: 0.6, delay: 0.1 * index }}

// Hover effects
whileHover={{ scale: 1.02, y: -4 }}
transition={{ duration: 0.3 }}

// Custom easing
ease: [0.16, 1, 0.3, 1]  // Smooth "overshoot" easing
```

### Component Styling Patterns

**Glowing Effect Cards:**
- Border with gradient: `background: rgba(249, 115, 22, 0.4)` on hover
- Glow layer: `bg-orange-600/10 rounded-full blur-[80px]`
- HUD corner accents: `border-orange-500/50` lines at corners
- Mix blend: `mix-blend-screen` for overlay effects

**Feature Cards:**
- Base: `bg-[#0a0a0c] border border-white/[0.04]`
- Hover: `bg-[#0d0d12] hover:-translate-y-1 hover:shadow-2xl`
- Highlights: `drop-shadow-[0_0_10px_rgba(168,85,247,1)]` for glows

---

## 📂 File Structure & Component Patterns

### New Section Component Template
When creating sections like Featured Deployments:

```tsx
// src/components/FeaturedDeployments.tsx
import { motion } from "framer-motion";
import { SomeIcon } from "lucide-react";

const items = [
  { title: "...", desc: "...", tags: [...], graphic: <SVG /> },
  // More items...
];

function ItemCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 rounded-[2rem] bg-[#0a0a0c] border border-white/[0.04] hover:bg-[#0d0d12] hover:border-white/[0.12]"
    >
      {/* Content here */}
    </motion.div>
  );
}

export function FeaturedDeployments() {
  return (
    <section className="relative py-24 px-4 md:px-12 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section title and grid */}
      </div>
    </section>
  );
}
```

### SVG Graphics Pattern
Components include decorative SVG graphics as `graphic` properties:
- Positioned absolutely: `absolute bottom-0 right-0`
- Semi-transparent: `text-orange-500/10` to `text-orange-500/30`
- Scale on hover: `group-hover:scale-110 group-hover:translate-y-2`
- Animated: Some use CSS animations like `spin 20s linear infinite`

### Data Structure Patterns
- Use TypeScript interfaces for type safety
- Organize data in arrays at component top
- Use `.map()` with index for animations: `delay: index * 0.1`
- Include metadata: `category`, `tags`, `year`, `number` fields

---

## 🎯 Current Sections & Opportunities

### Existing Patterns to Replicate
1. **Portfolio** - Alternating left/right layout with glowing borders
2. **WhyUs** - 4-column feature grid with dynamic mouse tracking
3. **Services** - 6 service cards with category tags and video assets

### Featured Deployments Section (TODO)
This section should showcase live deployments/case studies. Design recommendations:
- **Style:** Minimal and beautiful, inspired by WhyUs section
- **Layout:** Could be:
  - Interactive grid with hover states
  - Minimal cards with deployment status indicators
  - Timeline or categorized layout
- **Features to Consider:**
  - Live status badges (Active, Deploying, etc.)
  - Performance metrics (Uptime, Load time)
  - Quick links or CTAs to view live
  - Deployment timeline with achievements
  - Technology stack display

---

## 🛠️ UI Components (from Radix UI)

Available shadcn/ui components in `src/components/ui/`:
- Card, Button, Badge, Tabs
- Dialog, Drawer, Sheet, Alert-Dialog
- Accordion, Collapsible, Hover-Card
- Form, Input, Select, Checkbox, Radio-Group, Toggle
- Popover, Tooltip, Context-Menu, Dropdown-Menu
- Table, Carousel, Progress, Skeleton
- And more...

**Usage:** Import from `@/components/ui/{component-name}`

---

## 📝 Development Guidelines for AI Agents

### When Enhancing Sections:
1. **Maintain Consistency:** Use existing color palette (orange/purple), spacing, and animation patterns
2. **Add Scroll Animations:** All new elements should have `whileInView` animations with staggered delays
3. **Hover States:** Implement smooth transitions (`duration: 0.3-0.5`) with scale or translate effects
4. **Typography:** Use existing text classes (`text-white`, `text-white/40`) and size patterns
5. **Responsiveness:** Always include `sm:`, `md:` variants for mobile, tablet, desktop
6. **Performance:** Use `viewport={{ once: true }}` to optimize animation rerenders
7. **Accessibility:** Include semantic HTML, alt text for images, proper heading hierarchy

### When Creating New Components:
1. Extract data to top-level arrays with TypeScript interfaces
2. Use functional components with hooks
3. Implement proper error boundaries
4. Add loading states where applicable
5. Follow the naming convention: PascalCase for components, camelCase for functions/data
6. Keep components under 300 lines; split into subcomponents if larger

### Code Quality:
- Run `pnpm typecheck` before committing
- Import from `@/` alias for internal imports
- Use destructuring for props
- Avoid inline styles; use Tailwind classes
- Keep component logic focused; move complex state to separate hooks

---

## 🚀 Common Tasks & Implementation Tips

### Adding a New Section:
1. Create component in `src/components/NewSection.tsx`
2. Add to `HomePage` in `src/App.tsx`
3. Position in page flow (typically after About, before or after Portfolio)
4. Use existing animation patterns and color scheme

### Creating a Modal/Dialog:
```tsx
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>Content</DialogContent>
</Dialog>
```

### Adding Form Fields:
```tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

<Input placeholder="Enter text" className="..." />
<Button onClick={handleSubmit}>Submit</Button>
```

### Custom Animations:
Reference `Hero.tsx` for complex animations, `Portfolio.tsx` for card hover effects, and `WhyUs.tsx` for grid layouts.

---

## 🔗 Key Files to Understand

- [src/App.tsx](src/App.tsx) - Main app entry and homepage layout
- [src/components/Hero.tsx](src/components/Hero.tsx) - Animated hero with rotation and effects
- [src/components/WhyUs.tsx](src/components/WhyUs.tsx) - Feature grid with mouse tracking (reference for minimal beautiful UI)
- [src/components/Portfolio.tsx](src/components/Portfolio.tsx) - Alternating project cards with glowing borders
- [src/components/Services.tsx](src/components/Services.tsx) - Service category cards
- [src/lib/utils.ts](src/lib/utils.ts) - Utility functions and class name merging
- [vite.config.ts](vite.config.ts) - Build configuration and path aliases

---

## 💡 Pro Tips for Agents

1. **Custom SVG Graphics:** Add unique SVG graphics in `<svg viewBox="0 0 100 100">` for visual variety
2. **Animated Backgrounds:** Use subtle rotating/pulsing elements for visual interest
3. **Performance:** Use `memo` for expensive components that don't need frequent updates
4. **Testing:** Check responsive design across breakpoints; use browser dev tools
5. **Accessibility:** Ensure color contrast ratios meet WCAG standards (especially with orange/purple)
6. **Mobile First:** Design and test mobile experience first, then enhance for larger screens

---

## 📌 Next Steps

Suggested customizations to create:
1. **Featured Deployments Component Skill** - Specific instructions for creating this section
2. **Form/Contact Integration Skill** - Guidelines for adding contact/email features
3. **Analytics Integration Skill** - Tracking and metrics setup
4. **Deployment Pipeline Hook** - CI/CD and hosting setup

---

*Last Updated: May 10, 2026*
