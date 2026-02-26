export default function ApproachCard({ number, title, description }) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl text-center hover:bg-gray-200 transition">
      <p className="text-gray-400 text-sm font-medium">{number}</p>
      <h3 className="font-semibold mt-2 text-sm">{title}</h3>
      <p className="text-gray-500 text-xs mt-3 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
