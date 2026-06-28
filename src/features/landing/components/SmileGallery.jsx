import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { SMILE_CASES } from "../../../constants/data.js";

export function SmileGallery() {
  return <section id="smile-gallery" className="py-24 bg-[#0d1b2a]">
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
      }} className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
            <Sparkles size={12} />
            Transformations
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{
          fontFamily: "Playfair Display, serif"
        }}>
            Crafting Confident Smiles
          </h2>
          <p className="text-white/40 text-lg italic">
            "Every smile has a story. We help you create yours."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {SMILE_CASES.map((c, i) => <motion.div key={c.label} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: i * 0.1
        }} className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl overflow-hidden hover:bg-white/8 transition-colors">
              <div className="grid grid-cols-2 divide-x divide-white/10">
                <div className="p-6 text-center">
                  <div className="text-[10px] text-white/30 uppercase tracking-widest font-semibold mb-3">Before</div>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-3">
                    😬
                  </div>
                  <div className="text-xs text-white/40 leading-snug">{c.before}</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-[10px] text-emerald-400 uppercase tracking-widest font-semibold mb-3">After</div>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#1a7a5e]/30 flex items-center justify-center text-3xl mb-3">
                    {c.emoji}
                  </div>
                  <div className="text-xs text-white/60 leading-snug">{c.after}</div>
                </div>
              </div>
              <div className="px-6 pb-5 border-t border-white/5 pt-4">
                <div className="text-sm font-semibold text-white text-center">{c.label}</div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}