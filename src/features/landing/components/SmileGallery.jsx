import { useState, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { SMILE_CASES } from "../../../constants/data.js";

function BeforeAfterSlider({ beforeImg, afterImg, beforeLabel, afterLabel }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updateSlider = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  }, [isDragging, updateSlider]);

  const handleTouchMove = useCallback((e) => {
    updateSlider(e.touches[0].clientX);
  }, [updateSlider]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={(e) => { setIsDragging(true); updateSlider(e.clientX); }}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchStart={(e) => updateSlider(e.touches[0].clientX)}
    >
      {/* After image (full background) */}
      <img
        src={afterImg}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image (clipped left side) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImg}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${(100 / sliderPos) * 100}%`, maxWidth: "none" }}
          draggable={false}
        />
        {/* Grayscale overlay on before side */}
        <div className="absolute inset-0 bg-black/20 mix-blend-color" />
      </div>

      {/* Slider divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] z-20"
        style={{ left: `${sliderPos}%` }}
      />

      {/* Slider handle */}
      <div
        className="absolute top-1/2 z-30 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center gap-0.5 border-2 border-white/80"
        style={{ left: `${sliderPos}%` }}
      >
        <ChevronLeft size={14} className="text-[#102A43]" />
        <ChevronRight size={14} className="text-[#102A43]" />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-[10px] font-bold text-white/80 uppercase tracking-widest border border-white/10">
        Before
      </div>
      <div className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-[#0B6EFD]/80 backdrop-blur-sm rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-[#00C2FF]/30">
        After
      </div>
    </div>
  );
}

export function SmileGallery() {
  return (
    <section id="smile-gallery" className="py-32 bg-[#102A43] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />
      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#0B6EFD]/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C2FF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full text-xs font-bold text-[#00C2FF] uppercase tracking-widest mb-6 border border-white/10 shadow-[0_0_15px_rgba(0,194,255,0.1)]">
            <Sparkles size={14} className="text-[#00C2FF]" />
            Clinical Results
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight font-display">
            Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B6EFD] to-[#00C2FF]">Smiles</span>
          </h2>
          <p className="text-white/50 text-lg lg:text-xl max-w-2xl mx-auto font-medium">
            Drag the slider to explore our documented clinical before & after results. Real patients, real transformations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {SMILE_CASES.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="group bg-[#0A1929]/80 backdrop-blur-sm border border-white/10 rounded-[2rem] overflow-hidden hover:border-[#0B6EFD]/40 hover:shadow-[0_0_40px_rgba(11,110,253,0.15)] transition-all duration-500"
            >
              {/* Card Header */}
              <div className="px-6 py-5 border-b border-white/8 flex items-center justify-between">
                <div>
                  <div className="text-base font-bold text-white font-display">{c.label}</div>
                  <div className="text-xs text-[#00C2FF] font-semibold mt-0.5">{c.treatment}</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse shadow-[0_0_8px_rgba(0,194,255,0.8)]" />
                  <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Live</span>
                </div>
              </div>

              {/* Interactive Slider */}
              <div className="p-4">
                <BeforeAfterSlider
                  beforeImg={c.beforeImg}
                  afterImg={c.afterImg}
                  beforeLabel={c.before}
                  afterLabel={c.after}
                />
              </div>

              {/* Before / After Description Footer */}
              <div className="grid grid-cols-2 border-t border-white/8">
                <div className="px-5 py-4 border-r border-white/8">
                  <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-1.5">Before</div>
                  <div className="text-xs text-white/50 leading-relaxed">{c.before}</div>
                </div>
                <div className="px-5 py-4 bg-[#0B6EFD]/5">
                  <div className="text-[9px] font-bold text-[#00C2FF] uppercase tracking-widest mb-1.5">After</div>
                  <div className="text-xs text-white/90 leading-relaxed font-semibold">{c.after}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center text-white/25 text-sm mt-12"
        >
          ✦ Drag the slider on each card to reveal the transformation ✦
        </motion.p>
      </div>
    </section>
  );
}