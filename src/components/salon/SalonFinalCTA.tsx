import React from 'react';
import { motion } from 'framer-motion';
import { SALON_BUSINESS } from '@/data/salonData';
import { Calendar, Sparkles } from 'lucide-react';
import WhatsAppIcon from '@/components/salon/WhatsAppIcon';

export const SalonFinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#121113]">
      {/* Background Image with Ambient Glow Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&q=80&auto=format&fit=crop)' }}
      />

      {/* Multi-layered Gradients */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#121113] via-[#121113]/80 to-[#121113]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="salon-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} /> Ready For Transformation?
          </div>

          <h2 className="salon-serif text-white text-4xl sm:text-6xl md:text-7xl font-semibold mb-6 leading-tight">
            Your self-care journey starts <span className="italic font-normal salon-gold-gradient-text">here.</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Reserve your preferred slot today or connect with our concierge on WhatsApp for instant confirmation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <a 
              href="#appointment"
              className="salon-btn-gold px-9 py-4 text-base shadow-2xl w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Calendar size={19} /> Book Appointment Now
            </a>
            <a 
              href={SALON_BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/25 hover:border-white hover:bg-white/20 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 text-base"
            >
              <WhatsAppIcon size={20} fill="#25D366" /> Chat On WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
