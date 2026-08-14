import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { SALON_BUSINESS } from '@/data/salonData';

export const SalonWelcomeDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open dialog after a brief 1.2 second delay on initial land
    const hasSeenWelcome = sessionStorage.getItem('salon_welcome_seen');
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('salon_welcome_seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dark Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
          />

          {/* Luxury Modal Pass Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-[#121113] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10 text-center"
          >
            {/* Background Radial Ambient Lighting */}
            <div 
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at 50% 30%, #D4AF37 0%, transparent 65%), radial-gradient(circle at 80% 80%, #C89B95 0%, transparent 50%)'
              }}
            />

            {/* Subtle Corner Gold Framing Lines */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37]/50 rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#D4AF37]/50 rounded-bl-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all flex items-center justify-center border border-white/15 z-20"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            <div className="relative z-10 flex flex-col items-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F4E8C1] text-xs font-bold uppercase tracking-wider mb-5 shadow-lg">
                <Gift size={14} className="text-[#D4AF37]" />
                Exclusive Welcome Offer
              </div>

              {/* Title */}
              <h2 className="salon-serif text-2xl sm:text-4xl text-white font-medium mb-3 leading-snug">
                Your first visit deserves a little extra <span className="italic font-normal salon-gold-gradient-text">pampering.</span>
              </h2>

              {/* Offer Highlight Box */}
              <div className="w-full my-4 p-4 rounded-2xl bg-white/10 border border-[#D4AF37]/30 backdrop-blur-md">
                <div className="text-xs text-white/70 uppercase tracking-widest font-bold mb-1">FIRST-TIME CLIENT PASS</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] flex items-center justify-center gap-2">
                  <span>FLAT 15% OFF</span>
                </div>
                <p className="text-xs text-white/80 font-light mt-1">Applicable on any Hair, Facial or Spa Service</p>
              </div>

              {/* Terms Bullets */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-white/60 mb-6 font-light">
                <span className="flex items-center gap-1"><ShieldCheck size={13} className="text-[#D4AF37]" /> Valid at Andheri West</span>
                <span>•</span>
                <span>Instant Voucher Code</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                <a
                  href={SALON_BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="salon-btn-gold py-3.5 px-6 w-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-2xl group"
                >
                  Claim 15% Welcome Offer <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <button
                  onClick={handleClose}
                  className="py-3 px-4 w-full text-xs text-white/60 hover:text-white transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SalonWelcomeDialog;
