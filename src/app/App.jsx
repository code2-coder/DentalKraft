import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

import { Navbar } from "../components/layout/Navbar.jsx";
import { Footer } from "../components/layout/Footer.jsx";
import { AppointmentModal } from "../components/common/AppointmentModal.jsx";

import { Hero } from "../features/landing/components/Hero.jsx";
import { Treatments } from "../features/landing/components/Treatments.jsx";
import { WhyUs } from "../features/landing/components/WhyUs.jsx";
import { SmileGallery } from "../features/landing/components/SmileGallery.jsx";
import { Reviews } from "../features/landing/components/Reviews.jsx";
import { CTABanner } from "../features/landing/components/CTABanner.jsx";

import { Contact } from "../features/contact/components/Contact.jsx";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar onBook={() => setModalOpen(true)} />
      <Hero onBook={() => setModalOpen(true)} />
      <Treatments />
      <WhyUs />
      <SmileGallery />
      <Reviews />
      <CTABanner onBook={() => setModalOpen(true)} />
      <Contact />
      <Footer />

      {/* WhatsApp FAB */}
      <motion.a 
        href="https://wa.me/9102041200727" 
        target="_blank" 
        rel="noopener noreferrer" 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }} 
        whileHover={{ scale: 1.1 }} 
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] shadow-xl flex items-center justify-center hover:shadow-2xl transition-shadow"
      >
        <MessageCircle size={24} className="text-white" />
      </motion.a>

      <AppointmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
