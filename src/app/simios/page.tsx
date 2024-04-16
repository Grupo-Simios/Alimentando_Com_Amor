"use client";

import { ZillaFont, outfitFont } from "@/assets/fonts";
import { Menu } from "@/components/calltoaction.collection/Menu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Organizer } from "@/components/organizers.collectiion/organizers";

export default function Simios() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-14 bg-[#F9F6EE] px-5
    
    max-[300px]:gap-8
    max-[300px]:px-2
    "
    >
      <header
        className="flex flex-col top-0  w-full h-18 justify-end items-center backdrop-blur fixed  px-1 
    md:hidden

    
    "
      >
        <span
          className={`${ZillaFont.className} font-bold  p-1 text-lg leading-6 text-[#1B1B1BCC]
          
          max-[190px]:text-[6px]
          max-[225px]:text-[8px]
          max-[270px]:text-[10px]
          max-[305px]:text-xs
          max-[345px]:text-sm
          max-[400px]:text-base
          `}
        >
          Este site foi feito inteiramente de graça pelo
        </span>
        <div className="flex w-full pt-2 justify-end items-center h-full border-t-[2px] border-[#FF9F1C]">
          <h1
            className={`${ZillaFont.className} uppercase font-bold absolute flex  gap-3 items-center z-[-1] justify-center text-2xl left-[50%] translate-x-[-50%] text-[#114B5F]
        
            max-[160px]:text-[8px]
            max-[190px]:text-[10px]
            max-[225px]:text-xs
            max-[270px]:text-sm
            max-[305px]:text-base
            max-[345px]:text-lg
            max-[400px]:text-xl
        
        `}
          >
            Grupo Símios
          </h1>
          <Menu />
        </div>
      </header>

      <section
        className="flex flex-col items-center mt-28 gap-6 

          
          max-[260px]:mt-20
      "
      >
        <img
          className="w-44 rounded-full 
     
          max-[190px]:w-16
          max-[225px]:w-24
          max-[270px]:w-32
        "
          src="https://github.com/DaviSC17.png"
          alt=""
        />
        <span
          className={`${outfitFont.className} font-normal text-lg leading-6 text-center text-[#1b1b1bcc] max-w-80


          max-[160px]:text-[8px]
          max-[190px]:text-[10px]
          max-[225px]:text-xs
          max-[270px]:text-sm
          max-[305px]:text-base
          
          `}
        >
          Somos um coletivo dedicado ao desenvolvimento profissional,
          comprometido em aprimorar as habilidades dos colaboradores por meio de
          projetos voluntários abrangentes, com foco em temáticas sociais,
          ambientais e outros.
        </span>
      </section>

      <section className="flex flex-col w-full gap-5">
        <h2
          className={`${ZillaFont.className} text-2xl leading-7 font-bold z  pb-1 border-b-[2px] border-[#FF9F1C] w-full
          
             
          max-[165px]:text-[10px]
          max-[190px]:text-xs
          max-[205px]:text-sm
          max-[225px]:text-base
          max-[225px]:text-center
          max-[270px]:text-lg
          max-[305px]:text-xl
      
          `}
        >
          Projeto Ongs na Web
        </h2>

        <p
          className={`${outfitFont.className} ml-2 font-normal text-lg leading-6 max-w-96
        
        
        max-[160px]:text-[8px]
        max-[190px]:text-[10px]
        max-[225px]:text-xs
        max-[225px]:text-center
        max-[270px]:text-sm
        max-[305px]:text-base
        `}
        >
          <strong>
            O projeto consiste na criação e desenvolvimento de plataformas
            digitais para ONGs necessitadas.
          </strong>
          <br />
          Reformulamos sites já existentes ou construímos novos a partir do
          zero, com a intenção de trazer visibilidade e facilitar o contato com
          o público, e o engajamento de pessoas interessadas em doar ou se
          voluntariar.
        </p>
      </section>

      <section className="flex flex-col w-full gap-10">
        <h2
          className={`${ZillaFont.className} text-2xl leading-7 font-bold z  pb-1 border-b-[2px] border-[#FF9F1C] w-full 
          
             
          max-[165px]:text-[10px]
          max-[190px]:text-xs
          max-[205px]:text-sm
          max-[225px]:text-base
          max-[225px]:text-center
          max-[270px]:text-lg
          max-[305px]:text-xl
      
          `}
        >
          Organizadores
        </h2>

        <div
          className="flex self-center justify-center gap-8
          max-[310px]:flex-wrap
          max-[250px]:gap-10"
        >
          <Organizer
            github="https://github.com/DaviSC17"
            linkedin="linkedin.com/in/davi-santanna-99246a259/"
            image="https://github.com/DaviSC17.png"
            mainFunction=""
            name="Erick Rosa"
            key={1}
          />
          <Organizer
            github="https://github.com/DaviSC17"
            linkedin="linkedin.com/in/davi-santanna-99246a259/"
            image="https://github.com/DaviSC17.png"
            mainFunction=""
            name="Ana Martins"
            key={2}
          />
        </div>
      </section>

      <section className="flex flex-col w-full gap-10 flex-wrap">
        <h2
          className={`${ZillaFont.className} text-2xl leading-7 font-bold z  pb-1 border-b-[2px] border-[#FF9F1C] w-full 
          
             
          max-[165px]:text-[10px]
          max-[190px]:text-xs
          max-[205px]:text-sm
          max-[225px]:text-base
          max-[225px]:text-center
          max-[270px]:text-lg
          max-[305px]:text-xl
      
          `}
        >
          Conheça a equipe que
          <br /> desenvolveu este site
        </h2>
        <div
          className="flex self-center justify-center gap-8

         max-[310px]:flex-wrap
         max-[250px]:gap-10
        "
        >
          <Organizer
            github="https://github.com/DaviSC17"
            linkedin="linkedin.com/in/davi-santanna-99246a259/"
            image="https://github.com/DaviSC17.png"
            mainFunction="UI/UX designer"
            name="Gabriel Ferreira"
            key={3}
          />

          <Organizer
            github="https://github.com/DaviSC17"
            linkedin="linkedin.com/in/davi-santanna-99246a259/"
            image="https://github.com/DaviSC17.png"
            mainFunction="Desenvolvedor Web"
            name="Davi Santanna"
            key={4}
          />
        </div>

        <div
          className="flex self-center justify-center gap-8

         max-[310px]:flex-wrap
         max-[250px]:gap-10
        "
        >
          <Organizer
            github="https://github.com/DaviSC17"
            linkedin="linkedin.com/in/davi-santanna-99246a259/"
            image="https://github.com/DaviSC17.png"
            mainFunction="Desenvolvedor"
            name="João Gabriel"
            key={5}
          />

          <Organizer
            github="https://github.com/DaviSC17"
            linkedin="linkedin.com/in/davi-santanna-99246a259/"
            image="https://github.com/DaviSC17.png"
            mainFunction="Analista de Sistemas"
            name="Ícaro Filipe"
            key={6}
          />
        </div>

        <div
          className="flex self-center justify-center gap-8

         max-[310px]:flex-wrap
         max-[250px]:gap-10
        "
        >
          <Organizer
            github="https://github.com/DaviSC17"
            linkedin="linkedin.com/in/davi-santanna-99246a259/"
            image="https://github.com/DaviSC17.png"
            mainFunction="Desenvolvedor Web"
            name="Cláudio Silva"
            key={7}
          />

          <Organizer
            github="https://github.com/DaviSC17"
            linkedin="linkedin.com/in/davi-santanna-99246a259/"
            image="https://github.com/DaviSC17.png"
            mainFunction="Luís Carlos Duarte"
            name="Tester"
            key={8}
          />
        </div>

        <div
          className="flex self-center gap-8 w-[100%] justify-center px-28 mb-10

          max-[310px]:px-0
          max-[335px]:px-[72px]
          max-[400px]:px-20
          max-[450px]:px-24
        "
        >
          <Organizer
            github="https://github.com/DaviSC17"
            linkedin="linkedin.com/in/davi-santanna-99246a259/"
            image="https://github.com/DaviSC17.png"
            mainFunction="Doocumenter"
            name="Gabriel Santiago"
            key={9}
          />
        </div>
      </section>
    </div>
  );
}
