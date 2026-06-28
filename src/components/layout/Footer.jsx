import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Calendar } from "lucide-react";
import { NAV_LINKS, TREATMENTS } from "../../constants/data.js";

const ID_MAP = { Home: "home", About: "about", Services: "services", Doctors: "doctors", Gallery: "gallery", Testimonials: "testimonials", FAQ: "faq", Contact: "contact" };

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
};

const SOCIAL_LINKS = [
  {
    name: "Facebook", href: "#", color: "hover:bg-[#1877F2]/80 hover:border-[#1877F2]/50 hover:shadow-[0_8px_24px_rgba(24,119,242,0.4)]",
    svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  },
  {
    name: "Instagram", href: "#", color: "hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-pink-500/50 hover:shadow-[0_8px_24px_rgba(221,42,123,0.4)]",
    svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
  },
  {
    name: "YouTube", href: "#", color: "hover:bg-[#FF0000]/80 hover:border-red-500/50 hover:shadow-[0_8px_24px_rgba(255,0,0,0.4)]",
    svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
  },
  {
    name: "WhatsApp", href: "https://wa.me/", color: "hover:bg-[#25D366]/80 hover:border-green-400/50 hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)]",
    svg: <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M16.002 3.2C9.374 3.2 4 8.574 4 15.202c0 2.18.576 4.22 1.58 5.986L4 28.8l7.82-1.556A11.77 11.77 0 0 0 16.002 28C22.63 28 28 22.626 28 16S22.63 3.2 16.002 3.2zm0 21.44a9.54 9.54 0 0 1-4.876-1.334l-.35-.208-3.632.722.748-3.538-.228-.364A9.44 9.44 0 0 1 6.44 15.2c0-5.274 4.292-9.562 9.562-9.562 5.272 0 9.558 4.288 9.558 9.562 0 5.274-4.286 9.44-9.558 9.44z"/></svg>
  },
];

const CONTACT_ITEMS = [
  { icon: Phone,  label: "+91 98765 43210",          href: "tel:+919876543210" },
  { icon: Mail,   label: "info@dentalkraft.in",       href: "mailto:info@dentalkraft.in" },
  { icon: MapPin, label: "123, MG Road, Pune 411001", href: "#" },
  { icon: Clock,  label: "Mon–Sat  ·  9 AM – 8 PM",  href: null },
];

const STATS = [
  { value: "5000+", label: "Happy Patients" },
  { value: "15+",   label: "Years Experience" },
  { value: "4.9★",  label: "Google Rating" },
  { value: "20+",   label: "Specialists" },
];

export function Footer() {
  return (
    <footer className="bg-[#070F1A] text-white relative overflow-hidden">

      {/* Deep glow orbs */}
      <div className="absolute top-0 left-0 w-[800px] h-[400px] bg-[#0B6EFD]/10 blur-[160px] rounded-full pointer-events-none -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-[#00C2FF]/8 blur-[120px] rounded-full pointer-events-none translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0B6EFD]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0B6EFD] to-transparent opacity-50" />

      {/* Stats Banner */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center group"
              >
                <div className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0B6EFD] to-[#00C2FF] font-display mb-1">{s.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 py-16">

          {/* Brand column — wider */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#0B6EFD]/25 to-[#00C2FF]/15 rounded-2xl border border-[#0B6EFD]/30 shadow-[0_0_30px_rgba(11,110,253,0.2)]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M7 3C4.23858 3 2 5.23858 2 8C2 13 7 21 7 21L12 16L17 21C17 21 22 13 22 8C22 5.23858 19.7614 3 17 3C14.2386 3 12 6 12 6C12 6 9.76142 3 7 3Z"
                    stroke="url(#f-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="f-grad" x1="2" y1="3" x2="22" y2="21" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00C2FF"/><stop offset="1" stopColor="#0B6EFD"/>
                    </linearGradient>
                  </defs>
                </svg>
                {/* Glow dot */}
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#00C2FF] shadow-[0_0_10px_rgba(0,194,255,0.8)] animate-pulse" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-extrabold text-white text-2xl tracking-tight font-display">Dental</span>
                  <span className="font-medium italic text-[#00C2FF] text-2xl font-display">Kraft</span>
                </div>
                <div className="text-[9px] text-white/30 tracking-[0.35em] uppercase font-bold mt-0.5">Crafting Smiles · Pune</div>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              Advanced dental care with expert hands and compassionate hearts. Your smile is our masterpiece — crafted with precision, delivered with care.
            </p>

            {/* Book appointment CTA */}
            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#0B6EFD] to-[#1E88E5] text-white text-sm font-bold rounded-full mb-8 hover:shadow-[0_8px_30px_rgba(11,110,253,0.5)] transition-shadow duration-300"
            >
              <Calendar size={15} />
              Book an Appointment
            </motion.button>

            {/* Social Icons */}
            <div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-4">Follow Us</div>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 ${s.color}`}
                  >
                    {s.svg}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-gradient-to-r from-[#0B6EFD] to-transparent" />
              Quick Links
            </div>
            <div className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(ID_MAP[l])}
                  className="group flex items-center gap-3 text-sm text-white/45 hover:text-white transition-all duration-200 w-full text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#0B6EFD] group-hover:shadow-[0_0_8px_rgba(11,110,253,0.8)] transition-all duration-300 flex-shrink-0" />
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-gradient-to-r from-[#0B6EFD] to-transparent" />
              Our Services
            </div>
            <div className="space-y-2.5">
              {TREATMENTS.slice(0, 7).map((s) => (
                <button
                  key={s.title}
                  onClick={() => scrollTo("services")}
                  className="group flex items-center justify-between text-sm text-white/45 hover:text-white transition-all duration-200 w-full text-left"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-lg leading-none grayscale group-hover:grayscale-0 transition-all duration-300">{s.icon}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{s.title}</span>
                  </span>
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 text-[#00C2FF] flex-shrink-0 transition-opacity duration-200" />
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-gradient-to-r from-[#0B6EFD] to-transparent" />
              Get In Touch
            </div>
            <div className="space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label, href }) => (
                <div key={label} className="group flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0B6EFD]/15 to-[#00C2FF]/10 border border-[#0B6EFD]/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#0B6EFD]/50 group-hover:shadow-[0_4px_16px_rgba(11,110,253,0.2)] transition-all duration-300">
                    <Icon size={14} className="text-[#00C2FF]" />
                  </div>
                  {href ? (
                    <a href={href} className="text-sm text-white/50 hover:text-white transition-colors duration-200 leading-snug">{label}</a>
                  ) : (
                    <span className="text-sm text-white/50 leading-snug">{label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              onClick={() => scrollTo("contact")}
              className="mt-6 relative rounded-2xl overflow-hidden h-28 bg-[#0B6EFD]/10 border border-[#0B6EFD]/20 cursor-pointer group hover:border-[#0B6EFD]/50 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B6EFD]/10 to-[#00C2FF]/5" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0B6EFD] flex items-center justify-center shadow-[0_0_20px_rgba(11,110,253,0.6)] group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={14} className="text-white" />
                </div>
                <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors duration-300 font-medium">View on Map →</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 text-center sm:text-left">
            © 2026 <span className="text-white/50 font-semibold">DentalKraft</span>. All rights reserved. &nbsp;·&nbsp; Crafted with ❤️ in Pune, India.
          </p>
          <div className="flex items-center gap-1">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item, i) => (
              <span key={item} className="flex items-center gap-1">
                {i > 0 && <span className="text-white/15 text-xs">·</span>}
                <a href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200 px-1">{item}</a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
