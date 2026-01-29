export const metadata = {
  title: "Privacy Policy",
};

export default function Privacy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>

      <p>
        mounta.io respects your privacy and complies with the General Data
        Protection Regulation (GDPR).
      </p>

      <h2 className="font-semibold text-xl">Data Collected</h2>
      <p>
        We collect only data necessary to provide our services, including
        account information, usage data, and payment details via Stripe.
      </p>

      <h2 className="font-semibold text-xl">Data Usage</h2>
      <p>
        Your data is used solely to operate and improve the service.
        We never sell your personal data.
      </p>

      <h2 className="font-semibold text-xl">Your Rights</h2>
      <p>
        You may request access, correction, or deletion of your data at any time
        by contacting support@mounta.io.
      </p>
    </main>
  );
}
