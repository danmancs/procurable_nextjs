'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-800 via-black to-black">
      <Navigation />
      <main className={cn("flex-1 py-16")}>
        <div className={cn("mx-auto max-w-4xl px-6 sm:px-8")}>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 flex justify-center">
            Welcome to Procurable Group
          </h1>

          {/* Image placeholder */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo.png" // replace with real image later
              alt="Procurable Group"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Procurable Group</strong> delivers practical outcomes across projects and engineered supply.
          </p>

          <p className="text-lg mb-3">We specialise in:</p>
          <ul className="list-disc list-inside text-lg space-y-1 mb-6">
            <li>
              <strong>Project management consultancy</strong> across ports and marine, aviation,
              construction, and infrastructure.
            </li>
            <li>
              <strong>Engineering capability</strong> spanning civil, structural, mechanical, electrical,
              and marine works — ensuring technical input that supports delivery, not just design.
            </li>
            <li>
              <strong>Engineered supply</strong> of marine and infrastructure equipment, through direct
              links with trusted global manufacturers.
            </li>
            <li>
              <strong>Specialist inspections and surveys</strong>, including damaged cargo surveys for
              insurers and logistics operators.
            </li>
          </ul>

          <p className="text-lg leading-relaxed">
            What sets us apart is how we join these capabilities together. We’re engineers as well as
            project managers, so we understand scope, risk, and interfaces from the ground up. That
            means designs, inspections, and supplies are coordinated within a broader plan, ensuring
            clarity, accountability, and results.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
