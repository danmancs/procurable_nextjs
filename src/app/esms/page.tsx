'use client';

import { cn } from '@/lib/utils';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer/index';

export default function ESMSPage() {
  return (
    <div>
      <Navigation />

      <div className={cn("flex min-h-screen")}>
        {/* Sidebar */}
        <aside className={cn("w-64 p-6 fixed h-full overflow-y-auto")}>
          <h2 className={cn("text-xl font-bold mb-4")}>Contents</h2>
          <ul className="list-none space-y-3">
            <li><a href="#section1" className="text-blue-600 hover:underline">1. Environmental and Sustainability Policy Statement</a></li>
            <li><a href="#section2" className="text-blue-600 hover:underline">2. Scope</a></li>
            <li><a href="#section3" className="text-blue-600 hover:underline">3. Roles and Responsibilities</a></li>
            <li><a href="#section4" className="text-blue-600 hover:underline">4. Environmental Planning and Control</a></li>
            <li><a href="#section5" className="text-blue-600 hover:underline">5. Project Execution Environmental Assurance</a></li>
            <li><a href="#section6" className="text-blue-600 hover:underline">6. Continuous Improvement</a></li>
            <li><a href="#section7" className="text-blue-600 hover:underline">7. Sustainability Training and Competency</a></li>
            <li><a href="#section8" className="text-blue-600 hover:underline">8. Documentation and Templates</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className={cn("mx-auto p-10 flex-1 max-w-screen-md")}>
          {/* Section 1 */}
          <section id="section1" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">1. Environmental and Sustainability Policy Statement</h1>
            <p className="mt-4 text-lg">
              Procurable Projects is committed to minimising the environmental impact of our operations and promoting sustainability in all projects. Our ESMS is designed to ensure compliance with environmental regulations, reduce our carbon footprint, and promote sustainable practices across all areas of project management. This commitment applies to our internal operations, remote project management activities, and the selection of contractors.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section2" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">2. Scope</h1>
            <p className="mt-4 text-lg">
              This ESMS applies to all operations of Procurable Projects, including remote and on-site activities, travel, and contractor management. It ensures that our environmental and sustainability standards are met consistently across all projects. This system is aligned with national and international environmental regulations and sustainability goals, applying to employees, contractors, and suppliers.
            </p>
          </section>

          {/* Section 3 */}
          <section id="section3" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">3. Roles and Responsibilities</h1>
            <h3 className="text-xl font-semibold mt-4">Project Managers</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Ensure each project adheres to environmental and sustainability regulations.</li>
              <li>Conduct environmental impact assessments for each project.</li>
              <li>Monitor and report on sustainability performance and progress towards environmental objectives.</li>
              <li>Work with clients and contractors to promote and implement sustainable practices.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Contractors</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Must comply with all environmental regulations and follow the sustainability guidelines set by Procurable Projects.</li>
              <li>Submit sustainability plans and regular reports on their environmental performance during the project lifecycle.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Employees</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Responsible for adhering to sustainability principles in their daily work.</li>
              <li>Participate in sustainability training and follow internal guidelines on resource efficiency, waste management, and energy conservation.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="section4" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">4. Environmental Planning and Control</h1>
            <h3 className="text-xl font-semibold mt-4">Environmental Impact Assessment</h3>
            <p className="mt-2">
              An environmental impact assessment will be carried out at the planning stage of each project. This assessment will identify potential environmental risks, and mitigation strategies will be developed to minimise the impact.
            </p>
            <h3 className="text-xl font-semibold mt-4">Contractor Sustainability Review</h3>
            <p className="mt-2">
              Contractors' environmental and sustainability credentials will be reviewed during the selection process. Contractors must demonstrate their commitment to reducing their environmental impact, and regular audits will be conducted to ensure compliance with environmental goals.
            </p>
          </section>

          {/* Section 5 */}
          <section id="section5" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">5. Project Execution Environmental Assurance</h1>
            <p className="mt-4 text-lg">
              During the project execution phase, environmental control measures will be implemented, including:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li><strong>Milestone Environmental Reviews</strong>: Environmental performance will be reviewed at key project milestones.</li>
              <li><strong>Sustainability Audit Trails</strong>: Detailed records of sustainability initiatives, decisions, and actions will be maintained.</li>
              <li><strong>Client Collaboration</strong>: Regular communication with clients to incorporate feedback and promote sustainable practices.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="section6" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">6. Continuous Improvement</h1>
            <h3 className="text-xl font-semibold mt-4">Review and Audit Process</h3>
            <ul className="list-disc list-inside mt-2">
              <li>A formal review process will be conducted at the end of each project to assess environmental performance.</li>
              <li>A continuous improvement plan will be developed based on lessons learned from previous projects.</li>
              <li>Annual environmental audits will be conducted, with findings used to update and refine the ESMS.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="section7" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">7. Sustainability Training and Competency</h1>
            <p className="mt-4 text-lg">
              All employees, including project managers and contractors, will undergo training on environmental impact reduction and sustainability practices, with refresher courses held annually.
            </p>
          </section>

          {/* Section 8 */}
          <section id="section8" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">8. Documentation and Templates</h1>
            <p className="mt-4 text-lg">
              All relevant environmental and sustainability documentation will be maintained in a central repository, including:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li><strong>Environmental Impact Assessments</strong>: For each project, outlining potential risks and mitigation strategies.</li>
              <li><strong>Sustainability Reports</strong>: Regular reports tracking environmental performance and progress towards sustainability objectives.</li>
              <li><strong>Audit Reports</strong>: Documenting findings from environmental and sustainability audits.</li>
              <li><strong>Client Feedback Forms</strong>: To capture input on environmental practices and sustainability efforts.</li>
            </ul>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
