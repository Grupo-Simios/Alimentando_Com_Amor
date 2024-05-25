import clsx from "clsx";

import { IButtonProps } from "./types";

function Button({
  children,
  backGround,
  className,
  isCliped,
  ...props
}: IButtonProps) {
  const calltoactionButton = clsx(
    {

      "bg-[#f97c07] h-12 w-72 text-center grid place-content-center hover:bg-[#f97c07]-hover text-[#edfaee] rounded-lg cursor-pointer ml-auto mr-auto font-bold  max-[370px]:w-64  max-[325px]:w-52 max-[280px]:w-44  max-[215px]:w-32 text-sm h-10  max-[170px]:w-28 ":

        backGround === "primary",
    },
    {
      "bg-trasparent h-12 w-72 text-center grid place-content-center border-4 border-yellow-primary hover:border-yellow-primary-hover text-black rounded-lg cursor-pointer":
        backGround === "second",
    },
    {
      "bg-yellow-primary h-12 w-64 text-center grid place-content-center hover:bg-yellow-primary-hover text-[#edfaee] rounded-lg cursor-pointer font-bold":
        backGround === "copyPix",
    },
    {
      "bg-green-500 h-12 w-64 text-center grid place-content-center hover:bg-green-600 text-[#edfaee] rounded-lg cursor-pointer font-bold":
        isCliped === "key",
    },




  );

  return (
    <button {...props} className={calltoactionButton}>
      {children}
    </button>
  );
}

export default Button;