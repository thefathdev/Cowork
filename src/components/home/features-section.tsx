"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  let target = useRef(null);
  let { scrollYProgress } = useScroll({
    target,
    offset: ["start 0.7", "start 0.3"],
    smooth: 20,
  });
  let windowSize = useWindowSize();

  let [maxImageWidth, setMaxImageWidth] = useState(180);

  let imageWidth = useTransform(scrollYProgress, [0, 1], [60, maxImageWidth]);

  useEffect(
    () =>
      setMaxImageWidth(() => {
        if (windowSize.width) {
          return windowSize.width > 640 ? 180 : 120;
        }
        return 180;
      }),
    [windowSize]
  );

  return (
    <section
      ref={target}
      className="flex flex-col items-center gap-20 px-4 py-18 max-sm:py-12 max-sm:gap-8"
    >
      {/* Title */}
      <div>
        <h2 className="sr-only">Why Choose Cowork?</h2>
        <div
          aria-hidden
          className="flex flex-wrap gap-x-3 heading-2 max-sm:justify-center"
        >
          <span>Why Choose</span>
          <motion.div
            style={{
              width: imageWidth,
            }}
            transition={{
              type: "spring",
            }}
            className="relative rounded-full overflow-hidden"
          >
            <img
              src="/img/feature-in-text.jpg"
              alt=""
              className="absolute object-cover h-full"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          <span>Cowork?</span>
        </div>
      </div>
      {/* Features */}
      <div className="grid w-full grid-cols-3 gap-4 max-sm:grid-cols-1">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 60,
                  delay: index * 0.1,
                },
              },
            }}
            whileInView={"visible"}
            viewport={{ once: true }}
            className="p-8 border border-rigid-black rounded-[2rem] flex flex-col items-center gap-6"
          >
            <img src={feature.icon} alt="" />
            <h3 className="text-center heading-3">{feature.title}</h3>
            <p className="text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
