import { simiosLogo } from "@/models/urlImgSwiper.model";
import ParagraphSection from "@/components/sectionParagraph/sectionParagraph";

import clsx from "clsx";

export const AboutSimios = () => {
  const Container = clsx(
    "flex flex-col items-center gap-6",
    `md:flex-row w-full`
  );

  const ImageSimios = clsx(
    "w-44 rounded-full",
    "max-[190px]:w-16 max-[225px]:w-24 max-[270px]:w-32"
  );



  return (
    <section className={Container}>
      <img
        className={ImageSimios}
        src={simiosLogo.image}
        alt="Imagem do grupo Simios"
      />
   
      <ParagraphSection border={false}>
        Somos um coletivo dedicado ao desenvolvimento profissional, comprometido
        em aprimorar as habilidades dos colaboradores por meio de projetos
        voluntários abrangentes, com foco em temáticas sociais, ambientais e
        outros.
      </ParagraphSection>
    </section>
  );
};
