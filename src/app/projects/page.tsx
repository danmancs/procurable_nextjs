'use client';

import Navigation from '@/components/navigation';
import ServicesSection from '@/components/services';
import Footer from '@/components/footer/index';
import Image from "next/legacy/image"; // For any relevant images in the projects section
import { cn } from '@/lib/utils';


const ProjectsPage = () => {
  const text = `
   Welcome to Procurable Projects — your trusted partner in delivering end-to-end project management solutions. We focus on delivering measurable results, ensuring your projects are completed on time and within budget.

At Procurable Projects, we provide a comprehensive range of project management services tailored to your specific needs. Whether you require short-term consultation or full project oversight, our adaptable approach allows us to step in at any stage and add value where it's needed most. Our team excels in defining clear project scopes, managing complexities, and keeping stakeholders aligned to achieve successful outcomes.

With over 25 years of global experience, our services are built on a foundation of technical expertise and a deep understanding of industry standards. We are committed to delivering the highest quality in every project we manage.
  `;

  return (
<div>
      {/* Header */}

      <div className={cn("bg-projects py-0 text-white")}>
      <Navigation />
      <div className={cn("max-w-7xl pt-0 mx-auto px-4 sm:px-6 lg:px-8")}>

        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-6xl mt-10 font-bold">Procurable Projects</h1>
          <p className="mt-4 text-3xl">
            Project and Contract Management services
          </p>
        </div>

{/* Flexbox for Text and Image */}
<div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10 max-w-4xl mx-auto">
            {/* Text on the Left */}
            <div className="lg:w-1/2">
              {text.trim().split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* Image on the Right */}
            <div className="lg:w-1/2">
              <Image
                src="/images/aton.jpg"
                alt="Project Management"
                width={600}
                height={810}
                className="rounded-lg"
              />
            </div>
          </div>

        {/* Services Section */}
        <ServicesSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
    </div>
  );
};

export default ProjectsPage;
