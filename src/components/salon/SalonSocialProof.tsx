import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, CheckCircle2, Heart } from 'lucide-react';

export const SalonSocialProof: React.FC = () => {
  return (
    <section className="py-10 bg-white border-y border-[#E8E1D7] relative overflow-hidden">
      {/* Background Soft Lighting Orbs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FAF7F2] rounded-full blur-3xl pointer-events-none" />

      <div className="salon-container relative z-10">
        <motion.div 
          className="bg-[#FAF7F2] border border-[#E8E1D7] rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Subtle Corner Shimmer */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent pointer-events-none rounded-tr-3xl" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-[#E8E1D7]">
            
            {/* 1. Google Business Rating Card */}
            <div className="flex items-center gap-4 pr-2 pb-4 md:pb-0">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#D4AF37]/40 flex flex-col items-center justify-center shrink-0 shadow-sm">
                <span className="salon-serif text-2xl font-bold text-[#121113]">4.9</span>
                <div className="flex text-[#F5A623] text-[9px] mt-0.5">★★★★★</div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <h4 className="font-bold text-sm sm:text-base text-[#121113]">Rated 4.9 out of 5 Stars</h4>
                </div>
                <p className="text-xs text-[#7A757F] font-light">Based on 180+ verified Google Reviews</p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#25D366] mt-1.5 bg-[#25D366]/10 px-2 py-0.5 rounded-full border border-[#25D366]/20">
                  <CheckCircle2 size={11} /> 99.4% Positive Feedback
                </span>
              </div>
            </div>

            {/* 2. Client Trust Stat */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6 pb-4 md:pb-0">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#C89B95]/30 flex items-center justify-center shrink-0 text-[#A87B75] shadow-sm">
                <Award size={22} />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#121113]">500+ Happy Mumbai Clients</h4>
                <p className="text-xs text-[#7A757F] font-light mt-0.5">Serving Andheri & Lokhandwala since 2021</p>
                <div className="text-[11px] font-bold text-[#A87B75] mt-1 flex items-center gap-1">
                  <Heart size={11} className="text-[#C89B95]" /> 100% Satisfaction Guarantee
                </div>
              </div>
            </div>

            {/* 3. Product Guarantee Stat */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#A38420] shadow-sm">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#121113]">100% Genuine Products</h4>
                <p className="text-xs text-[#7A757F] font-light mt-0.5">L'Oréal, Kérastase & O3+ Dermatological</p>
                <div className="text-[11px] font-bold text-[#128C7E] mt-1 flex items-center gap-1">
                  <CheckCircle2 size={11} /> Sealed Single-Use Tool Kits
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
