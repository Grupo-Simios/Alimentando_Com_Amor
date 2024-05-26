import { outfitFont } from "@/assets/fonts";
import { Menu } from "../callToAction/Menu";
import { cn } from "@/lib/utils";

function PageTitle({ children, ...props }) {
  return (
    <>
      <header {...props} className={cn("flex w-full h-16 justify-end items-center backdrop-blur fixed px-1 md:hidden max-[200px]:h-10 z-50", outfitFont.className)}>
        <h1
          className={`uppercase absolute flex  gap-3 items-center z-[-1] justify-center inset-0 text-xl 
          max-[200px]:text-[10px] max-[210px]:px-0 xsm:text-2xl max-[320px]:text-base`}
        >
          {children}
        </h1>
        <Menu />
      </header>
    </>
  );
}

export default PageTitle;
