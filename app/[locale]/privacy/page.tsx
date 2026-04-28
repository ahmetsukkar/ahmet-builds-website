import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy — Ahmet Builds',
  description: 'Privacy Policy for Ahmet Builds. How we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />

      <div className="pt-28 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Privacy Policy
          </h1>
          <p className="text-sand/50 text-sm">Last updated: April 28, 2026</p>
        </div>

        <div className="prose prose-invert prose-sm sm:prose-base max-w-none space-y-10 text-sand/70 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              1. About This Policy
            </h2>
            <p>
              Ahmet Builds (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website{' '}
              <strong className="text-sand/90">ahmetbuilds.com</strong> and provides software development
              services. This Privacy Policy explains how we collect, use, store, and protect personal
              information when you interact with us — including through our website, email, and WhatsApp.
            </p>
            <p className="mt-3">
              By using our website or contacting us, you agree to the practices described in this policy.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              2. Data Controller
            </h2>
            <p>The data controller responsible for your personal data is:</p>
            <div className="mt-3 glass rounded-xl p-5 not-prose">
              <p className="text-white font-medium">Ahmet Builds</p>
              <p className="text-sand/60 text-sm mt-1">Website: ahmetbuilds.com</p>
              <p className="text-sand/60 text-sm">Email: hello@ahmet.builds.com</p>
              <p className="text-sand/60 text-sm">WhatsApp: +90 540 380 7760</p>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              3. Information We Collect
            </h2>
            <p>We collect personal information only when you voluntarily provide it:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 marker:text-teal">
              <li>
                <strong className="text-sand/90">Contact form:</strong> Your name, email address, and the
                message you send us via the contact form on this website.
              </li>
              <li>
                <strong className="text-sand/90">WhatsApp messages:</strong> Your WhatsApp display name,
                phone number, and the content of messages you send us through WhatsApp Business.
              </li>
              <li>
                <strong className="text-sand/90">Email correspondence:</strong> Any information you include
                in emails sent to us directly.
              </li>
              <li>
                <strong className="text-sand/90">Technical data:</strong> Basic usage data such as browser
                type, device type, and pages visited, collected automatically through standard web server logs.
                We do not use third-party analytics tracking.
              </li>
            </ul>
            <p className="mt-3">
              We do not collect sensitive personal data (such as financial information, health data, or
              government ID numbers).
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              4. How We Use Your Data
            </h2>
            <p>We use the personal data we collect solely to:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 marker:text-teal">
              <li>Respond to your inquiries and project requests.</li>
              <li>Provide and manage the software development services you request.</li>
              <li>Send service-related communications (project updates, invoices, deliverables).</li>
              <li>Improve our website experience based on aggregate usage patterns.</li>
            </ul>
            <p className="mt-3">
              We do <strong className="text-sand/90">not</strong> use your personal data for unsolicited
              marketing, automated profiling, or sale to third parties.
            </p>
          </section>

          {/* 5 — WhatsApp-specific, important for Meta review */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              5. WhatsApp Business Communication
            </h2>
            <p>
              We use the <strong className="text-sand/90">WhatsApp Business Platform</strong> (provided by
              Meta Platforms, Inc.) to communicate with clients and prospective clients who initiate contact
              with us.
            </p>
            <div className="mt-4 space-y-3">
              <div>
                <p className="font-medium text-sand/90">What we use WhatsApp for:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 marker:text-teal">
                  <li>Responding to inbound inquiries and questions about our services.</li>
                  <li>Sharing project updates, files, and documents with active clients.</li>
                  <li>Customer support for delivered software projects.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sand/90">What we do not do via WhatsApp:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 marker:text-teal">
                  <li>
                    We do not send unsolicited promotional messages to users who have not contacted us first.
                  </li>
                  <li>
                    We do not share WhatsApp conversation data with third parties for marketing purposes.
                  </li>
                  <li>We do not use WhatsApp data for automated decision-making or profiling.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sand/90">Opting out:</p>
                <p className="mt-1">
                  You may stop receiving WhatsApp messages from us at any time by replying{' '}
                  <strong className="text-sand/90">&ldquo;STOP&rdquo;</strong> to any message or by
                  contacting us at hello@ahmet.builds.com. We will cease all WhatsApp communication
                  immediately upon your request.
                </p>
              </div>
              <div>
                <p className="font-medium text-sand/90">Meta&apos;s role:</p>
                <p className="mt-1">
                  WhatsApp messages are transmitted through Meta&apos;s infrastructure. Meta&apos;s own
                  privacy policy governs how they process data on their platform. You can review it at{' '}
                  <span className="text-teal">whatsapp.com/legal/privacy-policy</span>.
                </p>
              </div>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              6. Legal Basis for Processing
            </h2>
            <p>We process your personal data under the following legal bases:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 marker:text-teal">
              <li>
                <strong className="text-sand/90">Consent:</strong> When you submit our contact form or
                initiate a WhatsApp conversation, you consent to us processing your data to respond.
              </li>
              <li>
                <strong className="text-sand/90">Contract:</strong> When we enter a service agreement, we
                process data as necessary to fulfill that contract.
              </li>
              <li>
                <strong className="text-sand/90">Legitimate interest:</strong> To improve our services and
                maintain basic website security.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              7. Data Sharing and Third Parties
            </h2>
            <p>We do not sell, rent, or trade your personal data. We may share data only with:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 marker:text-teal">
              <li>
                <strong className="text-sand/90">Meta Platforms (WhatsApp):</strong> As the infrastructure
                provider for our WhatsApp Business account.
              </li>
              <li>
                <strong className="text-sand/90">Email service providers:</strong> Used solely to send and
                receive emails related to your inquiry or project.
              </li>
              <li>
                <strong className="text-sand/90">Legal authorities:</strong> Only if required by applicable
                law or a valid legal process.
              </li>
            </ul>
            <p className="mt-3">
              All third-party providers are required to handle your data securely and only for the specified
              purpose.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              8. Data Retention
            </h2>
            <p>We retain personal data only as long as necessary:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 marker:text-teal">
              <li>
                <strong className="text-sand/90">Inquiries that did not lead to a project:</strong> Deleted
                within 12 months of last contact.
              </li>
              <li>
                <strong className="text-sand/90">Active client data:</strong> Retained for the duration of
                the project and up to 3 years after completion for legal and accounting purposes.
              </li>
              <li>
                <strong className="text-sand/90">WhatsApp messages:</strong> Retained within WhatsApp&apos;s
                platform per their policies; our own records of conversations are deleted within 12 months of
                project closure unless legally required otherwise.
              </li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              9. Your Rights
            </h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 marker:text-teal">
              <li>
                <strong className="text-sand/90">Access:</strong> Request a copy of the personal data we
                hold about you.
              </li>
              <li>
                <strong className="text-sand/90">Rectification:</strong> Request correction of inaccurate
                data.
              </li>
              <li>
                <strong className="text-sand/90">Erasure:</strong> Request deletion of your personal data
                (&ldquo;right to be forgotten&rdquo;).
              </li>
              <li>
                <strong className="text-sand/90">Restriction:</strong> Request that we limit how we use your
                data.
              </li>
              <li>
                <strong className="text-sand/90">Portability:</strong> Request your data in a
                machine-readable format.
              </li>
              <li>
                <strong className="text-sand/90">Objection:</strong> Object to processing based on
                legitimate interest.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{' '}
              <strong className="text-sand/90">hello@ahmet.builds.com</strong>. We will respond within 30
              days.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              10. Data Security
            </h2>
            <p>
              We implement appropriate technical measures to protect your personal data, including secure
              HTTPS connections, access controls, and using established platforms (Gmail, WhatsApp Business)
              with their own security frameworks. No method of transmission over the internet is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              11. Cookies
            </h2>
            <p>
              This website does not use tracking cookies or third-party analytics scripts. Standard browser
              session behavior (such as caching static assets) may occur as part of normal web operation but
              does not involve storing personally identifiable information.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              12. International Data Transfers
            </h2>
            <p>
              Our services are offered globally. When you contact us from the European Economic Area, Turkey,
              or other regions with data protection laws, your data may be processed in countries with
              different data protection standards. By contacting us, you acknowledge this. We take steps to
              ensure your data remains protected in accordance with this policy regardless of where it is
              processed.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              13. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the
              top of this page reflects the most recent revision. Continued use of our services after changes
              are posted constitutes acceptance of the updated policy. We encourage you to review this page
              periodically.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              14. Contact Us
            </h2>
            <p>
              For any questions, concerns, or data rights requests related to this Privacy Policy, please
              contact:
            </p>
            <div className="mt-4 glass rounded-xl p-5 not-prose">
              <p className="text-white font-medium">Ahmet Builds — Privacy Enquiries</p>
              <p className="text-sand/60 text-sm mt-2">Email: hello@ahmet.builds.com</p>
              <p className="text-sand/60 text-sm">
                WhatsApp:{' '}
                <a
                  href="https://wa.me/905403807760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:underline"
                >
                  +90 540 380 7760
                </a>
              </p>
              <p className="text-sand/60 text-sm">Website: ahmetbuilds.com</p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
