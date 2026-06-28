import { motion } from "motion/react";
import { STATS } from "../../../constants/data.js";

export function AboutClinic() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Layout */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1, ease: "easeOut" }} 
            className="relative group cursor-default"
          >
            <div className="relative p-2 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-[#102A43]/5 shadow-[0_20px_40px_rgba(11,110,253,0.1)] aspect-[4/3] w-[85%] z-10 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(11,110,253,0.15)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <img 
                  src="/images/clinic-interior.png" 
                  alt="Modern Clinic Interior" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/30 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-700" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-[2rem]" />
              </div>
            </div>
            
            <div className="absolute -bottom-12 -right-4 p-2 bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/80 shadow-[0_20px_40px_rgba(11,110,253,0.2)] aspect-[3/4] w-[55%] z-20 group-hover:translate-y-2 group-hover:shadow-[0_30px_60px_rgba(11,110,253,0.25)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img 
                  src="/images/doctor-sarah.png" 
                  alt="Our Lead Doctor" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-2xl" />
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute top-10 -left-10 w-32 h-32 bg-[#0B6EFD]/5 rounded-full blur-2xl -z-10" />
            <div className="absolute bottom-10 -right-10 w-40 h-40 bg-[#00C2FF]/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Text & Counters */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F8FBFF] rounded-full text-xs font-bold text-[#0B6EFD] uppercase tracking-wider mb-6 border border-[#0B6EFD]/10">
              About DentalKraft
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#102A43] mb-6 font-display leading-[1.2]">
              Setting the Standard in Modern Dentistry
            </h2>
            
            <p className="text-[#5B6B7A] text-lg mb-6 leading-relaxed">
              For over 15 years, DentalKraft has been redefining the dental experience. We believe that a trip to the dentist should be comfortable, transparent, and completely pain-free.
            </p>
            <p className="text-[#5B6B7A] text-lg mb-10 leading-relaxed">
              Our state-of-the-art facility is equipped with the latest digital technology, allowing our award-winning team to provide precise diagnoses and stunning smile transformations.
            </p>

            {/* Counters */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#102A43]/10">
              {STATS.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                >
                  <div className="text-3xl lg:text-4xl font-extrabold text-[#0B6EFD] mb-1 font-display">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-[#102A43]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
