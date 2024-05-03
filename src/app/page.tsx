
import "./globals.css";
// components exports
import { Home } from "../components/home.collection/heroBanner";
import Head from "next/head";

export default function Page() {
  return (
    <>
            <Head>
  <title>Associação Alimentando com Amor - Ajude quem precisa</title>
  <meta name="description" content="Conheça a história da Associação Alimentando com Amor e saiba como surgiu nossa missão de fornecer alimentos e suplementos para pessoas em situações de rua e dificuldades financeiras." />
  <meta name="keywords" content="Associação Alimentando com Amor, alimentos para pessoas em situação de rua, doações de alimentos, ajuda humanitária, suplementos alimentares, ONG de caridade" />
  <meta property="og:title" content="Associação Alimentando com Amor - Ajude quem precisa" />
  <meta property="og:description" content="Conheça a história da Associação Alimentando com Amor e saiba como surgiu nossa missão de fornecer alimentos e suplementos para pessoas em situações de rua e dificuldades financeiras." />
  <meta property="og:image" content="https://i.imgur.com/HYDqNfe.png" />
  <meta property="og:url" content="url_da_pagina" />
  <meta name="twitter:title" content="Associação Alimentando com Amor - Ajude quem precisa" />
  <meta name="twitter:description" content="Conheça a história da Associação Alimentando com Amor e saiba como surgiu nossa missão de fornecer alimentos e suplementos para pessoas em situações de rua e dificuldades financeiras." />
  <meta name="twitter:image" content="https://i.imgur.com/HYDqNfe.png" />
</Head>
      <main className="h-full min-h-screen bg-[#e6e6e6]">
      <Home />
      
    </main>
    </>
  
  );
}
