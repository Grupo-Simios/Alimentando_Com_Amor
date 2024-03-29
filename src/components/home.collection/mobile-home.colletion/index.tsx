import { ZillaFont, outfitFont } from "@/assets/fonts";
import { IoIosMenu } from "react-icons/io";
import { FaArrowTurnDown } from "react-icons/fa6";
import { Menu } from "@/components/calltoaction.collection/Menu";

export const MobileHome = () => {
  return (
    <>
      {/* start - hero section */}

      <section className="md:hidden flex flex-col">
        <header className="flex z-10 w-full h-20 items-center justify-end fixed backdrop-blur-3xl  px-2 ">
          <h1
            className={`${ZillaFont.className} uppercase absolute flex  flex-col z-[-1] items-center inset-0 justify-center text-xl xsm:text-2xl  max-[230px]:text-sm    max-[165px]:text-[10px]`}
          >
            Alimentando
            <span className="uppercase text-[#FF9F1C] max-[230px]:text-sm    max-[210px]:text-[10px]">
              com amor
            </span>
          </h1>
          <Menu />
        </header>
        <section className="flex mt-40 h-[710px] gap-10 flex-col  items-center ">
          <article className="flex py-4 w-[90%] flex-col border-4 border-[#1b1b1bcc] items-center gap-4 xsm:max-w-[440px]">
            <span
              className={`${outfitFont.className} text-[#114b5f] text-lg leading-6 font-black xsm:text-xl   max-[295px]:text-xs   max-[210px]:text-[8px]`}
            >
              ações voluntárias
            </span>
            <span
              className={`${outfitFont.className} text-[#114b5f] text-lg leading-6 font-black xsm:text-xl   max-[295px]:text-xs max-[210px]:text-[8px]`}
            >
              kits de higiene feminina
            </span>
            <span
              className={`${outfitFont.className} text-[#114b5f] text-lg leading-6 font-black  xsm:text-xl   max-[295px]:text-xs max-[210px]:text-[8px]`}
            >
              brinquedos para as crianças
            </span>
          </article>
          <p
            className={`${ZillaFont.className} text-xl leading-6 font-normal flex w-[90%] text-center justify-center max-[230px]:text-sm`}
          >
            Distribuição de cestas básicas e<br /> marmitas para pessoas
            vulneráveis ou <br />
            em situação de rua
          </p>
          <article className="flex flex-col h-full  w-full justify-around items-center">
            <div className="flex flex-col gap-10 items-center">
              <a
                href="#"
                className={`${outfitFont.className} font-black
              text-5 text-xl py-3 px-20 text-[#f5f5f5] bg-[#FF9F1C] rounded-lg max-[300px]:px-14 text-xs  max-[200px]:px-8 text-sm`}
              >
                Ajude-nos
              </a>
              <a
                href="#"
                className={`${outfitFont.className} font-black
              text-5 text-xl py-3 px-14 border-2 border-[#FF9F1C]  rounded-lg max-[300px]:px-8 text-xs  max-[200px]:px-2 text-sm`}
              >
                Conheça o projeto
              </a>
            </div>

            <div className="flex gap-5 w-[100%] items-center justify-center">
              <span
                className={`${ZillaFont.className} font-black text-lg leading-6 text-[#1b1b1bcc] 
             max-[250px]:text-sm  xsm:text-xl`}
              >
                Veja abaixo algumas
                <br /> de nossas ações
              </span>
              <div
                className="p-4 border-2 rounded-tr-[50%] 
            rounded-br-[50%] rounded-bl-[50%] border-[#FF9F1C] max-xsm:p-2 "
              >
                <FaArrowTurnDown color="#FFBF69" size={"22px"} />
              </div>
            </div>
          </article>
        </section>
      </section>
      {/* end to hero home */}

      {/* mobile home version */}
    </>
  );
};
