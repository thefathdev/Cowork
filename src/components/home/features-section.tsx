type Feature = {
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  {
    title: "Flexible Spaces",
    description:
      "Whether you're a solopreneur, startup, or an established enterprise, our flexible office solutions cater to your evolving needs.",
    icon: "/img/feature-1.svg",
  },
  {
    title: "Transparent Pricing",
    description:
      "Choose a plan that suits your budget and business objectives, and experience the value of a premium coworking space without breaking the bank.",
    icon: "/img/feature-2.svg",
  },
  {
    title: "Tailored Memberships",
    description:
      "Whether you prefer the flexibility of a hot desk or the exclusivity of a private office, Cowork offers tailored solutions to suit every working style.",
    icon: "/img/feature-3.svg",
  },
];

export default function FeaturesSection() {
  return (
    <section className="flex flex-col items-center gap-20 px-4 py-18 max-sm:py-12 max-sm:gap-8">
      {/* Title */}
      <div>
        <h2 className="sr-only">Why Choose Cowork?</h2>
        <div className="flex flex-wrap gap-x-3 heading-2 max-sm:justify-center">
          <span>Why Choose</span>
          <img
            src="/img/feature-in-text.jpg"
            alt=""
            className="w-[180px] rounded-full max-sm:w-[120px]"
          />
          <span>Cowork?</span>
        </div>
      </div>
      {/* Features */}
      <div className="grid w-full grid-cols-3 gap-4 max-sm:grid-cols-1">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 border border-rigid-black rounded-[2rem] flex flex-col items-center gap-6"
          >
            <img src={feature.icon} alt="" />
            <h3 className="text-center heading-3">{feature.title}</h3>
            <p className="text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
