import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Award, MapPin } from 'lucide-react';

export const SalonSocialProof: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-[#E8E1D7] relative overflow-hidden">
      <div className="salon-container">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left Rating Box */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#FAF7F2] border border-[#D4AF37]/30 flex flex-col items-center justify-center shrink-0 shadow-inner">
              <span className="salon-serif text-2xl font-bold text-[#121113]">4.9</span>
              <div className="flex text-[#F5A623] text-[9px]">★★★★★</div>
            </div>
            <div>
              <h4 className="font-bold text-base text-[#121113]">Rated 4.9 out of 5 Stars</h4>
              <p className="text-xs text-[#7A757F]">Based on 180+ verified Google Reviews</p>
            </div>
          </div>

          <div className="hidden md:block h-12 w-[1px] bg-[#E8E1D7]" />

          {/* Center Stat */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F8F3F2] flex items-center justify-center text-[#A87B75]">
              <Award size={20} />
            </div>
            <div className="text-left">
              <div className="font-bold text-sm text-[#121113]">500+ Happy Mumbai Clients</div>
              <div className="text-xs text-[#7A757F]">Serving Andheri & Lokhandwala since 2021</div>
            </div>
          </div>

          <div className="hidden md:block h-12 w-[1px] bg-[#E8E1D7]" />

          {/* Right Trust Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F4E8C1] flex items-center justify-center text-[#A38420]">
              <ShieldCheck size={20} />
            </div>
            <div className="text-left">
              <div className="font-bold text-sm text-[#121113]">100% Certified Products</div>
              <div className="text-xs text-[#7A757F]">L'Oréal, Kérastase & O3+ Guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
