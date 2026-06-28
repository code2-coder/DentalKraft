# 🦷 DentalKraft — Premium Dental Clinic Landing Page

<div align="center">

![DentalKraft Banner](public/images/hero-patient.png)

**A world-class, luxury dental clinic landing page built with React, Vite & Tailwind CSS v4.**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Motion](https://img.shields.io/badge/Motion-12.x-FF0080?style=flat-square)](https://motion.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Premium UI** | Glassmorphism, smooth gradients, luxury blue/white theme |
| 🎬 **Scroll Animations** | Every section animates in using Framer Motion / Motion React |
| 📱 **Fully Responsive** | Optimized for desktop, tablet, and mobile |
| 🖱️ **Interactive Sliders** | Drag-to-reveal Before & After smile comparison |
| 🧭 **Smart Navigation** | Scroll-spy highlights active section; smooth scroll with offset |
| 💬 **WhatsApp FAB** | Floating action button with pulse ring & tooltip |
| 📅 **Appointment Modal** | Premium glassmorphism booking form |
| 🖼️ **Local Images** | All images generated locally — no network dependency |
| 🗺️ **Footer Map Card** | Interactive map placeholder in footer |

---

## 📸 Page Sections

1. **Navbar** — Floating pill navbar with scroll progress bar & mobile drawer
2. **Hero** — Full-screen hero with layered images, floating stat cards, and trust badges
3. **Why Us** — Feature grid highlighting key clinic benefits
4. **About Clinic** — Story section with layered image composition
5. **Treatments** — Service cards with glassmorphism hover effects
6. **Meet Doctors** — Doctor profile cards with animated glass overlay
7. **Clinic Gallery** — Masonry photo grid with hover reveal
8. **Patient Journey** — Step-by-step treatment journey
9. **Technology** — Showcase of advanced dental technology
10. **Clinical Results** — Interactive before/after drag slider
11. **Testimonials** — Patient reviews with star ratings
12. **Pricing** — Transparent pricing highlights
13. **FAQ** — Accordion-style frequently asked questions
14. **CTA Banner** — Bold call-to-action section
15. **Contact** — Appointment scheduling form
16. **Footer** — Rich footer with social links, quick nav, services & map

---

## 🛠️ Tech Stack

```
React 18           — UI framework
Vite 6             — Lightning-fast build tool
Tailwind CSS v4    — Utility-first styling
Motion React 12    — Animations & transitions (Framer Motion)
Lucide React       — Icon library
```

---

## 📁 Project Structure

```
DentalKraft/
├── public/
│   └── images/            # All locally generated images
│       ├── hero-patient.png
│       ├── patient-happy.png
│       ├── clinic-interior.png
│       ├── doctor-sarah.png
│       ├── doctor-james.png
│       ├── doctor-emily.png
│       ├── gallery-*.png
│       ├── before-*.png
│       └── after-*.png
├── src/
│   ├── app/
│   │   └── App.jsx            # Root app, modal state, WhatsApp FAB
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx     # Sticky navbar, scroll-spy, mobile drawer
│   │   │   └── Footer.jsx     # Rich footer with social & stats
│   │   └── common/
│   │       └── AppointmentModal.jsx
│   ├── constants/
│   │   └── data.js            # All static data (nav, treatments, doctors, etc.)
│   ├── features/
│   │   ├── landing/
│   │   │   └── components/
│   │   │       ├── Hero.jsx
│   │   │       ├── WhyUs.jsx
│   │   │       ├── AboutClinic.jsx
│   │   │       ├── Treatments.jsx
│   │   │       ├── MeetDoctors.jsx
│   │   │       ├── ClinicGallery.jsx
│   │   │       ├── PatientJourney.jsx
│   │   │       ├── Technology.jsx
│   │   │       ├── SmileGallery.jsx   # Before/After drag slider
│   │   │       ├── Reviews.jsx
│   │   │       ├── PricingHighlights.jsx
│   │   │       ├── FAQ.jsx
│   │   │       └── CTABanner.jsx
│   │   └── contact/
│   │       └── components/
│   │           └── Contact.jsx
│   └── styles/                # Global CSS
└── index.html
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [pnpm](https://pnpm.io/) (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/DentalKraft.git
cd DentalKraft

# Install dependencies
pnpm install
# or
npm install
```

### Development

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
pnpm build
# or
npm run build
```

Output will be in the `dist/` folder.

---

## 🎨 Design System

| Token | Value |
|---|---|
| **Primary** | `#0B6EFD` (Royal Blue) |
| **Secondary** | `#1E88E5` |
| **Accent** | `#00C2FF` (Cyan) |
| **Dark** | `#102A43` |
| **Background** | `#F8FBFF` |
| **Heading Font** | `Poppins` (display) |
| **Body Font** | `Inter` |

---

## 🧩 Key Components

### `SmileGallery` — Interactive Before/After Slider
Drag the handle left and right to reveal the dental transformation. Built with native mouse/touch events and CSS clipping — no external library needed.

### `Navbar` — Smart Scroll Spy
Uses `IntersectionObserver` to automatically highlight the active nav section as you scroll. All nav clicks smooth-scroll with an 80px navbar offset.

### `WhatsApp FAB`
Floating button with a live pulse ring animation, brand-colored WhatsApp SVG icon, and a slide-in label tooltip on hover.

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "lucide-react": "0.487.0",
    "motion": "12.23.24",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "@vitejs/plugin-react": "4.7.0",
    "tailwindcss": "4.1.12",
    "vite": "6.3.5"
  }
}
```

---

## 📞 Clinic Info (Demo Data)

| Field | Value |
|---|---|
| **Clinic Name** | DentalKraft |
| **Location** | 123, MG Road, Pune 411001 |
| **Phone** | +91 98765 43210 |
| **Email** | info@dentalkraft.in |
| **Hours** | Mon–Sat: 9 AM – 8 PM |
| **Rating** | ⭐ 4.9/5.0 (Google) |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">

Made with ❤️ by **Vaibhav Pawar** &nbsp;|&nbsp; [CodeFusion Projects](https://github.com)

**DentalKraft** — *Crafting Smiles · Pune*

</div>