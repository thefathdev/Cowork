"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FaqAccordion({ open = false }: { open?: boolean }) {
  let [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <article
      style={{
        maxHeight: isOpen ? "100%" : "0",
        overflow: "hidden",
        transition: "max-height 0.6s ease-out",
      }}
      className="flex flex-col justify-center px-8 py-10 rounded-[2rem] max-sm:rounded-[1.5rem] border border-rigid-black"
    >
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="flex justify-between items-center"
      >
        <span className="paragraph-strong max-sm:text-start">
          How flexible are Cowork&apos;s membership plans?
        </span>
        <div
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <Caret />
        </div>
      </button>
      <div className="overflow-hidden">
        <AnimatePresence>
          {isOpen ? (
            <motion.p
              initial={{
                opacity: 0,
                y: -100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -100,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
                mass: 0.5,
              }}
              className="max-w-prose mt-4"
            >
              Frequently asked questions ordered by popularity. Remember that if
              the visitor has not committed to the call to action, they may
              still have questions (doubts) that can be answered.
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </article>
  );
}

const Caret = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
  >
    <path
      d="M16 4.34863C9.37259 4.34863 4 9.72121 4 16.3486C4 22.976 9.37258 28.3486 16 28.3486C22.6274 28.3486 28 22.976 28 16.3486C28 9.72122 22.6274 4.34863 16 4.34863Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 19.3486L16 14.3486L11 19.3486"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
