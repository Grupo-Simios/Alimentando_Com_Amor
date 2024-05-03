"use client"
import clsx from "clsx";
import { PhonesContacts } from "@/components/contact.collection/phones";
import LocationMap from "@/components/contact.collection/location";
import Header from "@/components/headerMobile/header";
import Head from "next/head";

export default function Contact(){

  const contactContainer = clsx(
    "flex items-center flex-col gap-20 max-[150px]:overflow-x-hidden",
    " md:gap-10 md:mb-20",
    `xl:flex xl:flex-row xl-justify-center xl:items-center
      xl:w-[70%] xl:ml-auto xl:mr-auto `,
      
   
  );


  return (
  <>
  <Head>
  <title>Contatos - Associação Alimentando com Amor</title>
  <meta name="description" content="Entre em contato com a Associação Alimentando com Amor para obter mais informações sobre nossos serviços, voluntariado ou doações. Telefones, email, endereço e localização estão disponíveis aqui." />
  <meta name="keywords" content="Associação Alimentando com Amor, contatos, telefone, email, endereço, localização, voluntariado, doações, ajuda humanitária" />
  <meta property="og:title" content="Contatos - Associação Alimentando com Amor" />
  <meta property="og:description" content="Entre em contato com a Associação Alimentando com Amor para obter mais informações sobre nossos serviços, voluntariado ou doações. Telefones, email, endereço e localização estão disponíveis aqui." />
  <meta property="og:image" content="https://i.imgur.com/HYDqNfe.png" />
  <meta property="og:url" content="url_da_pagina" />
  <meta name="twitter:title" content="Contatos - Associação Alimentando com Amor" />
  <meta name="twitter:description" content="Entre em contato com a Associação Alimentando com Amor para obter mais informações sobre nossos serviços, voluntariado ou doações. Telefones, email, endereço e localização estão disponíveis aqui." />
  <meta name="twitter:image" content="https://i.imgur.com/HYDqNfe.png" />
</Head>

    <main className={contactContainer}>
      <Header>Contato</Header>
      <PhonesContacts />
      <LocationMap />


    </main>
  </>
  );
}
