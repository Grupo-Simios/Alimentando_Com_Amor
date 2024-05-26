import "./globals.css";

//componente Export
import Header from "../components/Navbar";
import { FooterMobile } from "@/components/Footer";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="pt-BR">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Associação Alimentando com Amor - Ajude quem precisa</title>
          <meta name="description" content="Conheça a história da Associação Alimentando com Amor e saiba como surgiu nossa missão de fornecer alimentos e suplementos para pessoas em situações de rua e dificuldades financeiras." />
          <meta name="keywords" content="Associação Alimentando com Amor, alimentos para pessoas em situação de rua, doações de alimentos, ajuda humanitária, suplementos alimentares, ONG de caridade" />
          <meta name="canonical" content="" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="author" content="Grupo Simios" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />

          {/* Google Metatags */}
          <meta property="og:title" content="Associação Alimentando com Amor - Ajude quem precisa" />
          <meta property="og:description" content="Conheça a história da Associação Alimentando com Amor e saiba como surgiu nossa missão de fornecer alimentos e suplementos para pessoas em situações de rua e dificuldades financeiras." />
          <meta property="og:image" content="https://i.imgur.com/HYDqNfe.png" />
          <meta property="og:url" content="url_da_pagina" />
          {/* End Google Metatags */}

          {/* Twitter Metatags */}
          <meta name="twitter:title" content="Associação Alimentando com Amor - Ajude quem precisa" />
          <meta name="twitter:description" content="Conheça a história da Associação Alimentando com Amor e saiba como surgiu nossa missão de fornecer alimentos e suplementos para pessoas em situações de rua e dificuldades financeiras." />
          <meta name="twitter:image" content="https://i.imgur.com/HYDqNfe.png" />
          {/* End Twitter Metatags */}
        </head>
        <body className="bg-[#F9F6EE]">
          <Header />
          {children}
          <FooterMobile />
        </body>
      </html>
    </>
  );
}

export default RootLayout;