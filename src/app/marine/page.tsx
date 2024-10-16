'use client';

// Ensures interactivity for client-side components
import Navigation from '@/components/navigation';
import Head from 'next/head'; // Ensure correct import for adding meta tags
import CasesSection from '@/components/cases-section'; // Include any client components that need hydration
import Footer from '@/components/footer';
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
          <div>
          <Navigation />
          </div>
          <div className={cn("bg-marine py-0 text-white")}>
          <div className={cn("max-w-7xl pt-10 mx-auto px-4 sm:px-6 lg:px-8")}>
            {/* Title Section */}
            <div className="text-center">
              <h1 className="text-8xl font-bold">Procurable Marine & Infrastructure</h1>
              <p className="mt-4 text-4x1">
                Engineered products for Ports, AtoN, Offshore, and General Infrastructure
              </p>
            </div>
    
            {/* Content Section */}
            <div className="mt-10 space-y-6">
              {text.trim().split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
    
            {/* Example of image if needed */}
            <div className="mt-10 flex justify-center">
              <Image
                src="/images/marine.jpg"
                alt="an AtoN structure in the Spencer Gulf"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
    
            {/* Services Section */}
            <CasesSection />
          </div>
    
          {/* Footer */}
          <Footer />
        </div>
        </div>
      );
    };
    
    export default MarinePage;
 
