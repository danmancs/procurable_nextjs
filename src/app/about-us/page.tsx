'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import Navigation from '@/components/navigation'; 
import Footer from '@/components/footer/index';

export default function AboutUsPage() {
  return (
    <div>
      <Navigation/>
      <header className={cn("py-16")}>
        <div className={cn("max-w-7xl mx-auto px-14 sm:px-6 lg:px-8 text-center")}>
          {/* Main Title */}
          <h1 className={cn("font-nunitosans font-bold text-4xl md:text-5xl lg:text-6xl leading-snug")}>
            About Us
          </h1>

          {/* About Us Text */}
          <div className={cn("mt-10 text-left text-xl lg:text-2xl font-nunitosans leading-relaxed")}>
            <p className="mb-6">
              Procurable Group is built on two core divisions: Procurable Projects and Procurable Marine & Infrastructure. 
              Procurable Projects offers project management consultancy services across a diverse range of sectors, including 
              infrastructure, construction, aviation, government at all levels, non-profit organisations, and education. 
              Our flexible approach ensures projects are delivered efficiently, on schedule, and to the highest standards.
            </p>

            <p className="mb-6">
              Procurable Marine & Infrastructure focuses on supplying a broad array of engineered products for the maritime, 
              offshore, and infrastructure sectors. Our offerings include AtoN equipment, AIS systems, chain systems, port 
              solutions, and marina products. We have grown organically into our current form, developing these two divisions 
              to meet the evolving needs of our clients. This growth has been driven by fostering strong relationships with 
              global manufacturers and an ongoing commitment to reliable, effective solutions.
            </p>

            <p className="mb-6">
              With experience spanning decades, we bring a wealth of industry knowledge, technical expertise, and a commitment 
              to quality. Our clients include organisations across many fields, all of whom rely on dependable products or project 
              management expertise for their operations. Whether it’s sourcing high-quality engineered products or managing complex 
              endeavours, we’re dedicated to providing practical, effective solutions.
            </p>

            <p>
              If you’re looking for tailored support for your operations, contact us to discuss how Procurable Group can meet your needs.
            </p>
          </div>

          {/* Optional Logo Section */}
          <div className={cn("flex justify-center mt-16")}>
            <Image src="/images/logo.png" alt="Logo" width={200} height={200} className="rounded-lg" />
          </div>

          {/* Footer */}
          <footer className={cn(`font-mono pb-40 pt-10 uppercase text-center font-medium text-sm text-gray-600`)}>
            <p>Thanks for stopping by</p>
          </footer>
        </div>
      </header>
      <Footer/>
    </div>
  );
}
