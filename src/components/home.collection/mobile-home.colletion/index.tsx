import { ZillaFont, outfitFont } from "@/assets/fonts";
import { FaArrowTurnDown } from "react-icons/fa6";
import { HeaderHome } from "./header";
import { WhatWeDo } from "./whatWeDo";
import { Actions } from "./ourActions";
import clsx from "clsx";

export const MobileHome = () => {
  const ContainerFirstSectionHome = clsx(
    /* Base styles */
    `flex flex-col gap-14 items-center`,

    /* Width change styles */
    `md:hidden`
  );

  return (
    <>
      {/* start - hero section */}

      <section className={ContainerFirstSectionHome}>
        <HeaderHome />

        <WhatWeDo />

        <Actions />
      </section>
      {/* end to hero home */}

      {/* mobile home version */}
    </>
  );
};
