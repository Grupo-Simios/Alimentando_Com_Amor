import { ZillaFont } from "@/assets/fonts";
import { Menu } from "@/components/calltoaction.collection/Menu";
import clsx from "clsx";


export const HeaderSimios = () => {
  const header = clsx(
    "flex flex-col top-0 w-full h-18 justify-end items-center backdrop-blur fixed  px-1 ",
    "md:hidden"
  );

  const headerTitle = clsx(
    `${ZillaFont.className} uppercase font-bold absolute flex  gap-3 items-center z-[-1] justify-center text-2xl left-[50%] translate-x-[-50%] text-[#114B5F]`,

    "max-[160px]:text-[8px] max-[190px]:text-[10px] max-[225px]:text-xs max-[270px]:text-sm max-[305px]:text-base max-[345px]:text-lg max-[400px]:text-xl"
  );

  const headerSubTitle = clsx(
    `${ZillaFont.className} font-bold  p-1 text-lg leading-6 text-[#1B1B1BCC]`,
    "max-[190px]:text-[6px] max-[225px]:text-[8px] max-[270px]:text-[10px] max-[305px]:text-xs max-[345px]:text-sm max-[400px]:text-base"
  );

  const ContainerTitle = clsx(
    "flex w-full pt-2 justify-end items-center h-full border-t-[2px] border-[#FF9F1C]"
  );
  return (
    <header className={header}>
      <h2 className={headerSubTitle}>
        Este site foi feito inteiramente de graça pelo
      </h2>
      <div className={ContainerTitle}>
        <h1 className={headerTitle}>Grupo Símios</h1>
        <Menu />
      </div>
    </header>
  );
};
