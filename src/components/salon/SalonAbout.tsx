import { motion } from 'framer-motion';
import { Award, CheckCircle2, Star, Users, ShieldCheck, Trophy } from 'lucide-react';

const SalonAbout = () => {
  const points = [
    {
      title: "Master Stylists & Therapists",
      desc: "5+ years of certified experience in high-precision cutting, balayage & facial services."
    },
    {
      title: "100% Genuine Global Brands",
      desc: "Exclusively using L'Oréal Professionnel, Schwarzkopf, Kérastase & O3+ skin care."
    },
    {
      title: "Hospital-Grade Hygiene",
      desc: "UVC-sanitized tools for every client with fresh single-use disposable capes & kits."
    },
    {
      title: "Complimentary Refreshments",
      desc: "Relax in our AC lounge with complimentary green tea, artisan coffee & Wi-Fi."
    }
  ];

  const stats = [
    { value: "5+", label: "Years Excellence", icon: Trophy, color: "text-[#D4AF37]" },
    { value: "500+", label: "Happy Clients", icon: Users, color: "text-[#C89B95]" },
    { value: "4.9★", label: "Google Rating", icon: Star, color: "text-[#F5A623]" },
    { value: "100%", label: "Hygiene Guarantee", icon: ShieldCheck, color: "text-[#25D366]" },
  ];

  return (
    <section id="about" className="salon-section bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#C89B95]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="salon-container relative z-10">
        
        {/* Unified Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="salon-section-label">ABOUT BLUSH & BLOOM</div>
            <h2 className="salon-section-title mb-2">
              Where beauty meets thoughtful <span className="italic font-normal text-[#A87B75]">self-care.</span>
            </h2>
            <div className="salon-divider my-3" />
            <p className="text-[#2D2B30] text-base sm:text-lg leading-relaxed font-light">
              Located in the heart of Andheri West, Blush & Bloom combines modern international styling techniques with warm Indian hospitality to leave you looking flawless and feeling revitalized.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Integrated Layout (Image Left, Points & Stats Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Integrated Image Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="h-full min-h-[340px] sm:min-h-[420px] rounded-3xl overflow-hidden shadow-xl relative border border-[#E8E1D7] bg-white">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80&auto=format&fit=crop"
                alt="Blush & Bloom Luxury Salon Lounge in Andheri West"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121113]/80 via-transparent to-transparent" />
              
              {/* Top Right Star Badge */}
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#121113]/90 backdrop-blur-md text-white border border-[#D4AF37]/40 shadow-lg flex items-center gap-1.5 text-xs font-bold">
                <span className="text-[#F5A623]">★★★★★</span>
                <span className="text-[#F4E8C1]">4.9 / 5.0</span>
              </div>

              {/* Bottom Glass Location Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#A38420]">
                  <Award size={18} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#121113]">Premier Unisex Salon</div>
                  <div className="text-[11px] text-[#7A757F]">Andheri West, Mumbai • Near Infinity Mall</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Points List & Integrated Stats (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Clean Point-Wise List */}
            <div className="space-y-3.5 mb-6">
              {points.map((pt, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-2xl bg-white/70 border border-[#E8E1D7]/70 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#121113] text-xs sm:text-sm mb-0.5">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-[#7A757F] leading-relaxed font-light">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stylized Merged Stats Bar with Icons */}
            <div className="pt-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#E8E1D7] shadow-xs">
                      <div className={`w-8 h-8 rounded-lg bg-[#FAF6F0] border border-[#E8E1D7] flex items-center justify-center shrink-0 ${stat.color}`}>
                        <Icon size={16} />
                      </div>
                      <div className="min-w-0">
                        <div className="salon-serif text-lg sm:text-xl font-bold text-[#121113] leading-none mb-0.5">
                          {stat.value}
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-[#7A757F] font-bold uppercase tracking-tight truncate">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SalonAbout;
