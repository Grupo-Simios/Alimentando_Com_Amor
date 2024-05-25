import { ComponentProps, ReactNode } from "react";

export interface ITitleProps extends ComponentProps<"h2"> {
  children: ReactNode;
  align?: string;
}
