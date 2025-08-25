'use client';

import Navigation from '@/components/navigation';
import ServicesSection from '@/components/services';
import Footer from '@/components/footer/index';
import Image from "next/legacy/image"; // For any relevant images in the projects section
import { cn } from '@/lib/utils';


const ProjectsPage = () => {
  const text = `
Procurable Projects delivers project and contract management with a clear focus on outcomes. We manage complexity without losing sight of time, cost, and quality — ensuring projects are delivered with certainty.

Our experience includes engagements with Queensland Government, large multinationals, aviation and airport operators, and major capital works programs. This breadth of work gives us a strong understanding of governance requirements, the ability to coordinate diverse stakeholders, and the capability to keep delivery moving in complex environments.

We provide scalable support, from targeted advice through to full lifecycle management. Whether defining scope, managing procurement, or steering delivery, our approach is practical, transparent, and underpinned by technical expertise.

With more than 25 years of global experience, we bring the discipline of engineering, the rigour of strong governance, and the flexibility of a consultancy that adapts to your needs. Every engagement is driven by the same principle — to deliver lasting value for our clients.
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
