import { Calendar, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SALON_BUSINESS } from '@/data/salonData';
import WhatsAppIcon from '@/components/salon/WhatsAppIcon';

export const QuickActionBar = () => {
  const actions = [
    {
      label: "Book Online",
      sublabel: "Instant Confirmation",
      icon: Calendar,
      customIcon: null,
      href: "/salon/book",
      colorClass: "text-[#121113]",
      bgClass: "bg-[#F4EFE6]",
      borderClass: "border-[#C89B95]/30",
    },
    {
      label: "WhatsApp Chat",
      sublabel: "Quick Enquiry",
      icon: null,
      customIcon: <WhatsAppIcon size={22} fill="#25D366" />,
      href: SALON_BUSINESS.whatsappLink,
      colorClass: "text-[#25D366]",
      bgClass: "bg-[#25D366]/10",
      borderClass: "border-[#25D366]/20",
      target: "_blank"
    },
    {
      label: "Call Salon",
      sublabel: "+91 90000 12345",
      icon: Phone,
      customIcon: null,
      href: `tel:${SALON_BUSINESS.phone.replace(/\s+/g, '')}`,
      colorClass: "text-[#A38420]",
      bgClass: "bg-[#F4E8C1]",
      borderClass: "border-[#D4AF37]/30",
    },
    {
      label: "Get Directions",
      sublabel: "Andheri West",
      icon: MapPin,
      customIcon: null,
      href: SALON_BUSINESS.mapUrl,
      colorClass: "text-[#A87B75]",
      bgClass: "bg-[#F8F3F2]",
      borderClass: "border-[#C89B95]/30",
      target: "_blank"
    }
  ];

  return (
    <div className="hidden md:block relative z-30 -mt-12 px-4">
      <div className="salon-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/90 backdrop-blur-xl border border-white/80 rounded-3xl p-4 shadow-2xl"
        >
          <div className="grid grid-cols-4 gap-4">
            {actions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <a 
                  key={idx}
                  href={action.href}
                  target={action.target}
                  rel={action.target === "_blank" ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-3.5 p-4 rounded-2xl border ${action.borderClass} bg-white hover:bg-[#FAF7F2] transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${action.bgClass} ${action.colorClass}`}>
                    {action.customIcon ? action.customIcon : (Icon && <Icon size={22} />)}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-[#121113] truncate group-hover:text-[#A87B75] transition-colors">
                      {action.label}
                    </span>
                    <span className="text-[11px] text-[#7A757F] truncate font-medium">
                      {action.sublabel}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
