import { outfitFont } from "@/assets/fonts";

import clsx from "clsx";

export default function WhoWeHelps(){
  const WhoWeHelpsSection = clsx(
    /* Base styles */
    `flex items-center justify-center  mx-4 p-4 border-b-[6px] max-w-[500px] border-r-[6px] border-[#FF9F1C]  w-[80%]`,

    /* Width change styles */
    `max-[200px]:mx-0`
  );

  const TextWhoWeHelps = clsx(
    /* Base styles */
    `${outfitFont.className} font-bold text-xl leading-7 w-full text-[#1B1B1BCC]`,

    /* Width change styles */
    `
    max-[165px]:text-xs
    max-[190px]:text-sm
    max-[230px]:text-base
    `
  );
  return (
    <section className={WhoWeHelpsSection}>
      <p
        className={TextWhoWeHelps}
      >
        APOIAMOS PESSOAS EM SITUAÇÃO DE RUA, MORADORES DA COMUNIDADE PASSOS DA
        PATRIA SEM DISCRIMIDAR IDADE, SEXO, RAÇA, COR, CRÊDO, OU ORIENTAÇÃO
        SEXUAL
      </p>
    </section>
  );
};
