

import clsx from "clsx";
import Header from "@/components/headerMobile/header";
import Paragraph from "@/components/home.collection/paragraph/paragraph";
import { ZillaFont } from "@/assets/fonts";
import { outfitFont } from "@/assets/fonts";
import Button from "@/components/home.collection/CalltoactionButton/button";
import { HandHeart } from "lucide-react";

export default function OurHistory(){
  const ContainerOurHistory = clsx(
    `flex items-center flex-col gap-10 `,
    `max-[150px]:overflow-x-hidden`
  );

// .................................................................
const sectionAboutUs = clsx(
  `flex flex-col gap-6 mt-24 px-5`,
  `max-[200px]:mt-14 md:w-1/2`
);

const SubTitleWhoWeAre = clsx(
  `${ZillaFont.className} text-2xl pb-2 border-b-[2px] leading-7 border-[#FF9F1C] font-normal `,
  'md:text-center',
  `max-[200px]:text-base max-[210px]:text-lg`
);

const TextAboutUs = clsx(
  `${outfitFont.className} font-normal text-lg leading-6 `,
  `max-[250px]:text-sm`
);

const textEmphasis = clsx(
  `${outfitFont.className} text-xl leading-6 font-bold`,
  `max-[250px]:text-sm`
);

const SendDonationSections = clsx(
  `flex pb-4 gap-10 flex-col mt-10 mx-4 w-fit border-[6px] border-[#FF9F1C] `,
  `max-[250px]:w-[100%] max-[250px]:mx-0`,
  "md:hidden"
);

const FigureOfImageDonation = clsx(
  `flex w-fit`
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

const ButtonSendDonation = clsx(
  `flex py-2 px-20 rounded-lg bg-[#FF9F1C] text-[#F5F5F5]  font-normal text-2xl leading-7 mx-1 `,
  `max-[165px]:text-lg max-[165px]:px-8 max-[250px]:px-10 xms:text-justify`
);

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

const OurGoalsSection = clsx(
  /* Base styles */
  `flex flex-col gap-8 p-4 mb-20`,

  /* Width change styles */
  `max-[230px]:px-0 `,
  'md:w-1/2'
);

const SubTittleOurGoals = clsx(
  /* Base styles  */
  `${ZillaFont.className} py-2 border-b-[2px] border-[#FF9F1C] font-normal text-2xl leading-6 text-[#1b1b1bCC] `,

  /* Width change styles */
  `
  max-[185px]:text-center
  max-[185px]:text-base
  max-[185px]:w-32
  max-[235px]:text-lg
  `,
  'md:text-center'
);

const TextMainOurGoals = clsx(
  /* Base styles  */
  `${outfitFont.className} text-lg leading-6 text-[#1b1b1bCC] p-2 `,

  /* Width change styles */
  `    
  max-[180px]:text-xs
  max-[180px]:w-32
  max-[180px]:text-center
  max-[190px]:text-sm
  max-[250px]:text-base
   `
);

const weSeekToOfferArticle = clsx(
  /* Base styles  */
  `flex flex-col gap-8`,

  /* Width change styles */
  `    
  max-[200px]:w-32
  `
);

const WeSeekToOffer = clsx(
  /* Base styles  */
  `${ZillaFont.className} border-l-[6px] border-[#FF9F1C] p-2 font-bold text-xl`,

  /* Width change styles */
  `
  max-[200px]:text-base
  max-[200px]:px-0
  max-[200px]:w-32
  max-[200px]:text-center
  `
);

const ListWeSeekToOffer = clsx(
  /* Base styles  */
  `marker:text-[#000000] flex flex-col gap-4 ml-2  pl-6 list-disc `,

  /* Width change styles */
  `
  max-[200px]:w-32
  `
);

const ItemWeSeekToOffer = clsx(
  /* Base styles  */
  `${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]`,

  /* Width change styles */
  `
  max-[200px]:text-xs
  max-[200px]:w-24
  `
);

const WhatWeNeedArticle = clsx(
  /* Base styles  */
  `flex flex-col gap-14`
);

const WhatWeNeed = clsx(
  /* Base styles  */
  `${ZillaFont.className} border-l-[6px] border-[#FF9F1C] p-2 font-bold text-xl`,

  /* Width change styles */
  ` 
  max-[200px]:text-base
  max-[200px]:px-0
  max-[200px]:w-[131px]
  `
);

const ListWhatWeNeed = clsx(
  /* Base styles  */
  `marker:text-[#000000] flex flex-col gap-4 ml-2  pl-6 list-disc`,

  /* Width change styles */
  ` 
  max-[200px]:w-28
  `
);

const ItemWhatWeNeed = clsx(
  /* Base styles  */
  `${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]`,

  /* Width change styles */
  ` 
   max-[200px]:text-xs
   max-[200px]:w-24
   `
);

const OurGoalsArticle = clsx(
  /* Base styles  */
  `flex flex-col gap-10`
);

const OurLongTermGoals = clsx(
  /* Base styles  */
  `${ZillaFont.className} font-normal text-xl leading-6`,

  /* Width change styles */
  ` 
   max-[180px]:text-xs
   max-[180px]:w-32
   max-[180px]:text-center
   max-[190px]:text-sm
   max-[250px]:text-base
   `
);

const ListOurLongTermGoals = clsx(
  /* Base styles  */
  `marker:text-[#000000] flex flex-col gap-4 ml-2  pl-6 list-disc`
);

const ItemOurLongTermGoals = clsx(
  /* Base styles  */
  `${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]`,

  /* Width change styles */
  `
  max-[200px]:text-xs
  max-[200px]:w-24
  `
);



  return (
    <div className={ContainerOurHistory}>
    <Header>Nossa História</Header>
    <section className={sectionAboutUs}>
      <h2 className={SubTitleWhoWeAre}>Quem somos</h2>
    <Paragraph>
    Alimentando com amor é uma associação sem fins lucrativos com mais de 5
        anos de funcionamento. No começo, usávamos um carrinho de mão para
        distribuir marmitas à pessoas em situação de rua, sem nenhum tipo de
        apoio.
    </Paragraph>
   <Paragraph>
   Conforme o projeto cresceu, passamos a fornecer um lugar para as pessoas
        tomarem banho e atenderem suas necessidades fisiológicas. Para isto,
        alugamos uma casa que contasse com banheiro externo, e adequamos os
        quartos para virarem dormitórios.
   </Paragraph>


    <Paragraph boldText={true}>
    Hoje, contamos com mais de 25 pessoas atendidas no local, entre
        mulheres, crianças e homens, que contam com alimentação.
    </Paragraph>

    <Paragraph>
    Grande parte dessas pessoas são dependentes químicos que por diversas
        razões se encontram sem apoio familiar ou estão longe de suas famílias.
        Mas também ajudamos pessoas vulneráveis por problemas conjugais ou
        separações.
    </Paragraph>
   
   <Paragraph>
   Atualmente buscamos uma assessoria de assistência social permanente, bem
        como profissionais de saúde mental e do setor jurídico, para fornecermos
        um apoio social, jurídico e psicológico que seja constante e de
        qualidade.
   </Paragraph>
    </section>

      <div className="flex gap-12 flex-col justify-center items-center md:flex-col-reverse">
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

       <Button>
        Doar
       </Button>
      </article>
    </section>

    <section className="hidden border-[4px] border-[#FF9F1C] w-[70%] h-60 rounded-2xl md:flex items-center px-12">
<div className="w-40 h-40 border grid place-content-center rounded-full bg-[#FFBF69]">
<HandHeart size={96} strokeWidth={1} className="text-[#114B5F]" />
</div>

<div className="flex-1 flex flex-col items-end justify-center gap-4">
<h3 className={`${MakeYourDonation}  text-end text-navbar-newblue`}>Faça sua doação</h3>

<p className={`${WhatDoWeDoWithTheMoney}  text-end font-normal`}>
  O dinheiro arrecadado é utilizado diretamente no preparo das marmitas
  e no pagamento de contas da instituição
</p>

<button
  className={ButtonSendDonation}
>
  Doar
</button>
</div>
    </section>
    <section className={WhoWeHelpsSection}>
      <p
        className={TextWhoWeHelps}
      >
        APOIAMOS PESSOAS EM SITUAÇÃO DE RUA, MORADORES DA COMUNIDADE PASSOS DA
        PATRIA SEM DISCRIMIDAR IDADE, SEXO, RAÇA, COR, CRÊDO, OU ORIENTAÇÃO
        SEXUAL
      </p>
    </section>
      </div>

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
          <li
            className={ItemOurLongTermGoals}
          >
            Desenvolver cursos profissionalizantes.
          </li>
        </ul>
      </article>
    </section>
    </div>

  );
}
