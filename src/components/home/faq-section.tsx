"use client";

import { useInView } from "framer-motion";
import FaqAccordion from "./faq-accordion";
import { useRef } from "react";

export default function FaqSection() {
  let target = useRef(null);
  const isInview = useInView(target, {
    once: true,
    margin: "-400px",
  });

  return (
    <section
      ref={target}
      className="grid grid-cols-12 gap-4 px-4 py-18 max-sm:py-12 max-sm:gap-8 max-sm:flex max-sm:flex-col"
    >
      <div className="flex flex-col justify-between w-full h-full col-span-4 gap-8">
        <div className="flex flex-col gap-4">
          <p className="subtitle text-flexing-blue">
            Frequently Asked Questions
          </p>
          <h2 className="heading-2">Your Roadmap to Coworking Clarity</h2>
        </div>
        <p className="max-w-[360px]">
          Frequently asked questions ordered by popularity. Remember that if the
          visitor has not committed to the call to action, they may still have
          questions (doubts) that can be answered.
        </p>
      </div>
      <div className="flex flex-col col-span-8 gap-4">
        <FaqAccordion open={isInview} />
        <FaqAccordion />
        <FaqAccordion />
        <FaqAccordion />
        <FaqAccordion />
      </div>
    </section>
  );
}
