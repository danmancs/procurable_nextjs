'use client';

// Ensures interactivity for client-side components
import Navigation from '@/components/navigation';
import Head from 'next/head'; // Ensure correct import for adding meta tags
import CasesSection from '@/components/cases-section'; // Include any client components that need hydration
import Footer from '@/components/footer/index';
import Image from 'next/image'; // For any relevant images in the projects section
import { cn } from '@/lib/utils';

const MarinePage = () => {
  const text = `
    At Procurable Marine & Infrastructure, we supply high-quality equipment for the maritime, offshore,
        and infrastructure sectors. We partner with top global manufacturers to ensure our products
        meet the highest standards.

        Our product range includes port and offshore equipment, as well as marina essentials.
        We focus on delivering reliable and efficient solutions tailored to each project's needs.

        Beyond just supplying products, we bring expertise in quality assurance and project management,
        ensuring comprehensive support for our clients. We provide dependable and robust solutions
        for marine and infrastructure projects.
  `;
  return (
    <div>
          {/* Header */}

          <div className={cn("bg-marine py-0 text-white")}>
          <Navigation />
          <div className={cn("max-w-7xl pt-0 mx-auto px-4 sm:px-6 lg:px-8")}>
    {/* Title Section */}
    <div className="text-center">
      <h1 className="text-6xl mt-10 font-bold">Procurable Marine & Infrastructure</h1>
      <p className="mt-4 text-3xl">
        Engineered products for Ports, AtoN, Offshore, and General Infrastructure
      </p>
    </div>

    {/* Flexbox for Image and Paragraphs */}
    <div className="mt-10 flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-10 max-w-4xl mx-auto">
      {/* Image on the Left */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src="/images/marine.jpg"
          alt="an AtoN structure in the Spencer Gulf"
          width={400}
          height={600}
          className="rounded-lg"
        />
      </div>

          {/* Paragraph Text on the Right */}
<div className="lg:w-1/2 text-lg">
  {text.trim().split('\n\n').map((paragraph, index) => (
    <p key={index} className="text-lg leading-relaxed">
      {paragraph.trim()}
    </p>
  ))}
</div>
          </div>
          </div>
    
            {/* Services Section */}
            <CasesSection />
          
    
          {/* Footer */}
          <Footer />
          </div>
        </div>
       
      );
    };
    
    export default MarinePage;
