import { PRICING_PLANS } from "./pricing.config";

export default function FeatureTable() {
  const allFeatures = Array.from(
    new Set(PRICING_PLANS.flatMap((p) => p.features))
  );

  return (
    <div className="mt-24 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4">Features</th>
            {PRICING_PLANS.map((p) => (
              <th key={p.key}>{p.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((feature) => (
            <tr key={feature} className="border-t">
              <td className="p-4">{feature}</td>
              {PRICING_PLANS.map((p) => (
                <td key={p.key} className="text-center">
                  {p.features.includes(feature) ? "✅" : "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
