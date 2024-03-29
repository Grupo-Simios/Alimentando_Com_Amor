import { ZillaFont, outfitFont } from "@/assets/fonts/index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



export const AboutAlimentandoComAmor = () =>{

  const data = [
    { id: "1", Image: "https://github.com/DaviSC17.png" },
    { id: "2", Image: "https://github.com/dinhoSilwa.png" },
    { id: "3", Image: "https://github.com/IcaroFilipeD2.png" },
    { id: "4", Image: "https://github.com/gabriel-sant123.png" },
    { id: "4", Image: "https://github.com/gabriel-sant123.png" },
  ];
  

  return(
    
    <>
       
       <section className="sectionSwiper flex bg-[#F9F6EE] flex-col items-center gap-10 leading-7 py-16 px-5">
        <h1 className={`${ZillaFont.className} font-black text-2xl max-[250px]: text-lg text-center`}>
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
    </>
  )
}