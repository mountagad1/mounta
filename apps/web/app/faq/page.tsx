export const metadata = {
  title: "FAQ – mounta.io",
  description:
    "Frequently asked questions about mounta.io, pricing, features, and how it works.",
};

export default function FAQPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-10">FAQ</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            What is mounta.io?
          </h2>
          <p className="text-gray-600">
            mounta.io is a proactive AI Life & Goal Manager that helps you turn
            long-term goals into daily strategic decisions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Is mounta.io a to-do list?
          </h2>
          <p className="text-gray-600">
            No. mounta.io goes beyond tasks by understanding your goals,
            priorities, and context.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Can I cancel anytime?
          </h2>
          <p className="text-gray-600">
            Yes. All plans are monthly and can be cancelled at any time.
          </p>
        </div>
      </div>
    </main>
  );
}
