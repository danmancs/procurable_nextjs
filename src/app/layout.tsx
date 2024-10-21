// app/layout.tsx
import { ReactNode } from 'react';
import { Metadata } from 'next'
import "@/styles/aggregated.css";

import ThemeProvider from '@/components/providers/themeprovider';
import { fonts } from '@/styles/fonts';
import { cn } from '@/lib/utils';

//const vortice = Vortice({
//  subsets: ['latin'], // Adjust based on availability
//  weight: ['700'], // Bold for titles
//  variable: '--font-vortice',
//});
export const metadata: Metadata = {
  metadataBase: new URL('https://www.procurable.group'),
  title: {
    default: 'Procurable Group',
    template: '%s | Procurable Group',
  },
  description: 'Procurable Group delivers expert project management services and supplies high-quality engineered products for the marine and infrastructure industries. With two dedicated divisions, we provide tailored solutions to meet industry needs, ensuring quality, efficiency, and over 25 years of trusted experience.',
  
  generator: 'Next.js',
  applicationName: 'Procurable Group',
  referrer: 'origin-when-cross-origin',
  
  keywords: [
    'project management', 
    'engineered products', 
    'marine industry', 
    'infrastructure industry', 
    'marine solutions', 
    'contract management', 
    'supplier quality management',
    'strategic sourcing', 
    'expediting', 
    'asset management'
  ],

  authors: [
    { name: 'Dan Manchester', url: 'https://www.procurable.group' },
  ],

  creator: 'Procurable Group',
  publisher: 'Procurable Group',

  alternates: {
    canonical: 'https://www.procurable.group',
    languages: {
      'en-US': '/',
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: 'Procurable Group - Project Management and Engineered Products for Marine & Infrastructure',
    description: 'Expert project management services and high-quality engineered products for the marine and infrastructure industries.',
    url: 'https://www.procurable.group',
    siteName: 'Procurable Group',
    images: [
      { url: '/images/logo.png', width: 512, height: 512, alt: 'Procurable Group Logo' },
    ],
    locale: 'en_US',
    type: 'website',  
    },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.ico',
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nocache: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },


};


interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={cn(fonts,"dark")} suppressHydrationWarning>
      <body className="font-nunito-sans bg-background-projects text-foreground">
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}           
        </ThemeProvider>
      </body>
    </html>
  );
}
