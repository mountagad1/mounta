export const metadata = {
  title: "Terms & Conditions",
};

export default function Terms() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-3xl font-bold">Terms & Conditions</h1>

      <p>
        mounta.io is a software-as-a-service (SaaS) platform providing
        AI-powered life and goal management tools.
      </p>

      <h2 className="font-semibold text-xl">Use of the Service</h2>
      <p>
        By accessing or using mounta.io, you agree to use the service
        responsibly and in compliance with applicable laws.
      </p>

      <h2 className="font-semibold text-xl">Subscriptions</h2>
      <p>
        Paid plans are billed monthly. You may cancel your subscription at any
        time. No refunds are provided for partial billing periods.
      </p>

      <h2 className="font-semibold text-xl">Limitation of Liability</h2>
      <p>
        mounta.io provides guidance and insights but does not guarantee outcomes.
        Decisions made using the platform remain the sole responsibility of the user.
      </p>

      <h2 className="font-semibold text-xl">Contact</h2>
      <p>
        For any legal inquiries, contact: support@mounta.io
      </p>
    </main>
  );
}
