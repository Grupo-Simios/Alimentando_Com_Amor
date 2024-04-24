import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";
import { ZillaFont } from "@/assets/fonts";

export interface ITitleProps extends ComponentProps<"h2"> {
  children: ReactNode;
  align?: string;
}
export default function Title({ children, align,className, ...props }: ITitleProps) {
  

  return <h2 {...props} className={className} >
    {children}
  </h2>;
}
