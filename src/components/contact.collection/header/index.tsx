import { ZillaFont } from "@/assets/fonts";
import { Menu } from "@/components/calltoaction.collection/Menu";
import clsx from "clsx";

export const HeaderContact = () => {
  const contactHeader = clsx(
    "flex w-full h-16 justify-end items-center backdrop-blur fixed px-1",
    "md:hidden max-[200px]:h-10 z-10"
  );

  const TittleHeader = clsx(
    `${ZillaFont.className} uppercase absolute flex  gap-3 items-center justify-center inset-0 text-xl `,
    `max-[200px]:text-[13px] max-[210px]:px-0 xsm:text-2xl max-[320px]:text-base`
  );

  return (
    <header className={contactHeader}>
      <h1
        className={TittleHeader}
      >
        Contato
      </h1>
      <Menu />
    </header>
  );
};
