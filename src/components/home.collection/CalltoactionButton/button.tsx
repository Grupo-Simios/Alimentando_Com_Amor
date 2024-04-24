import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

interface IButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  backGround?: boolean;
}

export default function Button({
  children,
  backGround,
  ...props
}: IButtonProps) {
  const calltoactionButton = clsx(
    "bg-yellow-primary h-12 w-72 text-center grid place-content-center hover:bg-yellow-primary-hover text-white rounded-lg cursor-pointer",
    {
      "bg-transparent border-2 border-yellow-primary text-black hover:border-yellow-primary-hover":
        backGround
    }
  );

  return <button {...props} className={calltoactionButton}>{children}</button>;
}
