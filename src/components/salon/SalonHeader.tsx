import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { SALON_NAV_ITEMS, SALON_BUSINESS } from '@/data/salonData';
import WhatsAppIcon from '@/components/salon/WhatsAppIcon';

const SalonHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll completely and toggle body class when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('salon-menu-open');
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.classList.remove('salon-menu-open');
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => { 
      document.body.classList.remove('salon-menu-open');
      document.body.style.overflow = ''; 
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen
          ? 'bg-[#FAF7F2] py-3 border-b border-[#E8E1D7]'
          : scrolled
          ? 'salon-header-scrolled py-2.5 sm:py-3'
          : 'py-4 sm:py-5'
      }`}
    >
      <div className="salon-container flex items-center justify-between relative z-50">
        {/* Logo */}
        <a
          href="#home"
          className={`salon-serif text-xl sm:text-2xl font-bold transition-colors duration-300 ${
            scrolled || mobileMenuOpen ? 'text-[#121113]' : 'text-white'
          }`}
          onClick={(e) => handleSmoothScroll(e, '#home')}
        >
          Blush & Bloom
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {SALON_NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`text-xs sm:text-sm font-semibold transition-colors duration-300 hover:text-[#C89B95] ${
                scrolled ? 'text-[#121113]' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#appointment"
            onClick={(e) => handleSmoothScroll(e, '#appointment')}
            className={`inline-flex items-center gap-2 py-2.5 px-6 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              scrolled
                ? 'bg-[#121113] text-white hover:bg-[#1E1C20] shadow-md'
                : 'bg-white text-[#121113] hover:bg-white/90 shadow-xl'
            }`}
          >
            <Calendar size={16} />
            Book Appointment
          </a>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className={`md:hidden z-50 p-2.5 rounded-full transition-colors ${
            mobileMenuOpen
              ? 'text-[#121113] bg-[#FAF7F2]'
              : scrolled
              ? 'text-[#121113] bg-white/80'
              : 'text-white bg-black/20 backdrop-blur-md'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full-Screen Opaque Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-0 bg-[#FAF7F2] z-40 md:hidden flex flex-col justify-between"
          style={{ paddingTop: '72px', paddingBottom: '24px' }}
        >
          <div className="flex flex-col px-6 py-4 space-y-1 overflow-y-auto bg-[#FAF7F2]">
            {SALON_NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-lg font-bold text-[#121113] py-3.5 border-b border-[#E8E1D7] flex items-center justify-between active:text-[#A87B75]"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#A87B75]">→</span>
              </a>
            ))}
          </div>

          {/* Quick Actions Footer inside Drawer */}
          <div className="px-6 space-y-3 pt-4 border-t border-[#E8E1D7] bg-[#FAF7F2]">
            <a
              href={`tel:${SALON_BUSINESS.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-white border border-[#E8E1D7] text-[#121113] font-bold text-sm shadow-sm"
            >
              <Phone size={16} className="text-[#A87B75]" /> Call Salon Directly
            </a>
            <a
              href={SALON_BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm shadow-md"
            >
              <WhatsAppIcon size={18} fill="#FFFFFF" /> WhatsApp Instant Chat
            </a>
            <a
              href="#appointment"
              onClick={(e) => handleSmoothScroll(e, '#appointment')}
              className="salon-btn-gold w-full py-4 justify-center text-sm shadow-xl"
            >
              <Calendar size={18} /> Book Appointment Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default SalonHeader;
