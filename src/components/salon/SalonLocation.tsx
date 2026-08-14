import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Navigation, Car, Wifi, CreditCard, Coffee, ShieldCheck, ExternalLink } from 'lucide-react';
import { SALON_BUSINESS } from '@/data/salonData';
import WhatsAppIcon from '@/components/salon/WhatsAppIcon';

export const SalonLocation: React.FC = () => {
  const amenities = [
    { icon: <Car size={16} className="text-[#D4AF37]" />, label: "Free Valet Parking" },
    { icon: <Wifi size={16} className="text-[#A87B75]" />, label: "High-Speed Wi-Fi" },
    { icon: <Coffee size={16} className="text-[#D4AF37]" />, label: "Complimentary Tea & Coffee" },
    { icon: <CreditCard size={16} className="text-[#A87B75]" />, label: "UPI & All Cards Accepted" },
  ];

  return (
    <section id="contact" className="salon-section bg-[#FAF7F2] relative overflow-hidden">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C89B95]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="salon-container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="salon-section-label">VISIT OUR SANCTUARY</span>
          <h2 className="salon-section-title">
            Find Us in <span className="italic font-normal text-[#A87B75]">Andheri West.</span>
          </h2>
          <p className="salon-section-subtitle mx-auto">
            Conveniently located near Infinity Mall with free valet parking, AC lounges, and complimentary artisan refreshments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Glass Location Cards (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-between space-y-4"
          >
            {/* Card 1: Address & Landmark */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8E1D7] shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F8F3F2] border border-[#EADCD9] flex items-center justify-center shrink-0 text-[#A87B75]">
                  <MapPin size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-bold text-base text-[#121113]">Salon Address</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#A38420] text-[10px] font-extrabold uppercase">
                      Prime Location
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#7A757F] leading-relaxed font-light mb-3">
                    {SALON_BUSINESS.fullAddress}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#121113] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E8E1D7]">
                      📍 2 Mins from Infinity Mall
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#121113] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E8E1D7]">
                      🚇 Near Andheri Metro Station
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Operating Hours */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8E1D7] shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F4E8C1]/60 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 text-[#A38420]">
                  <Clock size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-bold text-base text-[#121113]">Operating Hours</h4>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#25D366]/15 text-[#128C7E] text-[10px] font-extrabold uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span> Open Today
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#2D2B30] mt-2 font-medium">
                    <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E8E1D7]/70">
                      <div className="text-[10px] text-[#7A757F] uppercase tracking-wider font-bold">Mon – Sat</div>
                      <div>10:00 AM – 8:30 PM</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E8E1D7]/70">
                      <div className="text-[10px] text-[#7A757F] uppercase tracking-wider font-bold">Sunday</div>
                      <div>11:00 AM – 7:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Contact & Direct Actions */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#121113] text-white shadow-xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37]">INSTANT CONNECT</span>
                  <h4 className="salon-serif text-2xl font-semibold mt-0.5">Need Directions or Assistance?</h4>
                  <p className="text-xs text-white/70 font-light mt-1">Our front desk team is online to guide you.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                  <a 
                    href={`tel:${SALON_BUSINESS.phone.replace(/[^0-9+]/g, '')}`}
                    className="px-5 py-3 rounded-full bg-white text-[#121113] font-bold text-xs flex items-center justify-center gap-2 hover:bg-white/90 transition-all"
                  >
                    <Phone size={15} className="text-[#A87B75]" /> Call Salon
                  </a>
                  <a 
                    href={SALON_BUSINESS.whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all shadow-md"
                  >
                    <WhatsAppIcon size={16} fill="#FFFFFF" /> WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Local Amenities Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {amenities.map((item, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-white border border-[#E8E1D7] flex items-center justify-center gap-2 text-center shadow-xs">
                  {item.icon}
                  <span className="text-[11px] font-bold text-[#121113]">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Google Maps Embed Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative flex flex-col min-h-[420px]"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden border border-[#E8E1D7] shadow-2xl relative flex-1">
              <iframe
                title="Blush & Bloom Salon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.530856539498!2d72.82830565!3d19.1362036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#121113]">Blush & Bloom Salon</div>
                  <div className="text-[11px] text-[#7A757F]">Andheri West, Mumbai</div>
                </div>

                <a 
                  href={SALON_BUSINESS.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="salon-btn-gold py-2 px-4 text-xs font-bold shadow-md flex items-center gap-1.5"
                >
                  <Navigation size={14} /> Open Maps App
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
