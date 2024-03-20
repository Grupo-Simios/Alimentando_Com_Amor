

import "./globals.css";
import Link from "next/link";
import { ZillaFont } from "../../Assets/fonts";
//componente Export
import { NavBarTop } from "../../Assets/components/nav-bar-top";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${ZillaFont.className}`}>
      <body className="h-full min-h-screen">
        
        <NavBarTop />
        
        {children}
      </body>
    </html>
  );
}
