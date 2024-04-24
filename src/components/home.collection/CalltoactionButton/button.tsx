import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

interface IButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  backGround?: string;
}

export default function Button({
  children,
  backGround,
  ...props
}: IButtonProps) {
  const calltoactionButton = clsx(
    {
      "bg-yellow-primary h-12 w-72 text-center grid place-content-center hover:bg-yellow-primary-hover text-white rounded-lg cursor-pointer":
        backGround === "primary",
    },
    {
      "bg-trasparent h-12 w-72 text-center grid place-content-center border-4 border-yellow-primary hover:border-yellow-primary-hover text-black rounded-lg cursor-pointer":
        backGround === "second",
    }
  );

  return (
    <button {...props} className={calltoactionButton}>
      {children}
    </button>
  );
}
