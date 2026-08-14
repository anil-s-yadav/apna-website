import { motion } from 'framer-motion';
import { Users, Sparkles, Heart, Award, ShieldCheck, CheckCircle2, Star, Coffee } from 'lucide-react';

const SalonAbout = () => {
  const pillars = [
    {
      icon: <Users className="w-5 h-5 text-[#A87B75]" />,
      title: "Master Stylists & Therapists",
      desc: "5+ years of certified experience in high-precision cutting, balayage & facial rituals.",
      badge: "EXPERT TEAM"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
      title: "100% Genuine Global Brands",
      desc: "Exclusively using L'Oréal Professionnel, Schwarzkopf, Kérastase & O3+ skin care.",
      badge: "ORIGINAL PRODUCTS"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#25D366]" />,
      title: "Hospital-Grade Hygiene",
      desc: "UVC-sanitized tools for every client with fresh single-use disposable capes & kits.",
      badge: "SAFETY FIRST"
    },
    {
      icon: <Coffee className="w-5 h-5 text-[#D4AF37]" />,
      title: "Complimentary Refreshments",
      desc: "Relax in our AC lounge with complimentary green tea, artisan coffee & Wi-Fi.",
      badge: "VIP EXPERIENCE"
    }
  ];

  const stats = [
    { value: "5+", label: "Years Excellence" },
    { value: "500+", label: "Happy Clients" },
    { value: "4.9★", label: "Google Rating" },
    { value: "100%", label: "Hygiene Guarantee" },
  ];

  return (
    <section id="about" className="salon-section bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#C89B95]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="salon-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Side: Overlapping Dual Image Composition (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Gold Outer Border Ring */}
              <div className="absolute -inset-4 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#C89B95]/10 pointer-events-none" />
              
              {/* Main Salon Interior Image Card */}
              <div className="salon-img-zoom rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl relative border-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80&auto=format&fit=crop"
                  alt="Blush & Bloom Luxury Salon Lounge in Andheri West"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121113]/80 via-transparent to-transparent" />
                
                {/* Floating Bottom Glass Pill Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#A38420]">
                    <Award size={22} />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#121113]">Premier Unisex Salon</div>
                    <div className="text-[11px] text-[#7A757F]">Andheri West, Mumbai • Near Infinity Mall</div>
                  </div>
                </div>
              </div>

              {/* Overlapping Top-Right Star Rating Badge */}
              <div className="absolute -top-6 -right-4 px-4 py-2 rounded-2xl bg-[#121113] text-white border border-[#D4AF37]/50 shadow-2xl flex items-center gap-2">
                <div className="flex text-[#F5A623] text-xs">
                  {"★".repeat(5)}
                </div>
                <div className="text-xs font-bold text-[#F4E8C1]">4.9 / 5.0</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content & 4 Luxury Pillars (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="salon-section-label">ABOUT BLUSH & BLOOM</div>
            
            <h2 className="salon-section-title">
              Where beauty meets thoughtful <span className="italic font-normal text-[#A87B75]">self-care.</span>
            </h2>
            
            <div className="salon-divider" />
            
            <p className="text-[#2D2B30] text-base sm:text-lg leading-relaxed mb-8 font-light">
              At Blush & Bloom, we believe your salon visit should feel like a serene sanctuary. Located in the heart of Andheri West, our team combines modern international styling techniques with warm Indian hospitality to leave you looking flawless and feeling revitalized.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-2xl bg-white border border-[#E8E1D7] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EADCD9] flex items-center justify-center shrink-0">
                        {pillar.icon}
                      </div>
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#A87B75] bg-[#FAF7F2] px-2 py-0.5 rounded-full border border-[#E8E1D7]">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-[#121113] mb-1">{pillar.title}</h3>
                    <p className="text-xs text-[#7A757F] leading-relaxed font-light">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Glass Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 border border-[#E8E1D7] rounded-3xl bg-white p-6 sm:p-8 shadow-xl"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center p-2">
              <div className="salon-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121113] mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[#7A757F] font-bold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SalonAbout;
