import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
