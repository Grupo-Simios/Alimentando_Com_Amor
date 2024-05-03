"use client"
// exportaçoes de componentes
import { HomeDesktop } from "../desktopHome";
import { MobileHome } from "../mobile-home.colletion";
import { AboutAlimentandoComAmor } from "../AboutAlimentandoComAmor";
import { OngActions } from "../ongActions";
export const Home = () => {
  return (
    <>
      <MobileHome />
      <HomeDesktop />
      <OngActions />
      <AboutAlimentandoComAmor />
    </>
  );
};
