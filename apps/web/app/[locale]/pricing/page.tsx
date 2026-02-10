export default function Pricing() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-bold text-center">Pricing</h1>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <Plan title="Free" price="$0" />
        <Plan title="Pro" price="$12 / month" highlight />
        <Plan title="Lifetime" price="$99" />
      </div>
    </main>
  );
}

function Plan({
  title,
  price,
  highlight,
}: {
  title: string;
  price: string;
  highlight?: boolean;
}) {
  const className =
    "rounded-2xl border p-8 " +
    (highlight ? "border-black shadow-lg" : "");

  return (
    <div className={className}>
      <h2 className="font-semibold">{title}</h2>
      <p className="mt-4 text-3xl font-bold">{price}</p>
    </div>
  );
}
