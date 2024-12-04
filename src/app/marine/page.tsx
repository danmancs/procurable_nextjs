'use client';

// Ensures interactivity for client-side components
import Navigation from '@/components/navigation';
import Head from 'next/head'; // Ensure correct import for adding meta tags
import CasesSection from '@/components/cases-section'; // Include any client components that need hydration
import Footer from '@/components/footer/index';
import Image from "next/legacy/image"; // For any relevant images in the projects section
import { cn } from '@/lib/utils';

const MarinePage = () => {
  const text = `
    At Procurable Marine & Infrastructure, we specialise in the supply of AtoN (Aids to Navigation) buoys, buoy mooring systems, anchor and mooring chains, and electronic AtoN systems, including AIS solutions. We also supply Fish Aggregating Devices (FADs), providing reliable and innovative products tailored to your operational requirements.

In addition to AtoN systems, we act as the agent and distributor for IRM Offshore and Marine Engineers, offering high-quality port equipment, including fenders, bollards, and related accessories. We also supply marina infrastructure products and other engineered components.

Our products meet IALA guidelines and Class approval requirements, where appropriate. With a long-established supplier network, we ensure that our products consistently meet the highest quality standards.

For dependable solutions designed to support your operations, contact us today.
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
          width={600}
          height={900}
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
