'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const aboutLinks = [`About Us`, `Careers`, `Contact`];
const resourceLinks = [`Guides`];

const Footer = () => (
  <footer className={cn(`border-t border-gray-400 pt-2 pb-2`)}>
    <div className={cn(`max-w-7xl mx-auto px-8 lg:px-5 flex flex-col lg:flex-row justify-between items-start`)}>

      {/* Logo and Company Name */}
      <div className={cn(`flex items-center w-full lg:w-1/3 mb-4 lg:mb-0`)}>
        <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
        <p className={cn(`text-4xl font-bold ml-2 mb-7`)}>Procurable Group</p>
      </div>

      {/* List Container (Resources and Company) */}
      <div className={cn(`mt-4 flex flex-col lg:flex-row w-full lg:w-1/3 justify-start space-x-0 lg:space-x-4 space-y-1 lg:space-y-0`)}>

        {/* Resources Section */}
        <div className={cn(`w-full lg:w-1/3`)}>
          <ul className={cn(`list-none space-y-1`)}>
            <li className={cn(`text-base font-bold mb-1`)}>Resources</li>
            {resourceLinks.map((link) => (
              <li key={link} className={cn(`text-sm font-medium leading-4`)}>
                <Link href={`/${link.toLowerCase()}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div className={cn(`w-full lg:w-1/3`)}>
          <ul className={cn(`list-none space-y-1`)}>
            <li className={cn(`text-base font-bold mb-1`)}>Company</li>
            {aboutLinks.map((link) => (
              <li key={link} className={cn(`text-sm font-medium leading-4`)}>
                <Link href={`/${link.toLowerCase()}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;
