"use client"
import Link from "next/link"
import clsx from "clsx"
import { ZillaFont } from "@/assets/fonts"
import { useState } from "react"

export default function NavBarTop(){

  const [click, setClick] = useState("")
  
  const navBar = clsx(
    'hidden bg-navbar-Yellow flex justify-around',
    'md:flex  md:justify-end',
    'xl:justify-around',
    '1xl:justify-between'
  )
  const OngName = clsx(
    'flex items-center justify-center font-semibold hidden',
    'hidden xl:flex px-8 w-fit h-fit self-center',
    'xl:w-auto'
  )

  const ulnavBar = clsx(
    'flex',
    'md:w-[90%]',
    'xl:w-[60%]'
  )

  const navItems = clsx(
    "w-[20%] text-center h-14 grid place-content-center hover:bg-yellow-primary-hover text-primary-black-text text-base font-semibold hover:text-[#edfaee] rounded-b-[8px]",
    "last:bg-navbar-newblue last:text-[#edfaee] last:hover:bg-[#092934] last:rounded-b-[8px] ",
    " md:px-4",
    'xl:px-2 xl:w-[18%]'
    
  );

  const menuItems = [
    { title: "Pagina inicial", link: "/", isSelected: false },
    { title: "Nossa História", link: "/nossa-historia", isSelected: false },
    { title: "Ajude-nos", link: "/ajude-nos", isSelected: false },
    { title: "Contato", link: "/contato", isSelected: false },
    { title: "Grupo Simios", link: "/grupo-simios", isSelected: false },
  ];

  return(
    <>
      <header className={`${ZillaFont.className} ${navBar} `}>
        <Link href="/" className={OngName}>ASSOCIAÇÃO ALIMENTANDO COM AMOR</Link>
        <nav className={ulnavBar} role="navigation" aria-label="Navegaçao do menu">
          
          {menuItems.map(({link, title},index)=>(
            
              <Link 
              aria-label={link}
               key={index} className={navItems} href={link}>
               <div>{title}</div> 
              </Link>
            
          ))}
        </nav>
      </header>
    </>
  )
}
