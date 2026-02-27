export default function ServiceDetailCard({ title, description, items }) {
  return (
    <div className="bg-gray-100 p-8 rounded-2xl">
      <h3 className="font-semibold text-lg">{title}</h3>

      <p className="text-gray-600 text-sm mt-4 leading-relaxed">
        {description}
      </p>

      <p className="text-orange-500 text-xs uppercase mt-6">Key Services</p>

      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
