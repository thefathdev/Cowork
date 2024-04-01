import { VariantProps, cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren, ButtonClasses {}

type ButtonClasses = VariantProps<typeof buttonClasses>;

const buttonClasses = cva(["border rounded-full paragraph-strong"], {
  variants: {
    type: {
      primary: ["text-clear-white bg-flexing-blue border-flexing-blue"],
      secondary: ["text-rigid-black bg-clear-white border-rigid-black"],
      accent: ["text-clear-white bg-bold-red border-bold-red"],
    },
    size: {
      normal: ["px-6 py-3"],
      big: ["px-12 py-8"],
    },
  },
  defaultVariants: {
    type: "primary",
    size: "normal",
  },
});

export default function Button(props: ButtonProps) {
  const { children, type, size } = props;

  return <button className={buttonClasses({ type, size })}>{children}</button>;
}
