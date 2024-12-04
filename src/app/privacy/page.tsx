'use client';

import Image from "next/legacy/image";
import { cn } from '@/lib/utils';
import Navigation from '@/components/navigation'; 
import Footer from '@/components/footer/index';

export default function PrivacyPage() {
  return (
    <div>
      <Navigation/>
      <header className={cn("py-16")}>
        <div className={cn("max-w-screen-md mx-auto px-14 sm:px-6 lg:px-8 text-center")}>
          {/* Main Title */}
          <h1 className={cn("font-nunitosans font-bold text-2xl md:text-3xl lg:text-4xl leading-snug")}>
            Privacy Policy
          </h1>

          {/* Privacy Policy Content */}
          <div className={cn("mt-3 text-left text-lg  font-nunitosans leading-relaxed")}>
            <p className="mb-1">
              At Procurable Group, we are committed to protecting your privacy. This policy outlines how we collect, use, and protect your personal information.
            </p>

            <h2 className="font-bold text-xl mb-2">Information We Collect</h2>
            <p className="mb-2 text-lg">
              We may collect personal information such as your name, email address, phone number, and company details when you interact with our website or services.
            </p>

            <h2 className="font-bold text-xl mb-2">How We Use Your Information</h2>
            <p className="mb-2 text-lg">
                              Your information is used to provide and improve our services, communicate with you, and ensure a personalised experience. We do not share your personal information with third parties without your consent, except as required by law.
            </p>

            <h2 className="font-bold text-xl mb-2">Your Rights</h2>
            <p className="mb-2 text-lg">
              You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us.
            </p>

            <h2 className="font-bold text-xl mb-2">Security</h2>
            <p className="mb-2 text-lg">
              We implement security measures to protect your information. However, no data transmission over the internet is completely secure, and we cannot guarantee the absolute security of your data.
            </p>

            <h2 className="font-bold text-xl mb-2">Changes to This Policy</h2>
            <p className="mb-2 text-lg">
              We may update this policy from time to time. Please review this page regularly to stay informed of any changes.
            </p>

            <h2 className="font-bold text-xl mb-2">Contact Us</h2>
            <p className="mb-2 text-lg">
              If you have any questions about this privacy policy, please contact us at privacy@procurable.group.
            </p>
          </div>

          {/* Optional Logo Section 
          <div className={cn("flex justify-center mt-16")}>
            <Image src="/images/logo.png" alt="Logo" width={200} height={200} className="rounded-lg" />
          </div>

         
          <footer className={cn(`font-mono pb-40 pt-10 uppercase text-center font-medium text-sm text-gray-600`)}>
            <p>Thanks for stopping by</p>
          </footer>*/}
        </div>
      </header>
      <Footer/>
    </div>
  );
}
