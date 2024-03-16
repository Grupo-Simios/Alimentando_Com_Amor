import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ZillaFont, outfitFont } from "../../fonts/";

export const Footer = () => {
  return (
    <footer className="flex bg-[#1b1b1bCC] h-full gap-6 flex-col">
      <div className="flex items-center justify-center flex-col border-b border-[#000000] px-24 py-12 w-[90%] mx-auto gap-6">
        <h1
          className={`${ZillaFont.className} font-normal  w-[200px]  text-[#f5f5f5] uppercase text-xl leading-6`}
        >
          siga-nos nas redes
        </h1>
        <div className="flex gap-8">
          <a href="#">
            <FaFacebook color="#f5f5f5" size={"48px"} />
          </a>

          <a href="#">
            <FaInstagram color="#f5f5f5" size={"48px"} />
          </a>
        </div>
      </div>
      <div className="flex flex-col w-[95%] gap-8 mx-auto">
        <h1
          className={`${ZillaFont.className} font-normal uppercase text-[#f5f5f5] leading-7 text-2xl flex self-center`}
        >
          Contato
        </h1>
        <p
          className={`${outfitFont.className} px-[15px] font-normal leading-4  text-[#f5f5f5]`}
        >
          Rua Professor Zuza, 731 Cidade Alta RN
        </p>
        <p
          className={`${outfitFont.className} px-[15px] font-normal leading-4  text-[#f5f5f5] flex gap-3 items-center `}
        >
          <FaWhatsapp color="#f5f5f5" size={"20px"} />
          Número de telefone: 84 9873-6833
        </p>
        <div className="flex justify-center items-center gap-3 border py-2 rounded-lg border-[#8D1F73]">
          <MdOutlineEmail size={"20px"} color="#f5f5f5" />
          <span
            className={`${outfitFont.className} font-normal leading-4  text-[#f5f5f5]`}
          >
            E-mail:
            <br /> voluntário@alimentandocomamornatal.org
          </span>
        </div>
      </div>
      <div className="flex w-[95%] border-t border-[#000000] pt-2 mx-auto items-center justify-center flex-col gap-3">
        <h1 className={`${ZillaFont.className} font-normal text-[#f5f5f5] uppercase text-xl leading-6 `}>sitemap</h1>
        <nav>
          <ul className="flex flex-col items-center gap-2">
            <li><a className={`${outfitFont.className} no-underline text-sm leading-4 text-[#f5f5f5]`} href="#">Página Inicial</a></li>
            <li><a className={`${outfitFont.className} no-underline text-sm leading-4 text-[#f5f5f5]`} href="#">Nossa História</a></li>
            <li><a className={`${outfitFont.className} no-underline text-sm leading-4 text-[#f5f5f5]`} href="#">Ajude-nos</a></li>
            <li><a className={`${outfitFont.className} no-underline text-sm leading-4 text-[#f5f5f5]`} href="#">Contato</a></li>
            <li><a className={`${outfitFont.className} no-underline text-sm leading-4 text-[#f5f5f5]`} href="#">Grupo Simios</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
