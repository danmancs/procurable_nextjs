'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Image from 'next/legacy/image';
import { cn } from '@/lib/utils';

const EngineeringPage = () => {
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col text-white',
        'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]',
        'from-teal-600 via-black to-black'
      )}
    >
      <Navigation />

      <div className={cn('flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24')}>
        {/* Title */}
        <div className="text-center">
          <h1 className="text-6xl mt-10 font-bold">Engineering</h1>
          <p className="mt-4 text-3xl">Trusted expertise across multiple disciplines</p>
        </div>

        {/* Text + Images */}
        <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10 max-w-4xl mx-auto">
          {/* Text column */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-lg">
              Procurable Engineering combines in-house capability with the support of a close network
              of experienced engineers. This mix allows us to cover specialist fields directly where
              we have expertise, and draw on trusted colleagues for additional depth when required.
            </p>

            <p className="text-lg">
              Our capability extends across a broad set of disciplines, giving clients access to
              integrated technical input across the lifecycle of a project:
            </p>
            <ul className="list-disc list-inside text-lg space-y-1">
              <li>Architectural</li>
              <li>Civil</li>
              <li>Structural</li>
              <li>Mechanical</li>
              <li>Electrical</li>
              <li>HVAC</li>
              <li>Hydraulic</li>
              <li>Aids to Navigation (AtoN) &amp; Marine</li>
              <li>Concrete &amp; Structural Remediation</li>
            </ul>

            <p className="text-lg">
              We integrate these disciplines into projects with a strong emphasis on scope,
              programme, and risk control. Designs and reports are tracked against budgets and
              schedules, with interfaces between fields actively managed so that outputs align with
              delivery needs.
            </p>

            <p className="text-lg">
              By combining our own technical knowledge with a trusted network of senior specialists,
              we provide practical engineering advice that is coherent, coordinated, and ready to be
              implemented in the field.
            </p>
          </div>

          {/* Image column with two stacked photos */}
          <div className="lg:w-1/2 space-y-6">
            <Image
              src="/images/structural.jpg"
              alt="Engineering expertise"
              width={700}
              height={700}
              className="rounded-lg"
            />
            <Image
              src="/images/southsol.png"
              alt="Engineering coordination"
              width={700}
              height={934.5}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EngineeringPage;
