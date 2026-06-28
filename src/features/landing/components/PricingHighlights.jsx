import { motion } from "motion/react";
import { PRICING } from "../../../constants/data.js";
import { Check } from "lucide-react";

export function PricingHighlights({ onBook }) {
  return (
    <section id="pricing" className="py-24 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full text-xs font-bold text-[#0B6EFD] uppercase tracking-wider mb-4 shadow-sm border border-[#0B6EFD]/10">
            Transparent Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#102A43] mb-4 font-display">
            Premium Care, Clear Costs
          </h2>
          <p className="text-[#5B6B7A] max-w-2xl mx-auto text-lg">
            We believe in complete transparency. Our pricing reflects the high quality of materials, advanced technology, and expert care you receive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {PRICING.map((plan, i) => (
            <motion.div 
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white rounded-[2rem] p-6 border border-[#102A43]/5 shadow-sm hover:shadow-[0_20px_40px_rgba(11,110,253,0.15)] hover:-translate-y-2 transition-all duration-500 hover:border-[#0B6EFD]/30 flex flex-col h-full group"
            >
              <h3 className="text-lg font-bold text-[#102A43] mb-2 font-display">{plan.title}</h3>
              <div className="text-2xl font-extrabold text-[#0B6EFD] mb-4 font-display">{plan.price}</div>
              <p className="text-sm text-[#5B6B7A] mb-6 flex-grow">{plan.desc}</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-[#5B6B7A]">
                  <Check size={16} className="text-[#00C853] shrink-0 mt-0.5" />
                  <span>Expert Consultation</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#5B6B7A]">
                  <Check size={16} className="text-[#00C853] shrink-0 mt-0.5" />
                  <span>Premium Materials</span>
                </li>
              </ul>
              
              <button 
                onClick={onBook} 
                className="w-full py-3 bg-[#F8FBFF] text-[#0B6EFD] font-bold rounded-xl group-hover:bg-[#0B6EFD] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(11,110,253,0.3)] transition-all duration-500 text-sm"
              >
                Book Consultation
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
