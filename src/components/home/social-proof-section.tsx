type Company = {
  name: string;
  logo: string;
};

const companies: Company[] = [
  {
    name: "logoipsum",
    logo: "/logos/logo-1.svg",
  },
  {
    name: "logoipsum",
    logo: "/logos/logo-2.svg",
  },
  {
    name: "logoipsum",
    logo: "/logos/logo-3.svg",
  },
  {
    name: "logoipsum",
    logo: "/logos/logo-4.svg",
  },
  {
    name: "logoipsum",
    logo: "/logos/logo-5.svg",
  },
];

export default function SocialProofSection() {
  return (
    <section className="px-4 py-8 bg-white">
      <div className="flex flex-col items-center gap-6">
        <h2 className="subtitle text-flexing-blue">
          Trusted by Leading Companies
        </h2>
        <div className="flex justify-center gap-12">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center">
              <img src={company.logo} alt={company.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
