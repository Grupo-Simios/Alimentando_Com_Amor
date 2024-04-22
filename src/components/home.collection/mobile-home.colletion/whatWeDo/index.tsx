import { outfitFont } from "@/assets/fonts";
import clsx from "clsx";

export const WhatWeDo = () => {
  const ContainerWhatWeDo = clsx(
    /* Base styles */
    `flex py-4 w-[90%] mt-32 flex-col border-4 border-[#1b1b1bcc] items-center gap-4`,

    /* Width change styles */
    `xsm:max-w-[440px]`
  );

  const ContainerWhatWeDoContent = clsx(
    /* Base styles */
    `${outfitFont.className} text-[#114b5f] text-lg leading-6 font-black`,

    /* Width change styles */
    `xsm:text-xl   max-[295px]:text-xs   max-[210px]:text-[8px]`
  );

  return (
    <div className={ContainerWhatWeDo}>
      <span className={ContainerWhatWeDoContent}>ações voluntárias</span>
      <span className={ContainerWhatWeDoContent}>kits de higiene feminina</span>
      <span className={ContainerWhatWeDoContent}>brinquedos para as crianças</span>
    </div>
  );
};
