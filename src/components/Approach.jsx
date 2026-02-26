import ApproachCard from "./ApproachCard";

export default function Approach() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-orange-500 text-xs tracking-widest uppercase">
          Our Approach
        </p>

        <h2 className="text-3xl font-semibold mt-4 max-w-xl">
          How We Support Projects from Strategy to Completion
        </h2>

        <p className="text-gray-600 mt-4 text-sm max-w-2xl">
          Our approach combines structured governance with flexible engagement
          models — ensuring clarity, control, and alignment at every stage of
          delivery.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <ApproachCard
            number="01"
            title="Rapid Diagnostic & Risk Baseline"
            description="A focused early-stage assessment to identify delivery risks, stakeholder gaps, and governance weaknesses."
          />

          <ApproachCard
            number="02"
            title="Governance Reset"
            description="Re-establishing structured governance frameworks, reporting clarity and decision pathways."
          />

          <ApproachCard
            number="03"
            title="Oversight and Assurance"
            description="Independent monitoring and structured oversight to protect schedule, cost and risk."
          />

          <ApproachCard
            number="04"
            title="Delivery Support and Transition"
            description="Targeted support during critical phases to stabilize delivery and transition to operational readiness."
          />
        </div>
      </div>
    </section>
  );
}
