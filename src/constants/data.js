import { Heart, Shield, Sparkles, CheckCircle, Zap } from "lucide-react";

export const NAV_LINKS = ["Home", "Treatments", "Smile Gallery", "About", "Reviews", "Contact"];

export const TREATMENTS = [{
  icon: "🦷",
  title: "Root Canal Treatment",
  desc: "Advanced root canal procedures focused on saving your natural teeth with maximum comfort.",
  color: "from-emerald-50 to-teal-50",
  border: "border-emerald-100"
}, {
  icon: "✨",
  title: "Dental Implants",
  desc: "Restore missing teeth with strong, natural-looking implant solutions.",
  color: "from-blue-50 to-indigo-50",
  border: "border-blue-100"
}, {
  icon: "🔬",
  title: "Wisdom Tooth Extraction",
  desc: "Safe and comfortable extraction procedures handled with precision.",
  color: "from-purple-50 to-pink-50",
  border: "border-purple-100"
}, {
  icon: "💎",
  title: "Tooth Extraction",
  desc: "Professional extraction care with minimal discomfort.",
  color: "from-amber-50 to-orange-50",
  border: "border-amber-100"
}, {
  icon: "👑",
  title: "Dental Crown Treatment",
  desc: "Premium crowns designed to restore strength and appearance.",
  color: "from-rose-50 to-red-50",
  border: "border-rose-100"
}, {
  icon: "😊",
  title: "Smile Correction",
  desc: "Transform your smile with personalized cosmetic dental solutions.",
  color: "from-teal-50 to-emerald-50",
  border: "border-teal-100"
}];

export const WHY_ITEMS = [{
  icon: Heart,
  title: "Courteous Staff",
  desc: "Friendly professionals who make every visit comfortable and stress-free."
}, {
  icon: Shield,
  title: "Efficient Dental Team",
  desc: "Experienced specialists delivering accurate and reliable treatment."
}, {
  icon: Sparkles,
  title: "Painless Treatment Approach",
  desc: "Modern techniques designed around patient comfort."
}, {
  icon: CheckCircle,
  title: "Detailed Procedure Explanation",
  desc: "We explain every step before starting your treatment."
}, {
  icon: Zap,
  title: "Advanced Equipment",
  desc: "Technology-driven dentistry for better results."
}];

export const STATS = [{
  value: "5000+",
  label: "Successful Treatments"
}, {
  value: "100%",
  label: "Patient Focus"
}, {
  value: "7 Days",
  label: "Appointment Support"
}, {
  value: "10+",
  label: "Years Experience"
}];

export const REVIEWS = [{
  name: "Priya Sharma",
  rating: 5,
  text: "Excellent root canal treatment experience. The doctor explained everything clearly. I was nervous but they made me feel completely at ease.",
  initials: "PS",
  color: "bg-emerald-500"
}, {
  name: "Rahul Mehta",
  rating: 5,
  text: "Very courteous staff and painless procedure. Highly recommended. The clinic is modern and clean. Will definitely return.",
  initials: "RM",
  color: "bg-navy-600"
}, {
  name: "Ananya Joshi",
  rating: 5,
  text: "Professional team with great guidance and care. My smile has completely transformed. I feel so much more confident now!",
  initials: "AJ",
  color: "bg-teal-500"
}, {
  name: "Vikram Patel",
  rating: 5,
  text: "Best dental experience I've ever had. The technology they use is impressive and results are outstanding.",
  initials: "VP",
  color: "bg-indigo-500"
}];

export const SMILE_CASES = [{
  label: "Teeth Restoration",
  before: "Discolored & chipped teeth",
  after: "Bright, perfectly aligned smile",
  emoji: "😬"
}, {
  label: "Smile Improvement",
  before: "Gaps between teeth",
  after: "Seamless natural appearance",
  emoji: "😁"
}, {
  label: "Cosmetic Dentistry",
  before: "Uneven dental structure",
  after: "Symmetrical beautiful smile",
  emoji: "✨"
}];
