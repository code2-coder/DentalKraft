import { motion } from "motion/react";
import { Phone, Calendar } from "lucide-react";

export function CTABanner({ onBook }) {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0B6EFD] via-[#1E88E5] to-[#00C2FF] relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
        <img 
          src="https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Clinic Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7 }} 
        className="max-w-4xl mx-auto px-4 text-center relative z-10"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
          Need Immediate Dental Care?
        </h2>
        <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
          Don't let dental pain wait. Our specialists are ready to provide you with world-class, pain-free emergency care.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button 
            onClick={onBook} 
            className="flex items-center gap-2 px-8 py-4 bg-white text-[#0B6EFD] font-bold rounded-full hover:bg-[#F8FBFF] transition-all hover:shadow-xl active:scale-95 text-lg"
          >
            <Calendar size={20} />
            Book Appointment
          </button>
          <a 
            href="tel:+1234567890" 
            className="flex items-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white font-bold rounded-full hover:bg-white/10 transition-all hover:shadow-xl active:scale-95 text-lg"
          >
            <Phone size={20} />
            Call Us Today
          </a>
        </div>
      </motion.div>
    </section>
  );
}
