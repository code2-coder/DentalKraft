import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

import { Navbar } from "../components/layout/Navbar.jsx";
import { Footer } from "../components/layout/Footer.jsx";
import { AppointmentModal } from "../components/common/AppointmentModal.jsx";

import { Hero } from "../features/landing/components/Hero.jsx";
import { WhyUs } from "../features/landing/components/WhyUs.jsx";
import { AboutClinic } from "../features/landing/components/AboutClinic.jsx";
import { Treatments } from "../features/landing/components/Treatments.jsx";
import { MeetDoctors } from "../features/landing/components/MeetDoctors.jsx";
import { ClinicGallery } from "../features/landing/components/ClinicGallery.jsx";
import { PatientJourney } from "../features/landing/components/PatientJourney.jsx";
import { Technology } from "../features/landing/components/Technology.jsx";
import { SmileGallery } from "../features/landing/components/SmileGallery.jsx";
import { Reviews } from "../features/landing/components/Reviews.jsx";
import { PricingHighlights } from "../features/landing/components/PricingHighlights.jsx";
import { FAQ } from "../features/landing/components/FAQ.jsx";
import { CTABanner } from "../features/landing/components/CTABanner.jsx";
import { Contact } from "../features/contact/components/Contact.jsx";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen font-sans">
      <Navbar onBook={() => setModalOpen(true)} />
      
      <main>
        <Hero onBook={() => setModalOpen(true)} />
        <WhyUs />
        <AboutClinic />
        <Treatments />
        <MeetDoctors onBook={() => setModalOpen(true)} />
        <ClinicGallery />
        <PatientJourney />
        <Technology />
        <SmileGallery />
        <Reviews />
        <PricingHighlights onBook={() => setModalOpen(true)} />
        <FAQ />
        <CTABanner onBook={() => setModalOpen(true)} />
        <Contact />
      </main>
      
      <Footer />

      {/* WhatsApp FAB */}
      <motion.a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-3"
      >
        {/* Tooltip label — slides in from right on hover */}
        <motion.span
          initial={{ opacity: 0, x: 10, scale: 0.9 }}
          whileHover={{ opacity: 1, x: 0, scale: 1 }}
          className="hidden group-hover:flex items-center px-4 py-2 bg-[#102A43] text-white text-sm font-bold rounded-full shadow-xl border border-white/10 whitespace-nowrap pointer-events-none transition-all duration-300"
        >
          Chat on WhatsApp
        </motion.span>

        {/* Main button */}
        <div className="relative flex-shrink-0">
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          {/* Outer glow ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 group-hover:bg-[#25D366]/40 transition-colors duration-300" />

          <motion.div
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#1DA851] shadow-[0_8px_30px_rgba(37,211,102,0.5)] group-hover:shadow-[0_12px_40px_rgba(37,211,102,0.7)] flex items-center justify-center transition-shadow duration-300"
          >
            {/* WhatsApp SVG icon */}
            <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.002 3.2C9.374 3.2 4 8.574 4 15.202c0 2.18.576 4.22 1.58 5.986L4 28.8l7.82-1.556A11.77 11.77 0 0 0 16.002 28C22.63 28 28 22.626 28 16S22.63 3.2 16.002 3.2zm0 21.44a9.54 9.54 0 0 1-4.876-1.334l-.35-.208-3.632.722.748-3.538-.228-.364A9.44 9.44 0 0 1 6.44 15.2c0-5.274 4.292-9.562 9.562-9.562 5.272 0 9.558 4.288 9.558 9.562 0 5.274-4.286 9.44-9.558 9.44zm5.244-7.072c-.286-.144-1.694-.836-1.956-.932-.262-.096-.454-.144-.644.144-.19.286-.74.932-.906 1.124-.166.19-.334.216-.62.072-.286-.144-1.21-.446-2.304-1.42-.852-.758-1.428-1.694-1.594-1.98-.166-.286-.018-.44.126-.582.128-.128.286-.334.43-.5.144-.168.19-.286.286-.478.096-.19.048-.358-.024-.502-.072-.144-.644-1.552-.882-2.124-.232-.556-.47-.48-.644-.49l-.548-.01c-.19 0-.5.072-.762.358-.262.286-1 .978-1 2.384s1.024 2.766 1.168 2.956c.144.19 2.016 3.078 4.886 4.316.684.296 1.216.472 1.632.604.686.218 1.31.188 1.804.114.55-.082 1.694-.692 1.932-1.36.24-.668.24-1.24.168-1.36-.072-.12-.262-.19-.548-.334z"/>
            </svg>
          </motion.div>
        </div>
      </motion.a>

      <AppointmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
