import { motion } from "motion/react";
import { TECHNOLOGIES } from "../../../constants/data.js";

export function Technology() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#0B6EFD]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F8FBFF] rounded-full text-xs font-bold text-[#0B6EFD] uppercase tracking-wider mb-4 border border-[#0B6EFD]/10">
            Advanced Tech
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#102A43] mb-4 font-display">
            Future of Dentistry
          </h2>
          <p className="text-[#5B6B7A] max-w-2xl mx-auto text-lg">
            We invest in the latest dental technology to provide more accurate diagnoses, faster treatments, and completely pain-free procedures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGIES.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div 
                key={tech.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="group p-8 rounded-[2rem] bg-white border border-[#102A43]/5 shadow-sm hover:shadow-[0_20px_40px_rgba(11,110,253,0.12)] hover:border-[#0B6EFD]/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00C2FF]/10 to-transparent rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                
                <div className="w-14 h-14 rounded-2xl bg-[#F8FBFF] border border-[#0B6EFD]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0B6EFD] group-hover:-rotate-3 transition-all duration-500 ease-out">
                  <Icon size={24} className="text-[#0B6EFD] group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl font-bold text-[#102A43] mb-3 font-display relative z-10">{tech.title}</h3>
                <p className="text-[#5B6B7A] leading-relaxed relative z-10">{tech.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
