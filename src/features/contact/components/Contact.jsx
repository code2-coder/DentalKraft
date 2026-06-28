import { useState } from "react";
import { motion } from "motion/react";
import { Clock, MapPin, Send } from "lucide-react";
import { TREATMENTS } from "../../../constants/data.js";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    message: ""
  });
  return (
    <section id="contact" className="py-24 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#102A43] mb-2 font-display">
            Book Your Appointment
          </h2>
          <p className="text-[#5B6B7A]">We'd love to hear from you</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-bold text-[#102A43] mb-1 font-display">
                Dental Kraft
              </div>
              <div className="text-[#0B6EFD] text-sm font-medium">Crafting Beautiful Smiles</div>
            </div>

            {[
              {
                icon: Clock,
                label: "Working Hours",
                value: "Mon–Fri: 9:30 AM – 7:30 PM\nSat: 9:30 AM – 6:30 PM\nSun: Closed"
              }, 
              {
                icon: MapPin,
                label: "Location",
                value: "Pune, Maharashtra, India"
              }
            ].map(item => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-4 p-5 bg-white rounded-2xl border border-[#102A43]/5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#0B6EFD]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5B6B7A] uppercase tracking-wider font-semibold mb-0.5">{item.label}</div>
                    <div className="font-medium text-[#102A43] text-sm whitespace-pre-line">{item.value}</div>
                  </div>
                </div>
              );
            })}

            {/* Map image */}
            <div className="relative rounded-[2rem] overflow-hidden h-64 border-4 border-white shadow-xl group">
              <img 
                src="https://images.pexels.com/photos/6812822/pexels-photo-6812822.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Clinic Location" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-white mb-1">
                  <MapPin size={20} className="text-[#00C2FF]" />
                  <span className="font-bold text-lg">Pune Central</span>
                </div>
                <div className="text-white/70 text-sm font-medium">Premium Healthcare District, Maharashtra</div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <motion.form 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7 }} 
            onSubmit={e => e.preventDefault()} 
            className="bg-white p-8 rounded-3xl border border-[#102A43]/5 space-y-5 shadow-lg"
          >
            {[
              { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" }, 
              { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" }, 
              { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" }
            ].map(field => (
              <div key={field.key}>
                <label className="block text-xs font-semibold text-[#5B6B7A] uppercase tracking-wider mb-1.5">
                  {field.label}
                </label>
                <input 
                  type={field.type} 
                  placeholder={field.placeholder} 
                  value={form[field.key]} 
                  onChange={e => setForm({ ...form, [field.key]: e.target.value })} 
                  className="w-full px-4 py-3 bg-[#F8FBFF] border border-[#102A43]/10 rounded-xl text-sm text-[#102A43] placeholder:text-[#5B6B7A]/50 focus:outline-none focus:border-[#0B6EFD] focus:ring-2 focus:ring-[#0B6EFD]/20 hover:border-[#0B6EFD]/30 transition-all duration-300" 
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-semibold text-[#5B6B7A] uppercase tracking-wider mb-1.5">
                Treatment Required
              </label>
              <select 
                value={form.treatment} 
                onChange={e => setForm({ ...form, treatment: e.target.value })} 
                className="w-full px-4 py-3 bg-[#F8FBFF] border border-[#102A43]/10 rounded-xl text-sm text-[#102A43] focus:outline-none focus:border-[#0B6EFD] focus:ring-2 focus:ring-[#0B6EFD]/20 hover:border-[#0B6EFD]/30 transition-all duration-300"
              >
                <option value="">Select treatment</option>
                {TREATMENTS.map(t => (
                  <option key={t.title} value={t.title}>{t.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#5B6B7A] uppercase tracking-wider mb-1.5">
                Message
              </label>
              <textarea 
                rows={4} 
                placeholder="Describe your concern or any questions..." 
                value={form.message} 
                onChange={e => setForm({ ...form, message: e.target.value })} 
                className="w-full px-4 py-3 bg-[#F8FBFF] border border-[#102A43]/10 rounded-xl text-sm text-[#102A43] placeholder:text-[#5B6B7A]/50 focus:outline-none focus:border-[#0B6EFD] focus:ring-2 focus:ring-[#0B6EFD]/20 hover:border-[#0B6EFD]/30 transition-all duration-300 resize-none" 
              />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-[#0B6EFD] text-white font-bold rounded-xl hover:bg-[#1E88E5] hover:shadow-[0_10px_30px_rgba(11,110,253,0.4)] transition-all duration-300 active:scale-95">
              <Send size={16} />
              Request Appointment
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
