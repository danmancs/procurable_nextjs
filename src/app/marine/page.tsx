'use client';

// Ensures interactivity for client-side components
import Head from 'next/head'; // Ensure correct import for adding meta tags
import Header from '@/components/header';
import CasesSection from '@/components/cases-section'; // Include any client components that need hydration
import Footer from '@/components/footer';

      {title="Procurable Marine & Infrastructure" 
      description="Marine and Infrastructure Supply" }

      {/* Header */}
      <Header />
{/* Main content */}

{
      title = `Procurable Marine & Infrastructure`;
      subtitle = `Explore our marine solutions for ports, offshore, and more.`;
      text = `
        At Procurable Marine & Infrastructure, we supply high-quality equipment for the maritime, offshore,
        and infrastructure sectors. We partner with top global manufacturers to ensure our products
        meet the highest standards.

        Our product range includes port and offshore equipment, as well as marina essentials.
        We focus on delivering reliable and efficient solutions tailored to each project's needs.

        Beyond just supplying products, we bring expertise in quality assurance and project management,
        ensuring comprehensive support for our clients. We provide dependable and robust solutions
        for marine and infrastructure projects.
      `;
      backgroundStyle = "";
      imageSrc = `/images/marine.jpg`; // Replace this with the correct path
      flexLayout = `lg:flex-row-reverse`; // Image on right for marine
      imageAlignmentClass = `lg:self-start lg:mt-10`; // Align image with text, not title
}
      
      {/* Cases Section */}
      <CasesSection />

      {/* Footer */}
      <Footer />

