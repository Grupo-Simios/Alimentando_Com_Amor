import { ZillaFont } from "@/assets/fonts";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { ComponentProps } from "react";
import { HtmlHTMLAttributes } from "react";
import { Linkedin } from "lucide-react";

export interface Iprofile extends ComponentProps<"section"> {
  linkedin?: string;
  github?: string | any;
  name: string;
  mainFunction?: string;
  image: string | HTMLImageElement;
  adm?: boolean;
}

export function Members({
  linkedin,
  github,
  name,
  mainFunction,
  image,
  adm,
  ...props
}: Iprofile) {
  return (
    <div className="flex flex-col w-fit gap-5  justify-center items-center">
      <figure className="max-w-52 max-[310px]:px-4">
        
        <Image
          width={168}
          height={210}
          className="rounded"
          src={image}
          alt={name}
        />
      </figure>
      <div className="flex flex-col mb-10 gap-3">
        <h3
          className={`${ZillaFont.className} font-semibold antialised text-lg leading-7 text-center text-[#2e2c2ccc]
          max-[190px]:text-sm
          max-[310px]:text-sm
          max-[400px]:text-base
          `}
        >
          {name},
          <br /> {mainFunction}
        </h3>
        <div className="gap-6 flex self-center">
          
          {github != "" ? (
            <Link href={github!} target="_blank">
              <FaGithub
                title={`Ir para o Github do ${name}`}
                cursor={"pointer"}
                className="text-4xl max-[190px]:text-xl max-[320px]:text-2xl"
              />
            </Link>
          ) : null}
          
          {linkedin != "" ? (
            <Link href={linkedin!} target="_blank">
              <FaLinkedin
                title={`Ir para o Github do ${name}`}
                cursor={"pointer"}
                className="text-4xl max-[190px]:text-xl max-[320px]:text-2xl"
              />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
