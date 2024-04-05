"use client";

import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { ZillaFont } from "@/assets/fonts";
import { useState } from "react";
import Link from "next/link";

export const Menu = () => {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <div className="flex flex-col md:hidden">
      <IoIosMenu
        cursor={"pointer"}
        className={
          openMenu
            ? "hidden"
            : `block 
            text-[30px]

          max-[170px]:text-[16px]
          max-[240px]:text-[20px]
        
        `
        }
        onClick={() => setopenMenu(!openMenu)}
      />

      {openMenu ? (
        <div className="flex flex-col items-end">
          <IoClose
            className={`
            block 
            text-[30px]
          max-[170px]:text-[16px]
          max-[240px]:text-[20px]
            `}
            onClick={() => setopenMenu(!openMenu)}
            cursor={"pointer"}
          />

          <nav
            className="flex absolute top-16 w-[70%]
          
          max-[180px]:w-[90%] 
          xsm:w-80"
          >
            <ul className="flex flex-col w-full rounded-lg">
              <li>
                <Link
                  href={"/"}
                  className={`${ZillaFont.className} font-semibold  py-4 w-full flex bg-[#DEB841] items-center justify-center rounded-t-lg`}
                >
                  Página inicial
                </Link>
              </li>
              <li>
                <Link
                  href={"/nossa-historia"}
                  className={`${ZillaFont.className} font-semibold  py-4 w-full flex bg-[#FFDDE1] items-center justify-center`}
                >
                  Nossa história
                </Link>
              </li>
              <li>
                <Link
                  className={`${ZillaFont.className} font-semibold  py-4 w-full flex bg-[#DEB841] items-center justify-center`}
                  href={'/ajude-nos'}
                >
                  Ajude-nos
                </Link>
              </li>
              <li>
                <Link
                  className={`${ZillaFont.className} font-semibold  py-4 w-full flex bg-[#DEB841] items-center justify-center`}
                  href={'contato'}
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  className={`${ZillaFont.className} font-semibold  py-4 w-full flex bg-[#2C70A6] items-center justify-center rounded-b-lg`}
                  href={'/simios'}
                >
                  Grupo Simios
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
