
"use client"
import { ZillaFont, outfitFont } from "@/assets/fonts/index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { urlImgdata } from "@/models/urlImgSwiper.model";
import clsx from "clsx";


export const AboutAlimentandoComAmor = () =>{


  const homeContainer = clsx(
    "sectionSwiper flex bg-[#F9F6EE] flex-col items-center gap-10 leading-7 py-16 px-5",
    
  )
  const heroTitlemobile = clsx(
   
    "font-black max-[250px]: text-lg text-center",
    'md:hidden'
    
  )

  const heroTitleDesktop = clsx(
    "font-black text-lg text-center hidden ml-auto mr-auto",
    "md:flex md:text-md-title h-16 items-end text-[#1B1B1B] text-center"

  )

  const paragraph = clsx(
    "font-normal text-lg",
    "md:mb-4"
  )

  const heroArticleContainer = clsx(
    "flex w-full flex-col gap-5 bg-[#F9F6EE]",
    "md:w-[45%] ml-auto mr-auto "
  
  )

  return(
    
    <>
       
       <section className={homeContainer}>
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
          {urlImgdata.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.Image} alt={item.altImg} />
            </SwiperSlide>
          ))}
        </Swiper>

        <h1 className={`${ZillaFont.className} ${heroTitleDesktop}`}>
          Alimentando com amor
        </h1>

        <article className={heroArticleContainer}>
          <p className={`${outfitFont.className} ${paragraph}`}>
            Há mais de cinco anos trabalhando em prol dos mais necessitados
          </p>
          <p className={`${outfitFont.className} ${paragraph}`}>
            Realizamos várias ações com as pessoas menos favorecidas, que por
            muitas razões se encontram em condições vulneráveis (drogas,
            alcoolismo, problemas psiquiátricos, violência familiar, entre
            muitos outros).
          </p>
          <p className={`${outfitFont.className} ${paragraph}`}>
            Nossa associação se destina a ajudar, orientar e amparar pessoas em
            situação de rua ou com recursos escassos, fornecendo um lugar para
            dormir e alimentação (café da manhã, almoço e janta).
          </p>
          <p className={`${outfitFont.className} ${paragraph}`}>
            Fornecemos marmitas em diversos pontos da Cidade Alta e arredores.
          </p>
        </article>
      </section>
    </>
  )
}