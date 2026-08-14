import { motion } from 'framer-motion';
import { Sparkles, Gift, ArrowRight, ShieldCheck } from 'lucide-react';
import { SALON_BUSINESS } from '@/data/salonData';

const SalonPromo = () => {
  return (
    <section className="relative w-full bg-[#121113] overflow-hidden py-16 sm:py-20 border-y border-[#D4AF37]/20">
      {/* Background Ambient Glows & Rays */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 50%, #D4AF37 0%, transparent 60%), radial-gradient(circle at 20% 50%, #C89B95 0%, transparent 50%)'
        }}
      />

      <div className="salon-container relative z-10">
        <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Decorative Gold Corner Lines */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#D4AF37]/40 rounded-tr-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#D4AF37]/40 rounded-bl-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F4E8C1] text-xs font-bold uppercase tracking-wider mb-5">
                <Gift size={14} className="text-[#D4AF37]" />
                Exclusive Welcome Offer
              </div>
              
              <h2 className="salon-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium mb-4 leading-tight">
                Your first visit deserves a little extra <span className="italic font-normal salon-gold-gradient-text">pampering.</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-white/90 font-light mb-4">
                Enjoy flat <span className="text-[#D4AF37] font-bold text-2xl">15% OFF</span> on your inaugural salon or spa experience.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-white/60">
                <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-[#D4AF37]" /> First-time clients only</span>
                <span>•</span>
                <span>Valid on Hair & Facial services</span>
                <span>•</span>
                <span>Andheri West Branch</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <a 
                href={SALON_BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="salon-btn-gold px-9 py-4 text-base shadow-2xl flex items-center justify-center gap-2 group"
              >
                Claim 15% Welcome Offer <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalonPromo;
