import { Phone } from "lucide-react";

export function Footer() {
  return <footer className="bg-[#0d1b2a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#1a7a5e] flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <div className="font-bold text-lg" style={{
                fontFamily: "Playfair Display, serif"
              }}>Dental Kraft</div>
                <div className="text-[10px] text-[#1a7a5e] tracking-widest uppercase">Crafting Beautiful Smiles</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Creating healthier smiles through advanced technology, expert care, and compassionate dentistry.
            </p>
            <a href="tel:02041200727" className="inline-flex items-center gap-2 mt-5 text-[#1a7a5e] font-semibold text-sm hover:text-emerald-400 transition">
              <Phone size={14} /> 02041200727
            </a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-white/30 mb-4">Quick Links</div>
            <div className="space-y-2">
              {["Home", "Treatments", "About", "Reviews", "Contact"].map(l => <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-white/50 hover:text-[#1a7a5e] transition-colors">
                  {l}
                </a>)}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-white/30 mb-4">Services</div>
            <div className="space-y-2">
              {["Root Canal", "Dental Implants", "Extraction", "Crowns", "Smile Correction"].map(s => <div key={s} className="text-sm text-white/50">{s}</div>)}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 text-center text-xs text-white/25">
          © 2026 Dental Kraft. All Rights Reserved.
        </div>
      </div>
    </footer>;
}
