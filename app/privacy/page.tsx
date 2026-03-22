"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main 
        className="pt-32 pb-24 px-6 min-h-screen"
        style={{ background: "var(--sky-gradient)" }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p 
              className="text-xs tracking-widest uppercase mb-3 font-bold" 
              style={{ color: "var(--accent)" }}
            >
              LEGAL
            </p>
            <h1 
              className="font-display text-4xl md:text-5xl font-bold mb-4 text-shadow" 
              style={{ color: "#ffffff" }}
            >
              Privacy Policy
            </h1>
            <p 
              className="text-sm font-medium" 
              style={{ color: "var(--text-muted)" }}
            >
              Last updated: March 22, 2026
            </p>
          </div>

          {/* Content */}
          <div 
            className="card-elevated p-8 md:p-12 space-y-8"
            style={{ 
              borderRadius: "var(--radius-2xl)",
              background: "rgba(255,255,255,0.95)"
            }}
          >
            {/* Introduction */}
            <section>
              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                At Mounta ("we," "us," or "our"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI execution assistant platform and related services (collectively, the "Service").
              </p>
              <p 
                className="text-base leading-relaxed font-medium mt-4" 
                style={{ color: "var(--text-muted)" }}
              >
                By using Mounta, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Service.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                1. Information We Collect
              </h2>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                1.1 Information You Provide
              </h3>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                We collect information that you voluntarily provide to us when you:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Create an account (name, email address, password)</li>
                <li>Join our waitlist (email address)</li>
                <li>Input goals, milestones, and action plans into the Service</li>
                <li>Communicate with our support team</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Participate in surveys or provide feedback</li>
              </ul>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                1.2 Information Automatically Collected
              </h3>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                When you access our Service, we automatically collect certain information, including:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Usage Data:</strong> Pages viewed, features used, time spent on the Service, click patterns</li>
                <li><strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and similar tracking technologies to track activity and hold certain information</li>
                <li><strong>Location Data:</strong> Approximate geographic location based on IP address</li>
              </ul>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                1.3 AI-Generated Data
              </h3>
              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                We collect and process data generated through your interactions with our AI, including execution plans, milestone tracking, progress analytics, and AI-suggested actions. This data is used to improve our AI models and personalize your experience.
              </p>
            </section>

            {/* 2. How We Use Your Information */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                2. How We Use Your Information
              </h2>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                We use the collected information for the following purposes:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our AI execution assistant</li>
                <li><strong>Personalization:</strong> To customize your experience and provide tailored recommendations</li>
                <li><strong>AI Training:</strong> To train and improve our AI models (anonymized and aggregated)</li>
                <li><strong>Communication:</strong> To send you updates, newsletters, and service-related announcements</li>
                <li><strong>Analytics:</strong> To understand how users interact with our Service and identify areas for improvement</li>
                <li><strong>Security:</strong> To detect, prevent, and address technical issues, fraud, and security vulnerabilities</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our Terms of Service</li>
                <li><strong>Customer Support:</strong> To respond to your requests, questions, and provide assistance</li>
              </ul>
            </section>

            {/* 3. Data Sharing and Disclosure */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                3. Data Sharing and Disclosure
              </h2>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (hosting, analytics, customer support, payment processing)</li>
                <li><strong>AI Service Providers:</strong> With AI model providers (e.g., OpenAI, Anthropic) to process your requests. These providers are bound by strict confidentiality agreements</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Legal Requirements:</strong> When required by law, subpoena, or legal process</li>
                <li><strong>Protection of Rights:</strong> To protect the rights, property, or safety of Mounta, our users, or others</li>
                <li><strong>With Your Consent:</strong> When you explicitly consent to sharing your information</li>
              </ul>
            </section>

            {/* 4. Data Security */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                4. Data Security
              </h2>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Encryption of data in transit (TLS/SSL) and at rest (AES-256)</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure cloud infrastructure with reputable providers</li>
                <li>Employee training on data protection and privacy</li>
              </ul>
              <p 
                className="text-base leading-relaxed font-medium mt-4" 
                style={{ color: "var(--text-muted)" }}
              >
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* 5. Data Retention */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                5. Data Retention
              </h2>
              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                We retain your personal information for as long as necessary to provide our Service and fulfill the purposes outlined in this Privacy Policy. When you delete your account, we will delete or anonymize your personal data within 30 days, except where we are required to retain it for legal or regulatory purposes. Anonymized and aggregated data may be retained indefinitely for analytics and AI training purposes.
              </p>
            </section>

            {/* 6. Your Privacy Rights */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                6. Your Privacy Rights
              </h2>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                Depending on your location, you may have the following rights:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of processing your information</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                <li><strong>Opt-Out:</strong> Opt-out of marketing communications at any time</li>
              </ul>
              <p 
                className="text-base leading-relaxed font-medium mt-4" 
                style={{ color: "var(--text-muted)" }}
              >
                To exercise these rights, please contact us at{" "}
                <a 
                  href="mailto:privacy@mounta.io" 
                  className="font-bold hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  privacy@mounta.io
                </a>
                . We will respond to your request within 30 days.
              </p>
            </section>

            {/* 7. Cookies and Tracking */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                7. Cookies and Tracking Technologies
              </h2>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our Service.
              </p>
              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                Types of cookies we use:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4 mt-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li><strong>Essential Cookies:</strong> Required for the Service to function</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our Service</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
              </ul>
            </section>

            {/* 8. Third-Party Links */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                8. Third-Party Links
              </h2>
              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                Our Service may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            {/* 9. Children's Privacy */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                9. Children's Privacy
              </h2>
              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                Our Service is not intended for children under the age of 13 (or 16 in the EU). We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately at{" "}
                <a 
                  href="mailto:privacy@mounta.io" 
                  className="font-bold hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  privacy@mounta.io
                </a>
                .
              </p>
            </section>

            {/* 10. International Data Transfers */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                10. International Data Transfers
              </h2>
              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards, including Standard Contractual Clauses approved by the European Commission.
              </p>
            </section>

            {/* 11. Changes to This Privacy Policy */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                11. Changes to This Privacy Policy
              </h2>
              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* 12. Contact Us */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                12. Contact Us
              </h2>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div 
                className="p-6 rounded-xl" 
                style={{ 
                  background: "var(--accent-glow)", 
                  border: "1px solid var(--border-accent)" 
                }}
              >
                <p 
                  className="text-base font-bold mb-2" 
                  style={{ color: "var(--text)" }}
                >
                  Mounta Privacy Team
                </p>
                <p 
                  className="text-sm font-medium" 
                  style={{ color: "var(--text-muted)" }}
                >
                  Email:{" "}
                  <a 
                    href="mailto:privacy@mounta.io" 
                    className="font-bold hover:underline"
                    style={{ color: "var(--accent)" }}
                  >
                    privacy@mounta.io
                  </a>
                </p>
                <p 
                  className="text-sm font-medium mt-1" 
                  style={{ color: "var(--text-muted)" }}
                >
                  General inquiries:{" "}
                  <a 
                    href="mailto:hello@mounta.io" 
                    className="font-bold hover:underline"
                    style={{ color: "var(--accent)" }}
                  >
                    hello@mounta.io
                  </a>
                </p>
              </div>
            </section>

            {/* Footer links */}
            <div 
              className="pt-8 mt-8 text-center" 
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <p 
                className="text-sm font-medium" 
                style={{ color: "var(--text-subtle)" }}
              >
                Also read our{" "}
                <Link 
                  href="/terms" 
                  className="font-bold hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
