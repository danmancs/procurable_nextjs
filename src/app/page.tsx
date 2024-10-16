'use client';

// Ensures interactivity for client-side components
//import Head from 'next/head'; // Ensure correct import for adding meta tags
//import { NextSeo } from 'next-seo'; // You can still use next-seo or Next.js metadata API
import Header from '@/components/header';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

// Uncomment these if needed and make sure to add "use client" to those that need interactivity.
// import VideoSection from '@/components/video-section';
// import ListSection from '@/components/list-section';
// import FeatureSection from '@/components/feature-section';
// import CasesSection from '@/components/cases-section';
// import SocialProof from '@/components/social-proof';
// import PricingTable from '@/components/pricing-table';

export default function Home() {
  return (
    <div>
      {/*<NextSeo title="Procurable Group Pty Ltd" description="Project Management and Marine and Infrastructure Supply" />*/}
      <Navigation />
      {/* Main Header */}
      <Header />

      {/* You can wrap sections in a main tag if needed */}
      {/* <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
        <PricingTable />
      </main> */}

      {/* Footer */}
      {/*<Footer />*/}
      <Footer />
      </div>
  );
}
