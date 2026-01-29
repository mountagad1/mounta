type PricingCardProps = {
    name: string;
    price: string;
    plan: string;
    billing: "monthly" | "annual";
    highlighted?: boolean;
  };
  
  export default function PricingCard({
    name,
    price,
    plan,
    billing,
    highlighted,
  }: PricingCardProps) {
    return (
      <div
        className={`rounded-2xl border p-8 flex flex-col ${
          highlighted
            ? "border-sky-500 shadow-lg scale-105"
            : "border-gray-200"
        }`}
      >
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
  
        <p className="text-gray-600 mb-6">
          {billing === "monthly"
            ? "Billed monthly"
            : "Billed annually (10% off)"}
        </p>
  
        <div className="text-4xl font-bold mb-6">
          {price}
          <span className="text-base font-normal text-gray-500">
            {billing === "monthly" ? "/mo" : "/year"}
          </span>
        </div>
  
        <button
          className={`mt-auto py-3 rounded-xl font-medium transition ${
            highlighted
              ? "bg-sky-500 text-white hover:bg-sky-600"
              : "bg-gray-900 text-white hover:bg-gray-800"
          }`}
        >
          Choose {name}
        </button>
      </div>
    );
  }
  