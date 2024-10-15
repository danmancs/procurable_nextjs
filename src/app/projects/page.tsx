'use client';

// Ensures interactivity for client-side components

import { NextSeo } from 'next-seo';
import Header from '@/components/header';
import ServicesSection from '@/components/services';
import Footer from '@/components/footer';
import Head from 'next/head'; // Ensure correct import for adding meta tags

export default function Home() {
  return (
    <>
      <NextSeo title="Procurable Marine & Infrastructure" description="Marine and Infrastructure Supply" />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main>
        <ServicesSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
