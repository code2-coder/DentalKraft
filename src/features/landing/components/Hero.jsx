import { motion } from "motion/react";
import { ChevronRight, Phone, Star, Users, Award, Heart, Zap } from "lucide-react";

export function Hero({
  onBook
}) {
  return <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#faf9f6]">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-50 via-teal-50/40 to-transparent rounded-full translate-x-48 -translate-y-12" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#f5f0e8] to-transparent rounded-full -translate-x-16 translate-y-16" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div initial={{
        opacity: 0,
        x: -40
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#1a7a5e] animate-pulse" />
            <span className="text-xs font-semibold text-[#1a7a5e] tracking-wider uppercase">Advanced Dental Care In Pune</span>
          </div>

          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0d1b2a] leading-tight mb-4" style={{
            fontFamily: "Playfair Display, serif"
          }}>
              Where Technology Meets The{" "}
              <span className="text-[#1a7a5e] italic">Art Of Perfect Smiles</span>
            </h1>
            <p className="text-xl font-medium text-[#1a7a5e] tracking-wide">Healthy. Confident. Beautiful.</p>
          </div>

          <p className="text-[#0d1b2a]/60 text-lg leading-relaxed max-w-lg">
            Experience painless dental treatments with an efficient team, advanced procedures, and compassionate care.
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={onBook} className="flex items-center gap-2 px-8 py-4 bg-[#0d1b2a] text-white font-semibold rounded-full hover:bg-[#1a2f45] transition-all hover:shadow-xl hover:shadow-[#0d1b2a]/20 active:scale-95 group">
              Book Appointment
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="tel:02041200727" className="flex items-center gap-2 px-8 py-4 border-2 border-[#0d1b2a]/15 text-[#0d1b2a] font-semibold rounded-full hover:border-[#1a7a5e] hover:text-[#1a7a5e] transition-all">
              <Phone size={16} />
              Call Clinic
            </a>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
            </div>
            <div className="w-px h-5 bg-[#0d1b2a]/15" />
            <div className="flex items-center gap-2">
              <Users size={14} className="text-[#1a7a5e]" />
              <span className="text-sm text-[#0d1b2a]/60 font-medium">Trusted By 5000+ Happy Patients</span>
            </div>
          </div>

          {/* Mini feature cards */}
          <div className="flex flex-wrap gap-3">
            {[{
            emoji: "🦷",
            label: "Advanced Root Canal"
          }, {
            emoji: "✨",
            label: "Smile Restoration"
          }, {
            emoji: "🏥",
            label: "Modern Dental Facility"
          }].map(item => <div key={item.label} className="flex items-center gap-2 px-4 py-2 bg-white border border-[#0d1b2a]/8 rounded-xl shadow-sm">
                <span>{item.emoji}</span>
                <span className="text-xs font-semibold text-[#0d1b2a]/70">{item.label}</span>
              </div>)}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div initial={{
        opacity: 0,
        x: 40
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.1
      }} className="relative">
          {/* Main image placeholder — clinic interior */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1a7a5e] via-teal-700 to-[#0d1b2a] aspect-[4/5]">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
              <div className="text-8xl mb-6">🦷</div>
              <div className="text-white/90 text-2xl font-bold mb-2" style={{
              fontFamily: "Playfair Display, serif"
            }}>
                Modern Dental Excellence
              </div>
              <div className="text-white/60 text-sm">State-of-the-art clinic in Pune</div>
            </div>
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }} />
          </div>

          {/* Floating cards */}
          <motion.div animate={{
          y: [0, -8, 0]
        }} transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }} className="absolute -left-6 top-12 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-[#0d1b2a]/5">
            <div className="w-10 h-10 rounded-xl bg-[#1a7a5e] flex items-center justify-center">
              <Award size={18} className="text-white" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0d1b2a]">10+ Years</div>
              <div className="text-[10px] text-[#0d1b2a]/50">Experience</div>
            </div>
          </motion.div>

          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "easeInOut",
          delay: 0.5
        }} className="absolute -right-4 top-1/3 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-[#0d1b2a]/5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
              <Heart size={18} className="text-amber-500" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0d1b2a]">Comfort First</div>
              <div className="text-[10px] text-[#0d1b2a]/50">Treatment</div>
            </div>
          </motion.div>

          <motion.div animate={{
          y: [0, -6, 0]
        }} transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          delay: 1
        }} className="absolute -left-2 bottom-16 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-[#0d1b2a]/5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <Zap size={18} className="text-blue-500" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0d1b2a]">Advanced Tech</div>
              <div className="text-[10px] text-[#0d1b2a]/50">Equipment</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
}
