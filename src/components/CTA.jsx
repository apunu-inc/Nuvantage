import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <AnimatedSection className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gray-200 rounded-2xl p-12 text-center relative">
          <h3 className="text-2xl font-semibold">
            Is Your Project At Risk? Let’s Fix It
          </h3>

          <p className="text-gray-600 text-sm mt-4 max-w-xl mx-auto">
            Whether you are in the planning phase or in the middle of a project
            rescue, Nuvantage provides the technical leadership you need.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg text-sm">
            Start a Conversation
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
