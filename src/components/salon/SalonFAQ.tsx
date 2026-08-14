import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SALON_FAQ } from '@/data/salonData';

export const SalonFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="salon-section bg-white relative">
      <div className="salon-container max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="salon-section-label">CLEAR ANSWERS</span>
          <h2 className="salon-section-title">Frequently Asked Questions</h2>
          <p className="salon-section-subtitle mx-auto">
            Everything you need to know about our salon services, hygiene standards, bookings, and payments.
          </p>
        </div>

        <div className="space-y-3">
          {SALON_FAQ.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#FAF7F2] border-[#C89B95]/40 shadow-sm' 
                    : 'bg-white border-[#E8E1D7] hover:border-[#C89B95]/20'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-base sm:text-lg outline-none text-[#121113]"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="pr-4 flex items-center gap-3">
                    <HelpCircle size={18} className={isOpen ? "text-[#A87B75]" : "text-[#7A757F]"} />
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#A87B75] text-white rotate-180' : 'bg-[#FAF7F2] text-[#7A757F]'}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-[#7A757F] border-t border-[#E8E1D7]/50 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
