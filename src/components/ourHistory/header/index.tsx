import { ZillaFont } from "@/assets/fonts";
import { Menu } from "@/components/callToAction/Menu";

import clsx from "clsx";

export const HeaderOurHistory = () => {
  const HeaderOurHistory = clsx(
    /* Base styles */
    `flex   w-full h-16 justify-end items-center backdrop-blur fixed  px-1 `,

    /* Width change styles */
    `md:hidden max-[200px]:h-10`
  );

  const TittleHeaderOurHistory = clsx(
    /* Base styles */
    `${ZillaFont.className} uppercase absolute flex  gap-3 items-center w-fit m-auto justify-center inset-0 text-xl`,

    /* Width change styles */
    `max-[200px]:text-[10px] 
     max-[210px]:px-0 
     xsm:text-2xl 
     max-[320px]:text-base
    `
  );

  const DifferentStyleTitle = clsx(
    /* Base styles */
    `uppercase text-[#FF9F1C]`
  );

  return (
    <header className={HeaderOurHistory}>
      <h1 className={TittleHeaderOurHistory}>
        Nossa
        <span className={DifferentStyleTitle}>história</span>
      </h1>
      <Menu />
    </header>
  );
};
