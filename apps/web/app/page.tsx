export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Don’t manage tasks.
          <br />
          <span className="text-blue-600">Manage your life.</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          mounta.io is a proactive AI Life & Goal Manager that understands your
          long-term goals, tracks your reality, and guides your decisions—every day.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
            Get early access
          </button>
          <button className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50">
            See how it works
          </button>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Productivity tools don’t understand what matters.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            To-do lists manage tasks. Calendars manage time.
            <br />
            But none of them manage your life direction.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <Feature
            title="Strategic Life Map"
            desc="Your goals, structured from vision to daily actions."
          />
          <Feature
            title="Proactive AI Guidance"
            desc="One clear recommendation every day. No noise. No overload."
          />
          <Feature
            title="Progress That Compounds"
            desc="Track alignment between what you do and what truly matters."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Your life deserves strategy.
        </h2>
        <p className="text-xl mb-8">
          Start building clarity, consistency, and momentum.
        </p>
        <button className="px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100">
          Join the early access
        </button>
      </section>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
