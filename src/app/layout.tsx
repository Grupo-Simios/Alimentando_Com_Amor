

import "./globals.css";
import Link from "next/link";
import { ZillaFont } from "@/assets/fonts/index";
//componente Export
import { NavBarTop } from "../components/nav-bar.collection/nav-bar";

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
