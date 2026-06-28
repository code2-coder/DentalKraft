import { motion } from "motion/react";
import { Calendar, MessageCircle } from "lucide-react";

export function CTABanner({
  onBook
}) {
  return <section className="py-24 bg-gradient-to-br from-[#0d1b2a] via-[#1a2f45] to-[#1a7a5e]">
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
    }} className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{
        fontFamily: "Playfair Display, serif"
      }}>
          Your Dream Smile Starts Here
        </h2>
        <p className="text-white/60 text-lg mb-10">
          Book your dental consultation with Dental Kraft today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button onClick={onBook} className="flex items-center gap-2 px-8 py-4 bg-white text-[#0d1b2a] font-bold rounded-full hover:bg-emerald-50 transition-all hover:shadow-xl active:scale-95">
            <Calendar size={16} />
            Book Appointment
          </button>
          <a href="https://wa.me/9102041200727" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1ebe5d] transition-all hover:shadow-xl active:scale-95">
            <MessageCircle size={16} />
            WhatsApp Consultation
          </a>
        </div>
      </motion.div>
    </section>;
}
