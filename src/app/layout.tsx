// app/layout.tsx
import { ReactNode } from 'react';
import { Metadata } from 'next'
import "@/styles/aggregated.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });


export const metadata: Metadata = {
  title: 'Procurable Group',
  description: 'Some shit to go in here',
}

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={nunito.variable} suppressHydrationWarning>
     
      <body className="font-nunito">
        {children} {/* Inject page content here */}
      </body>
    </html>
  );
}
