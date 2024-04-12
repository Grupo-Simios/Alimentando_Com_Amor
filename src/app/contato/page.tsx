"use client";

import { ZillaFont, outfitFont } from "@/assets/fonts";
import { Menu } from "@/components/calltoaction.collection/Menu";
import { useRef } from "react";
import clsx from "clsx";

export default function Contact() {
  const Email = useRef<any>();

  const copyEmail = () => {
    navigator.clipboard
      .writeText(Email.current.innerText)
      .then(() => alert("Copiado com sucesso"));
  };

  const contactContainer = clsx(
    "flex items-center flex-col gap-20 max-[150px]:overflow-x-hidden",
    'md:flex-row md:gap-10 md:mb-20'
  )

  const contactHeader = clsx(
    "flex w-full h-16 justify-end items-center backdrop-blur fixed  px-1 md:hidden max-[200px]:h-10"
  )

  const containerItems = clsx(
    'w-full px-4 flex flex-col mt-28  gap-5 md:mb-10'
  )

  const contactTitle = clsx(
    "text-xl leading-7 text-[#1B1B1BCC] border-b-[2px] border-[#FF9F1C] max-[350px]:text-lg max-[280px]:text-base max-[200px]:text-sm max-[200px]:font-bold max-[160px]:text-[10px]"
    ,'md:mt-10'
  )

  const contactLocalization = clsx(
    'w-full px-4 flex flex-col  gap-10 mb-20',
    'md:w-1/2 md:px-0 md:justify-center'
  )

  return (
    <div
      className={contactContainer}
    >
      <header className={contactHeader}>
      <h1
          className={`${ZillaFont.className} uppercase absolute flex  gap-3 items-center z-[-1] justify-center inset-0 text-xl 
        
        max-[200px]:text-[13px]
        max-[210px]:px-0
      
        xsm:text-2xl
         max-[320px]:text-base`}
        >
          Contato
        </h1>
        <Menu />
      </header>

 <div className=" md:w-1/2 md:pl-6 lg:ml-28">
 <section
        className={`${outfitFont.className} ${containerItems}`}
      >
        <span
          className={contactTitle}>
          TELEFONES
        </span>

        <ul
          className={`${outfitFont.className} text-lg flex flex-col gap-5
        
        max-[400px]:text-base
        max-[350px]:text-sm
        max-[310px]:text-xs
        max-[260px]:text-[10px]
        max-[200px]:text-[8px]
        max-[200px]:font-semibold 
        `}
        >
          <li>Administração: (84) 2131-8789</li>
          <li>Maria Aparecida Cida: (84) 98713-6833</li>
          <li>Ysla Mônica: (84) 98713-6833</li>
        </ul>
      </section>

      <section
        className={`${outfitFont.className} w-full px-4 flex flex-col  gap-5 relative`}
      >
        <button
          onClick={copyEmail}
          className="absolute right-4 p-1 hidden items-center justify-center bg-[#83838328] rounded-sm   text-xs text-[#000000f5]
          
          max-[300px]:flex
          max-[240px]:text-[10px]
          max-[240px]:top-[-2px]
          max-[180px]:text-[8px]
        
          "
        >
          Copiar email
        </button>
        <span
          className="font-normal text-xl leading-7 text-[#1B1B1BCC]] border-b-[2px] border-[#FF9F1C]
        max-[350px]:text-lg
        max-[280px]:text-base
        max-[200px]:text-sm
        max-[200px]:font-bold
        max-[160px]:text-[10px]
        
        "
        >
          EMAIL
        </span>
        <ul
          className={`${outfitFont.className} text-lg flex flex-col gap-5
        
        max-[400px]:text-base
        max-[350px]:text-sm
        max-[310px]:font-bold
        max-[310px]:text-xs
        max-[280px]:text-[10px]
        max-[240px]:text-[8px]
        max-[210px]:text-[8px]
        max-[200px]:text-[6px]
        `}
        >
          <li ref={Email}>voluntario@alimentandocom{}amornatal.org</li>
        </ul>
      </section>

      <section
        className={`${outfitFont.className} w-full px-4 flex flex-col  gap-5`}
      >
        <span
          className={contactTitle}
        >
          ENDEREÇO
        </span>

        <ul
          className={`${outfitFont.className} text-lg flex flex-col gap-5
        
        max-[400px]:text-base
        max-[350px]:text-sm
        max-[310px]:text-xs
        max-[200px]:text-[8px]
        max-[200px]:font-semibold
      
        `}
        >
          <li>
            Rua Santo Antônio 731 <br /> Cidade Alta, Natal RN
          </li>
        </ul>
      </section>
 </div>

      <section className={contactLocalization}>
        <span
          className={`${contactTitle}  md:border-none md:text-center md:text-base`}>
          LOCALIZAÇÃO
        </span>

        <figure className="flex w-full max-w-[300px] self-center">
          <img
            className="w-full"
            src="https://github.com/DaviSC17.png"
            alt="imagem qualquer"
          />
        </figure>
      </section>
    </div>
  );
}
