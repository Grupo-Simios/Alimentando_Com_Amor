import { ZillaFont, outfitFont } from "@/assets/fonts"
import { IoIosMenu } from "react-icons/io"
import { FaArrowTurnDown } from "react-icons/fa6"

export const MobileHome = () =>{
  return(
    <>
          {/* start - hero section */}

          <section className="md:hidden">
        <header className="home-logo-name flex  w-[100%] ml-auto h-28 justify-end relative  px-2 pt-10">
          <h1
            className={`${ZillaFont.className} uppercase absolute flex  flex-col items-center top-10 bottom-0 right-0 left-0 text-3xl `}
          >
            Alimentando <br />
            <span className="uppercase text-[#FF9F1C]">com amor</span>
          </h1>
          <IoIosMenu size={"32px"} />
        </header>
        <section className="flex mt-10 h-[710px] gap-10 flex-col  items-center">
          <article className="flex py-4 w-[90%] flex-col border-4 border-[#1b1b1bcc] items-center gap-4 ">
            <span
              className={`${outfitFont.className} text-[#114b5f] text-xl leading-6 font-black`}
            >
              ações voluntárias
            </span>
            <span
              className={`${outfitFont.className} text-[#114b5f] text-xl leading-6 font-black`}
            >
              kits de higiene feminina
            </span>
            <span
              className={`${outfitFont.className} text-[#114b5f] text-xl leading-6 font-black`}
            >
              brinquedos para as crianças
            </span>
          </article>
          <p
            className={`${ZillaFont.className} text-xl leading-6 font-normal flex w-[90%] text-center justify-center`}
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
              text-5 text-xl py-3 px-20 text-[#f5f5f5] bg-[#FF9F1C] rounded-lg`}
              >
                Ajude-nos
              </a>
              <a
                href="#"
                className={`${outfitFont.className} font-black
              text-5 text-xl py-3 px-10 border-2 border-[#FF9F1C]  rounded-lg`}
              >
                Conheça o projeto
              </a>
            </div>

            <div className="flex gap-5 w-[90%] items-center justify-center">
              <span
                className={`${ZillaFont.className} font-black text-xl leading-6 text-[#1b1b1bcc]`}
              >
                Veja abaixo algumas
                <br /> de nossas ações
              </span>
              <div
                className="p-4 border-2 rounded-tr-[50%] 
            rounded-br-[50%] rounded-bl-[50%] border-[#FF9F1C]"
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
  )
}