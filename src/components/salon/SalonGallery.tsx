import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Eye, X, Calendar, Sparkles, Heart } from 'lucide-react';
import { SALON_BUSINESS } from '@/data/salonData';

const galleryItems = [
  { 
    id: 1,
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80&auto=format&fit=crop", 
    title: "Main Luxury Styling Lounge", 
    subtitle: "Spacious AC seating with warm gold pendant lighting",
    category: "Studio Interior" 
  },
  { 
    id: 2,
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=700&q=80&auto=format&fit=crop", 
    title: "Precision Hair Sculpting", 
    subtitle: "Tailored cuts crafted by master stylists",
    category: "Hair Artistry" 
  },
  { 
    id: 3,
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80&auto=format&fit=crop", 
    title: "Master Colorist at Work", 
    subtitle: "Custom L'Oréal Balayage & Global Colouring",
    category: "Hair Artistry" 
  },
  { 
    id: 4,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80&auto=format&fit=crop", 
    title: "O3+ Radiance Facial Suite", 
    subtitle: "Deep dermatological skin rejuvenation",
    category: "Radiance Skin" 
  },
  { 
    id: 5,
    src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=700&q=80&auto=format&fit=crop", 
    title: "Glamour Blowdry & Finish", 
    subtitle: "Silky, voluminous finish for special occasions",
    category: "Hair Artistry" 
  },
  { 
    id: 6,
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80&auto=format&fit=crop", 
    title: "Private Body Spa Sanctuary", 
    subtitle: "Calming ambient room with aromatherapy oils",
    category: "Luxury Spa" 
  },
  { 
    id: 7,
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=700&q=80&auto=format&fit=crop", 
    title: "Gloss Balayage Transformation", 
    subtitle: "Sun-kissed tones with Keratin shine",
    category: "Hair Artistry" 
  },
  { 
    id: 8,
    src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=700&q=80&auto=format&fit=crop", 
    title: "Keratin Smooth Treatment", 
    subtitle: "Frizz-free silkiness lasting up to 12 weeks",
    category: "Hair Artistry" 
  },
];

const categories = ["All Services", "Hair Artistry", "Radiance Skin", "Luxury Spa", "Studio Interior"];

export default function SalonGallery() {
  const [activeFilter, setActiveFilter] = useState("All Services");
  const [activeLightboxItem, setActiveLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeFilter === "All Services" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const handleBookFromGallery = () => {
    setActiveLightboxItem(null);
    const el = document.getElementById('appointment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="salon-section bg-[#FAF7F2] relative">
      <div className="salon-container">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="salon-section-label">VISUAL SANCTUARY</span>
          <h2 className="salon-section-title">
            A Glimpse Inside <span className="italic font-normal text-[#A87B75]">Blush & Bloom.</span>
          </h2>
          <p className="salon-section-subtitle mx-auto">
            Take a visual tour of our serene sanctuary in Andheri West — crafted for relaxation, hygiene, and luxury transformation.
          </p>
        </motion.div>

        {/* Filter Pills with Mobile Horizontal Scroll */}
        <div className="flex justify-center mb-10">
          <div className="salon-mobile-scroll max-w-full p-1.5 rounded-full bg-white border border-[#E8E1D7] shadow-inner gap-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-[#121113] text-white shadow-md' 
                    : 'text-[#7A757F] hover:text-[#121113]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="salon-gallery-grid mb-12"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                className="gallery-item rounded-3xl overflow-hidden relative salon-img-zoom shadow-sm hover:shadow-2xl transition-all duration-400 group border border-white cursor-pointer"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Permanent Gradient Protection */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121113]/85 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Top Eye Icon Pill */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye size={15} />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white flex flex-col justify-end">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D4AF37] mb-0.5">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Instagram Follow Box */}
        <motion.div 
          className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E1D7] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#C89B95] to-[#D4AF37] text-white flex items-center justify-center shrink-0 shadow-md">
              <Instagram size={24} />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-[#121113]">Follow Us On Instagram @blushandbloom</div>
              <div className="text-xs text-[#7A757F] font-light">Tag #BlushAndBloomMumbai in your stories to get featured on our page!</div>
            </div>
          </div>

          <a 
            href={SALON_BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="salon-btn-primary py-3 px-6 text-xs shrink-0"
          >
            Visit Instagram Page →
          </a>
        </motion.div>
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeLightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#121113] border border-white/20 rounded-3xl overflow-hidden max-w-3xl w-full text-white shadow-2xl relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/30 hover:bg-white hover:text-[#121113] transition-all"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
                <img 
                  src={activeLightboxItem.src} 
                  alt={activeLightboxItem.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                    {activeLightboxItem.category}
                  </span>
                  <h3 className="salon-serif text-2xl font-bold text-white mt-0.5">
                    {activeLightboxItem.title}
                  </h3>
                  <p className="text-xs text-white/70 font-light mt-1">
                    {activeLightboxItem.subtitle}
                  </p>
                </div>

                <button 
                  onClick={handleBookFromGallery}
                  className="salon-btn-gold py-3 px-6 text-xs w-full sm:w-auto shrink-0 shadow-lg"
                >
                  <Calendar size={15} /> Book This Treatment
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
