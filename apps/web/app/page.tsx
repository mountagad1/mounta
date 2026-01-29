import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="py-28 text-center max-w-6xl mx-auto px-6">
        <h1 className="text-6xl font-bold mb-6">
          Don’t manage tasks.
          <span className="block text-blue-500">Manage your life.</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          mounta.io is a proactive AI Life & Goal Manager that turns your goals
          into daily strategic decisions.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/pricing" className="btn-primary">
            View pricing
          </Link>
          <Link href="/demo" className="btn-secondary">
            See demo
          </Link>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-gray-50 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          You’re busy, but not progressing.
        </h2>
        <ul className="text-lg text-gray-600 space-y-2">
          <li>❌ To-do lists don’t understand your goals</li>
          <li>❌ AI chats forget your life</li>
          <li>❌ Productivity tools ignore reality</li>
        </ul>
      </section>

      {/* FEATURES */}
      <section className="py-28 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {[
          "Strategic Life Map™",
          "Proactive Planning AI",
          "Intelligent Life Journal™",
          "Human Relationship Engine™",
          "Life Performance Analytics™"
        ].map(f => (
          <div key={f} className="p-8 border rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold">{f}</h3>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-white">
        <h2 className="text-4xl font-bold mb-6">
          Your life deserves strategy.
        </h2>
        <Link href="/pricing" className="btn-primary text-lg px-10 py-4">
          Start now
        </Link>
      </section>
    </main>
  );
}
