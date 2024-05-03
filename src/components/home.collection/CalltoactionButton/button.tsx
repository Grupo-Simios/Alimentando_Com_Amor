import { outfitFont } from "@/assets/fonts";
import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";


interface IButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  backGround?: string;
  isCliped?:string;
}

export default function Button({
  children,
  backGround,
  className,
  isCliped,
  ...props
}: IButtonProps) {
  const calltoactionButton = clsx(
    {
      "bg-yellow-primary h-12 w-72 text-center grid place-content-center hover:bg-yellow-primary-hover text-[#edfaee] rounded-lg cursor-pointer ml-auto mr-auto font-bold":
        backGround === "primary",
    },
    {
      "bg-trasparent h-12 w-72 text-center grid place-content-center border-4 border-yellow-primary hover:border-yellow-primary-hover text-black rounded-lg cursor-pointer":
        backGround === "second",
    },
    {
      "bg-yellow-primary h-12 w-64 text-center grid place-content-center hover:bg-yellow-primary-hover text-white rounded-lg cursor-pointer font-bold":
        backGround === "copyPix",
    },
    {
      "bg-green-500 h-12 w-64 text-center grid place-content-center hover:bg-green-600 text-white rounded-lg cursor-pointer font-bold":
       isCliped === "key",
    },
  
   

 
  );

  return (
    <button {...props} className={calltoactionButton}>
      {children}
    </button>
  );
}
