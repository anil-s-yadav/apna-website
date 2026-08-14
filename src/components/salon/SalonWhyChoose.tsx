import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, ShieldCheck, Heart, Award, CheckCircle2 } from 'lucide-react';

export default function SalonWhyChoose() {
  const bentoItems = [
    {
      id: "stylists",
      badge: "EXPERT MASTERS",
      title: "Certified Stylists & Therapists",
      description: "Our artists undergo rigorous international training with 5+ years of experience in precision cutting & balayage.",
      icon: <Users className="w-5 h-5 text-[#A87B75]" />,
      highlights: ["L'Oréal Certified", "Bespoke Care"],
    },
    {
      id: "products",
      badge: "100% GENUINE",
      title: "Luxury Global Brands Only",
      description: "Zero compromises. Exclusively using L'Oréal Professionnel, Schwarzkopf, Kérastase & O3+ skin care.",
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
      highlights: ["Dermatological", "Paraben-Free"],
    },
    {
      id: "hygiene",
      badge: "SAFETY FIRST",
      title: "Hospital-Grade Sanitation",
      description: "UV-sterilized tools for every client, fresh disposable capes, and sealed single-use kit pouches.",
      icon: <ShieldCheck className="w-5 h-5 text-[#25D366]" />,
      highlights: ["UVC Sterilized", "Single-Use Kits"],
    },
    {
      id: "personalized",
      badge: "BESPOKE CARE",
      title: "Personalized Beauty Services",
      description: "No cookie-cutter services. Every visit starts with a complimentary 10-minute scalp & skin analysis.",
      icon: <Heart className="w-5 h-5 text-[#C89B95]" />,
      highlights: ["Free Scalp Check", "Custom Blends"],
    },
  ];

  return (
    <section className="salon-section bg-[#FAF7F2] relative overflow-hidden py-14">
      {/* Subtle Lighting Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#C89B95]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="salon-container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="salon-section-label">THE BLUSH & BLOOM STANDARDS</span>
          <h2 className="salon-section-title mb-2">
            Why Mumbai Clients <span className="italic font-normal text-[#A87B75]">Trust Us.</span>
          </h2>
          <p className="salon-section-subtitle mx-auto">
            From hospital-grade tool sterilization to master colorists, experience why 500+ clients consider us Andheri's finest unisex salon.
          </p>
        </motion.div>

        {/* Compact 4-Column Card Grid (Fits seamlessly across the screen) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-gradient-to-br from-white via-[#FAF7F2] to-[#F4EFE6] border border-[#D4AF37]/40 rounded-3xl p-5 sm:p-6 shadow-xl relative flex flex-col justify-between overflow-hidden"
            >
              {/* Background Gold Shimmer Line */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D4AF37]/15 to-transparent pointer-events-none rounded-tr-3xl" />

              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-white border border-[#D4AF37]/40 text-[9px] font-extrabold uppercase tracking-wider text-[#121113] shadow-sm">
                    {item.badge}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white border border-[#D4AF37]/40 flex items-center justify-center shadow-sm shrink-0">
                    {item.icon}
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="salon-serif text-lg font-bold text-[#A87B75] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#7A757F] leading-relaxed mb-4 font-light">
                  {item.description}
                </p>
              </div>

              {/* Highlights Pill Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#D4AF37]/30">
                {item.highlights.map((h, i) => (
                  <span key={i} className="inline-flex items-center gap-1 text-[10px] font-bold text-[#121113] bg-white px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30 shadow-xs">
                    <CheckCircle2 size={11} className="text-[#D4AF37]" /> {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-5 sm:p-6 rounded-3xl bg-white border border-[#D4AF37]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#F4E8C1] border border-[#D4AF37]/40 text-[#A38420] flex items-center justify-center shrink-0 shadow-sm">
              <Award size={20} />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#121113]">100% Satisfaction Guarantee</div>
              <div className="text-xs text-[#7A757F] font-light">If your haircut or service isn't perfect, we will tweak it free of charge within 7 days.</div>
            </div>
          </div>

          <a href="/salon/book" className="salon-btn-gold py-2.5 px-6 text-xs shrink-0 shadow-md">
            Book Experience Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
