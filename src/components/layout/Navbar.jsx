import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../constants/data.js";

// Maps nav link labels → actual section IDs in the DOM
const NAV_ID_MAP = {
  "Home":         "home",
  "About":        "about",
  "Services":     "services",
  "Doctors":      "doctors",
  "Gallery":      "gallery",
  "Testimonials": "testimonials",
  "FAQ":          "faq",
  "Contact":      "contact",
};

export function Navbar({ onBook }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Scroll spy — highlights active nav link as you scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const matched = NAV_LINKS.find((link) => NAV_ID_MAP[link] === id);
            if (matched) setActiveLink(matched);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    setTimeout(() => {
      NAV_LINKS.forEach((link) => {
        const el = document.getElementById(NAV_ID_MAP[link]);
        if (el) observer.observe(el);
      });
    }, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Smooth scroll to section with navbar offset
  const handleNavClick = (link) => {
    setActiveLink(link);
    setOpen(false);
    const id = NAV_ID_MAP[link];
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B6EFD] to-[#00C2FF] z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed z-50 transition-all duration-500 flex justify-center w-full ${
          scrolled ? "top-4 px-4" : "top-0 px-0"
        }`}
      >
        <div className={`w-full transition-all duration-500 ${
          scrolled
            ? "max-w-[95%] 2xl:max-w-7xl bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60 rounded-full px-4 py-2"
            : "max-w-7xl bg-white/40 backdrop-blur-md border-b border-white/20 px-4 sm:px-6 lg:px-8 py-3"
        }`}>
          <div className="flex items-center justify-between h-14 lg:h-16">

            {/* Logo */}
            <div
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => handleNavClick("Home")}
            >
              <div className="relative flex items-center justify-center w-10 h-10 lg:w-11 lg:h-11 bg-[#0B6EFD]/[0.05] rounded-full border border-[#0B6EFD]/10 group-hover:bg-[#0B6EFD]/10 group-hover:border-[#0B6EFD]/20 transition-all duration-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M7 3C4.23858 3 2 5.23858 2 8C2 13 7 21 7 21L12 16L17 21C17 21 22 13 22 8C22 5.23858 19.7614 3 17 3C14.2386 3 12 6 12 6C12 6 9.76142 3 7 3Z"
                    stroke="url(#nav-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="1.5" fill="#0B6EFD" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <defs>
                    <linearGradient id="nav-grad" x1="2" y1="3" x2="22" y2="21" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0B6EFD"/>
                      <stop offset="1" stopColor="#00C2FF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline gap-1">
                  <span className="font-extrabold text-[#102A43] text-xl lg:text-2xl tracking-tight font-display">Dental</span>
                  <span className="font-medium italic text-[#0B6EFD] text-xl lg:text-2xl font-display">Kraft</span>
                </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 p-1 xl:p-1.5 rounded-full">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavClick(link)}
                  className={`relative px-3 xl:px-4 py-2 text-[12px] xl:text-[13px] font-bold tracking-wide transition-colors rounded-full z-10 ${
                    activeLink === link ? "text-[#0B6EFD]" : "text-[#5B6B7A] hover:text-[#102A43]"
                  }`}
                >
                  {activeLink === link && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.04)] -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={onBook}
                className="relative px-4 xl:px-5 py-2 bg-[#102A43] text-white text-[12px] xl:text-[13px] font-bold rounded-full overflow-hidden group shadow-[0_4px_14px_rgba(16,42,67,0.15)] hover:shadow-[0_6px_20px_rgba(11,110,253,0.3)] transition-all duration-300 active:scale-95"
              >
                <span className="relative z-10">Book Appointment</span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#0B6EFD] to-[#00C2FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden w-10 h-10 rounded-full border border-[#102A43]/10 flex items-center justify-center hover:bg-[#102A43]/5 transition-colors active:scale-95"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} className="text-[#102A43]" /> : <Menu size={20} className="text-[#102A43]" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-[#102A43]/20 backdrop-blur-sm lg:hidden"
            />
          )}
        </AnimatePresence>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 shadow-2xl flex flex-col lg:hidden border-l border-[#102A43]/5"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#102A43]/5">
                <div className="flex items-baseline gap-1">
                  <span className="font-extrabold text-[#102A43] text-xl font-display">Dental</span>
                  <span className="font-medium italic text-[#0B6EFD] text-xl font-display">Kraft</span>
                </div>
                <button
                  className="p-2 rounded-xl bg-[#102A43]/5 hover:bg-[#102A43]/10 transition"
                  onClick={() => setOpen(false)}
                >
                  <X size={20} className="text-[#102A43]" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNavClick(link)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 ${
                      activeLink === link
                        ? "bg-[#0B6EFD]/10 text-[#0B6EFD]"
                        : "text-[#5B6B7A] hover:bg-[#F8FBFF] hover:text-[#102A43]"
                    }`}
                  >
                    {link}
                  </motion.button>
                ))}
              </div>

              <div className="p-6 border-t border-[#102A43]/5 bg-[#F8FBFF]">
                <button
                  onClick={() => { setOpen(false); onBook(); }}
                  className="w-full py-4 bg-[#0B6EFD] text-white font-bold rounded-xl shadow-[0_8px_20px_rgba(11,110,253,0.3)] active:scale-95 transition-all hover:bg-[#1E88E5]"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
