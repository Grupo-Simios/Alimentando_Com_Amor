import { ComponentProps } from "react";

export interface IParagraphProps extends ComponentProps<'section'>{
  children :React.ReactNode,
  title?: string;
  border?: boolean;
}