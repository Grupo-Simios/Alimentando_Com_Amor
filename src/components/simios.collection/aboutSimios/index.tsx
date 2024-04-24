import { outfitFont } from "@/assets/fonts";
import clsx from "clsx";

export const AboutSimios = () => {
  const Container = clsx(
    "flex flex-col items-center mt-28 gap-6",
    "max-[260px]:mt-20"
  );

  const ImageSimios = clsx(
    "w-44 rounded-full",
    "max-[190px]:w-16 max-[225px]:w-24 max-[270px]:w-32"
  );

  const paragraphAboutSimios = clsx(
    `${outfitFont.className} font-normal text-lg leading-6 text-center text-[#1b1b1bcc] max-w-80`,
    "max-[160px]:text-[8px] max-[190px]:text-[10px] max-[225px]:text-xs max-[270px]:text-sm max-[305px]:text-base"
  );

  return (
    <section className={Container}>
      <img
        className={ImageSimios}
        src="https://github.com/DaviSC17.png"
        alt="Imagem do grupo Simios"
      />
      <p className={paragraphAboutSimios}>
        Somos um coletivo dedicado ao desenvolvimento profissional, comprometido
        em aprimorar as habilidades dos colaboradores por meio de projetos
        voluntários abrangentes, com foco em temáticas sociais, ambientais e
        outros.
      </p>
    </section>
  );
};
