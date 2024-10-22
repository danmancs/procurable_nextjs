'use client';

import { cn } from '@/lib/utils';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer/index';

export default function WHSMSPage() {
  return (
    <div>
      <Navigation />

      <div className={cn("flex min-h-screen")}>
        {/* Sidebar */}
        <aside className={cn("w-64 p-6 fixed h-full overflow-y-auto")}>
          <h2 className={cn("text-xl font-bold mb-4")}>Contents</h2>
          <ul className="list-none space-y-3">
            <li><a href="#section1" className="text-blue-600 hover:underline">1. WHS Policy Statement</a></li>
            <li><a href="#section2" className="text-blue-600 hover:underline">2. Scope</a></li>
            <li><a href="#section3" className="text-blue-600 hover:underline">3. WHS Responsibilities</a></li>
            <li><a href="#section4" className="text-blue-600 hover:underline">4. Contractor WHSMS Review Process</a></li>
            <li><a href="#section5" className="text-blue-600 hover:underline">5. Remote Work Safety Protocols</a></li>
            <li><a href="#section6" className="text-blue-600 hover:underline">6. Travel Safety Procedures</a></li>
            <li><a href="#section7" className="text-blue-600 hover:underline">7. Risk Management and Incident Reporting</a></li>
            <li><a href="#section8" className="text-blue-600 hover:underline">8. Training and Competency</a></li>
            <li><a href="#section9" className="text-blue-600 hover:underline">9. Continuous Improvement</a></li>
            <li><a href="#section10" className="text-blue-600 hover:underline">10. Documentation and Templates</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className={cn("mx-auto p-10 flex-1 max-w-screen-md")}>
          {/* Section 1 */}
          <section id="section1" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">1. WHS Policy Statement</h1>
            <p className="mt-4 text-lg">
              Procurable Projects is committed to ensuring the health and safety of its employees, contractors, and all stakeholders.
            </p>
            <p className="mt-4 text-lg">
              Our WHSMS is designed to comply with the Work Health and Safety Act 2011 and associated regulations. We will achieve this through risk management, compliance with contractor WHS systems, and ensuring a safe environment for both remote and travel-related work.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section2" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">2. Scope</h1>
            <p className="mt-4 text-lg">
              This WHSMS applies to all employees of Procurable Projects, including those working remotely, travelling to and from client sites, and managing contractors. It also covers the processes for ensuring contractors comply with their own WHS obligations.
            </p>
          </section>

          {/* Section 3 */}
          <section id="section3" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">3. WHS Responsibilities</h1>
            <h3 className="text-xl font-semibold mt-4">Project Managers</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Ensure contractors have valid and compliant WHS systems in place before work begins.</li>
              <li>Conduct and document travel risk assessments.</li>
              <li>Maintain communication with remote workers to ensure they adhere to ergonomic and safety standards.</li>
              <li>Review incident reports and manage continuous improvement of the WHSMS.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Remote Workers</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Set up ergonomic workspaces and maintain safe working conditions as per the provided guidelines.</li>
              <li>Report any incidents or hazards during remote work or travel promptly.</li>
              <li>Participate in mental health check-ins and training.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">All Employees</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Follow all WHS procedures, including travel and remote work safety.</li>
              <li>Participate in training and report any potential hazards.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="section4" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">4. Contractor WHSMS Review Process</h1>
            <h3 className="text-xl font-semibold mt-4">1. Contractor WHSMS Checklist</h3>
            <p className="mt-2">Before engaging with any contractor, a WHSMS review will be conducted using the following checklist:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Does the contractor have a WHSMS in place that complies with the WHS Act 2011?</li>
              <li>Does the contractor have procedures for managing high-risk activities (e.g., electrical work, working at heights)?</li>
              <li>Are all contractors trained in WHS procedures relevant to the project?</li>
              <li>Have all necessary site-specific inductions been completed?</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">2. Review Frequency</h3>
            <p className="mt-2">
              Contractor WHSMS reviews will be completed before the project starts and will be revisited annually for long-term projects.
            </p>
          </section>

          {/* Section 5 */}
          <section id="section5" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">5. Remote Work Safety Protocols</h1>
            <h3 className="text-xl font-semibold mt-4">Ergonomic Workspace Setup</h3>
            <p className="mt-2">
              Each remote worker must perform a self-assessment of their workspace, ensuring:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Desk and chair height are adjusted for good posture.</li>
              <li>Monitor is at eye level to prevent neck strain.</li>
              <li>Adequate lighting and a comfortable, quiet environment are available.</li>
            </ul>
            <p className="mt-2">
              A digital checklist will be completed quarterly by all remote workers, ensuring ongoing compliance.
            </p>
            <h3 className="text-xl font-semibold mt-4">Mental Health Support</h3>
            <p className="mt-2">
              Procurable Projects will provide the following resources for remote employees:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Regular mental health check-ins by management.</li>
              <li>Access to counselling services for stress or isolation issues.</li>
              <li>Mandatory breaks to prevent burnout.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="section6" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">6. Travel Safety Procedures</h1>
            <h3 className="text-xl font-semibold mt-4">Pre-Travel Risk Assessment</h3>
            <p className="mt-2">
              Before any site visit, the following travel safety assessment must be completed by the project manager:
            </p>

            <h4 className="text-lg font-semibold mt-4">1. Vehicle Safety Checklist</h4>
            <ul className="list-disc list-inside mt-2">
              <li>Vehicle maintenance status (brakes, tyres, lights).</li>
              <li>Confirm that the vehicle has passed a recent safety inspection.</li>
              <li>Adequate emergency supplies (first-aid kit, road safety kit).</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">2. Fatigue Management</h4>
            <ul className="list-disc list-inside mt-2">
              <li>Ensure employees plan rest stops every two hours for long drives.</li>
              <li>For extended travel, accommodation and appropriate rest periods will be arranged.</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">3. Emergency Procedures</h4>
            <ul className="list-disc list-inside mt-2">
              <li>Confirm mobile phone coverage or other communication devices for remote site locations.</li>
              <li>Prepare a list of emergency contacts for both the site and the area of travel.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="section7" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">7. Risk Management and Incident Reporting</h1>
            <h3 className="text-xl font-semibold mt-4">Incident Reporting</h3>
            <p className="mt-2">
              All incidents, including near-misses, must be reported within 24 hours using the following template:
            </p>
            <h4 className="text-lg font-semibold mt-4">Incident Report Template</h4>
            <ul className="list-disc list-inside mt-2">
              <li>Date and time of incident</li>
              <li>Location of incident (remote/travel/contractor site)</li>
              <li>Description of what occurred</li>
              <li>Immediate actions taken</li>
              <li>Follow-up recommendations</li>
            </ul>
            <p className="mt-2">
              This report will be submitted to the project manager and logged in the WHSMS digital database for review.
            </p>
          </section>

          {/* Section 8 */}
          <section id="section8" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">8. Training and Competency</h1>
            <h3 className="text-xl font-semibold mt-4">WHS Training</h3>
            <p className="mt-2">
              All employees, including remote workers and project managers, will undergo the following training:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Risk Assessment Training: Project managers will be trained in conducting travel and contractor WHSMS assessments.</li>
              <li>Ergonomics: Remote workers will complete ergonomic training to ensure safe workspace setup.</li>
              <li>Incident Reporting: All employees will receive training on how to complete and submit incident reports.</li>
            </ul>
            <p className="mt-2">
              Training will be refreshed annually, with records maintained digitally.
            </p>
          </section>

          {/* Section 9 */}
          <section id="section9" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">9. Continuous Improvement</h1>
            <h3 className="text-xl font-semibold mt-4">Annual Review Process</h3>
            <p className="mt-2">
              The WHSMS will be reviewed annually, with feedback gathered from employees and any incident reports from the previous year. 
            </p>
            <p className="mt-2">
              Key metrics for review will include:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Number of incidents reported (remote/travel/contractor).</li>
              <li>Employee feedback on the effectiveness of the system.</li>
              <li>Any changes in WHS legislation or industry standards.</li>
            </ul>
            <p className="mt-2">
              Changes will be made as necessary to keep the system up to date and functional.
            </p>
          </section>

          {/* Section 10 */}
          <section id="section10" className="mb-10">
            <h1 className="text-3xl font-bold border-b pb-2">10. Documentation and Templates</h1>
            <p className="mt-4 text-lg">
              The following documents will be stored within the WHSMS digital platform:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li><a href="https://www.procurable.group/forms/whs/Ergonomic_Workspace_Checklist.docx" className="text-blue-600 hover:underline">Ergonomic Workspace Checklist</a></li>
              <li><a href="https://www.procurable.group/forms/whs/Travel_Safety_Assessment_Form.docx" className="text-blue-600 hover:underline">Travel Safety Assessment Form</a></li>
              <li><a href="https://www.procurable.group/forms/whs/Contractor_WHSMS_Review.docx" className="text-blue-600 hover:underline">Contractor WHSMS Review Checklist</a></li>
              <li><a href="https://www.procurable.group/forms/whs/Risk_Control_Action_Plan.docx" className="text-blue-600 hover:underline">Risk Control Action Plan</a></li>
              <li><a href="https://www.procurable.group/forms/whs/Annual_Review_Template.docx" className="text-blue-600 hover:underline">Annual Review Template</a></li>
            </ul>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
