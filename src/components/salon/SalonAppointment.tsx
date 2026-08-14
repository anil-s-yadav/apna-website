import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, CheckCircle, Clock, ShieldCheck, Sparkles, Check, ChevronDown, User, Phone, MapPin } from 'lucide-react';
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Form & Visual Service Picker (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white p-6 sm:p-9 rounded-3xl border border-[#E8E1D7] shadow-xl"
          >
            {isSubmitted ? (
              <motion.div
                className="py-10 text-center relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="salon-serif text-3xl font-semibold mb-3 text-[#121113]">Reservation Confirmed!</h3>
                <p className="text-[#7A757F] text-base max-w-md mx-auto mb-6 font-light">
                  Thank you, <strong className="text-[#121113]">{name || "Valued Client"}</strong>! We have received your booking for <strong className="text-[#A87B75]">{selectedService}</strong> ({selectedPrice}).
                </p>

                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D7] text-xs text-[#7A757F] max-w-sm mx-auto mb-6 space-y-1">
                  <div>📍 Branch: Blush & Bloom, Andheri West</div>
                  <div>📅 Date: {dateShortcut || date || "Today"} • {timeSlot}</div>
                  <div>📞 Concierge Confirmation Call: Within 15 Mins</div>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="salon-btn-secondary py-2.5 px-6 text-xs"
                >
                  Book Another Appointment
                </button>
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
                  <div className="flex gap-2 mb-3 salon-mobile-scroll pb-1">
                    {SALON_SERVICES.map((cat, idx) => (
                      <button
                        key={cat.category}
                        type="button"
                        onClick={() => {
                          setSelectedCategoryIdx(idx);
                          setSelectedService(cat.services[0].name);
                          setSelectedPrice(cat.services[0].price);
                        }}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${idx === selectedCategoryIdx
                          ? 'bg-[#121113] text-white shadow-md'
                          : 'bg-[#FAF7F2] border border-[#E8E1D7] text-[#7A757F] hover:text-[#121113]'
                          }`}
                      >
                        {cat.category}
                      </button>
                    ))}
                  </div>

                  {/* Service Choice Cards (Grid of visual chips) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentCategory.services.map((s) => {
                      const isSelected = selectedService === s.name;
                      return (
                        <div
                          key={s.name}
                          onClick={() => handleSelectService(s.name, s.price)}
                          className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${isSelected
                            ? 'bg-[#FAF7F2] border-[#D4AF37] ring-2 ring-[#D4AF37]/30 shadow-sm'
                            : 'bg-white border-[#E8E1D7] hover:border-[#C89B95]/40 hover:bg-[#FAF7F2]/50'
                            }`}
                        >
                          <div className="min-w-0 pr-2">
                            <div className="font-bold text-xs sm:text-sm text-[#121113] truncate">{s.name}</div>
                            <div className="text-[11px] font-semibold text-[#A87B75]">{s.price}</div>
                          </div>

                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isSelected ? 'bg-[#D4AF37] text-white' : 'border border-[#E8E1D7]'
                            }`}>
                            {isSelected && <Check size={12} />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* STEP 2: TIME SLOT SELECTOR */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#121113] mb-2.5 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#121113] text-white flex items-center justify-center text-[10px]">2</span>
                    Select Preferred Time Slot *
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {timeSlots.map((slot) => {
                      const isSelected = timeSlot.includes(slot.label);
                      return (
                        <button
                          key={slot.label}
                          type="button"
                          onClick={() => setTimeSlot(`${slot.label} (${slot.hours})`)}
                          className={`p-3 rounded-2xl border text-center transition-all ${isSelected
                            ? 'bg-[#121113] text-white border-[#121113] shadow-md'
                            : 'bg-white border-[#E8E1D7] text-[#121113] hover:border-[#121113]'
                            }`}
                        >
                          <div className="text-sm font-bold flex items-center justify-center gap-1">
                            <span>{slot.icon}</span> {slot.label}
                          </div>
                          <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-white/70' : 'text-[#7A757F]'}`}>
                            {slot.hours}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* STEP 3: PREFERRED DATE WITH TOUCH SHORTCUT PILLS */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#121113] mb-2.5 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#121113] text-white flex items-center justify-center text-[10px]">3</span>
                    Select Preferred Date *
                  </label>

                  {/* 1-Tap Date Shortcut Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                    {dateShortcuts.map((ds) => {
                      const isSelected = dateShortcut === ds.label || date === ds.value;
                      return (
                        <button
                          key={ds.label}
                          type="button"
                          onClick={() => {
                            setDateShortcut(ds.label);
                            setDate(ds.value);
                          }}
                          className={`p-2.5 rounded-xl border text-center transition-all ${isSelected
                            ? 'bg-[#A87B75] text-white border-[#A87B75] font-bold shadow-sm'
                            : 'bg-[#FAF7F2] border-[#E8E1D7] text-[#121113] hover:border-[#A87B75]'
                            }`}
                        >
                          <div className="text-xs font-bold">{ds.label}</div>
                          <div className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-[#7A757F]'}`}>{ds.sub}</div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom Date Input Picker with Calendar Icon & Label */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A87B75]">
                      <CalendarIcon size={18} />
                    </div>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        setDateShortcut("Custom Date");
                      }}
                      className="salon-input bg-white cursor-pointer pl-11 text-xs sm:text-sm font-semibold"
                    />
                  </div>
                  <p className="text-[11px] text-[#7A757F] mt-1.5 flex items-center gap-1 font-light">
                    💡 Tap "Today", "Tomorrow" or choose a custom date above.
                  </p>
                </div>

                {/* STEP 4: CLIENT DETAILS */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#121113] mb-2.5 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#121113] text-white flex items-center justify-center text-[10px]">4</span>
                    Your Contact Details *
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name *"
                        className="salon-input"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Mobile Number *"
                        className="salon-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <button type="submit" className="salon-btn-gold w-full py-4 text-base shadow-xl mt-4">
                  <CalendarIcon size={19} />
                  Confirm Your Reservation
                </button>

                <div className="text-center pt-2">
                  <p className="text-xs text-[#7A757F] mb-2 font-light">Prefer WhatsApp direct booking?</p>
                  <a
                    href={SALON_BUSINESS.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-bold text-xs transition-all shadow-md w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={18} fill="#FFFFFF" />
                    Book via WhatsApp Concierge
                  </a>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column: Live Booking Ticket Summary (5 cols) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-[#E8E1D7] shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-5 border-b border-[#E8E1D7] mb-6">
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
                  <span className="text-[#7A757F] font-medium">Starting Price:</span>
                  <span className="font-bold text-[#A87B75] text-base">{selectedPrice}</span>
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
