// ═══════════════════════════════════════════════════════════
// Blush & Bloom Salon & Spa — Centralized Content Data
// ═══════════════════════════════════════════════════════════

export const SALON_BUSINESS = {
  name: "Blush & Bloom Salon & Spa",
  shortName: "Blush & Bloom",
  tagline: "Beauty, care & confidence — all in one place.",
  heroHeadline: "Beauty, care & confidence.",
  heroSubheadline: "Premium salon and spa experiences in the heart of Andheri West, Mumbai.",
  phone: "+91 90000 12345",
  phoneDisplay: "+91 90000 12345",
  whatsapp: "919000012345",
  email: "hello@blushandbloom.in",
  address: "Blush & Bloom Salon & Spa",
  addressLine2: "Andheri West, Mumbai, Maharashtra",
  fullAddress: "Near Infinity Mall, Andheri West, Mumbai, Maharashtra 400053",
  mapUrl: "https://www.google.com/maps/dir/?api=1&destination=Andheri+West+Mumbai",
  instagram: "https://instagram.com/blushandbloom",
  facebook: "https://facebook.com/blushandbloom",
  whatsappLink: "https://wa.me/919000012345?text=Hi%20Blush%20%26%20Bloom!%20I%27d%20like%20to%20book%20an%20appointment.",
  hours: {
    weekday: "Monday – Saturday: 10:00 AM – 8:30 PM",
    weekend: "Sunday: 11:00 AM – 7:00 PM",
  },
} as const;

export const SALON_STATS = [
  { value: "5+", label: "Years" },
  { value: "500+", label: "Happy Clients" },
  { value: "20+", label: "Beauty Services" },
] as const;

export const SALON_TRUST_BADGES = [
  { text: "4.9 ★ Google Rating", icon: "star" },
  { text: "500+ Happy Clients", icon: "users" },
  { text: "5+ Years of Experience", icon: "award" },
] as const;

