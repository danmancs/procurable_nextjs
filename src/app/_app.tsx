import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
