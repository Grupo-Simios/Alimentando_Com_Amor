import { ComponentProps } from "react";

export interface Iprofile extends ComponentProps<"section"> {
  linkedin?: string;
  github?: string | any;
  name: string;
  mainFunction?: string;
  image: string | HTMLImageElement;
  adm?: boolean;
}