export interface SalonService {
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface SalonServiceCategory {
  category: string;
  icon: string;
  services: SalonService[];
}

export const SALON_SERVICES: SalonServiceCategory[] = [
  {
    category: "Hair",
    icon: "scissors",
    services: [
      {
        name: "Haircut & Styling",
        description: "Precision cuts and blowouts tailored to your look",
        price: "From ₹599",
        image: "/salon/gallery-1.jpg",
      },
      {
        name: "Hair Spa",
        description: "Deep conditioning treatment for silky, healthy hair",
        price: "From ₹1,199",
        image: "/salon/gallery-2.jpg",
      },
      {
        name: "Hair Colour",
        description: "Global, highlights or balayage with premium colour",
        price: "From ₹1,499",
        image: "/salon/gallery-3.jpg",
      },
      {
        name: "Keratin Treatment",
        description: "Smooth, frizz-free hair that lasts for weeks",
        price: "From ₹2,999",
        image: "/salon/gallery-1.jpg",
      },
    ],
  },
  {
    category: "Skin & Beauty",
    icon: "sparkles",
    services: [
      {
        name: "Cleanup",
        description: "Gentle deep cleanse for fresh, glowing skin",
        price: "From ₹699",
        image: "/salon/gallery-4.jpg",
      },
      {
        name: "Facial",
        description: "Customized facials for radiant, rejuvenated skin",
        price: "From ₹1,299",
        image: "/salon/gallery-4.jpg",
      },
      {
        name: "Threading",
        description: "Precise shaping for brows, upper lip and face",
        price: "From ₹99",
        image: "/salon/gallery-5.jpg",
      },
      {
        name: "Detan",
        description: "Brightening treatment to remove sun tan evenly",
        price: "From ₹599",
        image: "/salon/gallery-5.jpg",
      },
    ],
  },
  {
    category: "Spa & Body",
    icon: "heart",
    services: [
      {
        name: "Relaxation Massage",
        description: "Full-body massage to relieve stress and tension",
        price: "From ₹1,299",
        image: "/salon/gallery-6.jpg",
      },
      {
        name: "Head Massage",
        description: "Soothing scalp massage to ease everyday stress",
        price: "From ₹499",
        image: "/salon/gallery-6.jpg",
      },
      {
        name: "Body Spa",
        description: "Complete body spa package for total relaxation",
        price: "From ₹1,999",
        image: "/salon/gallery-6.jpg",
      },
    ],
  },
];

export interface SalonPackage {
  id: string;
  name: string;
  tagline: string;
  originalPrice: string;
  packagePrice: string;
  savings: string;
  badge?: string;
  popular?: boolean;
  servicesIncluded: string[];
}

export const SALON_PACKAGES: SalonPackage[] = [
  {
    id: "glow-combo",
    name: "Radiant Weekend Glow",
    tagline: "Total head-to-toe refresh for your weekend outings",
    originalPrice: "₹2,898",
    packagePrice: "₹1,999",
    savings: "Save 30%",
    badge: "MOST POPULAR",
    popular: true,
    servicesIncluded: [
      "Haircut & Blowdry Styling",
      "O3+ Radiance Glow Facial",
      "Soothing Head & Scalp Massage (20 min)",
      "Threading (Brows & Upper Lip)"
    ]
  },
  {
    id: "hair-makeover",
    name: "Luxury Hair Makeover",
    tagline: "Transform dull hair into glossy, silky perfection",
    originalPrice: "₹4,697",
    packagePrice: "₹3,499",
    savings: "Save ₹1,200",
    badge: "BESTSELLER",
    servicesIncluded: [
      "Global Hair Colour or Balayage",
      "Deep L'Oréal Hair Spa Service",
      "Stylist Cut & Finish Blowout",
      "Complimentary Hair Serum Kit"
    ]
  },
  {
    id: "grooming-men",
    name: "Gentleman's Executive Care",
    tagline: "Sharp grooming package for modern men",
    originalPrice: "₹2,197",
    packagePrice: "₹1,499",
    savings: "Save 32%",
    servicesIncluded: [
      "Precision Men's Haircut",
      "Beard Styling & Steam Shave",
      "Charcoal Deep Cleansing Facial",
      "Relaxing Head & Shoulder Massage"
    ]
  }
];

export const SALON_TESTIMONIALS = [
  {
    text: "Absolutely loved my haircut and styling. The team understood exactly what I wanted. Will definitely be coming back!",
    name: "Priya M.",
    rating: 5,
  },
  {
    text: "Beautiful salon, friendly staff and excellent service. My facial was so relaxing. Felt like a mini vacation!",
    name: "Neha R.",
    rating: 5,
  },
  {
    text: "Very professional experience from start to finish. Clean setup, great products and they really listen to you.",
    name: "Aditi S.",
    rating: 5,
  },
  {
    text: "One of the best salon experiences I've had in Andheri. Highly recommended for anyone looking for quality care.",
    name: "Rohan K.",
    rating: 5,
  },
] as const;

export const SALON_FAQ = [
  {
    question: "Do I need an appointment?",
    answer: "While we welcome walk-ins, we recommend booking an appointment to avoid waiting. You can book online, via WhatsApp or by calling us directly.",
  },
  {
    question: "Do you offer services for men?",
    answer: "Yes! Blush & Bloom is a unisex salon. We offer haircuts, grooming, facials, head massages and more for men as well.",
  },
  {
    question: "What products do you use?",
    answer: "We use premium salon-grade products from trusted brands like L'Oréal Professionnel, Schwarzkopf, Kérastase and O3+. We're happy to discuss product choices before any service.",
  },
  {
    question: "How can I cancel or reschedule?",
    answer: "You can cancel or reschedule your appointment by calling us or sending a WhatsApp message at least 2 hours before your scheduled time.",
  },
  {
    question: "Do you accept UPI/card payments?",
    answer: "Yes, we accept all major payment methods including UPI (Google Pay, PhonePe, Paytm), credit/debit cards, and cash.",
  },
  {
    question: "Where are you located?",
    answer: "We're located in Andheri West, Mumbai — near Infinity Mall. Easy to reach by metro (Andheri station) or by road. Look for us on Google Maps!",
  },
] as const;

export const SALON_WHY_CHOOSE = [
  {
    title: "Experienced Team",
    description: "Skilled stylists with 5+ years of training in the latest techniques and trends.",
    icon: "users",
  },
  {
    title: "Premium Products",
    description: "We use only salon-grade, trusted brands for every service we offer.",
    icon: "sparkles",
  },
  {
    title: "Clean & Comfortable Space",
    description: "A hygienic, well-maintained salon designed for your comfort and safety.",
    icon: "shield",
  },
  {
    title: "Personalized Service",
    description: "Every visit is tailored to your preferences, skin type and hair goals.",
    icon: "heart",
  },
] as const;

export const SALON_GALLERY_IMAGES = [
  { src: "/salon/gallery-1.jpg", alt: "Hair styling session" },
  { src: "/salon/gallery-2.jpg", alt: "Salon interior" },
  { src: "/salon/gallery-3.jpg", alt: "Hair colouring" },
  { src: "/salon/gallery-4.jpg", alt: "Facial treatment" },
  { src: "/salon/gallery-5.jpg", alt: "Beauty service" },
  { src: "/salon/gallery-6.jpg", alt: "Spa treatment" },
  { src: "/salon/hero.jpg", alt: "Salon reception" },
  { src: "/salon/about.jpg", alt: "Happy customer" },
] as const;

export const SALON_NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;
