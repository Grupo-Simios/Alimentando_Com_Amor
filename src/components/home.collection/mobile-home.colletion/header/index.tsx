import { ZillaFont } from "@/assets/fonts";
import { Menu } from "@/components/calltoaction.collection/Menu";
import clsx from "clsx";

export const HeaderHome = () => {
  const HeaderHome = clsx(
    /* Base styles */
    "flex z-10 w-full h-20 items-center justify-end fixed backdrop-blur-3xl  px-2"
  );

  const TitleHome = clsx(
    /* Base styles */
    `${ZillaFont.className} uppercase absolute flex mx-auto  flex-col w-fit  items-center inset-0 justify-center text-xl`,

    /* Width change styles */

    `xsm:text-2xl  max-[230px]:text-sm  max-[165px]:text-[10px]`
  );

  const SecondTittleHome = clsx(
    /* Base styles */
    `uppercase text-[#FF9F1C]`,
    /* Width change styles */
    `max-[230px]:text-sm    max-[210px]:text-[10px]`
  );

  return (
    <header className={HeaderHome}>
      <h1 className={TitleHome}>
        Alimentando
        <span className={SecondTittleHome}>
          com amor
        </span>
      </h1>
      <Menu />
    </header>
  );
};
