"use client";

import { IoIosMenu } from "react-icons/io";
import { FaArrowTurnDown } from "react-icons/fa6";
import { ZillaFont, outfitFont } from "../../fonts/";

import { FooterMobile } from "../../components/Footer/Mobile";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Home = () => {
  const data = [
    { id: "1", Image: "https://github.com/DaviSC17.png" },
    { id: "2", Image: "https://github.com/dinhoSilwa.png" },
    { id: "3", Image: "https://github.com/IcaroFilipeD2.png" },
    { id: "4", Image: "https://github.com/gabriel-sant123.png" },
    { id: "4", Image: "https://github.com/gabriel-sant123.png" },
  ];

  return (
    <>
      <header className="flex  w-[100%] ml-auto h-28 justify-end relative  px-2 pt-10">
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

      <section className="flex gap-8 py-12 px-5 flex-col w-full bg-[#FFBF69]">
        <article className="flex flex-col gap-6">
          <span
            className={`${ZillaFont.className} font-semibold text-2xl leading-7`}
          >
            Higiene feminina
          </span>
          <p
            className={`${outfitFont.className} text-lg leading-5 text-[##1B1B1BCC] text-justify`}
          >
            No dia 11/03 de 2023 realizamos o dia da mulher distribuindo mais de
            120 kit de higiene feminina ntre moradoras da comunidade asso da
            Pátria e mulheres em situação de rua
          </p>
        </article>
        <article className="flex w-[100%] flex-col bg-[#1B1B1BCC] p-6 rounded-2xl gap-4">
          <span
            className={`${outfitFont.className} text-xl font-black leading-6 text-[#FFDDE1]`}
          >
            Até o momento temos
            <br /> conseguido:
          </span>
          <ul
            role="list"
            className="marker:text-[#FFDDE1] flex flex-col gap-4 pl-6 list-disc list-color-[#ffdee3]"
          >
            <li
              className={`${outfitFont.className}  font-black text-xl leading-6 text-[#ffdee3] `}
            >
              Distribuição de 90 cestas,
              <br /> básicas por mês, totalizando <br /> 5.600 cestas básicas em
              5 anos.
            </li>
            <li
              className={`${outfitFont.className}  font-black text-xl leading-6 text-[#ffdee3] `}
            >
              Distribuição de 170 marmitas toda semana.
            </li>
          </ul>
        </article>
        <article className="flex flex-col text-justify gap-4">
          <span
            className={`${ZillaFont.className}  leading-7 text-[#1B1B1BCC] font-semibold text-2xl  `}
          >
            Dia das crianças
          </span>
          <p
            className={`${outfitFont.className} leading-6 text-[#1B1B1BCC] font-normal text-lg`}
          >
            No dia 22/10 de 2023 realizamos o dia das crianças distribuindo 186
            brinquedos e lanches. E em parceria com outras associações sociais
            (como o grupo Criando Laços) preparamos um dia de atividades
            recreativas com vários rinquedos.
          </p>
        </article>
      </section>

      <section className="flex bg-[#F9F6EE] flex-col items-center gap-10 leading-7 py-16 px-5">
        <h1 className={`${ZillaFont.className} font-black text-2xl `}>
          Alimentando com amor
        </h1>

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="Images"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.Image} alt="slider" />
            </SwiperSlide>
          ))}
        </Swiper>

        <article className="flex w-full max-w-md flex-col gap-5  ">
          <p className={`${outfitFont.className} font-normal text-lg `}>
            Há mais de cinco anos trabalhando em prol dos mais necessitados
          </p>
          <p className={`${outfitFont.className} font-normal text-lg `}>
            Realizamos várias ações com as pessoas menos favorecidas, que por
            muitas razões se encontram em condições vulneráveis (drogas,
            alcoolismo, problemas psiquiátricos, violência familiar, entre
            muitos outros).
          </p>
          <p className={`${outfitFont.className} font-normal text-lg `}>
            Nossa associação se destina a ajudar, orientar e amparar pessoas em
            situação de rua ou com recursos escassos, fornecendo um lugar para
            dormir e alimentação (café da manhã, almoço e janta).
          </p>
          <p className={`${outfitFont.className} font-normal text-lg `}>
            Fornecemos marmitas em diversos pontos da Cidade Alta e arredores.
          </p>
        </article>
      </section>

      <FooterMobile />
    </>
  );
};
