'use client';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const aboutLinks = [`About Us`, `Careers`, `Contact`];
const resourceLinks = [`Guides`]; // Update or expand this as necessary

const Footer = () => (
  <footer className={cn(`border-t border-gray-400 pt-2 pb-2`)}>
    <div className={cn(`max-w-7xl mx-auto px-8 lg:px-5 flex flex-wrap`)}>
      {/* Logo and Company Name */}
      <div className={cn(`mb-14 flex items-center w-full lg:w-1/2`)}>
        <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
        <p className={cn(`text-4xl font-bold ml-2 mb-7`)}>Procurable Group</p>
      </div>

      {/* Columns Container */}
      <div className={cn(`list-none text-left w-full lg:w-1/4 flex flex-wrap mb-4 lg:mb-0`)}>
        <ul className={cn(`list-none text-left text-lg font-light flex flex-wrap w-full`)}>
          {/* Resources Section */}
          <li className={cn(`w-full lg:w-1/2 flex flex-col`)}>
            <div>
              <h4 className={cn(`text-base font-bold mb-1`)}>Resources</h4>
              <ul className={cn(`list-none space-y-1`)}>
                {resourceLinks.map((link) => (
                  <li key={link} className={cn(`text-sm font-medium leading-4`)}>
                    <Link href={`/${link.toLowerCase()}`}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* About Us Section */}
          <li className={cn(`w-full lg:w-1/2 flex flex-col`)}>
            <div>
              <h4 className={cn(`text-base font-bold mb-1`)}>Company</h4>
              <ul className={cn(`list-none space-y-1`)}>
                {aboutLinks.map((link) => (
                  <li key={link} className={cn(`text-sm font-medium leading-4`)}>
                    <Link href={`/${link.toLowerCase()}`}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Newsletter Subscription Form (optional) */}
      {/* Uncomment the following block if you want to add a subscription form */}
      {/* 
      <div className={cn(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
        <div className={cn(`border border-gray-400 rounded py-5 px-4`)}>
          <h4 className={cn(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Subscribe to our newsletter</h4>
          <div className={cn(`flex w-full`)}>
            <input
              aria-label="email address"
              type="text"
              className={cn(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div> 
      */}
    </div>
  </footer>
);

export default Footer;
