import Image from 'next/image'; // Importing Next.js optimized image component
import Arrow from '@/constants/svg/arrow.svg'; // Adjust path if necessary

const articles = [
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
];

const CasesSection = () => (
  <section
    style={{
      background: `linear-gradient(to right, #00173B, #D8D9E3)`,
    }}
    className={tw(`w-full min-h-screen py-16`)}
  >
    <div className={tw(`max-w-7xl mx-auto py-16 px-6 lg:px-8`)}>
      <h1 className={tw(`text-white text-4xl lg:text-6xl font-bold text-center`)}>Our Products</h1>
      <p className={tw(`text-white text-center text-xl mt-4`)}>Explore our range of marine solutions</p>
      <div className={tw(`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12`)}>
        {articles.map((article) => (
          <a
            key={article.title} // <- Use a unique value like 'title' if it's unique
            href={article.document}
            className={tw(
              `block bg-white rounded-lg shadow-md overflow-hidden
      hover:scale-105 transition transform duration-300 ease-in-out`,
            )}
          >
            {/* Replaced img with Next.js Image for optimization */}
            <div className={tw(`w-full h-48 relative`)}>
              <Image
                src={article.smallImage}
                alt={article.title}
                layout="fill" // Ensures the image fills its container
                objectFit="cover"
              />
            </div>
            <div className={tw(`p-4`)}>
              <p className={tw(`text-xl font-semibold text-gray-800`)}>{article.title}</p>
            </div>
          </a>
        ))}
      </div>
      <div className={tw(`flex justify-center mt-10`)}>
        <span className={tw(`text-xl text-white cursor-pointer hover:underline flex items-center`)}>
          See all case studies
          <Arrow className={tw(`h-6 w-6 fill-current ml-2`)} />
        </span>
      </div>
    </div>
  </section>
);

export default CasesSection;
