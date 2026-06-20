export type BusinessCategory =
  | "Salon & Spa"
  | "Gym & Fitness"
  | "Restaurant & Cafe"
  | "Education & Coaching"
  | "Doctor & Clinic"
  | "Real Estate"
  | "Photography"
  | "YouTuber & Creator"
  | "Shop & E-commerce"
  | "Lawyer & Consultant";

export type Template = {
  id: number;
  name: string;
  category: BusinessCategory;
  image: string;
  preview: string;
  description: string;
};

export const templates: Template[] = [
  // ─── Salon & Spa ─────────────────────────────────────────
  {
    id: 1,
    name: "GlamourCuts Salon",
    category: "Salon & Spa",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
    preview: "https://developer.developer.developer",
    description: "Elegant salon website with booking section and service showcase",
  },
  {
    id: 2,
    name: "BeautyBliss Spa",
    category: "Salon & Spa",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbec6f?w=600&h=400&fit=crop",
    preview: "",
    description: "Luxurious spa website with treatment gallery and pricing",
  },
  {
    id: 3,
    name: "StyleStudio",
    category: "Salon & Spa",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
    preview: "",
    description: "Modern hair studio template with portfolio and team section",
  },
  {
    id: 4,
    name: "NailArt Pro",
    category: "Salon & Spa",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
    preview: "",
    description: "Trendy nail art studio website with gallery and booking",
  },

  // ─── Gym & Fitness ───────────────────────────────────────
  {
    id: 5,
    name: "FitZone Pro",
    category: "Gym & Fitness",
    image:
      "https://themewagon.com/wp-content/uploads/2020/06/fitnessclub-1.jpg",
    preview: "https://themewagon.github.io/fitnessclub/",
    description: "Bold fitness club template with membership and schedule sections",
  },
  {
    id: 6,
    name: "IronCore Gym",
    category: "Gym & Fitness",
    image: "https://themewagon.com/wp-content/uploads/2019/10/workout.jpg",
    preview: "https://themewagon.github.io/xgym/",
    description: "Powerful gym website with trainer profiles and class timetable",
  },
  {
    id: 7,
    name: "YogaLax Studio",
    category: "Gym & Fitness",
    image: "https://themewagon.com/wp-content/uploads/2020/08/Yogalax.png",
    preview: "https://themewagon.github.io/yogalax/",
    description: "Peaceful yoga studio site with session booking and instructor bios",
  },
  {
    id: 8,
    name: "CrossFit Arena",
    category: "Gym & Fitness",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    preview: "",
    description: "High-energy CrossFit gym template with WOD tracker and plans",
  },

  // ─── Restaurant & Cafe ───────────────────────────────────
  {
    id: 9,
    name: "FoodieSpot",
    category: "Restaurant & Cafe",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    preview: "",
    description: "Elegant restaurant site with menu display and table reservation",
  },
  {
    id: 10,
    name: "CafeDelight",
    category: "Restaurant & Cafe",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
    preview: "",
    description: "Cozy cafe website with coffee menu and ambiance gallery",
  },
  {
    id: 11,
    name: "SpiceKitchen",
    category: "Restaurant & Cafe",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
    preview: "",
    description: "Indian restaurant template with food gallery and online ordering",
  },
  {
    id: 12,
    name: "BistroBite",
    category: "Restaurant & Cafe",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=400&fit=crop",
    preview: "",
    description: "Chic bistro website with chef special section and reservations",
  },

  // ─── Education & Coaching ────────────────────────────────
  {
    id: 13,
    name: "Yaleena Classes",
    category: "Education & Coaching",
    image:
      "https://themewagon.com/wp-content/uploads/2025/05/E-learning-1200x736.webp",
    preview: "https://themewagon.github.io/E-learning/",
    description: "Online learning platform with course catalog and enrollment",
  },
  {
    id: 14,
    name: "EduKate Academy",
    category: "Education & Coaching",
    image:
      "https://themewagon.com/wp-content/uploads/2025/04/Edukate-1200x736.webp",
    preview: "https://themewagon.github.io/Edukate/",
    description: "Professional academy website with course details and faculty",
  },
  {
    id: 15,
    name: "ClassRoom Plus",
    category: "Education & Coaching",
    image:
      "https://themewagon.com/wp-content/uploads/2022/05/kidkinder-1200x736.webp",
    preview: "https://themewagon.github.io/kidkinder/",
    description: "Kids education template with class schedule and parent portal",
  },
  {
    id: 16,
    name: "TutorPro",
    category: "Education & Coaching",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    preview: "",
    description: "Private tutor website with subject list, testimonials, and booking",
  },

  // ─── Doctor & Clinic ─────────────────────────────────────
  {
    id: 17,
    name: "MedCare Clinic",
    category: "Doctor & Clinic",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop",
    preview: "",
    description: "Clean medical clinic site with doctor profiles and appointment booking",
  },
  {
    id: 18,
    name: "HealthFirst Hospital",
    category: "Doctor & Clinic",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    preview: "",
    description: "Modern hospital website with department listing and emergency info",
  },
  {
    id: 19,
    name: "DentalSmile",
    category: "Doctor & Clinic",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
    preview: "",
    description: "Dental clinic site with treatment list, before/after gallery",
  },

  // ─── Real Estate ─────────────────────────────────────────
  {
    id: 20,
    name: "DreamHome Realty",
    category: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    preview: "",
    description: "Real estate agency site with property listings and virtual tours",
  },
  {
    id: 21,
    name: "PropertyHub",
    category: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop",
    preview: "",
    description: "Property portal with search filters, agent profiles, and listings",
  },
  {
    id: 22,
    name: "EstateElite",
    category: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    preview: "",
    description: "Luxury real estate template with premium property showcase",
  },

  // ─── Photography ─────────────────────────────────────────
  {
    id: 23,
    name: "LensCraft Studio",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=400&fit=crop",
    preview: "",
    description: "Professional photography portfolio with full-screen gallery",
  },
  {
    id: 24,
    name: "PhotoFolio",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop",
    preview: "",
    description: "Minimal photographer portfolio with project categories",
  },
  {
    id: 25,
    name: "SnapGallery",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop",
    preview: "",
    description: "Dynamic photo gallery site with lightbox and contact form",
  },

  // ─── YouTuber & Creator ──────────────────────────────────
  {
    id: 26,
    name: "Xtrady",
    category: "YouTuber & Creator",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop",
    preview: "https://developer.developer.developer",
    description: "Bold content creator template with video showcase and merch",
  },
  {
    id: 27,
    name: "CreatorSpace",
    category: "YouTuber & Creator",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
    preview: "",
    description: "Clean creator portfolio with YouTube embed and social feed",
  },
  {
    id: 28,
    name: "VlogStation",
    category: "YouTuber & Creator",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
    preview: "",
    description: "Video-first website for vloggers with episode archive",
  },

  // ─── Shop & E-commerce ───────────────────────────────────
  {
    id: 29,
    name: "ShopEasy",
    category: "Shop & E-commerce",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
    preview: "",
    description: "Simple online shop with product catalog and WhatsApp ordering",
  },
  {
    id: 30,
    name: "RetailPro",
    category: "Shop & E-commerce",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    preview: "",
    description: "Retail store website with featured products and store locator",
  },
  {
    id: 31,
    name: "MarketPlace",
    category: "Shop & E-commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    preview: "",
    description: "Multi-vendor marketplace template with categories and cart",
  },

  // ─── Lawyer & Consultant ─────────────────────────────────
  {
    id: 32,
    name: "LegalEdge",
    category: "Lawyer & Consultant",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    preview: "",
    description: "Professional law firm website with practice areas and case studies",
  },
  {
    id: 33,
    name: "ConsultPro",
    category: "Lawyer & Consultant",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    preview: "",
    description: "Business consultant site with service offerings and testimonials",
  },
  {
    id: 34,
    name: "AdvisorHub",
    category: "Lawyer & Consultant",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
    preview: "",
    description: "Financial advisor template with expertise showcase and contact form",
  },
];

export const categories: readonly string[] = [
  "All",
  "Salon & Spa",
  "Gym & Fitness",
  "Restaurant & Cafe",
  "Education & Coaching",
  "Doctor & Clinic",
  "Real Estate",
  "Photography",
  "YouTuber & Creator",
  "Shop & E-commerce",
  "Lawyer & Consultant",
] as const;
