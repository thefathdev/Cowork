"use client";

import { useState } from "react";

export default function FaqAccordion() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <article className="flex flex-col gap-4 p-8 rounded-[2rem] border border-rigid-black">
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="flex justify-between"
      >
        <span className="paragraph-strong">
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
      {isOpen ? (
        <p className="max-w-prose">
          Frequently asked questions ordered by popularity. Remember that if the
          visitor has not committed to the call to action, they may still have
          questions (doubts) that can be answered.
        </p>
      ) : null}
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
