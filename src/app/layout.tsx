

import "./globals.css";
import Link from "next/link";
//componente Export
import NavBarTop from "../components/nav-bar.collection/nav-bar";
import { CallToActionButton } from "@/components/calltoaction.collection/button";
import { FooterMobile } from "@/components/footer.collection/footer/mobile";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
    <html lang="pt-br">
      <body className="h-full min-h-screen">
        
        <NavBarTop />
        {children}
        <FooterMobile />

      </body>
    </html>
   </>
  );
}
