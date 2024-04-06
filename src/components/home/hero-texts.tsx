"use client";

import { motion } from "framer-motion";
import Button from "../ui/button";

export default function HeroTexts() {
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
      }}
      className="flex flex-col justify-between w-full h-full col-span-8 gap-8 bg-rigid-black text-clear-white rounded-[2rem] max-sm:rounded-[1.5rem] p-8 pt-18 max-sm:px-6 max-sm:py-8 max-sm:gap-18"
    >
      <div
        className="relative flex flex-col gap-8"
        style={
          {
            // transformStyle: "preserve-3d",
          }
        }
      >
        <div
          aria-hidden
          className="relative max-sm:break-all z-10 flex flex-wrap heading-1"
        >
          Elevate Your Workspace with
          <span className="relative">
            {" "}
            <span className="relative z-10">Cowork</span>
            <div className="absolute max-sm:scale-[60%] top-[-20px] left-[50px] max-sm:left-[-60px] max-sm:top-[-40px]">
              <LineScratch />
            </div>
          </span>
          <h1 className="sr-only">Elevate Your Workspace with Cowork</h1>
        </div>
      </div>
      <div className="flex justify-between items-end max-sm:items-start max-sm:flex-col-reverse max-sm:gap-12">
        <Button type={"accent"} size={"big"}>
          Claim Your Spot
        </Button>
        <div className="flex flex-col gap-2 max-w-[360px]">
          <div className="h-[1px] w-[200px] bg-clear-white "></div>
          <p className="heading-3 ">Where innovation meets collaboration 🚀</p>
        </div>
      </div>
    </motion.div>
  );
}

function LineScratch() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="344"
      height="137"
      viewBox="0 0 344 137"
      fill="none"
      className="stroke-flexing-blue "
    >
      <motion.path
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 1,
          delay: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 60,
        }}
        d="M54.5 22C78.3333 12.5 154.192 -5.73045 228.192 8.25523C282.091 18.4419 339.251 36.6103 340.722 70.9327C342.192 105.255 244.54 126.735 176.222 131.933C107.833 137.135 9.75073 130.11 4.22155 96.4328C-1.30763 62.7552 90.1687 21.9668 158.5 14.4999C188.997 11.1673 206.846 11.8495 237 17.4999"
        // stroke="#D3F985"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
