import { ZillaFont, outfitFont } from "@/assets/fonts";
import clsx from "clsx";

export const SendDonation = () => {
  const SendDonationSections = clsx(
    /* Base styles */
    `flex pb-4 gap-10 flex-col mt-10 mx-4 w-fit border-[6px] border-[#FF9F1C] `,

    /* Width change styles */
    `
    max-[250px]:w-[100%]
    max-[250px]:mx-0
    `
  );

  const FigureOfImageDonation = clsx(
    /* Base styles */
    `flex w-fit`
  );

  const MakeYourDonationArticle = clsx(
    /* Base styles */
    `flex items-center flex-col gap-10`,

    /* Width change styles */
    `xsm:max-w-md`
  );

  const MakeYourDonation = clsx(
    /* Base styles */
    `${ZillaFont.className} font-bold text-2xl leading-7 text-[#1B1B1BCC]`,

    /* Width change styles */
    `max-[250px]:text-sm`
  );

  const WhatDoWeDoWithTheMoney = clsx(
    /* Base styles */
    `${outfitFont.className}  w-52 font-bold text-lg leading-6 text-[#1B1B1BCC]`,

    /* Width change styles */
    `max-[250px]:text-xs w-[80%]`
  );

  const ButtonSendDonation = clsx(
    /* Base styles */
    `flex py-2 px-20 rounded-lg bg-[#FF9F1C] text-[#F5F5F5]  font-normal text-2xl leading-7 mx-1 `,

    /* Width change styles */
    `
    max-[165px]:text-lg
    max-[165px]:px-8
    max-[250px]:px-10 
    xms:text-justify
    `
  );

  return (
    <section className={SendDonationSections}>
      <figure className={FigureOfImageDonation}>
        <img src={"https://github.com/DaviSC17.png"} alt="Imagem de doação" />
      </figure>

      <article className={MakeYourDonationArticle}>
        <h3 className={MakeYourDonation}>Faça sua doação</h3>

        <p className={WhatDoWeDoWithTheMoney}>
          O dinheiro arrecadado é utilizado diretamente no preparo das marmitas
          e no pagamento de contas da instituição
        </p>

        <button
          className={ButtonSendDonation}
        >
          Doar
        </button>
      </article>
    </section>
  );
};
