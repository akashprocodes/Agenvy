import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0f] pt-24 pb-8 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold tracking-tighter text-white mb-4">AGENVY</h2>
            <p className="text-gray-400 text-sm mb-6">Engineering Digital Excellence</p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white text-gray-400 transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'App Development', 'AI Automation', 'SEO Optimization', 'Meta Ads'].map((link) => (
                <li key={link}><a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Case Studies', 'Contact'].map((link) => (
                <li key={link}><a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>hello@agenvy.com</li>
              <li>+1 (555) 000-0000</li>
              <li>100 Innovation Drive<br/>San Francisco, CA 94103</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Agenvy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
