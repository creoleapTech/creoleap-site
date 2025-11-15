import Footer from '@/components/Footer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/PrivacyPolicy')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-700 ">
        
        {/* Header */}
        <div className="mb-8 border-b pb-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Privacy Policy</h1>
          <p className="mt-2 text-gray-600">
            <strong>Effective Date:</strong> 03-05-2025
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-10 bg-blue-50 p-4 rounded-lg">
          <p className="mb-4">
            <strong className="text-blue-700">Creoleap Technologies</strong> ("we," "our," or "us") 
            is committed to protecting your privacy. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website{" "}
            <a
              href="https://www.creoleap.com/"
              className="text-blue-600 hover:underline"
            >
              https://www.creoleap.com/
            </a>{" "}
            (the "Website").
          </p>
          <p>
            By accessing or using our Website, you consent to the terms outlined in this Privacy Policy.
            If you do not agree, please refrain from using our Website.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">

          {/* Section 1 */}
          <div className="section-card">
            <h2 className="section-title">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>

            <div className="mt-4 pl-4 border-l-4 border-blue-200">
              <h3 className="subsection-title">1.1 Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Name, email address, phone number, and other contact details</li>
                <li>Any information you voluntarily provide when filling out forms</li>
              </ul>
            </div>

            <div className="mt-6 pl-4 border-l-4 border-blue-200">
              <h3 className="subsection-title">1.2 Non-Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Browser type, device type, and IP address</li>
                <li>Cookies and tracking technologies</li>
                <li>Log data (pages visited, time spent, etc.)</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="section-card">
            <h2 className="section-title">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Provide, operate, and improve our Website and services</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Send promotional content (if opted in)</li>
              <li>Analyze trends and user behavior</li>
              <li>Comply with legal requirements</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="section-card">
            <h2 className="section-title">3. Sharing of Information</h2>
            <p>We do not sell or rent your personal information. However, we may share it in these cases:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Service Providers:</strong> Third-party vendors assisting with our Website</li>
              <li><strong>Legal Compliance:</strong> When required by law</li>
              <li><strong>Business Transfers:</strong> During mergers or asset sales</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="section-card">
            <h2 className="section-title">4. Cookies and Tracking Technologies</h2>
            <p>We use cookies to enhance your experience. You can disable them in browser settings, but some features may not work properly.</p>
          </div>

          {/* Section 5 */}
          <div className="section-card">
            <h2 className="section-title">5. Data Security</h2>
            <p>We implement security measures, but no internet transmission is 100% secure.</p>
          </div>

          {/* Section 6 */}
          <div className="section-card">
            <h2 className="section-title">6. Your Rights and Choices</h2>
            <p>You may have rights including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Access, update, or delete your information</li>
              <li>Opt out of marketing communications</li>
              <li>Request data portability</li>
            </ul>
            <p className="mt-4">
              Contact us at{" "}
              <a href="mailto:info@creoleap.com" className="text-blue-600 hover:underline">
                info@creoleap.com
              </a>{" "}
              to exercise these rights.
            </p>
          </div>

          {/* Section 7 */}
          <div className="section-card">
            <h2 className="section-title">7. Third-Party Links</h2>
            <p>Our Website may link to external sites whose privacy practices we don't control.</p>
          </div>

          {/* Section 8 */}
          <div className="section-card">
            <h2 className="section-title">8. Changes to This Policy</h2>
            <p>We may update this policy periodically. Changes will be posted here with a new effective date.</p>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Contact Us</h2>
            <div className="space-y-2">
              <p><strong>Creoleap Technologies Private Limited</strong></p>
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
