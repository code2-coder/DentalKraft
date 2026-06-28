import { motion } from "motion/react";
import { Sparkles, ChevronRight } from "lucide-react";
import { TREATMENTS } from "../../../constants/data.js";

export function Treatments() {
  return <section id="treatments" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7
      }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 rounded-full text-xs font-semibold text-[#1a7a5e] uppercase tracking-wider mb-4">
            <Sparkles size={12} />
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1b2a] mb-4" style={{
          fontFamily: "Playfair Display, serif"
        }}>
            Our Specialized Dental Treatments
          </h2>
          <p className="text-[#0d1b2a]/50 text-lg max-w-xl mx-auto">Complete solutions for every dental need</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((t, i) => <motion.div key={t.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: i * 0.08
        }} whileHover={{
          y: -6,
          scale: 1.01
        }} className={`group relative p-8 rounded-3xl bg-gradient-to-br ${t.color} border ${t.border} cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-black/5`}>
              <div className="text-4xl mb-5">{t.icon}</div>
              <h3 className="text-lg font-bold text-[#0d1b2a] mb-2">{t.title}</h3>
              <p className="text-[#0d1b2a]/55 text-sm leading-relaxed">{t.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-[#1a7a5e] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ChevronRight size={14} />
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
