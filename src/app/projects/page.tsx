'use client';

import Navigation from '@/components/navigation';
import ServicesSection from '@/components/services';
import Footer from '@/components/footer';
import Image from 'next/image'; // For any relevant images in the projects section
import { cn } from '@/lib/utils';

const ProjectsPage = () => {
  const text = `
    Welcome to Procurable Projects, your dedicated partner for comprehensive project management services.
    We bring deep industry expertise and a commitment to delivering projects with precision — on time and within budget.

    Procurable Projects offers a full suite of project management services with engagement options that cater to a wide range of needs.
    From short-term consultancy to full-scale project oversight, our flexible approach allows us to support your project at any level.
    We excel at defining clear scopes, managing complex projects, and engaging stakeholders to ensure successful outcomes.

    Backed by over 25 years of global industry experience, our project management services are underpinned by technical competency,
    industry knowledge, and a focus on achieving the highest standards in every project we manage.
  `;

  return (
    <div className={cn("bg-projects py-0 text-white")}>
      {/* Header */}
      <Navigation />

      <div className={cn("max-w-7xl pt-10 mx-auto px-4 sm:px-6 lg:px-8")}>
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-8xl font-bold">Procurable Projects</h1>
          <p className="mt-4 text-4x1">
            Project and Contract Management services
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-10 space-y-6">
          {text.trim().split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        {/* Example of image if needed */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/aton.jpg"
            alt="Project Management"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Services Section */}
        <ServicesSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;
