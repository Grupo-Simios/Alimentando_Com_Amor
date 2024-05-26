"use client";
import { ZillaFont, outfitFont } from "@/assets/fonts";
import clsx from "clsx";

export function OurGoalsOurHistory() {
  const OurGoalsSection = clsx(
    `flex flex-col gap-8 p-4 mb-20`,
    `max-[230px]:px-0 `,
    "md:w-1/2"
  );

  const SubTittleOurGoals = clsx(
    `${ZillaFont.className} py-2 border-b-[2px] border-[#FF9F1C] font-normal text-2xl leading-6 text-[#1b1b1bCC] `,

    `max-[185px]:text-center max-[185px]:text-base max-[185px]:w-32 max-[235px]:text-lg`,
    "md:text-center"
  );

  const TextMainOurGoals = clsx(
    `${outfitFont.className} text-lg leading-6 text-[#1b1b1bCC] p-2 `,

    `max-[180px]:text-xs max-[180px]:w-32 max-[180px]:text-center max-[190px]:text-sm max-[250px]:text-base`
  );

  const weSeekToOfferArticle = clsx(
    `flex flex-col gap-8`,

    `max-[200px]:w-32`
  );

  const WeSeekToOffer = clsx(
    `${ZillaFont.className} border-l-[6px] border-[#FF9F1C] p-2 font-bold text-xl`,

    `max-[200px]:text-base max-[200px]:px-0 max-[200px]:w-32 max-[200px]:text-center`
  );

  const ListWeSeekToOffer = clsx(
    `marker:text-[#000000] flex flex-col gap-4 ml-2  pl-6 list-disc `,

    `max-[200px]:w-32`
  );

  const ItemWeSeekToOffer = clsx(
    `${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]`,

    `max-[200px]:text-xs max-[200px]:w-24`
  );

  const WhatWeNeedArticle = clsx(`flex flex-col gap-14`);

  const WhatWeNeed = clsx(
    `${ZillaFont.className} border-l-[6px] border-[#FF9F1C] p-2 font-bold text-xl`,

    `max-[200px]:text-base max-[200px]:px-0 max-[200px]:w-[131px]`
  );

  const ListWhatWeNeed = clsx(
    `marker:text-[#000000] flex flex-col gap-4 ml-2  pl-6 list-disc`,

    `max-[200px]:w-28`
  );

  const ItemWhatWeNeed = clsx(
    /* Base styles  */
    `${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]`,

    `max-[200px]:text-xs max-[200px]:w-24 `
  );

  const OurGoalsArticle = clsx(`flex flex-col gap-10`);

  const OurLongTermGoals = clsx(
    `${ZillaFont.className} font-normal text-xl leading-6`,

    `max-[180px]:text-xs max-[180px]:w-32 max-[180px]:text-center max-[190px]:text-sm max-[250px]:text-base `
  );

  const ListOurLongTermGoals = clsx(
    `marker:text-[#000000] flex flex-col gap-4 ml-2  pl-6 list-disc`
  );

  const ItemOurLongTermGoals = clsx(
    `${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]`,

    `max-[200px]:text-xs max-[200px]:w-24`
  );

  return (
    <section className={OurGoalsSection}>
      <h2 className={SubTittleOurGoals}>Nossos objetivos</h2>
      <p className={TextMainOurGoals}>
        Alimentando Com Amor tem como principal objetivo ajudar, apoiar e
        orientar as pessoas em situação de rua e da comunidade Passos da Pátria
        em questões sociais, jurídicas, psicológicas e alimentícias.
      </p>
      <article className={weSeekToOfferArticle}>
        <h3 className={WeSeekToOffer}>O que buscamos oferecer</h3>

        <ul role="list" className={ListWeSeekToOffer}>
          <li className={ItemWeSeekToOffer}>
            Café da manhã, almoço e janta para os moradores de rua em nossa casa
            de apoio
          </li>
          <li className={ItemWeSeekToOffer}>
            100 marmitas de forma regular aos moradores de rua em diferentes
            setores da cidade alta
          </li>
          <li className={ItemWeSeekToOffer}>
            100 cestas básicas mensalmente para os moradores cadastrados na
            comunidade Passo da Pátria
          </li>
          <li className={ItemWeSeekToOffer}>
            Kit de higiene e limpeza para os moradores e a comunidade
          </li>
        </ul>
      </article>
      <article className={WhatWeNeedArticle}>
        <h3 className={WhatWeNeed}>O que precisamos</h3>

        <ul className={ListWhatWeNeed}>
          <li className={ItemWhatWeNeed}>
            Profissionais para atendimento psicológico para os moradores da casa
            de apoio e outras pessoas em situação de rua
          </li>
          <li className={ItemWhatWeNeed}>
            Atendimento <strong>social </strong> e <strong>jurídico </strong>
            para todas pessoas cadastradas
          </li>
          <li className={ItemWhatWeNeed}>
            Aumentar a capacidade da casa de apoio para beneficiar mais pessoas.
          </li>
        </ul>
      </article>
      <article className={OurGoalsArticle}>
        <h2 className={SubTittleOurGoals}>Metas</h2>

        <p className={OurLongTermGoals}>
          Enquanto nossos <strong>objetivos são mais urgentes </strong>, nossas
          metas são orientações para o longo prazo.
        </p>

        <ul className={ListOurLongTermGoals}>
          <li className={ItemOurLongTermGoals}>
            Fornecer mensalmente 800 marmitas à pessoas em situação de rua.
          </li>
          <li className={ItemOurLongTermGoals}>
            Fornecer 250 cestas básicas aos moradores da comunidade Passo da
            Pátria.
          </li>
          <li className={ItemOurLongTermGoals}>
            Ter um espaço para albergar 70 pessoas vulneráveis, onde também
            possam ter suas necessidades básicas atendidas;
          </li>

          <li className={ItemOurLongTermGoals}>
            Fornecer serviço de{" "}
            <strong>
              assistência social, jurídico, psicológico e psiquiátrico
            </strong>
          </li>
          <li className={ItemOurLongTermGoals}>Ter apoio médico.</li>
          <li className={ItemOurLongTermGoals}>
            Desenvolver cursos profissionalizantes.
          </li>
        </ul>
      </article>
    </section>
  );
}
