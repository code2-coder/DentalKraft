import { 
  Heart, Shield, Sparkles, CheckCircle, Zap, Activity, 
  Stethoscope, Clock, MapPin, Phone, Mail, Award, User,
  Microscope, Scan, Fingerprint
} from "lucide-react";

export const NAV_LINKS = ["Home", "About", "Services", "Doctors", "Gallery", "Testimonials", "FAQ", "Contact"];

export const TREATMENTS = [
  {
    icon: "🦷",
    title: "Root Canal",
    desc: "Advanced root canal procedures focused on saving your natural teeth with maximum comfort.",
    img: "https://images.unsplash.com/photo-1598256989800-fea5f0627092?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: "✨",
    title: "Dental Implants",
    desc: "Restore missing teeth with strong, natural-looking implant solutions.",
    img: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: "😁",
    title: "Braces",
    desc: "Achieve perfectly aligned teeth with our advanced orthodontic braces.",
    img: "https://images.unsplash.com/photo-1590625697722-e4d07d1732dc?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: "🔬",
    title: "Invisible Aligners",
    desc: "Clear and comfortable aligners for a seamless straightening experience.",
    img: "https://images.unsplash.com/photo-1554556485-2c83321dbd31?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: "💎",
    title: "Teeth Whitening",
    desc: "Professional whitening services to instantly brighten your smile.",
    img: "https://images.unsplash.com/photo-1522849696084-818b98481ea1?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: "😊",
    title: "Smile Makeover",
    desc: "Transform your smile with personalized cosmetic dental solutions.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: "🌟",
    title: "Dental Veneers",
    desc: "Custom-made veneers to perfect the shape and color of your teeth.",
    img: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: "👶",
    title: "Children Dentistry",
    desc: "Gentle and specialized dental care tailored for kids.",
    img: "https://images.unsplash.com/photo-1542157434-78dbcefb48f5?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: "⚠️",
    title: "Wisdom Tooth Removal",
    desc: "Safe and comfortable extraction procedures handled with precision.",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: "🩺",
    title: "Gum Treatment",
    desc: "Advanced periodontal care to ensure healthy gums.",
    img: "https://images.unsplash.com/photo-1598256989800-fea5f0627092?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: "👑",
    title: "Dental Crowns",
    desc: "Premium crowns designed to restore strength and appearance.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: "🚑",
    title: "Emergency Care",
    desc: "Immediate relief and treatment for unexpected dental emergencies.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600"
  }
];

export const WHY_ITEMS = [
  {
    icon: User,
    title: "Experienced Dentists",
    desc: "Highly qualified professionals delivering world-class dental care."
  },
  {
    icon: Zap,
    title: "Modern Equipment",
    desc: "Technology-driven dentistry for faster and better results."
  },
  {
    icon: Scan,
    title: "Digital X-Ray",
    desc: "Low-radiation digital imaging for accurate diagnosis."
  },
  {
    icon: Heart,
    title: "Pain-Free Treatments",
    desc: "Advanced anesthesia and gentle techniques for maximum comfort."
  },
  {
    icon: Award,
    title: "Affordable Pricing",
    desc: "Premium care with transparent and competitive pricing options."
  },
  {
    icon: Activity,
    title: "Emergency Care",
    desc: "Priority treatment for urgent dental needs."
  }
];

export const DOCTORS = [
  {
    name: "Dr. Sarah Mitchell",
    qualification: "DDS, MSc (Orthodontics)",
    experience: "15+ Years Experience",
    specialization: "Lead Orthodontist",
    img: "/images/doctor-sarah.png"
  },
  {
    name: "Dr. James Wilson",
    qualification: "BDS, MDS (Oral Surgery)",
    experience: "12+ Years Experience",
    specialization: "Oral & Maxillofacial Surgeon",
    img: "/images/doctor-james.png"
  },
  {
    name: "Dr. Emily Chen",
    qualification: "DMD (Cosmetic Dentistry)",
    experience: "8+ Years Experience",
    specialization: "Cosmetic Dentist",
    img: "/images/doctor-emily.png"
  }
];

