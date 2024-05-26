import Link from "next/link";
import clsx, { ClassValue } from "clsx";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { ZillaFont, outfitFont } from "@/assets/fonts/index";
import { contactDetails } from "@/models/ongdetails";
import React from "react";
import { cn } from "@/lib/utils";

const footerTitle = clsx(
  'font-normal  text-center text-[#f5f5f5] uppercase text-xl leading-6',
  'max-[195px]:w-[100px] max-[195px]:text-[10px] max-[285px]:text-base  max-[285px]:w-40  min-[286px]:w-60',
  'lg:text-[#444444]', 'lg:text-nav-newblue',
)

const footerMain = clsx(
  'flex bg-[#1b1b1bCC] gap-6 w-full flex-col pb-10',
  'lg:flex-row-reverse lg:py-10 lg:bg-navbar-Yellow'
)

const footerDivSocial = clsx(
  "flex items-center justify-center flex-col border-b border-[#000000] lg:border-none py-12 w-full mx-auto gap-8",
  'lg:text-red'
)
const footerDivContact = clsx(
  "flex flex-col w-full items-center gap-8 mx-auto",
  'lg:flex-1'
)

const footerDivSiteMap = clsx(
  "flex w-[95%] border-t border-[#000000] lg:border-none  pt-2 mx-auto items-center justify-center flex-col gap-3"
)

const footerText = clsx(
  'lg:text-primary-black-text'
)

const LinkComponent = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, href, ...props }, ref) => (
    <a
      className={
        cn(
          "no-underline text-sm leading-4 text-[#f5f5f5] lg:text-primary-black-text",
          outfitFont.className,
          className
        )
      }
      ref={ref}
      href={href}
      {...props}
    />
  )
);
LinkComponent.displayName = "Link";

const FooterMobile = () => {
  return (
    <footer className={footerMain}>
      <div className={`${footerDivSocial}`}>
        <h2 className={`${ZillaFont.className} ${footerTitle}`}>
          siga-nos nas redes
        </h2>
        <div className="flex h-fit gap-6 items-center justify-center">
          <a aria-label="link Para a Pagina do Facebook"
            href="https://facebook.com/cyda.lima.35" target="_blank">
            <FaFacebook
              color="#f5f5f5"
              className="text-5xl max-[195px]:text-2xl max-[285px]:text-4xl hover:scale-110 duration-300"
            />
          </a>

          <a aria-label="Link para a pagina do Instagram"
            href="https://www.instagram.com/alimentandocomamornatal/" target="_blank" >
            <FaInstagram
              color="#f5f5f5"
              className="text-5xl max-[195px]:text-2xl max-[285px]:text-4xl hover:scale-110 duration-300"
            />
          </a>
        </div>
      </div>
      <div className={footerDivContact}>
        <h1
          className={`${ZillaFont.className} ${footerTitle} font-normal uppercase text-[#f5f5f5] leading-7 text-2xl flex justify-center
            max-[195px]:w-[100px]
            max-[195px]:text-[10px] 
            max-[285px]:text-base
            max-[285px]:w-40   
            min-[286px]:w-60
          `}
        >
          Contato
        </h1>

        <div className="flex flex-col gap-6">
          <p
            className={`${outfitFont.className} ${footerText} font-normal leading-4 text-xs  text-[#f5f5f5] 
            max-[215px]:text-[6px]
            max-[215px]:font-bold
            sm:text-base 
            max-[320px]:text-[10px]`}
          >
            Rua Professor Zuza, 731 Cidade Alta RN
          </p>
          <p
            className={`${outfitFont.className} ${footerText} text-xs font-normal leading-4 text-[#f5f5f5] flex gap-3 items-center 
            max-[215px]:text-[6px]
            max-[215px]:font-bold
            sm:text-base  
            max-[320px]:text-[10px]`}
          >
            <FaWhatsapp
              color="#f5f5f5"
              size={"20px"}
              className="max-[320px]:hidden"
            />
            <a
              aria-label="Link para o Whastapp "
              href={contactDetails.linkWhatsapp1}> Número de telefone: {contactDetails.tel1}
            </a>
          </p>

          <p
            className={`${outfitFont.className} ${footerText} font-normal  leading-4  text-[#f5f5f5] text-xs rounded-lg flex gap-3 items-center   
            max-[215px]:text-[6.5px]
            max-[215px]:font-bold
            sm:text-base 
            max-[320px]:text-[10px]`}
          >

            <MdOutlineEmail
              size={"20px"}
              color="#f5f5f5"
              className={`max-[320px]:hidden ${footerText}`}
            />
            E-mail:
            <br />
            {contactDetails.volunteerEmail}
          </p>
        </div>
      </div>

      <div className={footerDivSiteMap}>
        <h3
          className={`${ZillaFont.className} ${footerTitle} font-normal text-[#f5f5f5] uppercase text-xl leading-6 `}
        >
          Mapa do Site
        </h3>
        <nav>
          <ul className="flex flex-col items-center gap-2">
            <li><LinkComponent aria-label="Ir para página Pagina Inicial" href="/">Pagina Inicial</LinkComponent></li>
            <li><LinkComponent aria-label="Ir para página Nossa História" href="/nossa-historia">Nossa história</LinkComponent></li>
            <li><LinkComponent aria-label="Ir para página Ajude-nos" href="/ajude-nos">Ajude-nos</LinkComponent></li>
            <li><LinkComponent aria-label="Ir para página Contato" href="/contato">Contato</LinkComponent></li>
            <li><LinkComponent aria-label="Ir para página Grupo Simios" href="/grupo-simios">Grupo Simios</LinkComponent></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export { FooterMobile };
