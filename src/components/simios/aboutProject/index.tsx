import clsx from "clsx";

import { ZillaFont } from "@/assets/fonts";
import ParagraphSection from "@/components/sectionParagraph/sectionParagraph";

const AboutProject = () => {
  const subTitleAboutProject = clsx(
    `${ZillaFont.className} text-2xl leading-7 font-bold z  pb-1 border-b-[2px] border-[#FF9F1C] w-full`,
    "max-[165px]:text-[10px] max-[190px]:text-xs max-[205px]:text-sm max-[225px]:text-base max-[225px]:text-center max-[270px]:text-lg max-[305px]:text-xl"
  );

  return (
    <section className="flex flex-col w-full gap-5">
      <h2 className={subTitleAboutProject}>Projeto Ongs na Web</h2>

      <ParagraphSection>
        <strong>
          O projeto consiste na criação e desenvolvimento de plataformas
          digitais para ONGs necessitadas.
        </strong>
        <br />
        Reformulamos sites já existentes ou construímos novos a partir do zero,
        com a intenção de trazer visibilidade e facilitar o contato com o
        público, e o engajamento de pessoas interessadas em doar ou se
        voluntariar.
      </ParagraphSection>

    </section>
  );
};

export { AboutProject };