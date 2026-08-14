import { motion } from 'framer-motion';
import { Calendar, Star, Users, ShieldCheck, Sparkles } from 'lucide-react';
import { SALON_BUSINESS, SALON_TRUST_BADGES } from '@/data/salonData';
import WhatsAppIcon from '@/components/salon/WhatsAppIcon';

const iconMap = {
  star: Star,
  users: Users,
  award: ShieldCheck,
} as const;

const SalonHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollToAppointment = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[92vh] md:min-h-screen overflow-hidden bg-[#121113]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80&auto=format&fit=crop)',
        }}
      />
      
      {/* Multi-layered Dark & Gold Gradients */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 20%, rgba(200, 155, 149, 0.18) 0%, transparent 60%), linear-gradient(to bottom, rgba(18,17,19,0.50) 0%, rgba(18,17,19,0.85) 75%, rgba(18,17,19,0.98) 100%)',
        }}
      />

      {/* Decorative Ambient Gold Glow Spheres */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-[#C89B95]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="salon-container relative z-10 flex flex-col items-center text-center pt-32 pb-20 md:pt-20 md:pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl w-full"
        >
          {/* Top Pill Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
          >
            <Sparkles size={15} className="text-[#D4AF37] animate-pulse" />
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
              Andheri West's Premier Unisex Beauty Spa
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-white/80 text-xs sm:text-sm">Mumbai</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="salon-serif text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 leading-[1.08]"
          >
            Beauty, Care & <br />
            <span className="italic font-normal salon-gold-gradient-text">Confidence.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light px-4"
          >
            Experience bespoke hair, luxury facials & body spa treatments designed to leave you glowing. Where master artistry meets warm Indian hospitality.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-14 px-4 sm:px-0"
          >
            <a
              href="#appointment"
              onClick={scrollToAppointment}
              className="salon-btn-gold px-9 py-4 text-base shadow-2xl flex items-center justify-center gap-2.5 group"
            >
              <Calendar size={19} className="transition-transform group-hover:scale-110" />
              Book Appointment
            </a>
            <a
              href={SALON_BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/25 hover:border-white hover:bg-white/20 transition-all duration-300 text-base"
            >
              <WhatsAppIcon size={20} fill="#25D366" />
              WhatsApp Instant Booking
            </a>
          </motion.div>

          {/* Trust Badges Dock */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-3xl py-4 px-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-wrap justify-around items-center gap-4 text-white/90 shadow-2xl"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white/20 bg-gradient-to-tr from-[#C89B95] to-[#D4AF37] flex items-center justify-center text-[10px] font-bold text-white">4.9★</span>
                <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white/20 bg-[#121113] flex items-center justify-center text-[10px] font-bold text-[#D4AF37]">180+</span>
              </div>
              <div className="text-left">
                <div className="flex items-center text-[#F5A623] text-xs">
                  {"★".repeat(5)}
                </div>
                <div className="text-[11px] text-white/70 font-medium">Google Rating</div>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-[1px] bg-white/15" />

            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
              <Users size={18} className="text-[#C89B95]" />
              <span>500+ Happy Mumbai Clients</span>
            </div>

            <div className="hidden sm:block h-8 w-[1px] bg-white/15" />

            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
              <ShieldCheck size={18} className="text-[#D4AF37]" />
              <span>100% Certified Stylists</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SalonHero;
