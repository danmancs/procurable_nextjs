'use client';

import Image from "next/legacy/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Navigation from '@/components/navigation'; 
import Footer from '@/components/footer/index';

export default function HomePage() {
  return (
    <div>
      <Navigation/>
      <header className={cn("py-16")}>
        <div className={cn("max-w-7xl mx-auto px-14 sm:px-6 lg:px-8 text-center")}>
          {/* Main Title */}
          <h1 className={cn("font-nunitosans font-bold text-4xl md:text-5xl lg:text-6xl leading-snug")}>
            Welcome to Procurable Group
          </h1>

          {/* Subtitle */}
          <p className={cn("font-nunitosans mt-10 text-xl lg:text-2xl")}>
            Where would you like to go?
          </p>

          {/* Action Buttons */}
          <div className={cn("mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4")}>
            <Link href="/projects">
              <Button variant="projects">Procurable Projects</Button>
            </Link>
            <Link href="/marine">
              <Button variant="marine">Procurable Marine & Infrastructure</Button>
            </Link>
          </div>

          {/* Optional Logo Section */}
          <div className={cn("flex justify-center mt-16")}>
            <Image src="/images/logo.png" alt="Logo" width={200} height={200} className="rounded-lg" />
          </div>

          {/* Footer */}
          <footer className={cn(`font-mono pb-40 pt-10 uppercase text-center font-medium text-sm text-gray-600`)}>
            <p>Thanks for stopping by</p>
          </footer>
        </div>
      </header>
      <Footer/>
    </div>
  );
}
