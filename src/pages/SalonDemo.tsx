import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '@/components/salon/salon.css';

import SalonHeader from '@/components/salon/SalonHeader';
import SalonHero from '@/components/salon/SalonHero';
import { QuickActionBar } from '@/components/salon/QuickActionBar';
import SalonAbout from '@/components/salon/SalonAbout';
import SalonServices from '@/components/salon/SalonServices';
import SalonPromo from '@/components/salon/SalonPromo';
import SalonGallery from '@/components/salon/SalonGallery';
import SalonWhyChoose from '@/components/salon/SalonWhyChoose';
import { SalonTestimonials } from '@/components/salon/SalonTestimonials';
import { SalonSocialProof } from '@/components/salon/SalonSocialProof';
import { SalonLocation } from '@/components/salon/SalonLocation';
import { SalonFAQ } from '@/components/salon/SalonFAQ';
import { SalonFinalCTA } from '@/components/salon/SalonFinalCTA';
import { SalonFooter } from '@/components/salon/SalonFooter';
import { SalonFloatingActions } from '@/components/salon/SalonFloatingActions';
import SalonWelcomeDialog from '@/components/salon/SalonWelcomeDialog';

const SalonDemo: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <div className="salon-page">
      <SalonWelcomeDialog />
      <SalonHeader />
      <main>
        <SalonHero />
        <QuickActionBar />
        <SalonAbout />
        <SalonServices />
        <SalonPromo />
        <SalonGallery />
        <SalonWhyChoose />
        <SalonTestimonials />
        <SalonSocialProof />
        <SalonLocation />
        <SalonFAQ />
        <SalonFinalCTA />
      </main>
      <SalonFooter />
      <SalonFloatingActions />
    </div>
  );
};

export default SalonDemo;
