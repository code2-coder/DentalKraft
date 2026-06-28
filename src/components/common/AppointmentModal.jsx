import { motion, AnimatePresence } from "motion/react";
import { Phone, X } from "lucide-react";

export function AppointmentModal({
  open,
  onClose
}) {
  return <AnimatePresence>
      {open && <>
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <motion.div initial={{
        opacity: 0,
        scale: 0.9,
        y: 20
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.9,
        y: 20
      }} transition={{
        type: "spring",
        stiffness: 300,
        damping: 28
      }} className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl pointer-events-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0d1b2a]" style={{
                fontFamily: "Playfair Display, serif"
              }}>
                    Schedule Your Visit
                  </h3>
                  <p className="text-sm text-[#0d1b2a]/40">Dental Kraft — Pune</p>
                </div>
                <button onClick={onClose} className="w-8 h-8 rounded-full bg-[#0d1b2a]/5 flex items-center justify-center hover:bg-[#0d1b2a]/10 transition">
                  <X size={14} className="text-[#0d1b2a]" />
                </button>
              </div>
              <div className="space-y-4">
                {["Your Name", "Phone Number", "Preferred Date"].map(p => <input key={p} type="text" placeholder={p} className="w-full px-4 py-3 bg-[#faf9f6] border border-[#0d1b2a]/10 rounded-xl text-sm focus:outline-none focus:border-[#1a7a5e] transition" />)}
                <button className="w-full py-3.5 bg-[#1a7a5e] text-white font-bold rounded-xl hover:bg-[#155f4a] transition-all hover:shadow-lg active:scale-95">
                  Confirm Appointment
                </button>
                <a href="tel:02041200727" className="flex items-center justify-center gap-2 w-full py-3 border border-[#0d1b2a]/10 rounded-xl text-sm font-semibold text-[#0d1b2a]/60 hover:text-[#1a7a5e] hover:border-[#1a7a5e]/30 transition">
                  <Phone size={14} />
                  Call 02041200727
                </a>
              </div>
            </div>
          </motion.div>
        </>}
    </AnimatePresence>;
}
