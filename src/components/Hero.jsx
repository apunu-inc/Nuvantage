import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center px-6 py-20">
        {/* Left */}
        <div>
          <h1 className="text-4xl font-bold leading-tight">
            The Owner’s Shield for <br />
            <span className="text-orange-500">High-Stakes Infrastructure</span>
          </h1>

          <p className="mt-6 text-gray-600 text-sm leading-relaxed max-w-md">
            Independent Enterprise-Grade Project Advisory & Recovery for
            projects too critical to fail. Leveraging a pedigree of managing
            $100M+ CAPEX projects for global leaders like Amazon, Air Liquide
            and Tesla.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg text-sm">
            Start a Conversation
          </button>
        </div>

        {/* Right Image */}
        <div className="bg-orange-100 p-6 rounded-3xl">
          <img
            src={heroImage}
            alt="Infrastructure Team"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
