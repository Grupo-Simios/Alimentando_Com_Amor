"use client";

import clsx from "clsx";
import Head from "next/head";

import { AboutSimios } from "@/components/simios.collection/aboutSimios";
import { AboutProject } from "@/components/simios.collection/aboutProject";
import { Organizers } from "@/components/simios.collection/organizers";
import { Team } from "@/components/simios.collection/team";
import Header from "@/components/headerMobile/header";
import { ZillaFont } from "@/assets/fonts";
import { outfitFont } from "@/assets/fonts";

function Simios() {
  const Container = clsx(
    "flex flex-col justify-center items-center gap-14 px-5",
    "max-[300px]:gap-8 max-[300px]:px-2 md:w-[60%] md:ml-auto md:mr-auto"
  );

  const headerContainer = clsx(
    ` w-full h-52 text-center flex flex-col justify-center gap-2`,
    "md:flex pt-10"
  );

  const title = clsx(
    `
  text-[28px] max-xsm:text-xl max-[200px]:text-lg md:text-[48px] text-navbar-newblue`,
    outfitFont.className
  );
  const subtitle = clsx(
    `w-[70%]
  text-base md:text-2xl font-semibold border-b-2 border-orange-500 w-1/2 ml-auto mr-auto
  max-xsm:text-sm
  max-[400px]:text-[12px]
  max-[350px]:w-[80%]
  max-[305px]:text-[10px]
  max-[300px]:font-bold
  max-[265px]:w-[90%]
  max-[235px]:w-[100%]
  max-[235px]:text-[6px]
  `,
    ZillaFont.className
  );
  return (
    <>
      <Head>
        <title>
          Sobre o Grupo SÍMIOS - Desenvolvimento Profissional e Projetos
          Voluntários
        </title>
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

      <main className="bg-[#F9F6EE]">
        <Header>Grupo Simios</Header>
        <section className={headerContainer}>
          <h2 className={subtitle}>
            Este site foi feito inteiramente de graça pelo
          </h2>
          <h1 className={title}>GRUPO SÍMIOS</h1>
        </section>
        <div className={Container}>
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