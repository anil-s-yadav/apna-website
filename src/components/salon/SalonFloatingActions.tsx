import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { SALON_BUSINESS } from '@/data/salonData';
import WhatsAppIcon from '@/components/salon/WhatsAppIcon';

export const SalonFloatingActions: React.FC = () => {
  return (
    <>
      {/* Floating Real WhatsApp Button (Desktop & Mobile) */}
      <a 
        href={SALON_BUSINESS.whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="salon-floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={32} fill="#FFFFFF" />
      </a>

      {/* Floating Mobile Bottom Dock Bar */}
      <div className="salon-mobile-bar shadow-2xl">
        <a 
          href={`tel:${SALON_BUSINESS.phone.replace(/[^0-9+]/g, '')}`} 
          className="salon-mobile-bar-item"
        >
          <Phone size={17} />
          <span>Call</span>
        </a>
        <a 
          href={SALON_BUSINESS.whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="salon-mobile-bar-item text-[#25D366]"
        >
          <WhatsAppIcon size={19} fill="#25D366" />
          <span>WhatsApp</span>
        </a>
        <a 
          href="/salon/book" 
          className="salon-mobile-bar-item"
        >
          <Calendar size={17} />
          <span>Book</span>
        </a>
      </div>
    </>
  );
};
