import Footer from '@/components/Footer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/TermsAndCondition')({
  component: RouteComponent,
})

function RouteComponent() {
  return   <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-700">
        
        {/* Header */}
        <div className="mb-8 border-b pb-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Terms and Conditions</h1>
          <p className="mt-2 text-gray-600">
            <strong>Effective Date:</strong> 03-05-2025
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-10 bg-blue-50 p-4 rounded-lg">
          <p className="mb-4">
            Welcome to <strong className="text-blue-700">Creoleap Technologies Pvt Ltd</strong>{" "}
            ("we," "our," or "us"). These Terms and Conditions govern your use of our website{" "}
            <a href="https://www.creoleap.com/" className="text-blue-600 hover:underline">
              https://www.creoleap.com/
            </a>{" "}
            (the "Website") and services. By accessing or using our Website, you agree to comply with
            these terms. If you do not agree, please refrain from using our services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">

          {/* Section 1 */}
          <div className="section-card">
            <h2 className="section-title">1. Use of the Website</h2>

            <div className="mt-4 pl-4 border-l-4 border-blue-200">
              <h3 className="subsection-title">1.1 Eligibility</h3>
              <p className="mt-2">
                You must be at least 18 years old to use our Website and services. By using our
                Website, you represent that you meet this requirement.
              </p>
            </div>

            <div className="mt-6 pl-4 border-l-4 border-blue-200">
              <h3 className="subsection-title">1.2 Acceptable Use</h3>
              <p className="mt-2">You agree not to engage in unlawful or prohibited activities, including:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Disrupting or harming our Website’s functionality</li>
                <li>Misrepresenting your identity or affiliation</li>
                <li>Engaging in fraud, spamming, or distributing malicious software</li>
              </ul>
            </div>

            <div className="mt-6 pl-4 border-l-4 border-blue-200">
              <h3 className="subsection-title">1.3 Account Security</h3>
              <p className="mt-2">
                If you create an account, you are responsible for maintaining the confidentiality of
                your login credentials.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="section-card">
            <h2 className="section-title">2. Intellectual Property Rights</h2>

            <div className="mt-4 pl-4 border-l-4 border-blue-200">
              <h3 className="subsection-title">2.1 Ownership</h3>
              <p className="mt-2">
                All content on our Website, including text, graphics, logos, and software, is the
                property of Creoleap Technologies Pvt Ltd and is protected by copyright and
                trademark laws.
              </p>
            </div>

            <div className="mt-6 pl-4 border-l-4 border-blue-200">
              <h3 className="subsection-title">2.2 Limited License</h3>
              <p className="mt-2">
                We grant you a limited, non-exclusive, non-transferable right to use our Website for
                personal, non-commercial purposes.
              </p>
            </div>

            <div className="mt-6 pl-4 border-l-4 border-blue-200">
              <h3 className="subsection-title">2.3 Restrictions</h3>
              <p className="mt-2">
                You may not copy, modify, distribute, or commercially exploit any content without
                our prior written permission.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="section-card">
            <h2 className="section-title">3. Services and Payments</h2>

            <div className="mt-4 pl-4 border-l-4 border-blue-200">
              <h3 className="subsection-title">3.1 Service Availability</h3>
              <p className="mt-2">
                We reserve the right to modify, suspend, or discontinue any part of our services at
                any time without prior notice.
              </p>
            </div>

            <div className="mt-6 pl-4 border-l-4 border-blue-200">
              <h3 className="subsection-title">3.2 Pricing</h3>
              <p className="mt-2">Prices for our products or services are subject to change without notice.</p>
            </div>

            <div className="mt-6 pl-4 border-l-4 border-blue-200">
              <h3 className="subsection-title">3.3 Refunds</h3>
              <p className="mt-2">
                Refunds are provided based on our refund policy, which will be outlined separately.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="section-card">
            <h2 className="section-title">4. User Content</h2>

            <div className="mt-4 pl-4 border-l-4 border-blue-200">
              <h3 className="subsection-title">4.1 Responsibility</h3>
              <p className="mt-2">
                You are solely responsible for any content you submit, including comments, feedback,
                and other materials.
              </p>
            </div>

            <div className="mt-6 pl-4 border-l-4 border-blue-200">
              <h3 className="subsection-title">4.2 License Grant</h3>
              <p className="mt-2">
                By submitting content, you grant us a worldwide, royalty-free license to use,
                reproduce, and distribute it for business purposes.
              </p>
            </div>

            <div className="mt-6 pl-4 border-l-4 border-blue-200">
              <h3 className="subsection-title">4.3 Prohibited Content</h3>
              <p className="mt-2">You agree not to post illegal, defamatory, or offensive content.</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="section-card">
            <h2 className="section-title">5. Third-Party Links</h2>
            <p>
              Our Website may contain links to third-party sites. We are not responsible for their
              content or practices. Your use of third-party websites is at your own risk.
            </p>
          </div>

          {/* Section 6 */}
          <div className="section-card">
            <h2 className="section-title">6. Limitation of Liability</h2>
            <p>
              We are not liable for any direct, indirect, incidental, or consequential damages
              arising from your use of our Website or services. We do not guarantee uninterrupted or
              error-free operation.
            </p>
          </div>

          {/* Section 7 */}
          <div className="section-card">
            <h2 className="section-title">7. Indemnification</h2>
            <p>
              You agree to indemnify and hold us harmless from any claims, liabilities, damages, or
              expenses arising from your use of our Website or violation of these Terms.
            </p>
          </div>

          {/* Section 8 */}
          <div className="section-card">
            <h2 className="section-title">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our Website at any time if
              you violate these Terms.
            </p>
          </div>

          {/* Section 9 */}
          <div className="section-card">
            <h2 className="section-title">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and interpreted in accordance with the laws of [Insert
              Jurisdiction]. Any disputes shall be resolved in the courts of [Insert Location].
            </p>
          </div>

          {/* Section 10 */}
          <div className="section-card">
            <h2 className="section-title">10. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The latest version will be posted on our
              Website with the effective date.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Contact Us</h2>
            <div className="space-y-2">
              <p><strong>Creoleap Technologies Pvt Ltd</strong></p>
              <p>
                29/8/2A, First Floor,<br />
                S.T. Hindu College Road,<br />
                Beach Road, Nagercoil - 629002.
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@creoleap.com" className="text-blue-600 hover:underline">
                  info@creoleap.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+919363208701" className="text-blue-600 hover:underline">
                  +91 93632 08701
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
}
