import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Calendar, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { SALON_BUSINESS } from '@/data/salonData';
import WhatsAppIcon from '@/components/salon/WhatsAppIcon';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const SalonHero: React.FC = () => {
  const scrollToAppointment = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#121113]"
    >
      {/* Background Image with Rich Dark Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80&auto=format&fit=crop)',
        }}
      />

      {/* Multi-layered Vignette Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 35%, rgba(200, 155, 149, 0.15) 0%, transparent 65%), linear-gradient(to bottom, rgba(18,17,19,0.65) 0%, rgba(18,17,19,0.85) 60%, rgba(18,17,19,0.98) 100%)',
        }}
      />

      {/* Decorative Ambient Gold Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-[#C89B95]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="salon-container relative z-10 flex flex-col items-center text-center pt-24 pb-20 sm:pt-36 sm:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl w-full"
        >
          {/* Sleek Compact Top Pill Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 mb-5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
          >
            <Sparkles size={13} className="text-[#D4AF37] shrink-0" />
            <span className="text-white text-[11px] sm:text-xs font-semibold tracking-wide">
              Premier Unisex Salon & Spa
            </span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37] shrink-0" />
            <span className="text-white/80 text-[11px] sm:text-xs">
              Andheri West, Mumbai
            </span>
          </motion.div>

          {/* Clean Main Title */}
          <motion.h1
            variants={itemVariants}
            className="salon-serif text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-4 sm:mb-6 leading-[1.1]"
          >
            Beauty, Care & <br />
            <span className="italic font-normal salon-gold-gradient-text">Confidence.</span>
          </motion.h1>

          {/* Clean Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-xs sm:text-lg md:text-xl max-w-xl mb-7 sm:mb-10 leading-relaxed font-light px-2"
          >
            Bespoke hair styling, luxury facials & spa services in Andheri West. Master artistry meets warm Indian care.
          </motion.p>

          {/* Dual CTAs (Both Visible on Mobile & Desktop) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-8 sm:mb-12 px-6 sm:px-0 max-w-xs sm:max-w-none"
          >
            <a
              href="/salon/book"
              className="salon-btn-gold px-7 py-3.5 text-xs sm:text-base shadow-2xl flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              <Calendar size={17} className="transition-transform group-hover:scale-110" />
              Book Appointment
            </a>
            <a
              href={SALON_BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/25 hover:border-white hover:bg-white/20 transition-all duration-300 text-xs sm:text-base w-full sm:w-auto"
            >
              <WhatsAppIcon size={18} fill="#25D366" />
              WhatsApp Booking
            </a>
          </motion.div>

          {/* Clean Minimalist Transparent Trust Strip */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-white/80 text-xs font-medium"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#F5A623] text-xs">
                {"★".repeat(5)}
              </div>
              <span className="font-bold text-white">4.9/5</span>
              <span className="text-[11px] text-white/60">(180+ Reviews)</span>
            </div>

            <span className="text-white/30">•</span>

            <div className="flex items-center gap-1 text-[11px] sm:text-xs">
              <Users size={13} className="text-[#C89B95]" />
              <span>500+ Clients</span>
            </div>

            <span className="text-white/30">•</span>

            <div className="flex items-center gap-1 text-[11px] sm:text-xs">
              <ShieldCheck size={13} className="text-[#D4AF37]" />
              <span>Certified</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SalonHero;
