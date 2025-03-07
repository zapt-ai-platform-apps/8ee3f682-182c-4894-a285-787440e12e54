import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ZaptBadge from '@/components/ZaptBadge';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <ZaptBadge />
      <Footer />
    </div>
  );
}