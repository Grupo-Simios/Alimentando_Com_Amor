

import "./globals.css";
import Link from "next/link";
import { ZillaFont } from "../components/tailwindcssStyle/fonts";
//componente Export
import { NavBarTop } from "../components/nav-bar.collection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
    <html lang="pt-br" className={`${ZillaFont.className}`}>
      <body className="h-full min-h-screen">
        
        <NavBarTop />
        
        {children}
      </body>
    </html>
   </>
  );
}
