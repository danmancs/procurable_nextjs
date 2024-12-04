'use client';

// Mark this as a client-side component

import { useState } from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type LinkItem = {
  label: string;
  href: string;
};

const links: LinkItem[] = [
  {
    label: `Contact`,
    href: `/contact`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={cn(`p-2`)}
  >
    <span className={cn(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={cn(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={cn(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={cn(`md:hidden`)}>
    <div className={cn(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link: LinkItem) => (
        <Link href={link.href} key={link.label}>
          <span className={cn(`block px-3 py-2 text-base font-medium`)}>{link.label}</span>
        </Link>
      ))}
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className={cn(`bg-black bg-opacity-20`)}>
      <div className={cn(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={cn(`flex items-center justify-between h-16`)}>
          {/* Left side: Logo and company name */}
          <div className={cn(`flex items-center`)}>
            <div className={cn(`flex-shrink-0`)}>
              <div className={cn(`flex items-center`)}>
                <Link href="/" passHref>
                  <Image src="/images/logo.png" alt="Logo" className={cn(`h-12 w-12`)} width={48} height={48} />
                </Link>
                <span className={cn(`ml-2 text-xl font-bold`)} style={{ lineHeight: `48px` }}>
                  Procurable Group Pty Ltd
                </span>
              </div>
            </div>
          </div>

          {/* Right side: Contact link */}
          <div className={cn(`hidden md:block`)}>
            <div className={cn(`ml-10 flex items-baseline space-x-4`)}>
              {links.map((link: LinkItem) => (
                <Link href={link.href} key={link.label}>
                  <span className={cn(`hover:text-gray-600 px-3 py-2 rounded-md font-medium`)}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className={cn(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {showMenu && <MobileMenu />}
    </nav>
  );
};

export default Navigation;
