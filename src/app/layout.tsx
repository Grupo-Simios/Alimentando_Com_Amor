

import "./globals.css";
import Link from "next/link";
//componente Export
import NavBarTop from "../components/nav-bar.collection/nav-bar";
import { CallToActionButton } from "@/components/calltoaction.collection/button";
import { FooterMobile } from "@/components/footer.collection/footer/mobile";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
    <html lang="pt-br">
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
      <body className="h-full min-h-screen">
        
        <NavBarTop />
        {children}
        <FooterMobile />

      </body>
    </html>
   </>
  );
}
