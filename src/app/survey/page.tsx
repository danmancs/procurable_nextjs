'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Image from 'next/legacy/image';
import { cn } from '@/lib/utils';

const SurveyPage = () => {
  return (
    <div
      className={cn(
        // Radial gradient from top-left, fading to black
        'min-h-screen flex flex-col text-white',
        'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]',
        'from-green-700 via-black to-black'
      )}
    >
      <Navigation />

      <div className={cn('flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24')}>
        {/* Title */}
        <div className="text-center">
          <h1 className="text-6xl mt-10 font-bold">Cargo Surveying</h1>
          <p className="mt-4 text-3xl">Damaged cargo surveying for insurance claims</p>
        </div>

        {/* Text + Images */}
        <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10 max-w-4xl mx-auto">
          {/* Text column */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-lg">
              Procurable Survey provides independent damaged cargo inspections for insurance claims.
              We document loss, determine probable cause, and quantify damage so insurers and insured
              parties can make informed, timely decisions.
            </p>

            <p className="text-lg">
              Our work is impartial and evidence-driven. We prioritise photographic documentation,
              secure chain-of-custody for samples, and concise reporting aligned to insurer and P&amp;I
              requirements. Acting as independent observers, we ensure findings are defensible and
              directly useful in the claims process.
            </p>

            <p className="text-lg">
              We attend at ports, terminals, warehouses, and client sites to assess:
            </p>
            <ul className="list-disc list-inside text-lg space-y-1">
              <li>Impact damage</li>
              <li>Wetting and contamination</li>
              <li>Short-landing or shortages</li>
              <li>Temperature excursions</li>
              <li>Packaging or stowage failures</li>
            </ul>

            <p className="text-lg">
              We liaise with carriers, stevedores, freight forwarders, and storage providers to secure
              information and site access whilst avoiding unnecessary conflict.
            </p>

            <p className="text-lg">
              Our reports include:
            </p>
            <ul className="list-disc list-inside text-lg space-y-1">
              <li>Initial attendance notes</li>
              <li>Condition and damage reports</li>
              <li>Measured loss estimates</li>
              <li>Root-cause analysis</li>
              <li>Recommendations for mitigation or salvage</li>
            </ul>

            <p className="text-lg">
              All outputs are prepared in line with industry and insurer standards, giving claims teams
              confidence that the documentation will withstand scrutiny in settlement or legal processes.
            </p>

            <p className="text-lg">
              We recognise the commercial pressures on claims handlers and logistics operators. Our focus is
              fast turnaround, impartial assessments, and clear deliverables that support the efficient
              resolution of claims.
            </p>
          </div>

          {/* Image column with two stacked photos */}
          <div className="lg:w-1/2 space-y-6">
            <Image
              src="/images/OneApus.jpg"
              alt="Cargo surveying"
              width={709}
              height={592}
              className="rounded-lg"
            />
            <Image
              src="/images/cargo-damage-2.jpg"
              alt="Additional cargo surveying photo"
              width={709}
              height={532}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SurveyPage;
