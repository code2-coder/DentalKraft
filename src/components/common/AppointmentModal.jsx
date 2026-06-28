import { motion, AnimatePresence } from "motion/react";
import { Phone, X } from "lucide-react";

export function AppointmentModal({
  open,
  onClose
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#102A43]/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-[2rem] w-full max-w-md shadow-2xl pointer-events-auto overflow-hidden border border-white/20">
              
              {/* Header section with gradient */}
              <div className="relative px-8 pt-8 pb-6 bg-gradient-to-br from-[#F8FBFF] to-white border-b border-[#102A43]/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00C2FF]/10 to-transparent rounded-bl-full translate-x-10 -translate-y-10" />
                
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-[#102A43] font-display mb-1">
                      Schedule Your Visit
                    </h3>
                    <p className="text-sm font-semibold text-[#0B6EFD]">DentalKraft — Pune</p>
                  </div>
                  <button 
                    onClick={onClose} 
                    className="w-10 h-10 rounded-full bg-white border border-[#102A43]/5 flex items-center justify-center shadow-sm hover:shadow-md hover:border-[#0B6EFD]/30 transition-all active:scale-95 text-[#5B6B7A] hover:text-[#0B6EFD]"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Form Section */}
              <div className="p-8 space-y-5">
                {[
                  { key: "name", label: "Your Name", type: "text", placeholder: "Enter your full name" },
                  { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
                  { key: "date", label: "Preferred Date", type: "date", placeholder: "" }
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-[11px] font-bold text-[#5B6B7A] uppercase tracking-wider mb-2">
                      {field.label}
                    </label>
                    <input 
                      type={field.type} 
                      placeholder={field.placeholder} 
                      className="w-full px-4 py-3.5 bg-[#F8FBFF] border border-[#102A43]/10 rounded-xl text-sm text-[#102A43] placeholder:text-[#5B6B7A]/40 focus:outline-none focus:border-[#0B6EFD] focus:ring-2 focus:ring-[#0B6EFD]/20 hover:border-[#0B6EFD]/30 transition-all duration-300" 
                    />
                  </div>
                ))}
                
                <button className="w-full flex items-center justify-center gap-2 py-4 mt-2 bg-[#0B6EFD] text-white font-bold rounded-xl hover:bg-[#1E88E5] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(11,110,253,0.4)] active:scale-95">
                  <Phone size={18} />
                  Confirm Appointment
                </button>
              </div>
              
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
