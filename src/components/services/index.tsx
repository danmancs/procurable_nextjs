'use client';

// Use this only if future client-side logic is expected

import { css } from 'css';
import Check from '@/constants/svg/check.svg';

const servicesGradientStyle = css`
  background: linear-gradient(to right, #d5713b 0%, #443f3c 100%);
  color: white;
`;

const ServicesSection = () => (
  <section className={tw(servicesGradientStyle, `pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-transparent`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-3xl text-yellow-600 font-semibold tracking-wide uppercase`)}>Services</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-white`)}>How we change the game</p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b border-white md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-yellow-500`)} />
              <div className={tw(`ml-4 text-xl text-white`)}>Project & Contract Management</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
              Operating across a range of industries we offer end-to-end Project and Contract Management services.
            </p>
          </div>

          <div className={tw(`w-full border-b border-white md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-yellow-500`)} />
              <div className={tw(`ml-4 text-xl text-white`)}>Dispute Resolution</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
              Projects sometimes go sideways. We help get your project back on track by working with all parties to
              reach a resolution.
            </p>
          </div>

          <div className={tw(`w-full border-b border-white md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-yellow-500`)} />
              <div className={tw(`ml-4 text-xl text-white`)}>Supplier Quality Management</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
              Specialising in managing supplier quality in complex manufacturing and construction environments.
            </p>
          </div>

          <div className={tw(`w-full border-b border-white md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-yellow-500`)} />
              <div className={tw(`ml-4 text-xl text-white`)}>Strategic Sourcing</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
              We source engineered products globally, from simple castings to complex mining equipment.
            </p>
          </div>

          <div
            className={tw(`w-full border-b border-white md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}
          >
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-yellow-500`)} />
              <div className={tw(`ml-4 text-xl text-white`)}>Expediting</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
              Ensuring timely deliveries, reducing delays, and enhancing communication with our expediting services.
            </p>
          </div>

          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-yellow-500`)} />
              <div className={tw(`ml-4 text-xl text-white`)}>Asset Management</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
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
