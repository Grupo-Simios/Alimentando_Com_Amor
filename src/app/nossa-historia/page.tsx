import { Menu } from "@/components/calltoaction.collection/Menu";

import { FooterMobile } from "@/components/footer.collection/footer/mobile";
import OurHistoryStyle from '@/style/OurHistory.collection/ourhistory.module.css'

import { ZillaFont, outfitFont } from "@/assets/fonts";

export default function OurHistory() {
  return (
    <div
      className="flex items-center flex-col gap-10 
  
  max-[150px]:overflow-x-hidden
  "
    >
      <header
        className={`flex   w-full h-16 justify-end items-center backdrop-blur fixed  px-1 
        max-[200px]:h-10`}
      >
        <h1
          className={`${ZillaFont.className} uppercase absolute flex  gap-3 items-center z-[-1] justify-center inset-0 text-xl 
        
        max-[200px]:text-[10px]
        max-[210px]:px-0
      
        xsm:text-2xl
         max-[320px]:text-base`}
        >
          Nossa
          <span className="uppercase text-[#FF9F1C]">história</span>
        </h1>
        <Menu />
      </header>

      <section className="flex flex-col gap-6 mt-24 px-5">
        <h2
          className={`${ZillaFont.className} text-2xl pb-2 border-b-[2px] leading-7 border-[#FF9F1C] font-normal 
        
        max-[200px]:text-base
        max-[210px]:text-lg
        `}
        >
          Quem somos
        </h2>
        <p
          className={`${outfitFont.className} font-normal text-lg leading-6 
      

      max-[250px]:text-sm
      
      `}
        >
          Alimentando com amor é uma associação sem fins lucrativos com mais de
          5 anos de funcionamento. No começo, usávamos um carrinho de mão para
          distribuir marmitas à pessoas em situação de rua, sem nenhum tipo de
          apoio.
        </p>
        <p
          className={`${outfitFont.className} font-normal text-lg leading-6 
      

      max-[250px]:text-sm
      
      `}
        >
          Conforme o projeto cresceu, passamos a fornecer um lugar para as
          pessoas tomarem banho e atenderem suas necessidades fisiológicas. Para
          isto, alugamos uma casa que contasse com banheiro externo, e adequamos
          os quartos para virarem dormitórios.
        </p>

        <p
          className={`${outfitFont.className} font-bold text-xl leading-6 
      

      max-[250px]:text-sm
      
      `}
        >
          Hoje, contamos com mais de 25 pessoas atendidas no local, entre
          mulheres, crianças e homens, que contam com alimentação.
        </p>
        <p
          className={`${outfitFont.className} font-normal text-lg leading-6 
      

      max-[250px]:text-sm
      
      `}
        >
          Grande parte dessas pessoas são dependentes químicos que por diversas
          razões se encontram sem apoio familiar ou estão longe de suas
          famílias. Mas também ajudamos pessoas vulneráveis por problemas
          conjugais ou separações.
        </p>
        <p
          className={`${outfitFont.className} font-normal text-lg leading-6 
      

      max-[250px]:text-sm
      
      `}
        >
          Grande parte dessas pessoas são dependentes químicos que por diversas
          razões se encontram sem apoio familiar ou estão longe de suas
          famílias. Mas também ajudamos pessoas vulneráveis por problemas
          conjugais ou separações.
        </p>
      </section>

      <section
        className="flex pb-4 gap-10 flex-col mt-10 mx-4 w-fit border-[6px] border-[#FF9F1C] 
    
    max-[250px]:w-[100%]
    max-[250px]:mx-0
    
    
    "
      >
        <figure className="flex w-fit">
          <img src={"https://github.com/DaviSC17.png"} alt="Imagem de doação" />
        </figure>

        <article className="flex items-center flex-col gap-10 xsm:max-w-md">
          <span
            className={`${ZillaFont.className} font-bold text-2xl leading-7 text-[#1B1B1BCC] max-[250px]:text-sm`}
          >
            Faça sua doação
          </span>

          <p
            className={`${outfitFont.className}  font-bold text-lg leading-6 text-[#1B1B1BCC] max-[250px]:text-xs w-[80%] `}
          >
            O dinheiro arrecadado é utilizado diretamente no preparo das
            marmitas e no pagamento de contas da instituição
          </p>

          <button
            className={`flex py-2 px-20
        rounded-lg bg-[#FF9F1C] text-[#F5F5F5]  font-normal text-2xl leading-7 mx-1 

        max-[165px]:text-lg
        max-[165px]:px-8
        max-[250px]:px-10 
        xms:text-justify`}
          >
            Doar
          </button>
        </article>
      </section>

      <section
        className={`flex items-center justify-center  mx-4 p-4 border-b-[6px] max-w-[500px] border-r-[6px] border-[#FF9F1C]  w-[80%]
    
    max-[200px]:mx-0
    
    `}
      >
        <p
          className={`
        ${outfitFont.className}font-bold text-xl leading-7 w-full text-[#1B1B1BCC]
        max-[165px]:text-xs
        max-[190px]:text-sm
        max-[230px]:text-base
        `}
        >
          APOIAMOS PESSOAS EM SITUAÇÃO DE RUA, MORADORES DA COMUNIDADE PASSOS DA
          PATRIA SEM DISCRIMIDAR IDADE, SEXO, RAÇA, COR, CRÊDO, OU ORIENTAÇÃO
          SEXUAL
        </p>
      </section>

      <section
        className="flex flex-col gap-8 p-4
    
   max-[230px]:px-0 
    "
      >
        <span
          className={`${ZillaFont.className} py-2 border-b-[2px] border-[#FF9F1C] font-normal text-2xl leading-6 text-[#1b1b1bCC] 
        
        
        
        max-[185px]:text-center
        max-[185px]:text-base
        max-[185px]:w-32
        max-[235px]:text-lg

        `}
        >
          Nossos objetivos
        </span>

        <p
          className={`${outfitFont.className} text-lg leading-6 text-[#1b1b1bCC] p-2
        
        max-[180px]:text-xs
        max-[180px]:w-32
        max-[180px]:text-center
        max-[190px]:text-sm
        max-[250px]:text-base
        `}
        >
          Alimentando Com Amor tem como principal objetivo ajudar, apoiar e
          orientar as pessoas em situação de rua e da comunidade Passos da
          Pátria em questões sociais, jurídicas, psicológicas e alimentícias.
        </p>
        <article
          className="flex flex-col gap-8
       max-[200px]:w-32
      "
        >
          <span
            className={`${ZillaFont.className} border-l-[6px] border-[#FF9F1C] p-2 font-bold text-xl
          

    max-[200px]:text-base
    max-[200px]:px-0
    max-[200px]:w-32

    max-[200px]:text-center

          `}
          >
            O que buscamos oferecer
          </span>

          <ul
            role="list"
            className="marker:text-[#000000] flex flex-col gap-4 ml-2  pl-6 list-disc 
          
          max-[200px]:w-32
          "
          >
            <li
              className={`${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]
            
            max-[200px]:text-xs
            max-[200px]:w-24
            `}
            >
              Café da manhã, almoço e janta para os moradores de rua em nossa
              casa de apoio
            </li>
            <li
              className={`${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]
            
            max-[200px]:text-xs
            max-[200px]:w-24
            `}
            >
              100 marmitas de forma regular aos moradores de rua em diferentes
              setores da cidade alta
            </li>
            <li
              className={`${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]
            
            max-[200px]:text-xs
            max-[200px]:w-24
            `}
            >
              100 cestas básicas mensalmente para os moradores cadastrados na
              comunidade Passo da Pátria
            </li>
            <li
              className={`${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]
            
            max-[200px]:text-xs
            max-[200px]:w-24
            `}
            >
              Kit de higiene e limpeza para os moradores e a comunidade
            </li>
          </ul>
        </article>
        <article className="flex flex-col gap-14">
          <span
            className={`${ZillaFont.className} border-l-[6px] border-[#FF9F1C] p-2 font-bold text-xl
          
          max-[200px]:text-base
          max-[200px]:px-0
          max-[200px]:w-[131px]
          `}
          >
            O que precisamos
          </span>

          <ul
            className="marker:text-[#000000] flex flex-col gap-4 ml-2  pl-6 list-disc 
        

        max-[200px]:w-28
        "
          >
            <li
              className={`${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]
            
             max-[200px]:text-xs
             max-[200px]:w-24
            `}
            >
              Profissionais para atendimento psicológico para os moradores da
              casa de apoio e outras pessoas em situação de rua
            </li>
            <li
              className={`${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]
            
             max-[200px]:text-xs
             max-[200px]:w-24
            `}
            >
              Atendimento <strong>social </strong> e <strong>jurídico</strong>
              para todas pessoas cadastradas
            </li>
            <li
              className={`${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]
            
             max-[200px]:text-xs
             max-[200px]:w-24
            `}
            >
              Aumentar a capacidade da casa de apoio para beneficiar mais
              pessoas.
            </li>
          </ul>
        </article>
        <article className="flex flex-col gap-10">
          <span
            className={`${ZillaFont.className} p-2 border-b-[2px] border-[#FF9F1C] font-normal text-2xl leading-6 text-[#1b1b1bCC] 
          max-[185px]:text-center
          max-[185px]:px-0
          max-[185px]:w-32
          max-[235px]:text-lg
          `}
          >
            Metas
          </span>

          <p
            className={`${ZillaFont.className} font-normal text-xl leading-6
        
        max-[180px]:text-xs
        max-[180px]:w-32
        max-[180px]:text-center
        max-[190px]:text-sm
        max-[250px]:text-base`}
          >
            Enquanto nossos <strong>objetivos são mais urgentes </strong>,
            nossas metas são orientações para o longo prazo.
          </p>

          <ul className="marker:text-[#000000] flex flex-col gap-4 ml-2  pl-6 list-disc ">
            <li
              className={`${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]
            max-[200px]:text-xs
            max-[200px]:w-24
            `}
            >
              Fornecer mensalmente 800 marmitas à pessoas em situação de rua.
            </li>
            <li
              className={`${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]
            max-[200px]:text-xs
            max-[200px]:w-24
            `}
            >
              Fornecer 250 cestas básicas aos moradores da comunidade Passo da
              Pátria.
            </li>
            <li
              className={`${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]
            max-[200px]:text-xs
            max-[200px]:w-24
            `}
            >
              Ter um espaço para albergar 70 pessoas vulneráveis, onde também
              possam ter suas necessidades básicas atendidas;
            </li>

            <li
              className={`${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]
            max-[200px]:text-xs
            max-[200px]:w-24
            `}
            >
              Fornecer serviço de
              <strong>
                assistência social, jurídico, psicológico e psiquiátrico
              </strong>
            </li>
            <li
              className={`${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]
            max-[200px]:text-xs
            max-[200px]:w-24
            `}
            >
              Ter apoio médico.
            </li>
            <li
              className={`${outfitFont.className} font-normal text-lg  leading-6 text-[#1b1b1bcc]
            max-[200px]:text-xs
            max-[200px]:w-24
            `}
            >
              Desenvolver cursos profissionalizantes.
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
};
