"use client";

import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { ZillaFont } from "@/assets/fonts";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export function Menu() {
  const [openMenu, setopenMenu] = useState(false);

  const ContainerMenu = clsx(
    "flex w-full items-end flex-col pr-1  md:hidden z-[20]"
  );
  const ContainerNavegation = clsx("flex w-full flex-col items-end relative");

  const hideMenu = clsx("hidden");
  const showMenu = clsx(
    "block text-[30px]",
    "max-[170px]:text-[16px] max-[240px]:text-[20px]"
  );

  const iconClose = clsx(
    "block text-[30px]",
    "max-[170px]:text-[16px] max-[240px]:text-[20px]"
  );

  const Menu = clsx(
    "flex absolute top-12 w-[50%]",
    "max-sm:w-[60%] max-xsm:w-[70%] max-xsm:top-11 max-[200px]:top-7 max-[240px]:w-full max-[240px]:top-10"
  );

  const listMenu = clsx("flex flex-col w-full rounded-lg transitionMenu");

  const defaultStyleLink = clsx(
    `${ZillaFont.className} font-semibold  py-4 w-full flex items-center justify-center`
  );

  return (
    <div className={ContainerMenu}>
      <IoIosMenu
        title="Abrir menu"
        cursor={"pointer"}
        className={openMenu ? `${hideMenu}` : `${showMenu}`}
        onClick={() => setopenMenu(!openMenu)}
      />

      {openMenu ? (
        <div className={ContainerNavegation}>
          <IoClose
            title="Fechar menu"
            className={iconClose}
            onClick={() => setopenMenu(!openMenu)}
            cursor={"pointer"}
          />

          <nav className={Menu}>
            <ul className={listMenu}>
              <li>
                <Link
                  aria-label="Link para a pagina inicial"
                  href={"/"}
                  className={`${defaultStyleLink} bg-[#DEB841]  rounded-t-lg`}
                >
                  Página inicial
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Link Para a Pagina de Nossa historia"
                  href={"/nossa-historia"}
                  className={`${defaultStyleLink} bg-[#FFDDE1]`}
                >
                  Nossa história
                </Link>
              </li>
              <li>
                <Link
                  aria-label="link Para a pagina Ajude-nos"
                  className={`${defaultStyleLink} bg-[#DEB841]`}
                  href={"/ajude-nos"}
                >
                  Ajude-nos
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Link para a Pagina De contatos"
                  className={`${defaultStyleLink} bg-[#DEB841]`}
                  href={"/contato"}
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Link para a pagina do Grupo Simios"
                  className={`${defaultStyleLink} bg-[#2C70A6]  rounded-b-lg`}
                  href={"/grupo-simios"}
                >
                  Grupo Simios
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
