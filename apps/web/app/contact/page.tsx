export const metadata = {
  title: "Contact – mounta.io",
  description:
    "Contact the mounta.io team for support, partnerships, or questions.",
};

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <p className="text-gray-600 mb-10">
        Have a question or want to get in touch? Send us a message.
      </p>

      <form className="space-y-6 max-w-xl">
        <input
          type="email"
          placeholder="Your email"
          className="w-full border rounded-lg px-4 py-3"
        />

        <textarea
          placeholder="Your message"
          rows={5}
          className="w-full border rounded-lg px-4 py-3"
        />

        <button type="submit" className="btn-primary">
          Send message
        </button>
      </form>
    </main>
  );
}
