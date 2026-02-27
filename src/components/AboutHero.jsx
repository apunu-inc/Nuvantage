import geometricBg from "../assets/geometric_perspective_line_pattern_background 1.jpg";
import AnimatedSection from "./AnimatedSection";

export default function AboutHero() {
  return (
    <AnimatedSection
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${geometricBg})` }}
    >
      <div className="absolute inset-0 bg-gray-50/40" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight">
            Protecting Your Interests in High-Complexity Builds
          </h1>

          <p className="mt-6 text-gray-600 text-sm leading-relaxed max-w-lg">
            Large-scale projects demand more than just coordination; they
            require technical insight, disciplined governance, and relevant
            experience navigating the risks of modern projects.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
