import { cn } from '../lib/utils';
import { Inter } from 'next/font/google';
import { Nunito_Sans } from 'next/font/google';
import { Nunito } from 'next/font/google';
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'], // Regular and Bold for body text
    variable: '--font-inter',
  });
  const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight:  'variable' , // Regular and Bold for body text
    variable: '--font-nunitosans',
  });
  const nunito = Nunito({
    subsets: ['latin'],
    weight: ['400', '700'], // Regular and Bold for body text
    variable: '--font-nunito',
  });
  //const vortice = Vortice({
  //  subsets: ['latin'], // Adjust based on availability
  //  weight: ['700'], // Bold for titles
  //  variable: '--font-vortice',
  //});
  const fonts = cn(inter.variable, nunitoSans.variable, nunito.variable);
  export {fonts}