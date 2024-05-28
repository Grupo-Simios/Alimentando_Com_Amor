

import "./globals.css";
//componente Export
import NavBarTop from "../components/nav-bar.collection/nav-bar";
import { FooterMobile } from "@/components/footer.collection/footer/mobile";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
    <html lang="pt-br">
    <head>
    <title>Associação Alimentando com Amor - Ajude quem precisa</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Conheça a história da Associação Alimentando com Amor e saiba como surgiu nossa missão de fornecer alimentos e suplementos para pessoas em situações de rua e dificuldades financeiras." />
        <meta name="keywords" content="Associação Alimentando com Amor, alimentos para pessoas em situação de rua, doações de alimentos, ajuda humanitária, suplementos alimentares, ONG de caridade" />
        <meta name="author" content="Associação Alimentando com Amor" />
        <meta name="robots" content="index, follow" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Associação Alimentando com Amor - Ajude quem precisa" />
        <meta property="og:description" content="Conheça a história da Associação Alimentando com Amor e saiba como surgiu nossa missão de fornecer alimentos e suplementos para pessoas em situações de rua e dificuldades financeiras." />
        <meta property="og:image" content="https://i.imgur.com/HYDqNfe.png" />
        <meta property="og:url" content="url_da_pagina" />
        <meta property="og:site_name" content="Associação Alimentando com Amor" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Associação Alimentando com Amor - Ajude quem precisa" />
        <meta name="twitter:description" content="Conheça a história da Associação Alimentando com Amor e saiba como surgiu nossa missão de fornecer alimentos e suplementos para pessoas em situações de rua e dificuldades financeiras." />
        <meta name="twitter:image" content="https://i.imgur.com/HYDqNfe.png" />
        <meta name="twitter:site" content="@seu_twitter" />
        <meta name="twitter:creator" content="@seu_twitter" />

        {/* <!-- Favicon --> */}
        <link rel="apple-touch-icon" sizes="180x180" href="" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"  />
        <link rel="manifest" href="/site.webmanifest"  />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* <!-- Additional Tags --> */}
        <meta name="theme-color" content="#ffffff" />
    </head>
      <body className="h-full min-h-screen max-w-full">
        
        <NavBarTop />
        {children}
        <FooterMobile />

      </body>
    </html>
   </>
  );
}
