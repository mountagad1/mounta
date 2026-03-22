"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsPage() {
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
              Terms of Service
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
                Welcome to Mounta. These Terms of Service ("Terms") govern your access to and use of Mounta's AI execution assistant platform, including our website, mobile applications, and related services (collectively, the "Service").
              </p>
              <p 
                className="text-base leading-relaxed font-medium mt-4" 
                style={{ color: "var(--text-muted)" }}
              >
                By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Service.
              </p>
            </section>

            {/* 1. Acceptance of Terms */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                1. Acceptance of Terms
              </h2>
              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                By creating an account or using Mounta, you confirm that you are at least 18 years old (or the age of majority in your jurisdiction) and have the legal capacity to enter into these Terms. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
              </p>
            </section>

            {/* 2. Description of Service */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                2. Description of Service
              </h2>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                Mounta is an AI-powered execution assistant that helps users turn goals into actionable plans. Our Service includes:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Goal clarification and structuring tools</li>
                <li>AI-generated execution plans and milestones</li>
                <li>Daily action recommendations and tracking</li>
                <li>Progress analytics and adaptive planning</li>
                <li>Accountability features and reminders</li>
              </ul>
              <p 
                className="text-base leading-relaxed font-medium mt-4" 
                style={{ color: "var(--text-muted)" }}
              >
                We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice.
              </p>
            </section>

            {/* 3. Account Registration and Security */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                3. Account Registration and Security
              </h2>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                To access certain features of the Service, you must create an account. You agree to:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Notify us immediately of any unauthorized access to your account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>
              <p 
                className="text-base leading-relaxed font-medium mt-4" 
                style={{ color: "var(--text-muted)" }}
              >
                You may not use another person's account without permission or create multiple accounts. We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            {/* 4. Acceptable Use Policy */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                4. Acceptable Use Policy
              </h2>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT to:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Use the Service to plan, coordinate, or execute any illegal activities, crimes, or unlawful conduct</li>
                <li>Use the Service to create goals, plans, or actions intended to harm, defraud, scam, or deceive individuals, organizations, or society</li>
                <li>Attempt to use the Service for purposes related to violence, terrorism, hate speech, or discrimination</li>
                <li>Use the Service to harass, abuse, threaten, or intimidate others</li>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                <li>Use automated systems (bots, scrapers) to access the Service without permission</li>
                <li>Upload or transmit viruses, malware, or any harmful code</li>
                <li>Impersonate another person or entity</li>
                <li>Collect or harvest personal information about other users</li>
              </ul>
            </section>

            {/* 5. AI Content and Limitations */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                5. AI Content and Limitations
              </h2>
              
              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                5.1 AI-Generated Content
              </h3>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                Our Service uses artificial intelligence to generate execution plans, recommendations, and guidance. You acknowledge and agree that:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>AI-generated content is provided for informational purposes only</li>
                <li>AI recommendations may not always be accurate, complete, or suitable for your specific situation</li>
                <li>You are solely responsible for evaluating and verifying AI-generated content before acting on it</li>
                <li>We do not guarantee the quality, accuracy, or reliability of AI outputs</li>
              </ul>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                5.2 Content Moderation and Refusal
              </h3>
              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                Like all AI systems, Mounta incorporates safety measures to prevent misuse. Our AI will refuse to process requests that involve illegal activities, harmful content, or violations of our Acceptable Use Policy. We reserve the right to monitor, review, and remove content that violates these Terms.
              </p>
            </section>

            {/* 6. Prohibited Goals and Activities - CRITICAL SECTION */}
            <section>
              <div 
                className="p-6 rounded-xl mb-4" 
                style={{ 
                  background: "rgba(239, 68, 68, 0.1)", 
                  border: "2px solid rgba(239, 68, 68, 0.3)" 
                }}
              >
                <h2 
                  className="font-display text-2xl font-bold mb-4 flex items-center gap-2" 
                  style={{ color: "#dc2626" }}
                >
                  <span className="text-2xl">⚠️</span>
                  6. Prohibited Goals and Activities
                </h2>
                <p 
                  className="text-base leading-relaxed font-bold mb-4" 
                  style={{ color: "#991b1b" }}
                >
                  IMPORTANT: This section outlines our zero-tolerance policy for harmful use of the Service.
                </p>
              </div>

              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                The following goals, plans, and activities are strictly prohibited on Mounta:
              </p>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                6.1 Illegal Activities
              </h3>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Planning or coordinating any criminal activity</li>
                <li>Drug trafficking, money laundering, or financial crimes</li>
                <li>Copyright infringement or intellectual property theft</li>
                <li>Unauthorized access to computer systems (hacking)</li>
                <li>Tax evasion or regulatory violations</li>
                <li>Any activity prohibited by local, national, or international law</li>
              </ul>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                6.2 Harmful Activities
              </h3>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Scams, fraud, or deceptive schemes targeting individuals or businesses</li>
                <li>Pyramid schemes, multi-level marketing fraud, or investment scams</li>
                <li>Phishing, identity theft, or social engineering attacks</li>
                <li>Manipulation of financial markets or insider trading</li>
                <li>Creation or distribution of malware, viruses, or harmful software</li>
                <li>Doxxing, stalking, or harassment campaigns</li>
                <li>Disinformation campaigns or coordinated inauthentic behavior</li>
              </ul>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                6.3 Violence and Extremism
              </h3>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Planning or promoting violence against individuals or groups</li>
                <li>Terrorist activities or support for terrorist organizations</li>
                <li>Hate speech or discrimination based on protected characteristics</li>
                <li>Self-harm or suicide promotion</li>
                <li>Child exploitation or abuse in any form</li>
              </ul>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                6.4 Corporate and Social Harm
              </h3>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Corporate espionage or theft of trade secrets</li>
                <li>Sabotage of business operations or infrastructure</li>
                <li>Market manipulation or anticompetitive practices</li>
                <li>Environmental crimes or deliberate ecological harm</li>
                <li>Public health threats or pandemic-related fraud</li>
              </ul>

              <div 
                className="mt-6 p-5 rounded-xl" 
                style={{ 
                  background: "var(--accent-glow)", 
                  border: "1px solid var(--border-accent)" 
                }}
              >
                <p 
                  className="text-base leading-relaxed font-bold" 
                  style={{ color: "var(--text)" }}
                >
                  If you encounter goals, plans, or content that violate these prohibitions, please report them immediately to{" "}
                  <a 
                    href="mailto:abuse@mounta.io" 
                    className="hover:underline"
                    style={{ color: "var(--accent)" }}
                  >
                    abuse@mounta.io
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* 7. Disclaimer of Liability - CRITICAL SECTION */}
            <section>
              <div 
                className="p-6 rounded-xl mb-4" 
                style={{ 
                  background: "rgba(245, 158, 11, 0.1)", 
                  border: "2px solid rgba(245, 158, 11, 0.3)" 
                }}
              >
                <h2 
                  className="font-display text-2xl font-bold mb-4 flex items-center gap-2" 
                  style={{ color: "#d97706" }}
                >
                  <span className="text-2xl">⚖️</span>
                  7. Disclaimer of Liability for User Conduct
                </h2>
              </div>

              <p 
                className="text-base leading-relaxed font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                MOUNTA IS NOT RESPONSIBLE FOR HOW USERS CHOOSE TO USE THE SERVICE.
              </p>

              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                You acknowledge and agree that:
              </p>

              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4 mb-6" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Mounta is a tool for legitimate goal execution and productivity enhancement</li>
                <li>You are solely responsible for the goals you set, plans you create, and actions you take using the Service</li>
                <li>Mounta bears no responsibility if you use the Service for harmful, illegal, fraudulent, or unethical purposes</li>
                <li>We are not liable for any damages, losses, or harm caused by your misuse of the Service</li>
                <li>We are not liable for any consequences arising from goals related to scams, fraud, deception, or harm to individuals, businesses, or society</li>
                <li>Any attempt to use our Service for illegal or harmful purposes is a material breach of these Terms and may result in immediate account termination and legal action</li>
                <li>We may report suspected illegal activity to law enforcement authorities</li>
              </ul>

              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                By using Mounta, you agree to indemnify and hold harmless Mounta, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your violation of these Terms or misuse of the Service.
              </p>
            </section>

            {/* 8. Intellectual Property */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                8. Intellectual Property Rights
              </h2>

              <h3 
                className="font-display text-lg font-bold mb-3" 
                style={{ color: "var(--text)" }}
              >
                8.1 Mounta's IP
              </h3>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                The Service, including all content, features, functionality, software, code, designs, and trademarks, is owned by Mounta and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or reverse engineer any part of our Service.
              </p>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                8.2 Your Content
              </h3>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                You retain ownership of the goals, plans, and content you create using the Service ("Your Content"). By using the Service, you grant Mounta a worldwide, non-exclusive, royalty-free license to:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Use Your Content to provide and improve the Service</li>
                <li>Process Your Content through our AI systems</li>
                <li>Create anonymized, aggregated data for analytics and AI training</li>
              </ul>
              <p 
                className="text-base leading-relaxed font-medium mt-4" 
                style={{ color: "var(--text-muted)" }}
              >
                We will not sell Your Content to third parties or use it for advertising purposes without your consent.
              </p>
            </section>

            {/* 9. Subscription and Payment */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                9. Subscription and Payment
              </h2>

              <h3 
                className="font-display text-lg font-bold mb-3" 
                style={{ color: "var(--text)" }}
              >
                9.1 Pricing
              </h3>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                We offer free and paid subscription plans. Pricing for paid plans is displayed on our website and may change with notice. Existing subscribers will be notified of price changes at least 30 days in advance.
              </p>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                9.2 Payment and Billing
              </h3>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                Paid subscriptions are billed in advance on a monthly or annual basis. You authorize us to charge your payment method for the applicable fees. If payment fails, we may suspend your account until payment is received.
              </p>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                9.3 Refund Policy
              </h3>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                We offer a 14-day money-back guarantee for first-time paid subscribers. To request a refund, contact{" "}
                <a 
                  href="mailto:billing@mounta.io" 
                  className="font-bold hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  billing@mounta.io
                </a>
                {" "}within 14 days of your initial purchase.
              </p>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                9.4 Cancellation
              </h3>
              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                You may cancel your subscription at any time through your account settings. Cancellations take effect at the end of your current billing period. No refunds are provided for partial billing periods.
              </p>
            </section>

            {/* 10. Warranty Disclaimers */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                10. Warranty Disclaimers
              </h2>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                <li>Warranties that the Service will be uninterrupted, error-free, or secure</li>
                <li>Warranties regarding the accuracy, reliability, or quality of AI-generated content</li>
                <li>Warranties that the Service will meet your specific requirements or expectations</li>
              </ul>
              <p 
                className="text-base leading-relaxed font-medium mt-4" 
                style={{ color: "var(--text-muted)" }}
              >
                Mounta is not a substitute for professional advice (legal, financial, medical, or otherwise). Always consult qualified professionals for important decisions.
              </p>
            </section>

            {/* 11. Limitation of Liability */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                11. Limitation of Liability
              </h2>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, MOUNTA SHALL NOT BE LIABLE FOR:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Damages arising from your use or inability to use the Service</li>
                <li>Damages arising from reliance on AI-generated content or recommendations</li>
                <li>Damages arising from unauthorized access to your account or data</li>
                <li>Damages arising from your violation of these Terms or misuse of the Service</li>
              </ul>
              <p 
                className="text-base leading-relaxed font-medium mt-4" 
                style={{ color: "var(--text-muted)" }}
              >
                Our total liability for any claims arising from your use of the Service shall not exceed the amount you paid us in the 12 months preceding the claim, or $100 USD, whichever is greater.
              </p>
            </section>

            {/* 12. Indemnification */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                12. Indemnification
              </h2>
              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                You agree to indemnify, defend, and hold harmless Mounta and its officers, directors, employees, contractors, agents, licensors, and suppliers from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4 mt-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Your use or misuse of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any laws or third-party rights</li>
                <li>Your Content or activities on the Service</li>
                <li>Any harmful, illegal, or fraudulent goals or activities you pursue using the Service</li>
              </ul>
            </section>

            {/* 13. Termination */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                13. Termination
              </h2>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                We may suspend or terminate your access to the Service immediately, without prior notice or liability, for any reason, including:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base font-medium ml-4" 
                style={{ color: "var(--text-muted)" }}
              >
                <li>Violation of these Terms or our Acceptable Use Policy</li>
                <li>Suspected illegal or harmful activity</li>
                <li>Non-payment of fees</li>
                <li>Fraudulent or abusive behavior</li>
                <li>At our sole discretion for any other reason</li>
              </ul>
              <p 
                className="text-base leading-relaxed font-medium mt-4" 
                style={{ color: "var(--text-muted)" }}
              >
                Upon termination, your right to use the Service will cease immediately. You may delete your account at any time through your account settings.
              </p>
            </section>

            {/* 14. Governing Law and Dispute Resolution */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                14. Governing Law and Dispute Resolution
              </h2>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You waive your right to participate in class action lawsuits or class-wide arbitration.
              </p>
            </section>

            {/* 15. Changes to Terms */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                15. Changes to These Terms
              </h2>
              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of the Service after changes become effective constitutes acceptance of the revised Terms.
              </p>
            </section>

            {/* 16. Miscellaneous */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                16. Miscellaneous
              </h2>

              <h3 
                className="font-display text-lg font-bold mb-3" 
                style={{ color: "var(--text)" }}
              >
                16.1 Entire Agreement
              </h3>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Mounta regarding the Service.
              </p>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                16.2 Severability
              </h3>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                16.3 No Waiver
              </h3>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
              </p>

              <h3 
                className="font-display text-lg font-bold mb-3 mt-6" 
                style={{ color: "var(--text)" }}
              >
                16.4 Assignment
              </h3>
              <p 
                className="text-base leading-relaxed font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                You may not assign or transfer these Terms or your rights under these Terms without our prior written consent. We may assign these Terms without restriction.
              </p>
            </section>

            {/* 17. Contact Us */}
            <section>
              <h2 
                className="font-display text-2xl font-bold mb-4" 
                style={{ color: "var(--text)" }}
              >
                17. Contact Us
              </h2>
              <p 
                className="text-base leading-relaxed font-medium mb-4" 
                style={{ color: "var(--text-muted)" }}
              >
                If you have questions about these Terms, please contact us:
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
                  Mounta Legal Team
                </p>
                <p 
                  className="text-sm font-medium" 
                  style={{ color: "var(--text-muted)" }}
                >
                  General inquiries:{" "}
                  <a 
                    href="mailto:legal@mounta.io" 
                    className="font-bold hover:underline"
                    style={{ color: "var(--accent)" }}
                  >
                    legal@mounta.io
                  </a>
                </p>
                <p 
                  className="text-sm font-medium mt-1" 
                  style={{ color: "var(--text-muted)" }}
                >
                  Report abuse:{" "}
                  <a 
                    href="mailto:abuse@mounta.io" 
                    className="font-bold hover:underline"
                    style={{ color: "var(--accent)" }}
                  >
                    abuse@mounta.io
                  </a>
                </p>
                <p 
                  className="text-sm font-medium mt-1" 
                  style={{ color: "var(--text-muted)" }}
                >
                  Support:{" "}
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
                  href="/privacy" 
                  className="font-bold hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  Privacy Policy
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