export const TIMELINE = [
  { step: "01", title: "Book Appointment", desc: "Easily schedule your visit online or via phone." },
  { step: "02", title: "Consultation", desc: "Detailed discussion of your dental concerns and goals." },
  { step: "03", title: "Diagnosis", desc: "Advanced digital imaging and thorough examination." },
  { step: "04", title: "Treatment", desc: "Painless, precise procedures by expert specialists." },
  { step: "05", title: "Healthy Smile", desc: "Enjoy your renewed, confident, and beautiful smile." }
];

export const TECHNOLOGIES = [
  { icon: Scan, title: "Digital X-Ray", desc: "High-resolution, low-radiation imaging." },
  { icon: Microscope, title: "3D Scanner", desc: "Precise impressions without messy molds." },
  { icon: Zap, title: "Laser Dentistry", desc: "Minimally invasive, painless procedures." },
  { icon: Fingerprint, title: "Intraoral Camera", desc: "Detailed real-time view of your teeth." },
  { icon: Activity, title: "CAD/CAM", desc: "Same-day custom crowns and restorations." },
  { icon: Shield, title: "AI Diagnostics", desc: "Advanced software for early issue detection." }
];

export const PRICING = [
  { title: "Root Canal", price: "Starts at $200", desc: "Includes digital x-rays and local anesthesia." },
  { title: "Dental Cleaning", price: "Starts at $99", desc: "Comprehensive scaling and polishing." },
  { title: "Teeth Whitening", price: "Starts at $150", desc: "Professional laser whitening session." },
  { title: "Implants", price: "Starts at $800", desc: "Premium titanium implants with lifetime warranty." },
  { title: "Braces", price: "Starts at $1200", desc: "Complete orthodontic treatment plan." }
];

export const FAQ = [
  { q: "Do you accept dental insurance?", a: "Yes, we accept most major dental insurance plans. Please contact our front desk to verify your specific coverage before your appointment." },
  { q: "Are your treatments really pain-free?", a: "We utilize the latest in modern anesthesia and gentle techniques to ensure that your experience is as comfortable and pain-free as possible." },
  { q: "How often should I visit the dentist?", a: "We recommend a routine check-up and professional cleaning every six months to maintain optimal oral health." },
  { q: "Do you offer emergency dental services?", a: "Absolutely. We keep open slots daily for dental emergencies like severe toothaches, broken teeth, or lost crowns." }
];

export const STATS = [
  { value: "5000+", label: "Happy Patients" },
  { value: "15+", label: "Years Experience" },
  { value: "20+", label: "Dental Services" },
  { value: "4.9★", label: "Google Rating" }
];

export const REVIEWS = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Excellent root canal treatment experience. The doctor explained everything clearly. I was nervous but they made me feel completely at ease.",
    avatar: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Rahul Mehta",
    rating: 5,
    text: "Very courteous staff and painless procedure. Highly recommended. The clinic is modern and clean. Will definitely return.",
    avatar: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Ananya Joshi",
    rating: 5,
    text: "Professional team with great guidance and care. My smile has completely transformed. I feel so much more confident now!",
    avatar: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Vikram Patel",
    rating: 5,
    text: "Best dental experience I've ever had. The technology they use is impressive and results are outstanding.",
    avatar: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export const SMILE_CASES = [
  {
    label: "Teeth Restoration",
    treatment: "Whitening + Bonding",
    before: "Discolored & chipped teeth",
    after: "Bright, perfectly aligned smile",
    beforeImg: "/images/before-1.png",
    afterImg: "/images/after-1.png"
  },
  {
    label: "Smile Improvement",
    treatment: "Orthodontic Aligners",
    before: "Gaps between teeth",
    after: "Seamless natural appearance",
    beforeImg: "/images/before-2.png",
    afterImg: "/images/after-2.png"
  },
  {
    label: "Cosmetic Dentistry",
    treatment: "Porcelain Veneers",
    before: "Uneven dental structure",
    after: "Symmetrical beautiful smile",
    beforeImg: "/images/before-3.png",
    afterImg: "/images/after-3.png"
  }
];
