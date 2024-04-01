"use client";

import { useState } from "react";
import Button from "./ui/button";

export default function Navbar() {
  let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function openMenu() {
    if (!isMobileMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <div className="relative z-30 flex items-center px-4 pt-6 max-sm:pt-4 mix-blend-difference">
        <nav className="flex items-center justify-between w-full py-4 max-sm:py-3 border-t border-b border-rigid-black">
          <a href="/">
            <span className="sr-only">Home</span>
            <img
              src={isMobileMenuOpen ? "/logo-white.svg" : "/logo.svg"}
              alt=""
              className="h-6 max-sm:h-5"
            />
          </a>
          <div className="flex w-auto gap-12 max-sm:hidden">
            <ul className="flex items-center gap-12">
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
            </ul>
            <div className="flex gap-6">
              <Button type={"secondary"}>Log In</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
          <div className="sm:hidden">
            <Button type={"inverted"} onClick={() => openMenu()}>
              <span className="sr-only">Menu</span>
              <Hamburger isOpen={isMobileMenuOpen} />
            </Button>
          </div>
        </nav>
      </div>
      {isMobileMenuOpen ? <MobileMenu /> : null}
    </>
  );
}

const MobileMenu = () => {
  return (
    <div className="fixed sm:hidden flex flex-col justify-between pt-18 z-20 top-0 left-0 w-full h-screen bg-rigid-black text-clear-white">
      <ul className="py-6 px-4 flex flex-col gap-8 heading-2">
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Events</a>
        </li>
      </ul>
      <div className="flex gap-6 px-4 py-6 justify-end">
        <Button type={"secondary"}>Sign Up</Button>
        <Button>Log In</Button>
      </div>
    </div>
  );
};

const Hamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      aria-hidden
      className="relative flex flex-col w-6 h-[18px] items-center"
    >
      {isOpen ? (
        <>
          <span className="absolute top-2 -rotate-45 w-6 h-[2px] rounded-full bg-clear-white"></span>
          <span className="absolute top-2 w-0 h-[2px] rounded-full bg-clear-white"></span>
          <span className="absolute top-2 rotate-45 w-6 h-[2px] rounded-full bg-clear-white"></span>
        </>
      ) : (
        <>
          <span className="absolute top-0 w-6 h-[2px] rounded-full bg-clear-white"></span>
          <span className="absolute top-2 w-6 h-[2px] rounded-full bg-clear-white"></span>
          <span className="absolute top-4 w-6 h-[2px] rounded-full bg-clear-white"></span>
        </>
      )}
    </div>
  );
};
