import { ZillaFont, outfitFont } from "@/assets/fonts"

export const OngActions = () =>{
  return(
    <>
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
    </>
  )
}