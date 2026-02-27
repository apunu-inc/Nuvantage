import ServiceDetailCard from "./ServiceDetailCard";
import AnimatedSection from "./AnimatedSection";

export default function AboutServices() {
  return (
    <AnimatedSection className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceDetailCard
            title="Enterprise-Grade Project & Program Management"
            description="Nuvantage leads and supports the delivery of complex projects and multi-project programmes."
            items={[
              "Programme governance frameworks",
              "Schedule and cost oversight",
              "Risk and issue management",
              "Stakeholder coordination",
              "Performance monitoring",
              "Decision support structures",
            ]}
          />

          <ServiceDetailCard
            title="Construction Oversight & Assurances"
            description="We provide client-side construction oversight to ensure works are executed to specification."
            items={[
              "Site monitoring and progress assessment",
              "Quality and compliance oversight",
              "Contractor performance evaluation",
              "Interface coordination support",
              "Risk identification and mitigation",
              "Reporting and escalation management",
            ]}
          />

          <ServiceDetailCard
            title="Mission-Critical & Life Science Expertise"
            description="Data centre and mission-critical developments demand precision, resilience, and integration."
            items={[
              "Data centre project planning and delivery support",
              "MEP systems integration oversight",
              "Commissioning and readiness coordination",
              "Risk and resilience planning",
              "Performance and compliance monitoring",
            ]}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
