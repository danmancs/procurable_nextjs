'use client';

import Image from 'next/legacy/image';
import { cn } from '@/lib/utils';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer/index';

export default function AboutUsPage() {
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col text-white',
        'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]',
        'from-gray-800 via-black to-black'
      )}
    >
      <Navigation />
            <header className={cn('py-16 flex-1')}>
        <div className={cn('max-w-4xl mx-auto px-6 sm:px-8 text-center')}>
          {/* Main Title */}
          <h1 className={cn('font-nunitosans font-bold text-3xl md:text-4xl lg:text-5xl leading-snug')}>
            About Us
          </h1>

          {/* About Us Text */}
          <div className={cn('mt-10 text-left text-base lg:text-lg font-nunitosans leading-relaxed space-y-6')}>
            <p>
              Procurable Group was founded in <strong>2022</strong>, built on a broad base of global
              engineering expertise across <strong>marine</strong>, <strong>AtoN</strong>, <strong>aviation</strong>,
              <strong> industrial</strong>, and <strong>property</strong>. We combine practical project services
              with engineered product supply so clients get clear advice, reliable delivery, and traceable outcomes.
            </p>

            <p>
              The name <strong>Procurable</strong> reflects our original intent — to make procuring equipment and
              services easier by finding the right suppliers, managing contracts, and keeping delivery on track.
              Since then, the business has grown organically into a group that provides project management consultancy,
              the supply of engineered marine and infrastructure products, and specialist services such as cargo
              surveying and a trusted engineering partner network.
            </p>

            <p>
              Our logo represents the <strong>interconnection</strong> of all aspects of a project — planning,
              design, procurement, delivery, and operations — and our role in bringing them together. It reflects the
              way we align multiple moving parts into a coherent, deliverable process.
            </p>

            <p>
              We work with organisations across <strong>government, education, not-for-profit, ports and marine,
              aviation, construction, and general infrastructure</strong>. Our supply relationships with reputable
              global manufacturers, combined with our project services, allow us to provide solutions that are
              technically sound and reliably delivered in the field.
            </p>

            <p>
              At the core of our approach is clarity, discipline, and accountability. We coordinate specialists,
              manage scope, and hold the delivery chain to account so that projects move forward without noise and
              outcomes are delivered as promised.
            </p>
          </div>

          {/* Logo and meaning */}
          <div className={cn('flex flex-col items-center gap-4 mt-16')}>
            <Image src="/images/logo.png" alt="Procurable Group logo" width={200} height={200} className="rounded-lg" />
            <p className="text-sm text-gray-400 max-w-xl">
              Our logo symbolises integrated delivery — the connection of scope, time, cost, risk, quality, and
              supply — joined into a single, coherent plan.
            </p>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}
