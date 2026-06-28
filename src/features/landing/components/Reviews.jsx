import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { REVIEWS } from "../../../constants/data.js";

export function Reviews() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % REVIEWS.length), 4500);
    return () => clearInterval(t);
  }, []);
  return <section id="reviews" className="py-24 bg-white">
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 rounded-full text-xs font-semibold text-amber-600 uppercase tracking-wider mb-4">
            <Star size={12} className="fill-amber-500 text-amber-500" />
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1b2a]" style={{
          fontFamily: "Playfair Display, serif"
        }}>
            Patient Experiences
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: 0.4
          }} className="bg-[#faf9f6] p-10 rounded-3xl border border-[#0d1b2a]/6 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} className="fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-[#0d1b2a]/70 text-lg leading-relaxed mb-8 italic">
                "{REVIEWS[active].text}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className={`w-10 h-10 rounded-full ${REVIEWS[active].color} flex items-center justify-center text-white text-sm font-bold`}>
                  {REVIEWS[active].initials}
                </div>
                <div className="text-sm font-semibold text-[#0d1b2a]">{REVIEWS[active].name}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => setActive(a => (a - 1 + REVIEWS.length) % REVIEWS.length)} className="w-10 h-10 rounded-full border border-[#0d1b2a]/10 flex items-center justify-center hover:bg-[#0d1b2a]/5 transition">
              <ChevronLeft size={16} className="text-[#0d1b2a]" />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => <button key={i} onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-[#1a7a5e] w-6" : "bg-[#0d1b2a]/15"}`} />)}
            </div>
            <button onClick={() => setActive(a => (a + 1) % REVIEWS.length)} className="w-10 h-10 rounded-full border border-[#0d1b2a]/10 flex items-center justify-center hover:bg-[#0d1b2a]/5 transition">
              <ChevronRight size={16} className="text-[#0d1b2a]" />
            </button>
          </div>
        </div>
      </div>
    </section>;
}