"use client";

import Ticker from "framer-motion-ticker";
import { useEffect, useState } from "react";

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
    <section className="px-4 py-8 max-sm:py-12 bg-white max-sm:overflow-x-hidden">
      <div className="flex flex-col items-center gap-6">
        <h2 className="subtitle text-flexing-blue">
          Trusted by Leading Companies
        </h2>
        {/* <div className="flex justify-center max-sm:justify-start gap-12 max-sm:w-full">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center max-sm:flex-none">
              <img src={company.logo} alt={company.name} />
            </div>
          ))}
        </div> */}
        <Ticker duration={10}>
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center max-sm:flex-none pr-12"
            >
              <img src={company.logo} alt={company.name} />
            </div>
          ))}
        </Ticker>
      </div>
    </section>
  );
}
