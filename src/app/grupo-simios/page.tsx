"use client";

import Head from "next/head";

import { AboutSimios } from "@/components/simios/aboutSimios";
import { AboutProject } from "@/components/simios/aboutProject";
import { Organizers } from "@/components/simios/organizers";
import { Team } from "@/components/simios/team";
import PageTitle from "@/components/Header/header";
import { ZillaFont } from "@/assets/fonts";
import { outfitFont } from "@/assets/fonts";
import { cn } from "@/lib/utils";

function Simios() {
  return (
    <>
      <Head>
        <title>Sobre o Grupo SÍMIOS - Desenvolvimento Profissional e Projetos Voluntários</title>
        <meta
          name="description"
          content="Conheça o Grupo SÍMIOS, um coletivo dedicado ao desenvolvimento profissional e comprometido em aprimorar habilidades por meio de projetos voluntários abrangentes, com foco em temáticas sociais, ambientais e outros. Saiba mais sobre o Projeto Ongs na Web e a equipe de desenvolvimento por trás deste site."
        />
        <meta
          name="keywords"
          content="Grupo SÍMIOS, desenvolvimento profissional, projetos voluntários, Ongs na Web, reformulação de sites, desenvolvimento de plataformas digitais, visibilidade, contato com o público, doações, voluntariado"
        />
        <meta
          property="og:title"
          content="Sobre o Grupo SÍMIOS - Desenvolvimento Profissional e Projetos Voluntários"
        />
        <meta
          property="og:description"
          content="Conheça o Grupo SÍMIOS, um coletivo dedicado ao desenvolvimento profissional e comprometido em aprimorar habilidades por meio de projetos voluntários abrangentes, com foco em temáticas sociais, ambientais e outros. Saiba mais sobre o Projeto Ongs na Web e a equipe de desenvolvimento por trás deste site."
        />
        <meta property="og:image" content="https://i.imgur.com/HYDqNfe.png" />
        <meta property="og:url" content="url_da_pagina" />
        <meta
          name="twitter:title"
          content="Sobre o Grupo SÍMIOS - Desenvolvimento Profissional e Projetos Voluntários"
        />
        <meta
          name="twitter:description"
          content="Conheça o Grupo SÍMIOS, um coletivo dedicado ao desenvolvimento profissional e comprometido em aprimorar habilidades por meio de projetos voluntários abrangentes, com foco em temáticas sociais, ambientais e outros. Saiba mais sobre o Projeto Ongs na Web e a equipe de desenvolvimento por trás deste site."
        />
        <meta name="twitter:image" content="https://i.imgur.com/HYDqNfe.png" />
      </Head>

      <main className="">
        <PageTitle>Grupo Simios</PageTitle>
        <section className="w-full h-52 text-center flex flex-col justify-center gap-2 md:flex pt-10 max-w-[900px] m-auto">
          <h2 className={cn(`
            w-full text-base md:text-2xl font-semibold border-b-2 border-orange-500
            ml-auto mr-auto max-xsm:text-sm max-[400px]:text-[12px] max-[350px]:w-[80%]
            max-[305px]:text-[10px] max-[300px]:font-bold max-[265px]:w-[90%] max-[235px]:w-[100%]
            max-[235px]:text-[6px]
          `, ZillaFont.className)}>
            Este site foi feito inteiramente de graça pelo
          </h2>
          <h1 className={cn(
            "text-[28px] max-xsm:text-xl max-[200px]:text-lg md:text-[48px] text-navbar-newblue",
            outfitFont.className
          )}>GRUPO SÍMIOS</h1>
        </section>
        <div className="flex flex-col justify-center items-center gap-14 px-5 max-[300px]:gap-8 max-[300px]:px-2 md:w-[60%] md:ml-auto md:mr-auto">
          <AboutSimios />
          <AboutProject />
          <Organizers />
          <Team />
        </div>
      </main>
    </>
  );
}

export default Simios;