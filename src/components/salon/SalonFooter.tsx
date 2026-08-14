import React from 'react';
import { ExternalLink, Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SALON_BUSINESS, SALON_NAV_ITEMS } from '@/data/salonData';

export const SalonFooter: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 bg-[#121113] text-white border-t border-white/10 relative overflow-hidden">
      {/* Decorative Gold Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="salon-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="salon-serif text-2xl font-bold salon-gold-gradient-text mb-4">
              {SALON_BUSINESS.name}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed mb-6 font-light">
              {SALON_BUSINESS.tagline} Premier unisex salon and spa experiences serving discerning clients in Andheri West, Mumbai.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href={SALON_BUSINESS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#C89B95] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={SALON_BUSINESS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#1877F2] transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-6">Quick Navigation</h4>
            <ul className="space-y-3">
              {SALON_NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C89B95]"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-6">Signature Rituals</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70">
              <li>Haircut & Precision Styling</li>
              <li>Organic Hair Spa Treatments</li>
              <li>Balayage & Global Hair Colour</li>
              <li>Keratin Smooth Treatment</li>
              <li>Radiance & Cleanup Facials</li>
              <li>Full Body Relaxation Spa</li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-6">Visit & Contact</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#C89B95] shrink-0 mt-0.5" />
                <span>{SALON_BUSINESS.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#C89B95] shrink-0" />
                <a href={`tel:${SALON_BUSINESS.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {SALON_BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="text-[#C89B95] shrink-0 mt-0.5" />
                <div>
                  <div>{SALON_BUSINESS.hours.weekday}</div>
                  <div className="text-white/50 text-[11px]">{SALON_BUSINESS.hours.weekend}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© 2026 {SALON_BUSINESS.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white/80 transition-colors">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
