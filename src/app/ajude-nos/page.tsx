"use client";

import { ZillaFont, outfitFont } from "@/assets/fonts";
import { TiClipboard } from "react-icons/ti";
import { useRef, useState , useEffect} from "react";
// import { externaldetailsbank, ongDetails } from "@/models/ongdetails";
import Image from "next/image";
import clsx from "clsx";
import Title from "@/components/titles/title";
import Paragraph from "@/components/home.collection/paragraph/paragraph";
import Header from "@/components/headerMobile/header";
import Button from "@/components/home.collection/CalltoactionButton/button";


export default function HelpUs() {
  const codePix = useRef<any>();
  const [isQrCode, setisQrCode] = useState<any>(false);
  const [QRCODEURL, setQRCODEURL] = useState<any>("olá")
  const qrStatus = {
    msg : "Carregando Qr Code..."
  }

  const copyClipboard = () => {
    navigator.clipboard
      .writeText(codePix.current.innerText)
      .then(() => alert("Copiado com sucesso"));
  };





const titleHelpUs = clsx(
  "text-2xl leading-7 p-1 text-center  border-b-[2px] w-full border-[#FF9F1C]",
 " max-[245px]:text-base max-[210px]:text-sm max-[175px]:text-[10px] max-[175px]:font-bold"
)

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <Header>Ajude-nos</Header>

      <section
        className="flex self-center flex-col gap-5 px-5 mt-24
      

      max-[215px]:px-2
      xsm:max-w-[520px]
      
      "
      >
        <Title
          align="center"
          className={`${ZillaFont.className} ${titleHelpUs}`}
        >
          Seja Voluntário
        </Title>

        <Paragraph>
          Estamos sempre precisando de mais pessoas dispostas a ajudar com esse
          inestimável trabalho de base, sem a qual muitos cidadãos estariam
          completamente desamparados.
        </Paragraph>

        <Paragraph>
          Clicando no botão abaixo você acessará o formulário de cadastro de
          voluntário. Ficaremos muito felizes de ter seu apoio!
        </Paragraph>

<Button>
Quero ser voluntário
</Button>


      </section>

      <section
        className="flex self-center flex-col px-5 gap-2 mb-32
      
      max-[215px]:px-0
      max-[250px]:px-2
      xsm:max-w-[520px]
      "
      >
        <Title
          align="center"
          className={`${ZillaFont.className} ${titleHelpUs}`}
        >
          Faça uma Doação
        </Title>

        <Paragraph>
          Escaneie o código QR ou copie o código abaixo e cole no aplicativo do
          seu banco para fazer um pix de qualquer valor.
        </Paragraph>

        <div className="flex flex-col w-fit mx-auto">
          <div className="flex flex-col w-fit relative self-center mb-10 ">
            <span
              ref={codePix}
              className={`${outfitFont.className} font-normal text-sm leading-6 text-[#1B1B1BCC]   p-3 rounded-lg bg-[#FFBF69]
            max-w-[300px] self-center
            
            max-[340px]:text-xs
            max-[315px]:text-[10px]
            max-[315px]:font-bold
            max-[270px]:p-5
            max-[270px]:text-[8px]
            max-[190px]:text-[6px]
            max-[230px]:p-2
            max-[160px]:p-1
            
            `}
            >
              00020126330014BR.GOV.BCB.PIX0
              <br />
              1111707763771952040000530398658 <br />
              02BR5925GABRIEL DE PAULA <br />
              CARVALHO6011TERESOPOLIS62070503
              <br />
              ***6304DFF4
            </span>

            <div
              onClick={copyClipboard}
              className={`${outfitFont.className} font-semibold leading-6  tracking-wide absolute w-full h-full flex items-center justify-center cursor-pointer 
              rounded-lg flex-col  top-[50%] left-[50%] translate-x-[-50%] bg-[#00000039] backdrop-blur-[3px] 
               translate-y-[-50%]  `}
            >
              <TiClipboard size={"50px"} />
              <span className="select-none">Copiar Chave Pix</span>
            </div>
          </div>

          <span
            className={`${outfitFont.className} font-normal text-sm leading-6 text-[#1B1B1BCC]  self-center ml-2 mb-10 p-4 bg-[#FFBF69]  max-w-[400px]
            `}
          >
            {isQrCode ? (
              <img src={QRCODEURL} alt="" />
            ) : (
              <span>{qrStatus.msg}</span>
            )}
          </span>
        </div>

        <span
          className={`${outfitFont.className} font-normal text-lg leading-6 text-[#1b1b1bcc] self-center
          
          
          max-[350px]:text-sm
          max-[270px]:text-xs
          max-[210px]:text-[10px]
          max-[175px]:text-[8px]
          max-[175px]:font-bold
          
          `}
        >
          SUA AJUDA É MUITO BEM VINDA!
        </span>
      </section>
    </div>
  );
}
