import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { TREATMENTS } from "../../../constants/data.js";

export function Treatments() {
  return (
    <section id="services" className="py-24 bg-[#F8FBFF] relative overflow-hidden">
      {/* Abstract Background Orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0B6EFD]/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#00C2FF]/5 to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full text-xs font-bold text-[#0B6EFD] uppercase tracking-wider mb-6 shadow-[0_2px_10px_rgba(11,110,253,0.06)] border border-[#0B6EFD]/10">
            <span className="w-2 h-2 rounded-full bg-[#0B6EFD] animate-pulse"></span>
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#102A43] mb-6 font-display leading-tight">
            Premium Dental <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B6EFD] to-[#00C2FF]">Treatments</span>
          </h2>
          <p className="text-[#5B6B7A] max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive dental care tailored to your specific needs. We combine artistry with advanced technology to deliver perfect smiles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          {TREATMENTS.map((treatment, i) => (
            <motion.div 
              key={treatment.title} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }} 
              className="group relative bg-white rounded-[2rem] border border-[#102A43]/5 overflow-hidden hover:shadow-[0_30px_60px_rgba(11,110,253,0.12)] hover:border-[#0B6EFD]/20 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              {/* Card Hover Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0B6EFD]/5 to-[#00C2FF]/5 rounded-bl-[100px] translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out" />
              
              {/* Bottom Glowing Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#0B6EFD] to-[#00C2FF] group-hover:w-full transition-all duration-700 ease-out" />

              <div className="px-8 pt-10 pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F8FBFF] to-white rounded-2xl flex items-center justify-center text-3xl border border-[#0B6EFD]/10 shadow-[0_4px_20px_rgba(11,110,253,0.05)] group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_10px_30px_rgba(11,110,253,0.2)] transition-all duration-500 ease-out">
                  <span className="group-hover:scale-110 transition-transform duration-500">{treatment.icon}</span>
                </div>
              </div>
              
              <div className="px-8 pb-10 flex-grow flex flex-col relative z-10">
                <h3 className="text-xl font-bold text-[#102A43] mb-3 font-display group-hover:text-[#0B6EFD] transition-colors">{treatment.title}</h3>
                <p className="text-sm text-[#5B6B7A] leading-relaxed mb-8 flex-grow">
                  {treatment.desc}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-[#102A43] group-hover:text-[#0B6EFD] transition-colors mt-auto w-max">
                  Learn More 
                  <span className="w-8 h-8 rounded-full bg-[#F8FBFF] flex items-center justify-center group-hover:bg-[#0B6EFD] group-hover:text-white transition-all duration-500">
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
