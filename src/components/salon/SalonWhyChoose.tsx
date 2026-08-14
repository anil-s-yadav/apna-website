import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, ShieldCheck, Heart, Award, CheckCircle2, Sparkle, Zap, Droplet } from 'lucide-react';

export default function SalonWhyChoose() {
  const bentoItems = [
    {
      id: "stylists",
      badge: "EXPERT MASTERS",
      title: "Certified Stylists & Therapists",
      description: "Our artists undergo rigorous international training with a minimum of 5+ years of experience in high-precision cutting, balayage, and clinical facial rituals.",
      icon: <Users className="w-6 h-6 text-[#A87B75]" />,
      highlights: ["L'Oréal Certified", "Bespoke Styling", "Continuous Training"],
      colSpan: "lg:col-span-7",
      bgGradient: "bg-gradient-to-br from-white via-[#FAF7F2] to-[#F4EFE6]",
      borderHighlight: "border-[#D4AF37]/30",
    },
    {
      id: "products",
      badge: "100% GENUINE",
      title: "Luxury Global Brands Only",
      description: "Zero compromises. We exclusively use L'Oréal Professionnel, Schwarzkopf, Kérastase, and O3+ dermatological formulas.",
      icon: <Sparkles className="w-6 h-6 text-[#D4AF37]" />,
      highlights: ["Dermatologically Tested", "Paraben-Free Choices"],
      colSpan: "lg:col-span-5",
      bgGradient: "bg-white",
      borderHighlight: "border-[#E8E1D7]",
    },
    {
      id: "hygiene",
      badge: "SAFETY FIRST",
      title: "Hospital-Grade Sanitation",
      description: "UV-sterilized tools for every client, fresh disposable capes, and sealed single-use kit pouches for complete peace of mind.",
      icon: <ShieldCheck className="w-6 h-6 text-[#25D366]" />,
      highlights: ["UVC Sterilized", "Single-Use Kits"],
      colSpan: "lg:col-span-5",
      bgGradient: "bg-white",
      borderHighlight: "border-[#E8E1D7]",
    },
    {
      id: "personalized",
      badge: "BESPOKE CARE",
      title: "Personalized Beauty Rituals",
      description: "No cookie-cutter services. Every visit starts with a complimentary 10-minute scalp & skin analysis to customize your treatment.",
      icon: <Heart className="w-6 h-6 text-[#C89B95]" />,
      highlights: ["Free Scalp Check", "Custom Blends"],
      colSpan: "lg:col-span-7",
      bgGradient: "bg-gradient-to-bl from-white via-[#FAF7F2] to-[#F4EFE6]",
      borderHighlight: "border-[#C89B95]/30",
    },
  ];

  return (
    <section className="salon-section bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle Lighting Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#C89B95]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="salon-container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="salon-section-label">THE BLUSH & BLOOM STANDARDS</span>
          <h2 className="salon-section-title">
            Why Mumbai Clients <span className="italic font-normal text-[#A87B75]">Trust Us.</span>
          </h2>
          <p className="salon-section-subtitle mx-auto">
            From hospital-grade tool sterilization to master colorists, experience why 500+ clients consider us Andheri's finest unisex salon.
          </p>
        </motion.div>

        {/* Luxury Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.colSpan} ${item.bgGradient} border ${item.borderHighlight} rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-400 group relative flex flex-col justify-between overflow-hidden`}
            >
              {/* Background Subtle Shimmer Line */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent pointer-events-none rounded-tr-3xl" />

              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/90 border border-[#E8E1D7] text-[10px] font-extrabold uppercase tracking-widest text-[#121113] shadow-2xl">
                    {item.badge}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8E1D7] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="salon-serif text-2xl font-bold text-[#121113] mb-3 group-hover:text-[#A87B75] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#7A757F] leading-relaxed mb-6 font-light">
                  {item.description}
                </p>
              </div>

              {/* Highlights Pill Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E8E1D7]/60">
                {item.highlights.map((h, i) => (
                  <span key={i} className="inline-flex items-center gap-1 text-[11px] font-bold text-[#121113] bg-white px-3 py-1 rounded-full border border-[#E8E1D7]">
                    <CheckCircle2 size={12} className="text-[#D4AF37]" /> {h}
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 rounded-2xl bg-white border border-[#E8E1D7] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F4E8C1] text-[#A38420] flex items-center justify-center shrink-0">
              <Award size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-[#121113]">100% Satisfaction Guarantee</div>
              <div className="text-xs text-[#7A757F]">If your haircut or service isn't perfect, we will tweak it free of charge within 7 days.</div>
            </div>
          </div>

          <a href="#appointment" className="salon-btn-primary py-2.5 px-6 text-xs shrink-0">
            Book Experience Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
