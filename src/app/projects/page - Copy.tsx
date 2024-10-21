'use client';

// Ensures interactivity for client-side components



import ServicesSection from '@/components/services';
import Footer from '@/components/footer/indexNF';
import Head from 'next/head'; // Ensure correct import for adding meta tags


      {title="Procurable Marine & Infrastructure" 
      description="Marine and Infrastructure Supply"}

      {/* Header */}
      <Header />

      {/* Main content */}
{
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
      backgroundStyle = "";
      imageSrc = `/images/aton.jpg`; // Replace this with the correct path
      flexLayout = `lg:flex-row`; // Image on left for projects
      imageAlignmentClass = `lg:self-start lg:mt-60`; // Align image with text, not title
}
        <ServicesSection />
      {/* Footer */}
      <Footer />

