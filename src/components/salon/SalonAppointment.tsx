import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, CheckCircle, Clock, ShieldCheck, Sparkles, Check, ChevronDown, User, Phone, MapPin, Tag } from 'lucide-react';
import { SALON_BUSINESS, SALON_SERVICES } from '@/data/salonData';
import WhatsAppIcon from '@/components/salon/WhatsAppIcon';

interface SalonAppointmentProps {
  isStandalonePage?: boolean;
}

export default function SalonAppointment({ isStandalonePage = false }: SalonAppointmentProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);
  const [selectedService, setSelectedService] = useState("Haircut & Styling");
  const [selectedPrice, setSelectedPrice] = useState("From ₹599");
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [dateShortcut, setDateShortcut] = useState("Today");
  const [timeSlot, setTimeSlot] = useState("Afternoon (1 PM - 5 PM)");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  useEffect(() => {
    // FOR TESTING / DEMO: Always show 15% Welcome Offer Applied banner in all cases.
    // Uncomment the conditional URL check below when ready:
    /*
    const searchParams = new URLSearchParams(window.location.search);
    const promo = searchParams.get('promo');
    if (promo === 'WELCOME15') {
      setIsPromoApplied(true);
    } else {
      setIsPromoApplied(false);
    }
    */
    setIsPromoApplied(true);
  }, []);

  const currentCategory = SALON_SERVICES[selectedCategoryIdx];

  const handleSelectService = (serviceName: string, price: string) => {
    setSelectedService(serviceName);
    setSelectedPrice(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const timeSlots = [
    { label: "Morning", hours: "10:00 AM – 1:00 PM", icon: "☀️" },
    { label: "Afternoon", hours: "1:00 PM – 5:00 PM", icon: "🌤️" },
    { label: "Evening", hours: "5:00 PM – 8:30 PM", icon: "🌆" },
    { label: "Night", hours: "8:30 PM – 11:00 PM", icon: "🌙" }
  ];

  // Helper date generators for friendly quick pills
  const getFormattedDate = (daysAhead: number) => {
    const d = new Date();
    d.setDate(d.getDate() + daysAhead);
    return d.toISOString().split('T')[0];
  };

  const dateShortcuts = [
    { label: "Today", value: getFormattedDate(0), sub: "Aug 14" },
    { label: "Tomorrow", value: getFormattedDate(1), sub: "Aug 15" },
    { label: "This Saturday", value: getFormattedDate(2), sub: "Aug 16" },
    { label: "This Sunday", value: getFormattedDate(3), sub: "Aug 17" },
  ];

  return (
    <section id="appointment" className={`bg-[#FAF7F2] relative overflow-hidden ${isStandalonePage ? 'pt-2 sm:pt-4 pb-12' : 'salon-section'}`}>
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C89B95]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="salon-container relative z-10">
        <div className={`text-center max-w-2xl mx-auto ${isStandalonePage ? 'mb-4 sm:mb-6' : 'mb-10 sm:mb-14'}`}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="salon-section-label">ONLINE RESERVATIONS</span>
            <h2 className="salon-section-title">
              Book Your Salon <span className="italic font-normal text-[#A87B75]">Experience.</span>
            </h2>
          </motion.div>
        </div>

        {/* 15% Welcome Discount Banner */}
        {isPromoApplied && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto mb-6 p-4 sm:p-4.5 rounded-2xl bg-gradient-to-r from-[#25D366]/15 via-white to-[#D4AF37]/15 border border-[#25D366]/40 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                ✓
              </div>
              <div>
                <div className="font-extrabold text-[#121113] flex items-center gap-1.5">
                  <span>🎉 15% Welcome Offer Applied!</span>
                </div>
                <div className="text-xs text-[#7A757F] font-light">Flat 15% discount will be automatically applied to your final bill.</div>
              </div>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-[#121113] text-[#D4AF37] text-[11px] font-black tracking-widest border border-[#D4AF37]/40 shadow-sm flex items-center gap-1.5">
              <Tag size={12} className="text-[#D4AF37]" /> WELCOME15 APPLIED
            </span>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left Column: Form & Visual Service Picker (7 cols) */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-[#D4AF37]/40 shadow-xl text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center mx-auto mb-4 border border-[#25D366]/30">
                  <CheckCircle size={32} />
                </div>
                <h3 className="salon-serif text-3xl font-bold text-[#121113] mb-2">Appointment Requested!</h3>
                <p className="text-sm text-[#7A757F] max-w-md mx-auto mb-6 leading-relaxed font-light">
                  Thank you, <strong className="text-[#121113]">{name}</strong>! We have received your booking request for <strong className="text-[#121113]">{selectedService}</strong> on <strong className="text-[#121113]">{dateShortcut || date || 'Selected Date'}</strong> ({timeSlot}).
                </p>

                {isPromoApplied && (
                  <div className="mb-6 p-3.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-bold text-[#128C7E] inline-flex items-center gap-1.5">
                    <Tag size={14} /> 15% Welcome Discount Code WELCOME15 Attached
                  </div>
                )}

                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D7] max-w-md mx-auto text-xs text-[#7A757F] mb-8 font-medium">
                  📱 Our front desk team will call or WhatsApp you at <span className="text-[#121113] font-bold">{phone}</span> within 15 minutes to confirm your chair time.
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="salon-btn-gold py-3 px-6 text-xs shadow-md w-full sm:w-auto"
                  >
                    Book Another Appointment
                  </button>
                  <a 
                    href={SALON_BUSINESS.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all shadow-md w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} fill="#FFFFFF" /> Confirm via WhatsApp
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">

                {/* STEP 1: SERVICE CATEGORY & SERVICE SELECTOR */}
                <div className="p-5 sm:p-7 rounded-3xl bg-white border border-[#E8E1D7] shadow-sm hover:shadow-md transition-all">
                  <h3 className="font-bold text-sm sm:text-base text-[#121113] mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#121113] text-white text-xs flex items-center justify-center font-bold">1</span>
                      Select Service *
                    </span>
                    <span className="text-xs font-bold text-[#A87B75]">{selectedService} ({selectedPrice})</span>
                  </h3>

                  {/* Category Pills */}
                  <div className="flex gap-2 mb-4 salon-mobile-scroll pb-1">
                    {SALON_SERVICES.map((cat, idx) => (
                      <button
                        key={cat.category}
                        type="button"
                        onClick={() => {
                          setSelectedCategoryIdx(idx);
                          setSelectedService(cat.services[0].name);
                          setSelectedPrice(cat.services[0].price);
                        }}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                          selectedCategoryIdx === idx
                            ? 'bg-[#121113] text-white shadow-md'
                            : 'bg-[#FAF7F2] text-[#7A757F] border border-[#E8E1D7] hover:border-[#D4AF37]/40'
                        }`}
                      >
                        {cat.category}
                      </button>
                    ))}
                  </div>

                  {/* Service Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentCategory.services.map((serv) => {
                      const isSelected = selectedService === serv.name;
                      return (
                        <div
                          key={serv.name}
                          onClick={() => handleSelectService(serv.name, serv.price)}
                          className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#FAF6F0] border-[#D4AF37] ring-2 ring-[#D4AF37]/20 shadow-sm'
                              : 'bg-white border-[#E8E1D7] hover:border-[#D4AF37]/30 hover:bg-[#FAF7F2]/50'
                          }`}
                        >
                          <div>
                            <div className="font-bold text-xs sm:text-sm text-[#121113]">{serv.name}</div>
                            <div className="text-[11px] text-[#A87B75] font-semibold mt-0.5">{serv.price}</div>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                            isSelected ? 'bg-[#D4AF37] border-[#D4AF37] text-white' : 'border-[#E8E1D7] bg-white'
                          }`}>
                            {isSelected && <Check size={12} />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* STEP 2: PREFERRED TIME SLOT */}
                <div className="p-5 sm:p-7 rounded-3xl bg-white border border-[#E8E1D7] shadow-sm hover:shadow-md transition-all">
                  <h3 className="font-bold text-sm sm:text-base text-[#121113] mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#121113] text-white text-xs flex items-center justify-center font-bold">2</span>
                      Select Preferred Time Slot *
                    </span>
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {timeSlots.map((slot) => {
                      const slotText = `${slot.label} (${slot.hours})`;
                      const isSelected = timeSlot === slotText;
                      return (
                        <button
                          key={slot.label}
                          type="button"
                          onClick={() => setTimeSlot(slotText)}
                          className={`p-3 rounded-2xl border text-center transition-all ${
                            isSelected
                              ? 'bg-[#121113] text-white border-[#121113] shadow-md ring-2 ring-[#121113]/20'
                              : 'bg-[#FAF7F2] text-[#121113] border-[#E8E1D7] hover:border-[#D4AF37]/40'
                          }`}
                        >
                          <div className="text-base mb-1">{slot.icon}</div>
                          <div className="font-bold text-xs">{slot.label}</div>
                          <div className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-[#7A757F]'}`}>{slot.hours}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* STEP 3: PREFERRED DATE */}
                <div className="p-5 sm:p-7 rounded-3xl bg-white border border-[#E8E1D7] shadow-sm hover:shadow-md transition-all">
                  <h3 className="font-bold text-sm sm:text-base text-[#121113] mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#121113] text-white text-xs flex items-center justify-center font-bold">3</span>
                      Select Preferred Date *
                    </span>
                  </h3>

                  {/* 1-Tap Quick Shortcut Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                    {dateShortcuts.map((sc) => {
                      const isSelected = dateShortcut === sc.label;
                      return (
                        <button
                          key={sc.label}
                          type="button"
                          onClick={() => {
                            setDateShortcut(sc.label);
                            setDate(sc.value);
                          }}
                          className={`p-2.5 rounded-2xl border text-center transition-all ${
                            isSelected
                              ? 'bg-[#A87B75] text-white border-[#A87B75] shadow-md'
                              : 'bg-[#FAF7F2] text-[#121113] border-[#E8E1D7] hover:border-[#A87B75]/40'
                          }`}
                        >
                          <div className="font-bold text-xs">{sc.label}</div>
                          <div className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-[#7A757F]'}`}>{sc.sub}</div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        setDateShortcut("");
                      }}
                      min={getFormattedDate(0)}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E8E1D7] bg-[#FAF7F2] text-xs font-semibold text-[#121113] outline-none focus:border-[#D4AF37] transition-all"
                    />
                    <div className="text-[10px] text-[#7A757F] mt-1.5 pl-1 font-light">
                      💡 Choose any date within the next 30 days.
                    </div>
                  </div>
                </div>

                {/* STEP 4: CLIENT CONTACT DETAILS */}
                <div className="p-5 sm:p-7 rounded-3xl bg-white border border-[#E8E1D7] shadow-sm hover:shadow-md transition-all">
                  <h3 className="font-bold text-sm sm:text-base text-[#121113] mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#121113] text-white text-xs flex items-center justify-center font-bold">4</span>
                      Your Contact Info *
                    </span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#121113] mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-[#E8E1D7] bg-[#FAF7F2] text-xs text-[#121113] outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#121113] mb-1">Phone Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-[#E8E1D7] bg-[#FAF7F2] text-xs text-[#121113] outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="salon-btn-gold w-full py-4 text-sm font-bold shadow-2xl flex items-center justify-center gap-2 group active:scale-98"
                >
                  <CalendarIcon size={18} className="transition-transform group-hover:scale-110" />
                  Confirm & Request Reservation
                </button>

              </form>
            )}
          </div>

          {/* Right Column: Live Booking Summary Card Ticket (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 mt-8 lg:mt-0">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#D4AF37]/40 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E1D7]">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37]">LIVE BOOKING PREVIEW</span>
                  <h4 className="salon-serif text-2xl font-bold text-[#121113] mt-0.5">Your Sanctuary Ticket</h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#E8E1D7] flex items-center justify-center text-[#A87B75]">
                  <Sparkles size={20} />
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm mb-8">
                <div className="flex justify-between items-center p-3.5 rounded-2xl bg-[#FAF7F2]">
                  <span className="text-[#7A757F] font-medium">Selected Service:</span>
                  <span className="font-bold text-[#121113]">{selectedService}</span>
                </div>

                <div className="flex justify-between items-center p-3.5 rounded-2xl bg-[#FAF7F2]">
                  <span className="text-[#7A757F] font-medium">Price:</span>
                  <div className="text-right">
                    {isPromoApplied ? (
                      <div className="flex items-center gap-1.5 flex-wrap justify-end">
                        <span className="text-xs text-[#7A757F] line-through font-normal">{selectedPrice}</span>
                        <span className="font-extrabold text-[#25D366] text-sm sm:text-base">
                          {(() => {
                            const match = selectedPrice.match(/[\d,]+/);
                            if (!match) return selectedPrice;
                            const num = parseInt(match[0].replace(/,/g, ''), 10);
                            if (isNaN(num)) return selectedPrice;
                            const discounted = Math.round(num * 0.85);
                            return `₹${discounted.toLocaleString('en-IN')}`;
                          })()}
                        </span>
                        <span className="text-xs text-[#128C7E] font-medium">
                          (15% OFF applied)
                        </span>
                      </div>
                    ) : (
                      <span className="font-bold text-[#A87B75] text-base">{selectedPrice}</span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center p-3.5 rounded-2xl bg-[#FAF7F2]">
                  <span className="text-[#7A757F] font-medium">Selected Date:</span>
                  <span className="font-bold text-[#121113]">{dateShortcut || date || "Today"}</span>
                </div>

                <div className="flex justify-between items-center p-3.5 rounded-2xl bg-[#FAF7F2]">
                  <span className="text-[#7A757F] font-medium">Time Slot:</span>
                  <span className="font-bold text-[#121113]">{timeSlot}</span>
                </div>

                <div className="flex justify-between items-center p-3.5 rounded-2xl bg-[#FAF7F2]">
                  <span className="text-[#7A757F] font-medium">Location:</span>
                  <span className="font-bold text-[#121113]">Andheri West, Mumbai</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 text-xs text-[#128C7E] space-y-1 font-medium">
                <div className="flex items-center gap-1.5 font-bold"><ShieldCheck size={15} /> Zero Wait Time Guarantee</div>
                <div className="text-[11px] text-[#7A757F]">Your chair will be ready immediately upon arrival.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
