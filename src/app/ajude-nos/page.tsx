"use client";

import { ZillaFont, outfitFont } from "@/assets/fonts";
import { TiClipboard } from "react-icons/ti";
import { Menu } from "@/components/calltoaction.collection/Menu";
import { useRef, useState , useEffect} from "react";
import { externaldetailsbank, ongDetails } from "@/models/ongdetails";
import Image from "next/image";
import {Copy , TabletSmartphone} from "lucide-react";
import Button from "@/components/home.collection/CalltoactionButton/button";
import clsx from "clsx";
import Title from "@/components/titles/title";


export default function HelpUs() {
  console.log(externaldetailsbank?.CNPJ)
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





//  useEffect(() => {

//     const createQr:{isQrCreate : boolean} = {isQrCreate : false};

//    const getQRCODE = async () => {

//     if(!createQr.isQrCreate) {
     
//       try {
//         const QR = await fetch(
//           `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${ongDetails[0].bankDetails?.CNPJ}`
//         );
//         setisQrCode(!false)
//         setQRCODEURL(QR.url);
//         createQr.isQrCreate = !false
//         return;
//       } catch (error) {
//         console.log("Deu erro", error);
//      }
//     }
//     return
//    };
//    getQRCODE();
//  },[]);

const titleHelpUs = clsx(
  "text-2xl leading-7 p-1 text-center  border-b-[2px] w-full border-[#FF9F1C]",
 " max-[245px]:text-base max-[210px]:text-sm max-[175px]:text-[10px] max-[175px]:font-bold"
)

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">

      {/* componentizar esse componente */}
      <header
        className="flex w-full h-16 justify-end items-center backdrop-blur fixed  px-1 
           md:hidden max-[200px]:h-10">
        <h1
          className={`${outfitFont.className} uppercase absolute flex  gap-3 items-center z-[-1] justify-center inset-0 text-xl 
        max-[200px]:text-[10px] max-[210px]:px-0 xsm:text-2xl max-[320px]:text-base`}>
          Ajude-nos
        </h1>

        <Menu />
      </header>

      <section
        className="flex self-center flex-col gap-5 px-5 mt-24
      

      max-[215px]:px-2
      xsm:max-w-[520px]
      
      "
      >
     
     <Title align="center" className={`${ZillaFont.className} ${titleHelpUs}`}>
          Seja Voluntário
        </Title>

        <p
          className={`${outfitFont.className} font-normal text-lg leading-6 text-[#1B1B1BCC]
          
          max-[245px]:text-sm
          max-[210px]:text-xs
          max-[170px]:text-[10px]
          `}
        >
          Estamos sempre precisando de mais pessoas dispostas a ajudar com esse
          inestimável trabalho de base, sem a qual muitos cidadãos estariam
          completamente desamparados.
        </p>

        <p
          className={`${outfitFont.className} font-normal text-lg leading-6 text-[#1B1B1BCC] mb-4
          
          max-[245px]:text-sm
          max-[210px]:text-xs
          max-[170px]:text-[10px]
          `}
        >
          Clicando no botão abaixo você acessará o formulário de cadastro de
          voluntário. Ficaremos muito felizes de ter seu apoio!
        </p>

        <button
          className={`${outfitFont.className} font-normal text-2xl bg-[#FF9F1C] text-[#f5f5f5] leading-6 rounded-lg w-fit self-center px-6 py-3
          
          max-[325px]:text-xl max-[285px]:text-lg max-[270px]:text-base
          max-[250px]:text-sm max-[235px]:text-xs
          max-[190px]:px-4 max-[175px]:text-[10px] max-[175px]:font-bold
          max-[160px]:px-2

          `}
        >
          Quero ser voluntário
        </button>

      </section>

      <section
        className="flex self-center flex-col px-5 gap-2 mb-32
      
      max-[215px]:px-0
      max-[250px]:px-2
      xsm:max-w-[520px]
      "
      >
   
        <Title align="center" className={`${ZillaFont.className} ${titleHelpUs}`}>
          Faça uma Doação
        </Title>
        

        <p
          className={`${outfitFont.className} font-normal text-lg leading-6 text-[#1B1B1BCC] ml-2 mb-10
          
          max-[245px]:text-sm
          max-[210px]:text-xs
          max-[170px]:text-[10px]
          `}
        >
          Escaneie o código QR ou copie o código abaixo e cole no aplicativo do
          seu banco para fazer um pix de qualquer valor.
        </p>

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
