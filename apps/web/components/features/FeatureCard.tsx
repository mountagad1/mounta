type FeatureCardProps = {
    title: string;
    description: string;
    icon?: React.ReactNode;
    highlight?: boolean;
  };
  
  export default function FeatureCard({
    title,
    description,
    icon,
    highlight = false,
  }: FeatureCardProps) {
    return (
      <div
        className={`relative rounded-2xl border p-6 transition ${
          highlight
            ? "border-sky-500 bg-sky-50 shadow-md"
            : "border-gray-200 bg-white hover:shadow-sm"
        }`}
      >
        {highlight && (
          <span className="absolute top-4 right-4 text-xs font-medium text-sky-600 bg-sky-100 px-2 py-1 rounded-full">
            Pro
          </span>
        )}
  
        {icon && (
          <div className="mb-4 text-sky-500">
            {icon}
          </div>
        )}
  
        <h3 className="text-lg font-semibold mb-2">
          {title}
        </h3>
  
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    );
  }
  