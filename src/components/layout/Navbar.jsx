import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../constants/data.js";

export function Navbar({
  onBook
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return <motion.nav initial={{
    y: -20,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.6
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-[#0d1b2a]/5" : "bg-white/70 backdrop-blur-lg"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1a7a5e] flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div>
              <div className="font-bold text-[#0d1b2a] text-lg leading-none" style={{
              fontFamily: "Playfair Display, serif"
            }}>
                Dental Kraft
              </div>
              <div className="text-[10px] text-[#1a7a5e] tracking-widest uppercase font-medium">Crafting Beautiful Smiles</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-sm text-[#0d1b2a]/70 hover:text-[#1a7a5e] transition-colors font-medium tracking-wide">
                {link}
              </a>)}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:02041200727" className="flex items-center gap-2 text-sm text-[#0d1b2a]/70 hover:text-[#1a7a5e] transition-colors font-medium">
              <Phone size={14} />
              Call Now
            </a>
            <button onClick={onBook} className="px-5 py-2.5 bg-[#1a7a5e] text-white text-sm font-semibold rounded-full hover:bg-[#155f4a] transition-all hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95">
              Schedule Visit
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 rounded-xl hover:bg-[#0d1b2a]/5 transition" onClick={() => setOpen(!open)}>
            {open ? <X size={20} className="text-[#0d1b2a]" /> : <Menu size={20} className="text-[#0d1b2a]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-white border-t border-[#0d1b2a]/5 overflow-hidden">
            <div className="px-6 py-6 space-y-4">
              {NAV_LINKS.map(link => <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} onClick={() => setOpen(false)} className="block text-[#0d1b2a]/80 hover:text-[#1a7a5e] font-medium transition-colors">
                  {link}
                </a>)}
              <button onClick={() => {
            setOpen(false);
            onBook();
          }} className="w-full py-3 bg-[#1a7a5e] text-white font-semibold rounded-full mt-2">
                Schedule Visit
              </button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.nav>;
}
