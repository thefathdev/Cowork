"use client";

import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
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
      <div className="relative z-30 flex items-center px-4 pt-6 max-sm:pt-4 mix-blend-difference overflow-y-hidden">
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
            <motion.ul
              initial={{
                y: 100,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 70,
              }}
              className="flex items-center gap-12"
            >
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
            </motion.ul>
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
      <AnimatePresence>
        {isMobileMenuOpen ? <MobileMenu /> : null}
      </AnimatePresence>
    </>
  );
}

const MobileMenu = () => {
  return (
    <div className="fixed sm:hidden flex flex-col justify-between pt-18 z-20 top-0 left-0 w-full h-screen text-clear-white">
      <motion.div
        className="absolute top-0 bottom-0 left-0 right-0 bg-rigid-black"
        initial={{
          y: "-120%",
        }}
        animate={{
          y: 0,
        }}
        exit={{
          y: "-120%",
          transition: {
            delay: 0.6,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 40,
          mass: 1.5,
        }}
      ></motion.div>
      <motion.ul
        transition={{
          delayChildren: 0.15,
        }}
        className="relative py-6 px-4 flex flex-col gap-8 heading-2"
      >
        {["About", "Pricing", "Blog", "Events"].map((item, index, arr) => (
          <motion.li
            key={index}
            variants={{
              hidden: {
                x: -100,
                opacity: 0,
                transition: {
                  delay: (arr.length - index) * 0.15,
                },
              },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  delay: index * 0.15,
                },
              },
            }}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 40,
              mass: 0.5,
            }}
          >
            <a href="/">{item}</a>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        variants={{
          hidden: {
            x: -100,
            opacity: 0,
            transition: {
              delay: 0,
            },
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
        initial={"hidden"}
        animate={"visible"}
        exit={"hidden"}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 40,
          mass: 0.5,
        }}
        className="relative flex gap-6 px-4 py-6 justify-end"
      >
        <Button type={"secondary"}>Sign Up</Button>
        <Button>Log In</Button>
      </motion.div>
    </div>
  );
};

const Hamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      aria-hidden
      className="relative flex flex-col w-6 h-[18px] items-center"
    >
      <MotionConfig
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
          mass: 1,
        }}
      >
        <motion.span
          initial={false}
          style={{
            transformOrigin: "50% 50%",
          }}
          animate={{
            rotate: isOpen ? -45 : 0,
            top: isOpen ? 8 : 0,
          }}
          className="absolute  w-6 h-[2px] rounded-full bg-clear-white"
        />
        <motion.span
          style={{
            transformOrigin: "50% 50%",
          }}
          initial={false}
          animate={{
            scaleX: isOpen ? 0.1 : 1,
            top: 8,
          }}
          className="absolute w-6 h-[2px] rounded-full bg-clear-white"
        />
        <motion.span
          initial={false}
          style={{
            transformOrigin: "50% 50%",
          }}
          animate={{
            rotate: isOpen ? 45 : 0,
            top: isOpen ? 8 : 16,
          }}
          className="absolute   w-6 h-[2px] rounded-full bg-clear-white"
        />
      </MotionConfig>
    </div>
  );
};
