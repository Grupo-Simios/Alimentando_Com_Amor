import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ZillaFont, outfitFont } from "@/assets/fonts/index";

export const FooterMobile = () => {
  return (
    <footer className="flex bg-[#1b1b1bCC]  gap-6 w-full flex-col">
      <div className="flex items-center justify-center flex-col border-b border-[#000000] py-12 w-full mx-auto gap-8">
        <h1
          className={`${ZillaFont.className} font-normal  text-center text-[#f5f5f5] uppercase text-xl leading-6  
            max-[195px]:w-[100px]
            max-[195px]:text-[10px] 
            max-[285px]:text-base
            max-[285px]:w-40   
            min-[286px]:w-60`}
        >
          siga-nos nas redes
        </h1>
        <div className="flex h-fit gap-6 items-center justify-center">
          <a href="#">
            <FaFacebook
              color="#f5f5f5"
              className="text-5xl max-[195px]:text-2xl max-[285px]:text-4xl"
            />
          </a>

          <a href="#">
            <FaInstagram
              color="#f5f5f5"
              className="text-5xl max-[195px]:text-2xl max-[285px]:text-4xl"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full  items-center gap-8 mx-auto">
        <h1
          className={`${ZillaFont.className}  font-normal uppercase text-[#f5f5f5] leading-7 text-2xl flex justify-center
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
            className={`${outfitFont.className}   font-normal leading-4 text-xs  text-[#f5f5f5] 

            max-[215px]:text-[6px]
            max-[215px]:font-bold
            sm:text-base 
            max-[320px]:text-[10px]`}
          >
            Rua Professor Zuza, 731 Cidade Alta RN
          </p>
          <p
            className={`${outfitFont.className} text-xs font-normal leading-4  text-[#f5f5f5] flex gap-3 items-center 
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
            Número de telefone: 84 9873-6833
          </p>

          <p
            className={`${outfitFont.className}font-normal  leading-4  text-[#f5f5f5] text-xs rounded-lg flex gap-3 items-center   


            max-[215px]:text-[6.5px]
            max-[215px]:font-bold
            sm:text-base 
            
            max-[320px]:text-[10px]`}
          >
            <MdOutlineEmail
              size={"20px"}
              color="#f5f5f5"
              className="max-[320px]:hidden"
            />
            E-mail:
            <br />
            voluntário@alimentandocomamornatal.org
          </p>
        </div>
      </div>
      <div className="flex w-[95%] border-t border-[#000000] pt-2 mx-auto items-center justify-center flex-col gap-3">
        <h1
          className={`${ZillaFont.className} font-normal text-[#f5f5f5] uppercase text-xl leading-6 `}
        >
          sitemap
        </h1>
        <nav>
          <ul className="flex flex-col items-center gap-2">
            <li>
              <a
                className={`${outfitFont.className} no-underline text-sm leading-4 text-[#f5f5f5]`}
                href="#"
              >
                Página Inicial
              </a>
            </li>
            <li>
              <a
                className={`${outfitFont.className} no-underline text-sm leading-4 text-[#f5f5f5]`}
                href="#"
              >
                Nossa História
              </a>
            </li>
            <li>
              <a
                className={`${outfitFont.className} no-underline text-sm leading-4 text-[#f5f5f5]`}
                href="#"
              >
                Ajude-nos
              </a>
            </li>
            <li>
              <a
                className={`${outfitFont.className} no-underline text-sm leading-4 text-[#f5f5f5]`}
                href="#"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                className={`${outfitFont.className} no-underline text-sm leading-4 text-[#f5f5f5]`}
                href="#"
              >
                Grupo Simios
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
