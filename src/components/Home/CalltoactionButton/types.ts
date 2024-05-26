import { ComponentProps, ReactNode } from "react";

export interface IButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  backGround?: string;
  isCliped?: string;
}
