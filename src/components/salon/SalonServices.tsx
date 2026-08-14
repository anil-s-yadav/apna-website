import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Check, ChevronRight, Sparkles, Flame, Scissors, Heart } from 'lucide-react';
import { SALON_SERVICES } from '@/data/salonData';

const UNSPLASH_IMAGES = {
  "Hair": [
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=700&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?w=700&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=700&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=700&q=80&auto=format&fit=crop"
  ],
  "Skin & Beauty": [
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=700&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=700&q=80&auto=format&fit=crop"
  ],
  "Spa & Body": [
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=700&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&q=80&auto=format&fit=crop"
  ]
};

const serviceMeta: Record<string, { duration: string; badge?: string; tag: string }> = {
  "Haircut & Styling": { duration: "45 Mins", badge: "MOST POPULAR", tag: "Stylist Blowout Included" },
  "Hair Spa": { duration: "60 Mins", badge: "TOP RATED", tag: "Deep Conditioning" },
  "Hair Colour": { duration: "90 Mins", badge: "TRENDING", tag: "L'Oréal Professionnel" },
  "Keratin Treatment": { duration: "120 Mins", badge: "LUXURY RITUAL", tag: "Frizz-Free 12 Weeks" },
  "Cleanup": { duration: "40 Mins", tag: "Deep Pore Purifying" },
  "Facial": { duration: "60 Mins", badge: "GLOW ESSENTIAL", tag: "O3+ Radiance Ritual" },
  "Threading": { duration: "15 Mins", tag: "Precision Brow Shape" },
  "Detan": { duration: "30 Mins", tag: "Sun Tan Removal" },
  "Relaxation Massage": { duration: "60 Mins", badge: "MOST RELAXING", tag: "Aromatherapy Oils" },
  "Head Massage": { duration: "30 Mins", tag: "Scalp Stress Relief" },
  "Body Spa": { duration: "90 Mins", badge: "LUXURY SPA", tag: "Full-Body Scrub & Wrap" }
};

const categoryIcons = [
  { icon: Scissors, label: "Hair Rituals" },
  { icon: Sparkles, label: "Skin & Beauty" },
  { icon: Heart, label: "Spa & Body" }
];

const SalonServices = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const activeCategory = SALON_SERVICES[activeCategoryIdx];

  const handleBookClick = (serviceName: string) => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="salon-section bg-white relative overflow-hidden">
      {/* Background Decorative Ambient Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FAF7F2] rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="salon-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="salon-section-label">CURATED BEAUTY RITUALS</div>
            <h2 className="salon-section-title">
              Our Most-Loved <span className="italic font-normal text-[#A87B75]">Services.</span>
            </h2>
            <p className="salon-section-subtitle mx-auto">
              Crafted with luxury organic products, dermatological formulas & master international techniques.
            </p>
          </motion.div>
        </div>

        {/* Glossy Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="salon-mobile-scroll max-w-full p-1.5 rounded-full bg-[#FAF7F2] border border-[#E8E1D7] shadow-inner gap-1.5">
            {SALON_SERVICES.map((cat, idx) => {
              const isActive = idx === activeCategoryIdx;
              const CategoryIcon = categoryIcons[idx]?.icon || Sparkles;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategoryIdx(idx)}
                  className={`px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? 'bg-[#121113] text-white shadow-xl scale-102' 
                      : 'text-[#7A757F] hover:text-[#121113] hover:bg-white/60'
                  }`}
                >
                  <CategoryIcon size={16} className={isActive ? "text-[#D4AF37]" : "text-[#7A757F]"} />
                  <span>{cat.category}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#E8E1D7] text-[#121113]'}`}>
                    {cat.services.length}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* High-Attention Service Cards Grid (Hover style applied as DEFAULT) */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategoryIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {activeCategory.services.map((service, idx) => {
              const imagesForCategory = UNSPLASH_IMAGES[activeCategory.category as keyof typeof UNSPLASH_IMAGES] || [];
              const imageUrl = imagesForCategory[idx % imagesForCategory.length] || service.image;
              const meta = serviceMeta[service.name] || { duration: "45 Mins", tag: "Express Ritual" };

              return (
                <div 
                  key={service.name} 
                  className="salon-card flex flex-col h-full bg-white border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative"
                >
                  {/* Image Container with Badges */}
                  <div className="salon-img-zoom aspect-[4/3] w-full relative">
                    <img
                      src={imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121113]/85 via-[#121113]/25 to-transparent" />
                    
                    {/* Top Right Price Tag Pill */}
                    <div className="absolute top-3.5 right-3.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/80 shadow-lg text-xs font-extrabold text-[#121113]">
                      {service.price}
                    </div>

                    {/* Top Left Flagship Badge if present */}
                    {meta.badge && (
                      <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#121113]/90 backdrop-blur-md border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <Flame size={12} className="text-[#D4AF37]" /> {meta.badge}
                      </div>
                    )}

                    {/* Bottom Duration Badge */}
                    <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-xs font-bold text-white">
                      <Clock size={13} className="text-[#D4AF37]" />
                      <span>{meta.duration}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[#121113] mb-1.5">
                        {service.name}
                      </h3>
                      
                      <p className="text-xs text-[#7A757F] leading-relaxed line-clamp-2 mb-4 font-light">
                        {service.description}
                      </p>

                      {/* Tag Chip */}
                      <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#A87B75] bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#D4AF37]/30 mb-4">
                        <Check size={12} className="text-[#D4AF37]" /> {meta.tag}
                      </div>
                    </div>
                    
                    {/* High-Attention Action Button (Prominent Black & Gold by DEFAULT) */}
                    <button 
                      onClick={() => handleBookClick(service.name)}
                      className="w-full py-3.5 px-4 rounded-2xl bg-[#121113] text-white font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 border border-[#121113] shadow-md active:scale-98"
                    >
                      <span>Book This Service</span>
                      <ChevronRight size={15} className="text-[#D4AF37]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Attention Callout Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 p-6 rounded-3xl bg-[#FAF7F2] border border-[#E8E1D7] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-[#121113]">Free Hair & Skin Consultation</div>
              <div className="text-xs text-[#7A757F] font-light">Every service includes a complimentary 10-minute scalp or skin assessment.</div>
            </div>
          </div>

          <a href="#appointment" className="salon-btn-gold py-3 px-7 text-xs shrink-0 shadow-md">
            <Calendar size={16} /> Reserve Your Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SalonServices;
