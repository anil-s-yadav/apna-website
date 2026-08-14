import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle2, ThumbsUp, MessageSquare, Sparkles } from 'lucide-react';
import { SALON_TESTIMONIALS } from '@/data/salonData';

const ENHANCED_REVIEWS = [
  {
    name: "Priya M.",
    location: "Lokhandwala, Andheri West",
    headline: "Best Haircut & Styling Experience in Mumbai!",
    text: "Absolutely loved my haircut and styling! The master stylist spent 10 minutes understanding my hair texture before making a single cut. The result was stunning. Will definitely be coming back!",
    rating: 5,
    tag: "Haircut & Styling",
    date: "Verified Google Review",
    avatarBg: "bg-gradient-to-tr from-[#C89B95] to-[#D4AF37]",
    initials: "PM"
  },
  {
    name: "Neha R.",
    location: "Versova, Andheri West",
    headline: "Felt Like a 5-Star Spa Resort Sanctuary!",
    text: "Beautiful salon, friendly staff and excellent service. My O3+ facial was so deeply relaxing, my skin was literally glowing for 2 weeks straight. Super clean & hygienic!",
    rating: 5,
    tag: "Radiance Facial",
    date: "Verified Google Review",
    avatarBg: "bg-gradient-to-tr from-[#121113] to-[#A87B75]",
    initials: "NR"
  },
  {
    name: "Aditi S.",
    location: "Juhu, Mumbai",
    headline: "Professional, Punctual & Zero Wait Time",
    text: "Very professional experience from start to finish. They use sealed single-use tools, genuine Kérastase products, and respect your appointment time. Highly recommended!",
    rating: 5,
    tag: "Keratin Ritual",
    date: "Verified Google Review",
    avatarBg: "bg-gradient-to-tr from-[#D4AF37] to-[#A38420]",
    initials: "AS"
  },
  {
    name: "Rohan K.",
    location: "Veera Desai Road, Andheri",
    headline: "Top Unisex Salon in Andheri for Men",
    text: "One of the best salon experiences I've had in Mumbai. Great scalp massage, precision beard trim, and warm staff who know what they're doing.",
    rating: 5,
    tag: "Grooming & Massage",
    date: "Verified Google Review",
    avatarBg: "bg-gradient-to-tr from-[#1E1C20] to-[#C89B95]",
    initials: "RK"
  }
];

const categoryFilters = ["All Reviews", "Hair Care", "Facials & Skin", "Grooming"];

export const SalonTestimonials: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All Reviews");

  const filteredReviews = activeFilter === "All Reviews"
    ? ENHANCED_REVIEWS
    : activeFilter === "Hair Care"
    ? ENHANCED_REVIEWS.filter(r => r.tag.includes("Hair") || r.tag.includes("Keratin"))
    : activeFilter === "Facials & Skin"
    ? ENHANCED_REVIEWS.filter(r => r.tag.includes("Facial"))
    : ENHANCED_REVIEWS.filter(r => r.tag.includes("Grooming"));

  return (
    <section id="reviews" className="salon-section bg-white relative overflow-hidden">
      {/* Background Subtle Gradient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FAF7F2] rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="salon-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="salon-section-label">REAL CLIENT REVIEWS</span>
            <h2 className="salon-section-title">
              What Our Clients <span className="italic font-normal text-[#A87B75]">Say About Us.</span>
            </h2>
            <p className="salon-section-subtitle mx-auto">
              Read authentic feedback from 180+ verified Google Reviews from clients across Andheri & Mumbai.
            </p>
          </motion.div>
        </div>

        {/* Google Rating Summary Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D7] flex flex-wrap items-center justify-between gap-4 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-bold text-lg shadow-sm">
              4.9★
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#F5A623] text-xs">
                {"★".repeat(5)}
              </div>
              <div className="text-xs font-bold text-[#121113]">180+ Reviews on Google Business</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#25D366]/10 text-[#128C7E] text-xs font-bold">
              <CheckCircle2 size={13} /> 99.4% Positive Feedback
            </span>
          </div>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categoryFilters.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeFilter === cat 
                  ? 'bg-[#121113] text-white shadow-md' 
                  : 'bg-[#FAF7F2] border border-[#E8E1D7] text-[#7A757F] hover:text-[#121113]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Review Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredReviews.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-[#FAF7F2] border border-[#E8E1D7] hover:border-[#C89B95]/40 hover:bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-400 relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Decorative Background Quote */}
                <div className="absolute -top-3 -right-2 text-[#E8E1D7]/50 pointer-events-none group-hover:text-[#C89B95]/20 transition-colors">
                  <Quote size={80} />
                </div>

                <div>
                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className="text-[#F5A623] fill-[#F5A623]" 
                        />
                      ))}
                    </div>

                    <span className="px-3 py-1 rounded-full bg-white border border-[#E8E1D7] text-[10px] font-bold text-[#A87B75]">
                      {testimonial.tag}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-bold text-base sm:text-lg text-[#121113] mb-2 relative z-10 group-hover:text-[#A87B75] transition-colors">
                    "{testimonial.headline}"
                  </h3>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-[#7A757F] leading-relaxed mb-6 font-light relative z-10">
                    {testimonial.text}
                  </p>
                </div>

                {/* Author Avatar Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E8E1D7] relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${testimonial.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-md`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#121113]">{testimonial.name}</h4>
                      <p className="text-[11px] text-[#7A757F]">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#25D366]">
                    <CheckCircle2 size={13} /> {testimonial.date}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
