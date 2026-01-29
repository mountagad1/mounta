export default function PricingPage() {
    return (
      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center">Pricing</h1>
  
        <p className="mt-4 text-center text-gray-600">
          Simple pricing. Upgrade when you’re ready.
        </p>
  
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="card">
            <h2 className="text-xl font-semibold">Free</h2>
            <p className="mt-2 text-gray-600">
              Basic goal tracking and journaling.
            </p>
            <p className="mt-6 text-3xl font-bold">$0</p>
          </div>
  
          <div className="card border-2 border-sky-500">
            <h2 className="text-xl font-semibold">Pro</h2>
            <p className="mt-2 text-gray-600">
              AI coaching, insights & automation.
            </p>
            <p className="mt-6 text-3xl font-bold">$9 / month</p>
  
            <button className="btn-primary mt-6 w-full">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </main>
    );
  }
  