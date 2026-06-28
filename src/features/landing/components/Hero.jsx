import { motion } from "motion/react";
import { CheckCircle, Star } from "lucide-react";

export function Hero({ onBook }) {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F8FBFF] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#0B6EFD]/5 to-[#00C2FF]/10 blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#1E88E5]/5 to-transparent blur-3xl opacity-60" />
        
        {/* Abstract pattern / grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMxMDJBNDMiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-40 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#0B6EFD]/10 text-xs font-bold text-[#0B6EFD] uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0B6EFD] animate-pulse"></span>
              Premium Dental Care
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-[#102A43] mb-6 leading-[1.1] font-display">
              Crafting Healthy Smiles with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B6EFD] to-[#00C2FF]">Precision & Care</span>
            </h1>
            
            <p className="text-lg text-[#5B6B7A] mb-8 leading-relaxed max-w-xl">
              Experience world-class dental care with our team of specialists. We combine modern technology with compassionate care to deliver exceptional results.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button 
                onClick={onBook} 
                className="px-8 py-4 bg-[#0B6EFD] text-white font-bold rounded-full hover:bg-[#1E88E5] transition-all hover:shadow-[0_10px_30px_rgba(11,110,253,0.4)] active:scale-95"
              >
                Book Appointment
              </button>
              <a 
                href="tel:+1234567890" 
                className="px-8 py-4 bg-white text-[#102A43] font-bold rounded-full border-2 border-[#102A43]/5 hover:border-[#0B6EFD]/30 hover:bg-[#F8FBFF] transition-all active:scale-95"
              >
                Call Now
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {[
                "Experienced Dentists",
                "Pain-Free Treatment",
                "Modern Technology",
                "Sterilized Equipment",
                "Same-Day Consultation"
              ].map((badge, i) => (
                <motion.div 
                  key={badge}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                  className="flex items-center gap-2 group cursor-default"
                >
                  <CheckCircle size={18} className="text-[#00C853] shrink-0" />
                  <span className="text-sm font-semibold text-[#102A43]">{badge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }} 
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} 
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg xl:max-w-xl"
          >
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#0B6EFD]/5 rounded-full blur-3xl -z-10" />

            {/* Main Image Container with Glass Frame */}
            <div className="relative z-10 aspect-[4/5] p-2 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_30px_60px_rgba(11,110,253,0.15)] group">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <img 
                  src="/images/hero-patient.png" 
                  alt="Premium Dental Care" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/60 via-[#102A43]/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem]" />
              </div>
            </div>

            {/* Secondary Overlapping Image with Glass Frame */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="absolute -bottom-10 -left-10 w-56 h-56 p-2 bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/80 shadow-[0_20px_40px_rgba(11,110,253,0.2)] z-30 hidden sm:block group"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img 
                  src="/images/patient-happy.png" 
                  alt="Happy Patient" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl" />
              </div>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-12 -left-12 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white flex items-center gap-4 hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-[#F8FBFF] flex items-center justify-center">
                <Star size={24} className="text-[#FFC107] fill-[#FFC107]" />
              </div>
              <div>
                <div className="font-bold text-[#102A43] text-lg leading-tight">4.9/5.0</div>
                <div className="text-xs font-semibold text-[#5B6B7A] uppercase tracking-wider">Google Rating</div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 -right-8 z-20 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="text-3xl font-display font-extrabold text-[#0B6EFD]">5000+</div>
              </div>
              <div className="text-xs font-semibold text-[#5B6B7A] uppercase tracking-wider">Happy Patients</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
