import Image from "next/legacy/image"; // Importing Next.js optimized image component
import Link from 'next/link';
import Arrow from '@/constants/svg/arrow.svg'; // Adjust path if necessary
import { cn } from '@/lib/utils';

const articles = [
  {
    title: `Buoys`,
    document: `portfolio/Buoys.pdf`,
    smallImage: `/portfolio/buoys.png`,
  },
  {
    title: `Chains`,
    document: `portfolio/Procurable_Chain_Catalogue.pdf`,
    smallImage: `/portfolio/chains.png`,
  },
  {
    title: `AIS AtoN`,
    document: `portfolio/SRT_Digital_AtoN_Presentation.pdf`,
    smallImage: `/portfolio/AIS.png`,
  },
  {
    title: `Port Fenders`,
    document: `portfolio/Marine-Fenders.pdf`,
    smallImage: `/portfolio/fenders.png`,
  },
  {
    title: `Dock Accessories`,
    document: `portfolio/Dock-accessories.pdf`,
    smallImage: `/portfolio/dock-accessories.png`,
  },
  {
    title: `Cone Fenders`,
    document: `portfolio/Cone-Fenders.pdf`,
    smallImage: `/portfolio/cone-fenders.png`,
  },
  {
    title: `Floating Fenders`,
    document: `portfolio/Floating-Fenders.pdf`,
    smallImage: `/portfolio/floating.png`,
  },
  {
    title: `Tug Fenders`,
    document: `portfolio/Boat-Fenders.pdf`,
    smallImage: `/portfolio/boat-fenders.png`,
  },
  {
    title: `Offshore`,
    document: `portfolio/Offshore-Products.pdf`,
    smallImage: `/portfolio/offshore.png`,
  },

];

const CasesSection = () => (
  <section
//    style={{
//      background: `linear-gradient(to right, #00173B, #D8D9E3)`,
//    }}
    className={cn(`w-full min-h-screen py-16`)}
  >
    <div className={cn(`max-w-7xl mx-auto py-16 px-6 lg:px-8`)}>
      <h1 className={cn(`text-white text-4xl lg:text-6xl font-bold text-center`)}>Our Products</h1>
      <p className={cn(`text-white text-center text-xl mt-4`)}>Explore our range of marine solutions</p>
      <div className={cn(`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12`)}>
        {articles.map((article) => (
          <a
            key={article.title} // <- Use a unique value like 'title' if it's unique
            href={article.document}
            className={cn(
              `block rounded-lg shadow-md overflow-hidden
      hover:scale-105 transition transform duration-300 ease-in-out bg-black bg-opacity-30`,
            )}
          >
            {/* Replaced img with Next.js Image for optimization */}
            <div className={cn(`w-full h-48 relative`)}>
              <Image
                src={article.smallImage}
                alt={article.title}
                layout="fill" // Ensures the image fills its container
                objectFit="cover"
              />
            </div>
            <div className={cn(`p-4`)}>
              <p className={cn(`text-xl font-semibold text-white`)}>{article.title}</p>
            </div>
          </a>
        ))}
      </div>
      <div className={cn(`flex justify-center mt-10`)}>
      <Link href="/contact">
        <span className={cn(`text-xl text-white cursor-pointer hover:underline flex items-center`)}>
          Contact us for anything else
          <Arrow className={cn(`h-6 w-6 fill-current ml-2`)} />
        </span>
        </Link>
      </div>
    </div>
  </section>
);

export default CasesSection;
