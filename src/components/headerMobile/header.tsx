import { ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import { outfitFont } from "@/assets/fonts";
import { Menu } from "../calltoaction.collection/Menu";
export interface IheaderProps extends ComponentProps<'header'>{
  children: ReactNode;
}

export default function Header({
  children,
  ...props
}){

  const headerContainer = clsx(
    "flex w-full h-16 justify-end items-center backdrop-blur fixed  px-1 md:hidden max-[200px]:h-10 z-50",
    outfitFont.className
  )
  
  return(
    <>
    <header {...props} className={headerContainer}>
    <h1
  className={`uppercase absolute flex  gap-3 items-center z-[-1] justify-center inset-0 text-xl 
max-[200px]:text-[10px] max-[210px]:px-0 xsm:text-2xl max-[320px]:text-base`}
>
  {children}
</h1>
<Menu />
    </header>
    </>
  )
}
