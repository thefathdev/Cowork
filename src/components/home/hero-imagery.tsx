"use client";

import { motion } from "framer-motion";

export default function HeroImagery() {
  return (
    <motion.div
      style={{
        transformOrigin: "100% 0",
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      initial={{
        rotateX: 10,
        rotateY: 10,
        opacity: 0,
      }}
      animate={{
        rotateX: 0,
        rotateY: 0,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 60,
        delay: 0.1,
      }}
      className="w-full min-h-[640px] max-sm:h-80 max-sm:min-h-[0px] h-full col-span-4 overflow-hidden rounded-[2rem] max-sm:rounded-[1.5rem]"
    >
      <img
        src="/img/hero.jpg"
        alt=""
        className="object-cover h-full max-sm:w-full"
      />
    </motion.div>
  );
}
