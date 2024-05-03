import clsx from "clsx";
import Header from "@/components/headerMobile/header";
import { AboutUsOurHistory } from "@/components/ourHistory.collection/aboutUs";
import { ContainerDonationOurHistory } from "@/components/ourHistory.collection/containerDonation/";
import { OurGoalsOurHistory } from "@/components/ourHistory.collection/ourGoals";
import Head from "next/head";

export default function OurHistory() {
  const ContainerOurHistory = clsx(
    `flex items-center flex-col gap-10 `,
    `max-[150px]:overflow-x-hidden`
  );

  return (
   <>
<Head>
  <title>Nossa História - Associação Alimentando com Amor</title>
  <meta name="description" content="Conheça a história da Associação Alimentando com Amor, uma associação sem fins lucrativos que oferece alimentos, apoio social, jurídico e psicológico para pessoas em situação de rua e da comunidade Passos da Pátria." />
  <meta name="keywords" content="Associação Alimentando com Amor, história da ONG, apoio social, apoio jurídico, apoio psicológico, doações de alimentos, doações de cestas básicas, ajuda humanitária" />
  <meta property="og:title" content="Nossa História - Associação Alimentando com Amor" />
  <meta property="og:description" content="Conheça a história da Associação Alimentando com Amor, uma associação sem fins lucrativos que oferece alimentos, apoio social, jurídico e psicológico para pessoas em situação de rua e da comunidade Passos da Pátria." />
  <meta property="og:image" content="https://i.imgur.com/HYDqNfe.png" />
  <meta property="og:url" content="url_da_pagina" />
  <meta name="twitter:title" content="Nossa História - Associação Alimentando com Amor" />
  <meta name="twitter:description" content="Conheça a história da Associação Alimentando com Amor, uma associação sem fins lucrativos que oferece alimentos, apoio social, jurídico e psicológico para pessoas em situação de rua e da comunidade Passos da Pátria." />
  <meta name="twitter:image" content="https://i.imgur.com/HYDqNfe.png" />
</Head>


    <main className={ContainerOurHistory}>
      <Header>Nossa História</Header>

      <AboutUsOurHistory />

      <ContainerDonationOurHistory />

      <OurGoalsOurHistory />
    </main>
   </>
  );
}
