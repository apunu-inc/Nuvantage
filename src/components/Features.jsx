import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-orange-500 text-xs tracking-widest uppercase">
          Key Features
        </p>

        <h2 className="text-3xl font-semibold mt-4">Where we add Value</h2>

        <p className="text-gray-600 mt-4 max-w-xl text-sm">
          We provide independent project, program, and construction oversight
          for complex developments ensuring delivery certainty.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            title="Project & Program Management"
            items={[
              "Programme governance & controls",
              "Schedule, cost & risk management",
              "Stakeholder coordination",
              "Reporting and escalation support",
            ]}
          />

          <FeatureCard
            title="Construction Oversight & Assurance"
            items={[
              "Site monitoring & reporting",
              "Quality and compliance assurance",
              "Contractor performance oversight",
              "Risk identification and mitigation",
            ]}
          />

          <FeatureCard
            title="Data Centre & Mission-Critical Expertise"
            items={[
              "Data centre project planning & delivery",
              "Integration of MEP and specialist systems",
              "Commissioning oversight",
              "Operational readiness support",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
