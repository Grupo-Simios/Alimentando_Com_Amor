"use client";
import { ZillaFont, outfitFont } from "@/assets/fonts";
import clsx from "clsx";
import Title from "@/components/titles/title";
import Paragraph from "@/components/home.collection/paragraph/paragraph";
import Header from "@/components/headerMobile/header";
import Button from "@/components/home.collection/CalltoactionButton/button";
import { bankDetails } from "@/models/ongdetails";
import QRCode from "qrcode.react";
import Image from "next/image";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function HelpUs() {

  const [isCopy, setIscopy] = useState<any>();

  const copyClipboard = (currentCLiped) => {
    navigator.clipboard.writeText(currentCLiped).then(() => console.log("Copiada"));

    setTimeout(()=>{

      if(currentCLiped === bankDetails.CNPJ) setIscopy("cnpj")
      else if(currentCLiped === bankDetails.key) setIscopy("key")
      
    })
  };

  const titleHelpUs = clsx(
    "text-2xl leading-7 p-1 text-center  border-b-[2px] w-full border-[#FF9F1C]",
    " max-[245px]:text-base max-[210px]:text-sm max-[175px]:text-[10px] max-[175px]:font-bold"
  );

  const detailsContainer = clsx(
    "flex flex-wrap justify-start gap-x-12 gap-y-6 mb-6"
  );
  const titleDetails = clsx(
    `font-bold text-md text-md text-[#363636]`,
    outfitFont.className
  );
  const subtitleDetails = clsx(
    `font-semibold text-sm text-[#363636]`,
    outfitFont.className
  );

  const qrCodeContainer = clsx(
    'md:flex md:flex-row md:justify-center md:gap-6',
    'flex flex-col items-center'
  )

  return (
    <main className="flex flex-col gap-10 overflow-x-hidden bg-branco-semi">
      <Header>Ajude-nos</Header>

      <section
        className="flex self-center flex-col gap-5 px-5 mt-24
      max-[215px]:px-2
      xl:w-[50%]
      
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
      </section>

      <Button backGround="primary">Quero ser voluntário</Button>

      <section
        className="flex self-center flex-col px-5 gap-2
      
      max-[215px]:px-0
      max-[250px]:px-2
      xl:w-[50%]
      
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
      </section>

      {/* ............QRCODEAREA............ */}
      <section className=" w-[50%] ml-auto mr-auto ">
        <article className={qrCodeContainer}>
          <div className="flex flex-col items-center justify-center w-[40%] gap-8">
            <p
              title="Chave Pix da Associação"
              className={`break-words whitespace-normal bg-light-yellow p-4 w-64 h-32 rounded-md text-sm font-semibold 
            text-orange-800
            ${outfitFont.className}`}
            >
              {bankDetails.key.toUpperCase()}
            </p>
            <Button
              backGround="copyPix"
              isCliped={isCopy}
              value={"icons"}
              onClick={() => copyClipboard(bankDetails.key.trim())}
            >
              {isCopy === 'key' ? <span>Chave Pix Copiada</span> : <span>Copiar Chave Pix</span>}
            </Button>

          </div>

          <figure className="flex flex-col items-center justify-center w-[35%] gap-8 bg-white">
            <QRCode value={bankDetails.key.trim() as string} size={170} />
            <Image
              src={"https://i.imgur.com/jNfjqfa.png"}
              width={56}
              height={56}
              alt="bank image"
              className="absolute"
            />
          </figure>
        </article>
      </section>
      {/* ............[END]QRCODEAREA............ */}

      <section className=" w-[45%] ml-auto mr-auto">
        <article className={detailsContainer}>
          <div>
            <h2 className={subtitleDetails}>Destinatário:</h2>
            <p className={titleDetails}>{bankDetails.ongName}</p>
          </div>

          <div>
            <h2 className={subtitleDetails}>Banco</h2>
            <p className={titleDetails}>{bankDetails.bankName}</p>
          </div>

          <div>
            <h2 className={subtitleDetails}>Chave Pix CNPJ:</h2>
            <p className={`${titleDetails} flex gap-4 items-center`}>
          <span className={isCopy === "cnpj" ? 'font-extrabold' : ""}> {bankDetails.CNPJ}</span>
              <span
                className="cursor-pointer"
                onClick={() => copyClipboard(bankDetails.CNPJ.trim())}
              >
                <Copy size={18} strokeWidth={2} className={isCopy === "cnpj" ? 'text-green-700 text-extrabold' : 'text-zinc-500'}/>
              </span>
            </p>
          </div>
        </article>
        <article className=" mb-8">
          <div className="w-[50%]">
            <h2 className={subtitleDetails}>Dados Bancários:</h2>
            <ul className="flex justify-between  w-full">
              <li className="flex flex-col">
                <span className={titleDetails}>Agencia:</span>{" "}
                <span className={titleDetails}>{bankDetails.agency}</span>
              </li>
              <li className="flex flex-col">
                <span className={titleDetails}>Operação:</span>{" "}
                <span className={titleDetails}>{bankDetails.operator}</span>
              </li>
              <li className="flex flex-col">
                <span className={titleDetails}>Conta:</span>{" "}
                <span className={titleDetails}>{bankDetails.account}</span>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <h3
        className={`${outfitFont.className} font-normal ml-auto mr-auto text-xl mb-8`}
      >
        SUA AJUDA É MUITO BEM VINDA!
      </h3>
    </main>
  );
}
