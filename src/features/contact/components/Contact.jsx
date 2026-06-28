import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Clock, MapPin, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    message: ""
  });
  return <section id="contact" className="py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      }} className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1b2a] mb-2" style={{
          fontFamily: "Playfair Display, serif"
        }}>
            Book Your Appointment
          </h2>
          <p className="text-[#0d1b2a]/45">We"d love to hear from you</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-bold text-[#0d1b2a] mb-1" style={{
              fontFamily: "Playfair Display, serif"
            }}>
                Dental Kraft
              </div>
              <div className="text-[#1a7a5e] text-sm font-medium">Crafting Beautiful Smiles</div>
            </div>

            {[{
            icon: Phone,
            label: "Phone",
            value: "02041200727",
            href: "tel:02041200727"
          }, {
            icon: Clock,
            label: "Working Hours",
            value: "Mon–Fri: 9:30 AM – 7:30 PM\nSat: 9:30 AM – 6:30 PM\nSun: Closed"
          }, {
            icon: MapPin,
            label: "Location",
            value: "Pune, Maharashtra, India"
          }].map(item => {
            const Icon = item.icon;
            return <div key={item.label} className="flex gap-4 p-5 bg-white rounded-2xl border border-[#0d1b2a]/6">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#1a7a5e]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#0d1b2a]/40 uppercase tracking-wider font-semibold mb-0.5">{item.label}</div>
                    {item.href ? <a href={item.href} className="font-semibold text-[#0d1b2a] hover:text-[#1a7a5e] transition-colors">
                        {item.value}
                      </a> : <div className="font-medium text-[#0d1b2a] text-sm whitespace-pre-line">{item.value}</div>}
                  </div>
                </div>;
          })}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-48 bg-gradient-to-br from-[#1a7a5e]/10 to-[#0d1b2a]/10 border border-[#0d1b2a]/6 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-[#1a7a5e] mx-auto mb-2" />
                <div className="text-sm text-[#0d1b2a]/40 font-medium">Pune, Maharashtra</div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <motion.form initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} onSubmit={e => e.preventDefault()} className="bg-white p-8 rounded-3xl border border-[#0d1b2a]/6 space-y-5 shadow-sm">
            {[{
            key: "name",
            label: "Full Name",
            type: "text",
            placeholder: "Your full name"
          }, {
            key: "phone",
            label: "Phone Number",
            type: "tel",
            placeholder: "+91 98765 43210"
          }, {
            key: "email",
            label: "Email Address",
            type: "email",
            placeholder: "your@email.com"
          }].map(field => <div key={field.key}>
                <label className="block text-xs font-semibold text-[#0d1b2a]/50 uppercase tracking-wider mb-1.5">
                  {field.label}
                </label>
                <input type={field.type} placeholder={field.placeholder} value={form[field.key]} onChange={e => setForm({
              ...form,
              [field.key]: e.target.value
            })} className="w-full px-4 py-3 bg-[#faf9f6] border border-[#0d1b2a]/10 rounded-xl text-sm text-[#0d1b2a] placeholder:text-[#0d1b2a]/25 focus:outline-none focus:border-[#1a7a5e] focus:ring-2 focus:ring-[#1a7a5e]/10 transition" />
              </div>)}
            <div>
              <label className="block text-xs font-semibold text-[#0d1b2a]/50 uppercase tracking-wider mb-1.5">
                Treatment Required
              </label>
              <select value={form.treatment} onChange={e => setForm({
              ...form,
              treatment: e.target.value
            })} className="w-full px-4 py-3 bg-[#faf9f6] border border-[#0d1b2a]/10 rounded-xl text-sm text-[#0d1b2a] focus:outline-none focus:border-[#1a7a5e] focus:ring-2 focus:ring-[#1a7a5e]/10 transition">
                <option value="">Select treatment</option>
                <option>Root Canal Treatment</option>
                <option>Dental Implants</option>
                <option>Wisdom Tooth Extraction</option>
                <option>Tooth Extraction</option>
                <option>Dental Crown Treatment</option>
                <option>Smile Correction</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#0d1b2a]/50 uppercase tracking-wider mb-1.5">
                Message
              </label>
              <textarea rows={4} placeholder="Describe your concern or any questions..." value={form.message} onChange={e => setForm({
              ...form,
              message: e.target.value
            })} className="w-full px-4 py-3 bg-[#faf9f6] border border-[#0d1b2a]/10 rounded-xl text-sm text-[#0d1b2a] placeholder:text-[#0d1b2a]/25 focus:outline-none focus:border-[#1a7a5e] focus:ring-2 focus:ring-[#1a7a5e]/10 transition resize-none" />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-[#0d1b2a] text-white font-bold rounded-xl hover:bg-[#1a2f45] transition-all hover:shadow-lg active:scale-95">
              <Send size={16} />
              Request Appointment
            </button>
          </motion.form>
        </div>
      </div>
    </section>;
}
