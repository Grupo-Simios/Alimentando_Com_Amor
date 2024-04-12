import { Menu } from "@/components/calltoaction.collection/Menu";
import { FooterMobile } from "@/components/footer.collection/footer/mobile";

import { Zilla_Slab } from "next/font/google";
import clsx from "clsx";


export default function OurHistory() {
  
 const headerOurHistory = clsx(
  "flex items-center flex-col gap-10 max-[150px]:overflow-x-hidden",
  'md:gap-6 md:w-3/4 md:ml-auto md:mr-auto'

);

 const mainheader = clsx(

  "flex w-full h-16 justify-end items-center backdrop-blur fixed px-1",
  "md:relative md:backdrop-none md:mt-10"

);

 const Title = clsx(
'uppercase text-xl xsm:text-2xl max-[320px]:text-base font-zilla-slab',
 'absolute flex gap-3 items-center z-[-1] justify-center inset-0 max-[200px]:text-[10px] max-[210px]:px-0'

  
  
);



 const paragraph = clsx(
  "font-normal",
  "text-lg",
  "leading-6",
  "max-[250px]:text-sm",
  "text-[#414141]"
);

 const sectiontitles = clsx(
  "py-2",
  "border-b-[2px]",
  "border-[#FF9F1C]",
  "font-normal",
  "text-2xl",
  "leading-6",
  "text-[#1b1b1bCC]",
  "max-[185px]:text-center",
  "max-[185px]:text-base",
  "max-[185px]:w-32",
  "max-[235px]:text-lg",
  "md: text-center md:font-outifit md:mt-10",
  
  
);


const whoUsTextContainer = clsx(
'flex flex-col gap-6 px-5 md:w-[85%] md:px-10 mt-24',
'md:mt-0', 'md:mb-20', 
'xl:w-[70%]'
  
);


const whoActionsText = clsx(
'max-[165px]:text-xs max-[190px]:text-sm max-[230px]:text-base text-outfit text-[#1B1B1BCC] font-bold text-xl',
"leading-7 w-full",
'md:mt-[-100px]'

  
);

 const donateSection = clsx(
  "flex",
  "pb-4",
  "gap-10",
  "flex-col",
  "mt-10",
  "mx-4",
  "w-fit",
  "border-[6px]",
  "border-[#FF9F1C]",
  "max-[250px]:w-[100%]",
  "max-[250px]:mx-0"

  
);

 const donateButton = clsx(
  "flex",
  "py-2",
  "px-20",
  "rounded-lg",
  "bg-[#FF9F1C]",
  "text-[#F5F5F5]",
  "font-normal",
  "text-2xl",
  "leading-7",
  "mx-1",
  "max-[165px]:text-lg",
  "max-[165px]:px-8",
  "max-[250px]:px-10",
  "xms:text-justify"
);

 const donateTitle = clsx(
  "font-bold",
  "text-2xl",
  "leading-7",
  "text-[#1B1B1BCC]",
  "max-[250px]:text-sm"
);

 const donateInsideArticle = clsx(
  "flex",
  "items-center",
  "flex-col",
  "gap-10",
  "xsm:max-w-md"
);



 const donateParagraph = clsx(
  "font-bold",
  "text-lg",
  "leading-6",
  "text-[#1B1B1BCC]",
  "max-[250px]:text-xs",
  "w-[80%]"
);

 const UsActions = clsx(
  "flex",
  "items-center",
  "justify-center",
  "mx-4",
  "p-4",
  "border-b-[6px]",
  "max-w-[500px]",
  "border-r-[6px]",
  "border-[#FF9F1C]",
  "w-[80%]",
  "max-[200px]:mx-0",
  "selected-none"
);

 const objectivetitles = clsx(
  "border-l-[6px]",
  "border-[#FF9F1C]",
  "p-2",
  "font-bold",
  "text-xl",
  "max-[200px]:text-base",
  "max-[200px]:px-0",
  "max-[200px]:w-32",
  "max-[200px]:text-center"
);

 const listContainer = clsx(
  "marker:text-[#000000]",
  "flex",
  "flex-col",
  "gap-4",
  "ml-2",
  "pl-6",
  "list-disc",
  "max-[200px]:w-32"
);

 const listItem = clsx(
  "font-normal",
  "text-lg",
  "leading-6",
  "text-[#1b1b1bcc]",
  "max-[200px]:text-xs",
  "max-[200px]:w-24"
);

 const articleContainer = clsx("flex", "flex-col", "gap-14");

  return (
    <section className={headerOurHistory}>
      <header className={mainheader}>
        <h1 className={Title}>
          Nossa
          <span className="uppercase text-[#FF9F1C]">história</span>
        </h1>
        <Menu />
      </header>

      <section className={whoUsTextContainer}>
        <h2 className={sectiontitles}>Quem somos</h2>
        <p className={paragraph}>
          Alimentando com amor é uma associação sem fins lucrativos com mais de
          5 anos de funcionamento. No começo, usávamos um carrinho de mão para
          distribuir marmitas à pessoas em situação de rua, sem nenhum tipo de
          apoio.
        </p>

        <p className={paragraph}>
          Conforme o projeto cresceu, passamos a fornecer um lugar para as
          pessoas tomarem banho e atenderem suas necessidades fisiológicas. Para
          isto, alugamos uma casa que contasse com banheiro externo, e adequamos
          os quartos para virarem dormitórios.
        </p>

        <p className={paragraph}>
          Hoje, contamos com mais de 25 pessoas atendidas no local, entre
          mulheres, crianças e homens, que contam com alimentação.
        </p>

        <p className={paragraph}>
          Grande parte dessas pessoas são dependentes químicos que por diversas
          razões se encontram sem apoio familiar ou estão longe de suas
          famílias. Mas também ajudamos pessoas vulneráveis por problemas
          conjugais ou separações.
        </p>
        <p className={paragraph}>
          Grande parte dessas pessoas são dependentes químicos que por diversas
          razões se encontram sem apoio familiar ou estão longe de suas
          famílias. Mas também ajudamos pessoas vulneráveis por problemas
          conjugais ou separações.
        </p>
      </section>

      <div
        className=" md:flex md:flex-col-reverse items-center justify-center
       pt-16"
      >
        <section className={donateSection}>
          <figure className="flex w-fit">
            <img
              src={"https://github.com/DaviSC17.png"}
              alt="Imagem de doação"
            />
          </figure>

          <article className={donateInsideArticle}>
            <span className={donateTitle}>Faça sua doação</span>

            <p className={donateParagraph}>
              O dinheiro arrecadado é utilizado diretamente no preparo das
              marmitas e no pagamento de contas da instituição
            </p>

            <button className={donateButton}>Doar</button>
          </article>
        </section>

        <section className={UsActions}>
          <p className={whoActionsText}>
            APOIAMOS PESSOAS EM SITUAÇÃO DE RUA, MORADORES DA COMUNIDADE PASSOS
            DA PATRIA SEM DISCRIMIDAR IDADE, SEXO, RAÇA, COR, CRÊDO, OU
            ORIENTAÇÃO SEXUAL
          </p>
        </section>
      </div>

      <section className={whoUsTextContainer}>
        <h2 className={sectiontitles}>Nossos Objetivos:</h2>

        <p className={paragraph}>
          Alimentando Com Amor tem como principal objetivo ajudar, apoiar e
          orientar as pessoas em situação de rua e da comunidade Passos da
          Pátria em questões sociais, jurídicas, psicológicas e alimentícias.
        </p>
        <article className={articleContainer}>
          <span className={objectivetitles}>O que buscamos oferecer</span>

          <ul role="list" className={listContainer}>
            <li className={listItem}>
              Café da manhã, almoço e janta para os moradores de rua em nossa
              casa de apoio
            </li>
            <li className={listItem}>
              100 marmitas de forma regular aos moradores de rua em diferentes
              setores da cidade alta
            </li>
            <li className={listItem}>
              100 cestas básicas mensalmente para os moradores cadastrados na
              comunidade Passo da Pátria
            </li>
            <li className={listItem}>
              Kit de higiene e limpeza para os moradores e a comunidade
            </li>
          </ul>
        </article>
        <article className={articleContainer}>
          <span className={objectivetitles}>O que precisamos</span>

          <ul className={listContainer}>
            <li className={listItem}>
              Profissionais para atendimento psicológico para os moradores da
              casa de apoio e outras pessoas em situação de rua
            </li>
            <li className={listItem}>
              Atendimento <strong>social </strong> e <strong>jurídico</strong>
              para todas pessoas cadastradas
            </li>
            <li className={listItem}>
              Aumentar a capacidade da casa de apoio para beneficiar mais
              pessoas.
            </li>
          </ul>
        </article>
        <article className="flex flex-col gap-10">
          <h2 className={sectiontitles}>Nossas Metas :</h2>

          <p
            className={` font-normal text-xl leading-6
        
        max-[180px]:text-xs
        max-[180px]:w-32
        max-[180px]:text-center
        max-[190px]:text-sm
        max-[250px]:text-base`}
          >
            Enquanto nossos <strong>objetivos são mais urgentes </strong>,
            nossas metas são orientações para o longo prazo.
          </p>

          <ul className={listContainer}>
            <li className={listItem}>
              Fornecer mensalmente 800 marmitas à pessoas em situação de rua.
            </li>
            <li className={listItem}>
              Fornecer 250 cestas básicas aos moradores da comunidade Passo da
              Pátria.
            </li>
            <li className={listItem}>
              Ter um espaço para albergar 70 pessoas vulneráveis, onde também
              possam ter suas necessidades básicas atendidas;
            </li>

            <li className={listItem}>
              Fornecer serviço de
              <strong>
                assistência social, jurídico, psicológico e psiquiátrico
              </strong>
            </li>
            <li className={listItem}>Ter apoio médico.</li>
            <li className={listItem}>
              Desenvolver cursos profissionalizantes.
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
}
