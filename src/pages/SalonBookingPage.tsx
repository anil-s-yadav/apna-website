import React from 'react';
import '@/components/salon/salon.css';
import SalonHeader from '@/components/salon/SalonHeader';
import SalonAppointment from '@/components/salon/SalonAppointment';
import { SalonFooter } from '@/components/salon/SalonFooter';
import { SalonFloatingActions } from '@/components/salon/SalonFloatingActions';

const SalonBookingPage: React.FC = () => {
  return (
    <div className="salon-page bg-[#FAF7F2] min-h-screen flex flex-col justify-between">
      <SalonHeader />
      
      <main className="pt-16 sm:pt-20 pb-8 flex-grow">
        {/* The Full Appointment Booking Form Component */}
        <SalonAppointment isStandalonePage={true} />
      </main>

      <SalonFooter />
      <SalonFloatingActions />
    </div>
  );
};

export default SalonBookingPage;
