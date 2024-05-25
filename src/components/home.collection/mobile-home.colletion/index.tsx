import clsx from "clsx";

import Header from "@/components/headerMobile/header";
import { WhatWeDo } from "./whatWeDo";
import { Actions } from "./ourActions";

const MobileHome = () => {
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
        <Header>
          <span className="w-1/2 flex flex-col items-center">
            <span>Alimentando</span> <span className="text-yellow-primary">com amor</span>
          </span>
        </Header>
        <WhatWeDo />

        <Actions />
      </section>
      {/* end to hero home */}

      {/* mobile home version */}
    </>
  );
};

export { MobileHome };