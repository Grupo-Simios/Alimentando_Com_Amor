import Link from "next/link"
import clsx from "clsx"
import { ZillaFont } from "@/assets/fonts"

export default function NavBarTop(){



  const navBar = clsx(
    'hidden bg-navbar-Yellow flex justify-around',
    'md:flex  md:justify-end',
    'xl:justify-around',
    '1xl:justify-between'
  )
  const OngName = clsx(
    'flex items-center justify-center font-semibold hidden',
    'hidden xl:flex px-8 w-[40%]',
    'xl:w-auto'
  )

  const ulnavBar = clsx(
    'flex',
    'md:w-[90%]',
    'xl:w-[60%]'
  )
  const navItems = clsx(
    "w-[20%] text-center h-14 grid place-content-center hover:bg-yellow-primaty-hover text-primary-black-text text-base font-semibold hover:text-white rounded-b-[8px]",
    "last:bg-navbar-newblue last:text-white last:hover:bg-[#092934] last:rounded-b-[8px] ",
    " md:px-4",
    'xl:px-2 xl:w-[18%]'
  );


  return(

    <nav className={`${ZillaFont.className} ${navBar} `}>
      <span className={OngName}>ASSOCIAÇÃO ALIMENTANDO COM AMOR</span>
    <ul className={ulnavBar}>
      <Link  href={"/"} className={navItems}>
        <li>Página inicial</li>
      </Link>
      <Link className={navItems} href={"/nossa-historia"}>
        <li>Nossa história</li>
      </Link>
      <Link className={navItems} href={"/ajude-nos"}>
        <li>Ajude-nos</li>
      </Link>
      <Link className={navItems} href={"/contato"}>
        <li>Contato</li>
      </Link>
      <Link className={navItems} href={"/grupo-simios"}>
        <li>Grupo Símios</li>
      </Link>
    </ul>
  </nav>
  )
}