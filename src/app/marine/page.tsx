'use client';

// Ensures interactivity for client-side components
import Head from 'next/head'; // Ensure correct import for adding meta tags
import { NextSeo } from 'next-seo'; // You can keep using next-seo if needed
import Header from '@/components/header';
import CasesSection from '@/components/cases-section'; // Include any client components that need hydration
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <NextSeo title="Procurable Marine & Infrastructure" description="Marine and Infrastructure Supply" />

      {/* Header */}
      <Header />

      {/* Cases Section */}
      <CasesSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
