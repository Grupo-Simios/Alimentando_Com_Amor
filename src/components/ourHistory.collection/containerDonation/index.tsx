"use client";

import { ZillaFont, outfitFont } from "@/assets/fonts";
import Button from "@/components/home.collection/CalltoactionButton/button";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { HandHeart } from "lucide-react";

export function ContainerDonationOurHistory() {
  const SendDonationSections = clsx(
    `flex pb-4 gap-10 flex-col mt-10 mx-4 w-fit border-[6px] border-[#FF9F1C] `,
    `max-[250px]:w-[100%] max-[250px]:mx-0`,
    "md:hidden"
  );

  const WhoWeHelpsSection = clsx(
    `flex items-center justify-center  mx-4 p-4 border-b-[6px] max-w-[500px] border-r-[6px] border-[#FF9F1C]  w-[80%]`,

    `max-[200px]:mx-0`
  );

  const MakeYourDonationArticle = clsx(
    `flex items-center flex-col gap-10`,
    `xsm:max-w-md`
  );

  const MakeYourDonation = clsx(
    `${ZillaFont.className} font-bold text-2xl leading-7 text-[#1B1B1BCC]`,
    `max-[250px]:text-sm`
  );

  const WhatDoWeDoWithTheMoney = clsx(
    `${outfitFont.className}  
  w-52 font-bold text-lg leading-6 text-[#1B1B1BCC]`,
    `max-[250px]:text-xs w-[80%]`
  );

  const FigureOfImageDonation = clsx(`flex w-fit`);

  const ButtonSendDonation = clsx(
    `flex py-2 px-20 rounded-lg bg-[#FF9F1C] text-[#F5F5F5]  font-normal text-2xl leading-7 mx-1 `,
    `max-[165px]:text-lg max-[165px]:px-8 max-[250px]:px-10 xms:text-justify`
  );

  const TextWhoWeHelps = clsx(
    `${outfitFont.className} font-bold text-xl leading-7 w-full text-[#1B1B1BCC]`,
    ` max-[165px]:text-xs max-[190px]:text-sm max-[230px]:text-base`
  );

  return (
    <div className="flex gap-12 flex-col justify-center items-center md:flex-col-reverse">
      <section className={SendDonationSections}>
        <figure className={FigureOfImageDonation}>
          <Image src="" width={100} height={100} alt="Imagem de doação" />
        </figure>

        <article className={MakeYourDonationArticle}>
          <h3 className={MakeYourDonation}>Faça sua doação</h3>

          <p className={WhatDoWeDoWithTheMoney}>
            O dinheiro arrecadado é utilizado diretamente no preparo das
            marmitas e no pagamento de contas da instituição
          </p>

          <Link href={"/ajude-nos"}>
            <Button backGround="primary">Doar</Button>
          </Link>
        </article>
      </section>

      <section className="hidden border-[4px] border-[#FF9F1C] w-[70%] h-60 rounded-2xl md:flex items-center px-12">
        <div className="w-40 h-40 border grid place-content-center rounded-full bg-[#FFBF69]">
          <HandHeart size={96} strokeWidth={1} className="text-[#114B5F]" />
        </div>

        <div className="flex-1 flex flex-col items-end justify-center gap-4">
          <h3 className={`${MakeYourDonation}  text-end text-navbar-newblue`}>
            Faça sua doação
          </h3>

          <p className={`${WhatDoWeDoWithTheMoney}  text-end font-normal`}>
            O dinheiro arrecadado é utilizado diretamente no preparo das
            marmitas e no pagamento de contas da instituição
          </p>

          <Link href={"/ajude-nos"}>
            <button className={ButtonSendDonation}>Doar</button>
          </Link>
        </div>
      </section>
      <section className={WhoWeHelpsSection}>
        <p className={TextWhoWeHelps}>
          APOIAMOS PESSOAS EM SITUAÇÃO DE RUA, MORADORES DA COMUNIDADE PASSOS DA
          PATRIA SEM DISCRIMIDAR IDADE, SEXO, RAÇA, COR, CRÊDO, OU ORIENTAÇÃO
          SEXUAL
        </p>
      </section>
    </div>
  );
}
