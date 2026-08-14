import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  {
    name: "Priya M.",
    location: "Lokhandwala, Andheri West",
    headline: "Best Haircut & Styling Experience in Mumbai!",
    text: "Their haircut & styling service is top-notch. The master stylist is polite, spends time understanding your hair texture, and styles very safely. Highly recommend for anyone in Mumbai.",
    rating: 5,
    tag: "Haircut & Styling",
    date: "Verified",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Neha R.",
    location: "Versova, Andheri West",
    headline: "Great O3+ Facial & Glowing Skin",
    text: "Their O3+ facial service is top-notch. The esthetician is polite, knows skin care extremely well, and works very gently. Highly recommend for anyone in Andheri.",
    rating: 4,
    tag: "Radiance Facial",
    date: "Verified",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Aditi S.",
    location: "Juhu, Mumbai",
    headline: "Professional, Punctual & Zero Wait Time",
    text: "Their Keratin treatment is top-notch. They use sealed single-use tools, genuine Kérastase products, and respect your time. Highly recommend for anyone in Mumbai.",
    rating: 5,
    tag: "Keratin Service",
    date: "Verified",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Rohan K.",
    location: "Veera Desai Road, Andheri",
    headline: "Top Unisex Salon in Andheri for Men",
    text: "Their grooming & beard styling service is top-notch. The barber is polite, knows all classic cuts well, and works very precisely. Highly recommend.",
    rating: 4,
    tag: "Grooming & Massage",
    date: "Verified",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Ananya K.",
    location: "Andheri West, Mumbai",
    headline: "Stunning Balayage Hair Color Treatment",
    text: "Their hair coloring service is top-notch. The colorist is knowledgeable, creates natural tone blends, and handles hair delicately. Highly recommend.",
    rating: 3,
    tag: "Hair Colour & Balayage",
    date: "Verified",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&q=80&auto=format&fit=crop",
  }
];

export const SalonTestimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="salon-section bg-[#FAF7F2] relative overflow-hidden pb-12">
      {/* Background Subtle Gradient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/60 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="salon-section-label">REAL CLIENT REVIEWS</span>
            <h2 className="salon-section-title mb-2">
              What Our Clients <span className="italic font-normal text-[#A87B75]">Say About Us.</span>
            </h2>
            <p className="salon-section-subtitle mx-auto">
              Authentic Google Business reviews from happy clients across Andheri & Mumbai.
            </p>
          </motion.div>
        </div>

        {/* Carousel Container with 10% Left & 10% Right Peek */}
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory px-8 sm:px-16 salon-mobile-scroll"
        >
          {REVIEWS.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="w-[76vw] sm:w-[350px] shrink-0 snap-center bg-white border border-[#E8E1D7] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Header Box: Avatar + Name + Location */}
              <div className="bg-[#FAF7F2] p-5 border-b border-[#E8E1D7] flex items-center gap-3.5">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-2xl object-cover border border-[#D4AF37]/40 shadow-sm shrink-0" 
                />
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#121113]">{review.name}</h4>
                  <p className="text-xs text-[#7A757F] font-light">{review.location}</p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#7A757F] mb-2">
                    WHAT THEY SAID
                  </div>
                  <p className="text-xs sm:text-sm text-[#2D2B30] leading-relaxed font-light mb-4">
                    "{review.text}"
                  </p>
                </div>

                {/* Footer: Rating Stars + Verified Pill */}
                <div className="flex items-center justify-between pt-3 border-t border-[#E8E1D7]/60">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < review.rating ? "text-[#F5A623] fill-[#F5A623]" : "text-[#E8E1D7] fill-[#E8E1D7]"} 
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#A87B75]">
                    <span>Verified</span>
                    <CheckCircle2 size={13} className="text-[#A87B75]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
