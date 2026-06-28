import { motion } from "motion/react";
import { DOCTORS } from "../../../constants/data.js";
import { ArrowRight } from "lucide-react";

export function MeetDoctors({ onBook }) {
  return (
    <section id="doctors" className="py-24 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full text-xs font-bold text-[#0B6EFD] uppercase tracking-wider mb-4 shadow-sm border border-[#0B6EFD]/10">
            Our Specialists
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#102A43] mb-4 font-display">
            Meet Our Doctors
          </h2>
          <p className="text-[#5B6B7A] max-w-2xl mx-auto text-lg">
            Our team of internationally trained specialists is dedicated to providing you with the highest standard of dental care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc, i) => (
            <motion.div 
              key={doc.name}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group relative bg-[#F8FBFF] p-2 rounded-[2.5rem] border border-[#102A43]/5 hover:shadow-[0_30px_60px_rgba(11,110,253,0.15)] hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <div className="aspect-[4/5] overflow-hidden relative rounded-[2rem]">
                <img 
                  src={doc.img} 
                  alt={doc.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/90 via-[#102A43]/20 to-transparent group-hover:from-[#0B6EFD]/90 transition-colors duration-700" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem]" />
                
                {/* Glass Card Details */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 group-hover:border-white/40 transition-colors duration-500 shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-1 font-display">{doc.name}</h3>
                    <div className="text-[#00C2FF] text-sm font-semibold mb-3">{doc.specialization}</div>
                    <div className="flex flex-col gap-1 mb-4">
                      <span className="text-white/90 text-xs">{doc.qualification}</span>
                      <span className="text-white/90 text-xs">{doc.experience}</span>
                    </div>
                    
                    <button 
                      onClick={onBook} 
                      className="w-full py-3 bg-white/90 backdrop-blur-sm text-[#102A43] font-bold rounded-xl hover:bg-[#0B6EFD] hover:text-white border border-white/50 transition-all duration-300 text-sm flex items-center justify-center gap-2"
                    >
                      Book Consultation <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
