import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, ArrowRight, Tag } from 'lucide-react';
import { SALON_PACKAGES, SALON_BUSINESS } from '@/data/salonData';

const PopularPackages: React.FC = () => {
  const handleBookPackage = (packageName: string) => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="salon-section bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Light Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#C89B95]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="salon-container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="salon-section-label">SPECIAL SAVINGS</span>
          <h2 className="salon-section-title">
            Popular Luxury <span className="italic font-normal text-[#A87B75]">Combos & Packages.</span>
          </h2>
          <p className="salon-section-subtitle mx-auto">
            Save up to 32% with our expertly bundled hair, skin, and grooming rituals. Perfect for weekend pampering or special events.
          </p>
        </motion.div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SALON_PACKAGES.map((pkg, index) => {
            const isPopular = pkg.popular;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-400 ${
                  isPopular 
                    ? 'bg-[#121113] text-white shadow-2xl border-2 border-[#D4AF37] scale-102 lg:scale-105' 
                    : 'bg-white text-[#121113] border border-[#E8E1D7] shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Badge if present */}
                {pkg.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1 ${
                    isPopular 
                      ? 'bg-gradient-to-r from-[#E6C875] via-[#D4AF37] to-[#A38420] text-[#121113]' 
                      : 'bg-[#C89B95] text-white'
                  }`}>
                    <Sparkles size={12} /> {pkg.badge}
                  </div>
                )}

                <div>
                  {/* Top Header */}
                  <div className="mb-6 pt-2">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${isPopular ? 'text-[#D4AF37]' : 'text-[#A87B75]'}`}>
                      {pkg.savings}
                    </span>
                    <h3 className="salon-serif text-2xl font-bold mt-1 mb-2">
                      {pkg.name}
                    </h3>
                    <p className={`text-xs leading-relaxed ${isPopular ? 'text-white/70' : 'text-[#7A757F]'}`}>
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Box */}
                  <div className={`p-4 rounded-2xl mb-6 flex items-baseline justify-between ${
                    isPopular ? 'bg-white/10 border border-white/15' : 'bg-[#FAF7F2] border border-[#E8E1D7]'
                  }`}>
                    <div>
                      <div className="text-[11px] text-[#7A757F] line-through font-semibold">
                        {pkg.originalPrice}
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold salon-serif">
                        {pkg.packagePrice}
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                      isPopular ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-[#C89B95]/15 text-[#A87B75]'
                    }`}>
                      All-Inclusive
                    </span>
                  </div>

                  {/* Included Services Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${isPopular ? 'text-white/80' : 'text-[#121113]'}`}>
                      What's Included:
                    </div>
                    {pkg.servicesIncluded.map((s, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs font-medium">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPopular ? 'bg-[#D4AF37] text-[#121113]' : 'bg-[#25D366]/20 text-[#128C7E]'
                        }`}>
                          <Check size={11} />
                        </div>
                        <span className={isPopular ? 'text-white/90' : 'text-[#2D2B30]'}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleBookPackage(pkg.name)}
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    isPopular 
                      ? 'salon-btn-gold text-[#121113] shadow-xl' 
                      : 'bg-[#121113] text-white hover:bg-[#1E1C20]'
                  }`}
                >
                  Book Package Now <ArrowRight size={15} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Custom Package Note */}
        <motion.div 
          className="mt-12 text-center text-xs text-[#7A757F]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span>Need a customized bridal or party package for multiple people? </span>
          <a 
            href={SALON_BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A87B75] font-bold hover:underline inline-flex items-center gap-1"
          >
            Chat with our Concierge on WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularPackages;
