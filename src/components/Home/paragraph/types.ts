import { ComponentProps, ReactNode } from "react";

export interface IParagraphProps extends ComponentProps<"p"> {
  children: ReactNode;
  boldText?: boolean;
}
