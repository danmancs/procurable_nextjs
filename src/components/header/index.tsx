import { useState, useEffect } from 'react';
import { tw, css } from 'twind/css';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Dynamically load the Button component only on the client
const Button = dynamic(() => import(`@/components/button`), { ssr: false });

const headerStyle = css`
  min-height: calc(75vh - 6rem);
`;

const paragraphStyle = css`
  text-align: justify;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const projectsGradientStyle = css`
  background: linear-gradient(to right, #7f3300 0%, #000000 50%);
  color: white;
`;

const marineGradientStyle = css`
  background: linear-gradient(to right, #00173b 0%, #d8d9e3 100%);
  color: white;
`;

const defaultStyle = css`
  background-color: #ffffff;
`;

const Header = () => {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  // Default values for SSR
  let title = `Welcome to Procurable Group`;
  let subtitle = `Where would you like to go?`;
  let text = ``;
  let backgroundStyle = defaultStyle;
  let imageSrc = ``;
  let flexLayout = ``; // No flex layout by default
  let imageAlignmentClass = ``; // Empty by default, added later to control alignment

  // Apply route-specific logic after hydration
  if (hydrated) {
    if (router.pathname === `/marine`) {
      title = `Procurable Marine & Infrastructure`;
      subtitle = `Explore our marine solutions for ports, offshore, and more.`;
      text = `
        At Procurable Marine & Infrastructure, we supply high-quality equipment for the maritime, offshore,
        and infrastructure sectors. We partner with top global manufacturers to ensure our products
        meet the highest standards.

        Our product range includes port and offshore equipment, as well as marina essentials.
        We focus on delivering reliable and efficient solutions tailored to each project's needs.

        Beyond just supplying products, we bring expertise in quality assurance and project management,
        ensuring comprehensive support for our clients. We provide dependable and robust solutions
        for marine and infrastructure projects.
      `;
      backgroundStyle = marineGradientStyle;
      imageSrc = `/images/marine.jpg`; // Replace this with the correct path
      flexLayout = `lg:flex-row-reverse`; // Image on right for marine
      imageAlignmentClass = `lg:self-start lg:mt-10`; // Align image with text, not title
    } else if (router.pathname === `/projects`) {
      title = `Procurable Projects`;
      subtitle = `Project and Contract Management services`;
      text = `
        Welcome to Procurable Projects, your dedicated partner for comprehensive project management services.
        We bring deep industry expertise and a commitment to delivering
        projects with precision — on time and within budget.

        Procurable Projects offers a full suite of project management services
        with engagement options that cater to a wide range of needs.
        From short-term consultancy to full-scale project oversight,
        our flexible approach allows us to support your project at any level.
        We excel at defining clear scopes, managing complex projects,
        and engaging stakeholders to ensure successful outcomes.

        At Procurable Projects, we prioritise building strong partnerships with our clients.
        Our approach emphasises clear communication, robust contract management,
        and a focus on safety and compliance.
        We are committed to providing project management solutions that align
        with your strategic goals and drive successful project delivery.

        Backed by over 25 years of global industry experience, our project management
        services are underpinned by technical competency,
        industry knowledge, and a focus on achieving the highest standards in every project we manage.
      `;
      backgroundStyle = projectsGradientStyle;
      imageSrc = `/images/aton.jpg`; // Replace this with the correct path
      flexLayout = `lg:flex-row`; // Image on left for projects
      imageAlignmentClass = `lg:self-start lg:mt-60`; // Align image with text, not title
    }
  }

  return (
    <header className={tw(headerStyle, backgroundStyle)}>
      <div className={tw(`max-w-7xl mx-auto py-16 px-14 sm:px-6 lg:px-8 flex flex-col ${flexLayout} items-center`)}>
        {/* Conditionally render image */}
        {hydrated && imageSrc && (
          <div className={tw(`w-full lg:w-1/2 flex justify-center ${imageAlignmentClass} mb-10 lg:mb-0`)}>
            <Image src={imageSrc} alt="Relevant Image" width={400} height={400} className={tw(`rounded-lg`)} />
          </div>
        )}

        {/* Text content */}
        <div className={tw(`w-full lg:w-1/2 text-center lg:text-left`)}>
          <h1 className={tw(`font-sans font-bold text-3xl md:text-4xl lg:text-6xl text-center leading-snug`)}>
            {title}
          </h1>
          <p className={tw(`mt-10 text-xl lg:text-3xl text-center lg:text-centre`)}>
            {subtitle}
            <br />
            <br />
          </p>

          {text && (
            <div className={tw(paragraphStyle)}>
              {text
                .trim()
                .split(`\n\n`)
                .map((paragraph) => (
                  <p key={paragraph.substring(0, 20)}>
                    {` `}
                    {/* Use a portion of the paragraph as the key */}
                    {` `}
                    {paragraph.trim()}
                    <br />
                    <br />
                  </p>
                ))}
            </div>
          )}
        </div>
      </div>

      {/* Conditionally render buttons on the default page */}
      {hydrated && router.pathname === `/` && (
        <div
          className={tw(
            `mt-10 flex flex-col sm:flex-row justify-center items-center
            w-full mx-auto space-y-4 sm:space-y-0 sm:space-x-4`,
          )}
        >
          <Button variant="projects" href="/projects">
            Procurable Projects
          </Button>
          <Button variant="marine" href="/marine">
            Procurable Marine & Infrastructure
          </Button>
        </div>
      )}

      {/* Conditionally render the logo on the default page */}
      {hydrated && router.pathname === `/` && (
        <div className={tw(`flex justify-center w-full`)}>
          <div className={tw(`mt-4 w-full`)}>
            <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>
              Thanks for stopping by
            </p>
            <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
              <div className={tw(`m-12 mb-8`)}>
                <Image src="/images/logo.png" alt="Logo" width={240} height={240} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
