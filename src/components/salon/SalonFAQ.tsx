import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { SALON_FAQ, SALON_BUSINESS } from '@/data/salonData';
import WhatsAppIcon from '@/components/salon/WhatsAppIcon';

export const SalonFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default
  const [selectedCategory, setSelectedCategory] = useState("All Questions");

  const categories = ["All Questions", "Appointments", "Services", "Payments"];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="salon-section bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle Lighting Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C89B95]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="salon-container max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="salon-section-label">CLEAR ANSWERS</span>
            <h2 className="salon-section-title">
              Frequently Asked <span className="italic font-normal text-[#A87B75]">Questions.</span>
            </h2>
            <p className="salon-section-subtitle mx-auto">
              Everything you need to know about our salon services, hygiene standards, bookings & payment options.
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-12">
          {SALON_FAQ.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-[#D4AF37]/50 shadow-xl ring-1 ring-[#D4AF37]/20' 
                    : 'bg-white/80 border-[#E8E1D7] hover:border-[#D4AF37]/40 hover:bg-white shadow-sm'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-sm sm:text-base outline-none text-[#121113]"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="pr-4 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                      isOpen ? 'bg-[#D4AF37] text-white' : 'bg-[#FAF7F2] text-[#A87B75] border border-[#E8E1D7]'
                    }`}>
                      Q{index + 1}
                    </div>
                    <span>{faq.question}</span>
                  </span>

                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#121113] text-[#D4AF37] rotate-180 shadow-md' : 'bg-[#FAF7F2] text-[#7A757F] border border-[#E8E1D7]'
                  }`}>
                    <ChevronDown size={17} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm leading-relaxed text-[#7A757F] border-t border-[#E8E1D7]/60 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Help & Concierge Box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E1D7] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#FAF6F0] border border-[#D4AF37]/40 text-[#A38420] flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-[#121113]">Have a specific query not listed here?</div>
              <div className="text-xs text-[#7A757F] font-light">Our front desk concierge is available online to assist you instantly.</div>
            </div>
          </div>

          <a 
            href={SALON_BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all shadow-md shrink-0 w-full sm:w-auto"
          >
            <WhatsAppIcon size={18} fill="#FFFFFF" /> Chat via WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
};
