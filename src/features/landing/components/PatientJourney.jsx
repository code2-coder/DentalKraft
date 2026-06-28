import { motion } from "motion/react";
import { TIMELINE } from "../../../constants/data.js";

export function PatientJourney() {
  return (
    <section className="py-24 bg-[#F8FBFF] relative overflow-hidden">
      {/* Decorative Path */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0B6EFD]/20 to-transparent hidden lg:block -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full text-xs font-bold text-[#0B6EFD] uppercase tracking-wider mb-4 shadow-sm border border-[#0B6EFD]/10">
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#102A43] mb-4 font-display">
            Patient Journey
          </h2>
          <p className="text-[#5B6B7A] max-w-2xl mx-auto text-lg">
            Your path to a perfect smile is simple, transparent, and completely guided by our expert team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 relative">
          {TIMELINE.map((item, i) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Connector line for mobile */}
              {i !== TIMELINE.length - 1 && (
                <div className="absolute top-12 left-1/2 w-[2px] h-full bg-gradient-to-b from-[#0B6EFD]/20 to-transparent lg:hidden -z-10" />
              )}
              
              <div className="w-16 h-16 rounded-full bg-white border-4 border-[#F8FBFF] shadow-[0_8px_20px_rgba(11,110,253,0.15)] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:border-[#0B6EFD]/20 transition-all duration-500">
                <span className="text-xl font-bold text-[#0B6EFD] font-display">{item.step}</span>
              </div>
              
              <div className="bg-white p-6 rounded-3xl border border-[#102A43]/5 shadow-sm group-hover:shadow-[0_20px_40px_rgba(11,110,253,0.08)] transition-all duration-500 w-full max-w-[280px]">
                <h3 className="text-lg font-bold text-[#102A43] mb-2 font-display">{item.title}</h3>
                <p className="text-sm text-[#5B6B7A] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
