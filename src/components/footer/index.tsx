import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const aboutLinks = [`About Us`, `Careers`, `Contact`];
const resourceLinks = [`Guides`]; // Update or expand this as necessary

const Footer = () => (
  <footer className={cn(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
    <div className={cn(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-5 flex flex-wrap`)}>
      {/* Logo and Company Name */}
      <div className={cn(`mb-14 flex items-center w-full lg:w-1/2`)}>
        <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
        <p className={cn(`text-4xl text-black font-bold ml-2`)}>Procurable Group</p>
      </div>

      {/* Columns Container */}
      <div className={cn(`w-full lg:w-1/2 flex flex-wrap mb-8 lg:mb-0`)}>
        <ul className={cn(`text-lg font-light flex flex-wrap w-full`)}>
          {/* Resources Section */}
          <li className={cn(`w-full lg:w-1/2 mb-4 lg:mb-0`)}>
            <div>
              <h4 className={cn(`text-gray-900 text-base font-bold mb-2`)}>Resources</h4>
              <ul>
                {resourceLinks.map((link) => (
                  <li className={cn(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                    <Link href={`/${link.toLowerCase()}`}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* About Us Section */}
          <li className={cn(`w-full lg:w-1/2`)}>
            <div>
              <h4 className={cn(`text-gray-900 text-base font-bold mb-2`)}>Company</h4>
              <ul>
                {aboutLinks.map((link) => (
                  <li className={cn(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                    <Link href={`/${link.toLowerCase().replace(` `, `-`)}`}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Newsletter Subscription Form (optional) */}
      {/* Uncomment the following block if you want to add a subscription form */}
      {/* <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
        <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
          <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Subscribe to our newsletter</h4>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="email address"
              type="text"
              className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div> */}
    </div>
  </footer>
);

export default Footer;
