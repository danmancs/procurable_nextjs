'use client';

// import Check from '@/constants/svg/check.svg'; // Icon for services
import { cn } from '@/lib/utils'; // Assuming you're using a utility function for classes
import Check from '@/constants/svg/check.svg';

const ServicesSection = () => (
  <section className={cn(`pb-6`)}>
    <div className={cn(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={cn(`container mx-auto px-6 p-6 bg-transparent`)}>
        <div className={cn(`mb-16 text-center`)}>
          <h4 className={cn(`text-3xl text-yellow-600 font-semibold tracking-wide uppercase`)}>Services</h4>
          <p className={cn(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight`)}>
            How we change the game
          </p>
        </div>
        <div className={cn(`flex flex-wrap my-12`)}>
          <div className={cn(`w-full border-b border-white md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={cn(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={cn(`h-6 w-6 text-yellow-600`)} />
              <div className={cn(`ml-4 text-xl text-yellow-600`)}>Project & Contract Management</div>
            </div>
            <p className={cn(`leading-loose`)}>
              Operating across a range of industries we offer end-to-end Project and Contract Management services.
            </p>
          </div>

          <div className={cn(`w-full border-b border-white md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={cn(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={cn(`h-6 w-6 text-yellow-600`)} />
              <div className={cn(`ml-4 text-xl text-yellow-600`)}>Dispute Resolution and negotiation</div>
            </div>
            <p className={cn(`leading-loose`)}>
              Projects sometimes go sideways. We help get your project back on track by working with all parties to
              reach a resolution.
            </p>
          </div>

          <div className={cn(`w-full border-b border-white md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className={cn(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={cn(`h-6 w-6 text-yellow-600`)} />
              <div className={cn(`ml-4 text-xl text-yellow-600 w-40`)}>Supplier Quality Management</div>
            </div>
            <p className={cn(`leading-loose `)}>
              Specialising in managing supplier quality in complex manufacturing and construction environments.
            </p>
          </div>

          <div className={cn(`w-full border-b border-white md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={cn(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={cn(`h-6 w-6 text-yellow-600`)} />
              <div className={cn(`ml-4 text-xl text-yellow-600`)}>Strategic Sourcing</div>
            </div>
            <p className={cn(`leading-loose`)}>
              We source engineered products globally, from simple castings to complex mining equipment.
            </p>
          </div>

          <div className={cn(`w-full border-b border-white md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={cn(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={cn(`h-6 w-6 text-yellow-600`)} />
              <div className={cn(`ml-4 text-xl text-yellow-600`)}>Expediting</div>
            </div>
            <p className={cn(`leading-loose`)}>
              Ensuring timely deliveries, reducing delays, and enhancing communication with our expediting services.
            </p>
          </div>

          <div className={cn(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={cn(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={cn(`h-6 w-6 text-yellow-600`)} />
              <div className={cn(`ml-4 text-xl text-yellow-600`)}>Asset Management</div>
            </div>
            <p className={cn(`leading-loose`)}>
              Ensuring optimal performance and longevity of your assets through comprehensive monitoring and
              maintenance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
