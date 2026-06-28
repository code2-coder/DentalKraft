import { motion } from "motion/react";
import { WHY_ITEMS } from "../../../constants/data.js";

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F8FBFF] rounded-full text-xs font-bold text-[#0B6EFD] uppercase tracking-wider mb-4 border border-[#0B6EFD]/10">
            Why Choose DentalKraft
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#102A43] mb-4 font-display">
            Experience Premium Healthcare
          </h2>
          <p className="text-[#5B6B7A] max-w-2xl mx-auto text-lg">
            We combine state-of-the-art technology with compassionate care to provide you with the best possible dental experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.title} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }} 
                className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-transparent to-transparent hover:from-[#0B6EFD]/30 hover:to-[#00C2FF]/30 transition-all duration-700"
              >
                <div className="bg-white h-full rounded-3xl p-8 border border-[#102A43]/5 group-hover:shadow-[0_30px_60px_rgba(11,110,253,0.12)] group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                  
                  {/* Subtle hover background glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0B6EFD]/5 to-[#00C2FF]/5 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-700 ease-out" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B6EFD] to-[#00C2FF] p-[1px] shadow-lg mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 ease-out">
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
                        <Icon size={24} className="text-[#0B6EFD] group-hover:text-white transition-colors duration-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#102A43] mb-3 font-display">{item.title}</h3>
                    <p className="text-[#5B6B7A] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
