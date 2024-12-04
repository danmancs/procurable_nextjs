'use client';

import Image from "next/legacy/image";
import Link from 'next/link';
import { cn } from '@/lib/utils';

const aboutLinks = [{ label: 'About Us', href: '/about-us' }, { label: 'Careers', href: 'https://www.linkedin.com/company/procurable-projects/jobs' }, { label: 'Contact', href: '/contact' }];
const resourceLinks = [{ label: 'Guides', href: '/guides' }, { label: 'Privacy', href: '/privacy' }, { label: 'QMS', href: '/qms' }, { label: 'WHSMS', href: '/whsms' }, { label: 'ESMS', href: '/esms'}];

const Footer = () => (
  <footer className={cn(`border-t border-gray-400 pt-2 pb-2`)}>
    <div className={cn(`max-w-7xl mx-auto px-8 lg:px-5 flex flex-col lg:flex-row justify-between items-start`)}>

      {/* Logo and Company Name */}
      <div className={cn(`flex items-center w-full lg:w-1/3 mb-4 lg:mb-0`)}>
        <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
        <p className={cn(`text-4xl font-bold ml-2 mb-7`)}>Procurable Group</p>
      </div>

      {/* List Container (Resources and Company) */}
      <div className={cn(`mt-4 flex flex-col lg:flex-row w-full lg:w-1/3 justify-start space-x-0 lg:space-x-4 space-y-1 lg:space-y-0 pb-10`)}>

        {/* Resources Section */}
        <div className={cn(`w-full lg:w-1/3`)}>
          <ul className={cn(`list-none space-y-1`)}>
            <li className={cn(`text-base font-bold mb-1`)}>Resources</li>
            {resourceLinks.map((link) => (
              <li key={link.label} className={cn(`text-sm font-medium leading-4`)}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div className={cn(`w-full lg:w-1/3`)}>
          <ul className={cn(`list-none space-y-1`)}>
            <li className={cn(`text-base font-bold mb-1`)}>Company</li>
            {aboutLinks.map((link) => (
              <li key={link.label} className={cn(`text-sm font-medium leading-4`)}>
                {link.href.startsWith('http') ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                ) : (
                  <Link href={link.href}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;
