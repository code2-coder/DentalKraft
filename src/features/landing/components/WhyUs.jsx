import { motion } from "motion/react";
import { Shield } from "lucide-react";
import { WHY_ITEMS, STATS } from "../../../constants/data.js";

export function WhyUs() {
  return <section id="about" className="py-24 bg-[#faf9f6]">
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0d1b2a]/5 rounded-full text-xs font-semibold text-[#0d1b2a] uppercase tracking-wider mb-4">
            <Shield size={12} />
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1b2a] mb-4" style={{
          fontFamily: "Playfair Display, serif"
        }}>
            Why Patients Choose Dental Kraft
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: features */}
          <div className="space-y-5">
            {WHY_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return <motion.div key={item.title} initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: i * 0.08
            }} className="flex gap-4 p-5 bg-white rounded-2xl border border-[#0d1b2a]/6 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#1a7a5e]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0d1b2a] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#0d1b2a]/55 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>;
          })}
          </div>

          {/* Right: stats */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="grid grid-cols-2 gap-5">
            {STATS.map(stat => <div key={stat.label} className="bg-white p-8 rounded-3xl border border-[#0d1b2a]/6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-[#1a7a5e] mb-2" style={{
              fontFamily: "Playfair Display, serif"
            }}>
                  {stat.value}
                </div>
                <div className="text-xs text-[#0d1b2a]/50 font-medium leading-snug">{stat.label}</div>
              </div>)}
          </motion.div>
        </div>
      </div>
    </section>;
}
