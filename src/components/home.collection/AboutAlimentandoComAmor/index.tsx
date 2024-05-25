import clsx from "clsx";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { ZillaFont } from "@/assets/fonts/index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import Swiper core and required modules
import { urlImgdata } from "@/models/urlImgSwiper.model";
import Paragraph from "../paragraph/paragraph";

export const AboutAlimentandoComAmor = () => {
  const heroTitlemobile = clsx(
    "font-black max-[250px]: text-lg text-center",
    'md:hidden'
  )

  const heroTitleDesktop = clsx(
    "font-black text-lg text-center hidden ml-auto mr-auto",
    "md:flex md:text-md-title h-16 items-end text-[#1B1B1B] text-center"
  )

  const heroArticleContainer = clsx(
    "flex w-full flex-col gap-5",
    "md:w-[1100px] ml-auto mr-auto"
  )
  return (
    <>
      <section className="bg-[#F9F6EE]">
        <div className="max-w-[920px] m-auto w-full sectionSwiper flex flex-col items-center gap-10 leading-7 py-16 px-5">
          <h1 className={`${ZillaFont.className} ${heroTitlemobile}`}>
            Alimentando com amor
          </h1>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="Images select-none"
          >
            {urlImgdata.map((item, id) => (
              <SwiperSlide key={id}>
                <Image src={item.url} width={824} height={465} alt={item.alt} />
              </SwiperSlide>
            ))}
          </Swiper>

          <h1 className={`${ZillaFont.className} ${heroTitleDesktop}`}>
            Alimentando com amor
          </h1>

          <article className={`${heroArticleContainer} max-w-[800px]`}>

            <Paragraph>
              Há mais de cinco anos trabalhando em prol dos mais necessitados
            </Paragraph>
            <Paragraph>
              Realizamos várias ações com as pessoas menos favorecidas, que por
              muitas razões se encontram em condições vulneráveis (drogas,
              alcoolismo, problemas psiquiátricos, violência familiar, entre
              muitos outros).
            </Paragraph>
            <Paragraph>
              Nossa associação se destina a ajudar, orientar e amparar pessoas em
              situação de rua ou com recursos escassos, fornecendo um lugar para
              dormir e alimentação (café da manhã, almoço e janta).
            </Paragraph>
            <Paragraph>
              Fornecemos marmitas em diversos pontos da Cidade Alta e arredores.
            </Paragraph>
          </article>
        </div>
      </section>
    </>
  )
}


