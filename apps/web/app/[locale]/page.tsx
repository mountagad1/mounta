export default function LandingPage({
  params,
}: {
  params: { locale: string };
}) {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Mounta
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Your AI-powered goal & life assistant.
          <br />
          Turn clarity into daily action.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#pricing"
            className="rounded-lg bg-black px-6 py-3 text-white font-medium"
          >
            Get started
          </a>

          <a
            href="#features"
            className="rounded-lg border px-6 py-3 font-medium"
          >
            Learn more
          </a>
        </div>
      </section>

      <section id="features" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-10">
          <Feature
            title="Clear goals"
            text="Turn vague ideas into concrete objectives."
          />
          <Feature
            title="Daily actions"
            text="Break goals into realistic, actionable steps."
          />
          <Feature
            title="Adaptive AI"
            text="Your plan evolves as you progress."
          />
        </div>
      </section>

      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">Pricing</h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <Price
              title="Free"
              price="$0"
              items={[
                "Basic goal tracking",
                "Limited AI guidance",
              ]}
            />

            <Price
              title="Pro"
              price="$12 / month"
              highlight
              items={[
                "Unlimited goals",
                "Advanced AI planning",
                "Daily check-ins",
              ]}
            />

            <Price
              title="Lifetime"
              price="$99"
              items={[
                "One-time payment",
                "All Pro features",
                "Future updates included",
              ]}
            />
          </div>
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between gap-6">
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mounta
          </span>

          <nav className="flex gap-6 text-sm">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="/blog">Blog</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  );
}

function Price({
  title,
  price,
  items,
  highlight,
}: {
  title: string;
  price: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-8 ${
        highlight ? "border-black shadow-lg" : ""
      }`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 text-3xl font-bold">{price}</p>

      <ul className="mt-6 space-y-2 text-gray-600">
        {items.map((i) => (
          <li key={i}>✓ {i}</li>
        ))}
      </ul>
    </div>
  );
}
