import { ZillaFont, outfitFont } from "@/assets/fonts"
import styleActions from '@/components/home.collection/ongActions/style/ongactions.module.css'

export const OngActions = () =>{
  return(
    <>
    
  <section>

    <header className={`hidden ${styleActions.headerActions}`}>
      <h1 className="text-2xl font-bold">Veja algumas de nossas ações</h1>
    </header>
  <section className="flex gap-8 py-12 px-5 flex-col w-full bg-[#FFBF69] md:bg-white
     md:flex md:flex-row md:justify-center md:flex-wrap
     ">
    
  
        <article className={`flex flex-col gap-6 ${styleActions.firsArticle}`}>
          <span
            className={`${ZillaFont.className} font-semibold text-2xl  leading-7 
            md:hidden
            `}
          >
            Higiene feminina
          </span>
          <p
            className={`${outfitFont.className} text-lg leading-5 text-[##1B1B1BCC] text-justify max-[250px]:text-base
            md:leading-2 md:text-left 
            `}
          >
            No dia 11/03 de 2023 realizamos o dia da mulher distribuindo mais de
            120 kit de higiene feminina ntre moradoras da comunidade asso da
            Pátria e mulheres em situação de rua
          </p>
        </article>
        <article className="flex w-[100%] flex-col bg-[#1B1B1BCC] p-6 rounded-2xl gap-4 max-[165px]:p-2  max-[190px]:p-2
          md:w-72 md:h-auto md:shadow-lg md:p-6 md:rounded-2xl md:bg-white  md:border
        ">
          <span
            className={`${outfitFont.className} text-xl font-black leading-6 text-[#FFDDE1] max-xsm:text-base max-[250px]:text-sm max-[170px]:text-[10px]   max-[190px]:text-sm
            md:text-black md:font-normal
            `}
          >
            Até o momento temos
            <br /> conseguido:
          </span>
          <ul
            role="list"
            className="marker:text-[#FFDDE1] flex flex-col gap-4 pl-6 list-disc list-color-[#ffdee3]
            
            "
          >
            <li
              className={`${outfitFont.className} font-black text-xl leading-6 text-[#ffdee3] max-xsm:text-base max-[250px]:text-sm max-[170px]:text-[10px] max-[190px]:text-sm
              md:font-normal md:text-xl md:text-black md:text-left
              `}
            >
              Distribuição de 90 cestas,
              <br /> básicas por mês, totalizando <br /> 5.600 cestas básicas em
              5 anos.
            </li>
            <li
              className={`${outfitFont.className}  font-black text-xl leading-6 text-[#ffdee3] max-xsm:text-base max-[250px]:text-sm max-[170px]:text-[10px] max-[190px]:text-sm
              md:font-normal md:text-black
              `}
            >
              Distribuição de 170 marmitas toda semana.
            </li>
          </ul>
        </article>
        <article className="flex flex-col gap-4 
         md:w-72 md:h-72 md:shadow-lg md:p-6 md:rounded-2xl md:border
        ">
          <span
            className={`${ZillaFont.className}  leading-7 text-[#1B1B1BCC] font-semibold text-2xl 
            md:hidden
            `}
          >
            Dia das crianças
          </span>
          <p
            className={`${outfitFont.className} text-justify leading-6 text-[#1B1B1BCC] font-normal text-lg max-[250px]:text-base
            md:text-left
            `}
          >
            No dia 22/10 de 2023 realizamos o dia das crianças distribuindo 186
            brinquedos e lanches. E em parceria com outras associações sociais
            (como o grupo Criando Laços) preparamos um dia de atividades
            recreativas com vários rinquedos.
          </p>
        </article>
      </section>
  </section>
    </>
  )
}