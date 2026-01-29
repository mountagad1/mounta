export const metadata = {
  title: "Legal Notice",
};

export default function LegalNotice() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-3xl font-bold">Legal Notice</h1>

      <p>
        Website published by mounta.io
      </p>

      <p>
        Contact: support@mounta.io
      </p>

      <p>
        Hosting provider: Vercel Inc.
      </p>

      <p>
        Payment processing is handled securely by Stripe.
      </p>
    </main>
  );
}
