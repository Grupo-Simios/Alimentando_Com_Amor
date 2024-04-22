"use client";

import { IoIosMenu } from "react-icons/io";
import { FaArrowTurnDown } from "react-icons/fa6";
import Link from "next/link";

// style imports
import { FooterMobile } from "../../footer.collection/footer/mobile";

//home components imports
import { HomeDesktop } from "../desktopHome";
import { MobileHome } from "../mobile-home.colletion";
import { AboutAlimentandoComAmor } from "../AboutAlimentandoComAmor";
import { OngActions } from "../ongActions";


export const Home = () =>{

  return (
    <>

      <MobileHome />
      <HomeDesktop />
      <OngActions />
      <AboutAlimentandoComAmor />
      {/* <FooterMobile /> */}
      {/* removed the footer componente to the Global Layout */}
    </>
  );
};
