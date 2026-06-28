import { motion } from "motion/react";
import { Star, CheckCircle } from "lucide-react";
import { REVIEWS } from "../../../constants/data.js";

export function Reviews() {
  const duplicatedReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section id="testimonials" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F8FBFF] rounded-full text-xs font-bold text-[#0B6EFD] uppercase tracking-wider mb-6 border border-[#0B6EFD]/10">
            Patient Testimonials
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-[#102A43] mb-6 tracking-tight font-display">
            Real Patient Experiences
          </h2>
          <p className="text-[#5B6B7A] text-lg max-w-xl mx-auto font-medium">
            Don't just take our word for it. See what our patients have to say about their journey to a better smile.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full mt-10">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-stretch gap-6 px-6">
          {duplicatedReviews.map((review, i) => (
            <div key={i} className="w-[400px] flex-shrink-0 bg-[#F8FBFF] p-8 rounded-[2rem] border border-[#102A43]/5 hover:shadow-2xl hover:shadow-[#0B6EFD]/10 transition-all duration-300 flex flex-col cursor-grab active:cursor-grabbing">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={18} className="fill-[#FFC107] text-[#FFC107]" />
                ))}
              </div>
              <p className="text-[#102A43]/80 text-lg leading-relaxed mb-8 font-medium flex-grow italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                {review.avatar && (
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-white"
                  />
                )}
                <div>
                  <div className="text-sm font-bold text-[#102A43] font-display flex items-center gap-1.5">
                    {review.name}
                    <CheckCircle size={14} className="text-[#00C853]" />
                  </div>
                  <div className="text-[11px] text-[#5B6B7A] font-semibold uppercase tracking-wider mt-0.5">Verified Patient</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}