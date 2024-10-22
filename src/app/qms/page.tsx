'use client';

import { cn } from '@/lib/utils';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer/index';

export default function QMSPage() {
  return (
    <div>
      <Navigation />

      <div className={cn("flex min-h-screen")}>
        {/* Sidebar */}
        <aside className={cn("w-64 p-6 fixed h-full overflow-y-auto")}>
          <h2 className={cn("text-xl font-bold mb-4")}>Contents</h2>
          <ul className="list-none space-y-3">
            <li><a href="#section1" className="text-blue-600 hover:underline">1. Quality Policy Statement</a></li>
            <li><a href="#section2" className="text-blue-600 hover:underline">2. Scope</a></li>
            <li><a href="#section3" className="text-blue-600 hover:underline">3. Roles and Responsibilities</a></li>
            <li><a href="#section4" className="text-blue-600 hover:underline">4. Quality Planning and Control</a></li>
            <li><a href="#section5" className="text-blue-600 hover:underline">5. Project Execution Quality Assurance</a></li>
            <li><a href="#section6" className="text-blue-600 hover:underline">6. Continuous Improvement</a></li>
            <li><a href="#section7" className="text-blue-600 hover:underline">7. Documentation and Templates</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className={cn("mx-auto p-10 flex-1 max-w-screen-md")}>
          {/* Section 1 */}
          <section id="section1" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">1. Quality Policy Statement</h1>
            <p className="mt-4 text-lg">
              Procurable Projects is committed to delivering high-quality services that meet or exceed client expectations. Our QMS is designed to ensure project consistency, efficiency, and quality through robust management practices, compliance with industry standards, and continuous improvement across all projects.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section2" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">2. Scope</h1>
            <p className="mt-4 text-lg">
              This QMS applies to all aspects of project management provided by Procurable Projects, including planning, execution, contractor oversight, and communication with clients. It covers remote project management operations and travel to on-site locations, with a focus on ensuring quality in the services we provide.
            </p>
          </section>

          {/* Section 3 */}
          <section id="section3" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">3. Roles and Responsibilities</h1>
            <h3 className="text-xl font-semibold mt-4">Project Managers</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Ensure that each project adheres to agreed-upon quality standards and client specifications.</li>
              <li>Conduct regular quality reviews and performance audits throughout the project lifecycle.</li>
              <li>Maintain open communication with clients to ensure expectations are met and feedback is integrated into the project’s quality plan.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Contractors</h3>
            <ul className="list-disc list-inside mt-2">
              <li>All contractors are required to meet the quality standards specified in the contract.</li>
              <li>Contractors must submit regular quality reports and adhere to performance guidelines set by Procurable Projects.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Employees</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Each employee is responsible for following the QMS guidelines, ensuring that their contributions align with project objectives and quality requirements.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="section4" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">4. Quality Planning and Control</h1>
            <h3 className="text-xl font-semibold mt-4">Quality Planning</h3>
            <p className="mt-2">
              At the beginning of each project, a quality plan will be developed that includes specific quality objectives, performance indicators, and methods for monitoring and controlling quality.
            </p>
            <h3 className="text-xl font-semibold mt-4">Contractor Quality Management</h3>
            <p className="mt-2">
              A contractor’s ability to meet quality standards will be evaluated during the contractor selection process. Contractors must submit their Quality Management Systems (QMS) for review prior to engagement. Regular audits will be conducted to ensure compliance throughout the project.
            </p>
          </section>

          {/* Section 5 */}
          <section id="section5" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">5. Project Execution Quality Assurance</h1>
            <p className="mt-4 text-lg">
              During project execution, the following quality control measures will be implemented:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li><strong>Milestone Reviews</strong>: At key project milestones, the project manager will conduct quality checks to ensure objectives are being met.</li>
              <li><strong>Audit Trails</strong>: A full record of project decisions, actions, and quality checks will be maintained to ensure transparency and accountability.</li>
              <li><strong>Client Feedback</strong>: Regular check-ins with the client to incorporate feedback and make adjustments as needed.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="section6" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">6. Continuous Improvement</h1>
            <h3 className="text-xl font-semibold mt-4">Review and Audit Process</h3>
            <ul className="list-disc list-inside mt-2">
              <li>A formal review process will be conducted at the end of each project to evaluate the quality of work delivered.</li>
              <li>A continuous improvement plan will be implemented, capturing lessons learned and integrating them into future projects.</li>
              <li>Quality audits will be conducted annually, with findings used to refine the QMS and improve overall project outcomes.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="section7" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">7. Documentation and Templates</h1>
            <p className="mt-4 text-lg">
              All project-related quality documentation will be maintained in a central repository, including:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li><strong>Quality Plans</strong>: Developed for each project, outlining the specific quality objectives and performance indicators.</li>
              <li><strong>Audit Reports</strong>: Documenting findings from milestone reviews and quality audits.</li>
              <li><strong>Client Feedback Forms</strong>: To capture and assess client satisfaction and areas for improvement.</li>
            </ul>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
