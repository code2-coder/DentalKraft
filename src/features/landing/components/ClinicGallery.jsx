import { motion } from "motion/react";

export function ClinicGallery() {
  const images = [
    { src: "/images/clinic-interior.png",       alt: "Modern Clinic",   span: "md:col-span-2 md:row-span-2" },
    { src: "/images/gallery-treatment-room.png", alt: "Treatment Room",  span: "md:col-span-1 md:row-span-1" },
    { src: "/images/gallery-reception.png",      alt: "Patients Area",   span: "md:col-span-1 md:row-span-1" },
    { src: "/images/doctor-sarah.png",           alt: "Doctor Team",     span: "md:col-span-1 md:row-span-2" },
    { src: "/images/gallery-exterior.png",       alt: "Clinic Exterior", span: "md:col-span-1 md:row-span-1" },
    { src: "/images/gallery-equipment.png",      alt: "Equipment",       span: "md:col-span-1 md:row-span-1" }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F8FBFF] rounded-full text-xs font-bold text-[#0B6EFD] uppercase tracking-wider mb-4 border border-[#0B6EFD]/10">
            Our Facility
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#102A43] mb-4 font-display">
            Clinic Gallery
          </h2>
          <p className="text-[#5B6B7A] max-w-2xl mx-auto text-lg">
            Take a tour of our state-of-the-art facility designed with your comfort and safety in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 md:gap-6 h-[800px]">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-2 bg-[#F8FBFF] rounded-[2.5rem] border border-[#102A43]/5 shadow-sm hover:shadow-[0_20px_40px_rgba(11,110,253,0.15)] hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-pointer ${img.span}`}
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-[#102A43]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem]" />
                
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="text-white font-bold text-lg font-display">{img.alt}</div>
                  <div className="w-8 h-1 bg-[#0B6EFD] rounded-full mt-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
