import { ZillaFont } from "@/assets/fonts";
import { Members } from "@/components/organizers.collectiion/organizers";
import clsx from "clsx";

export const Organizers = () => {
  const ContainerOrganizers = clsx("flex flex-col w-full gap-10");

  const subTitleOrganizers = clsx(
    `${ZillaFont.className} text-2xl leading-7 font-bold z  pb-1 border-b-[2px] border-[#FF9F1C] w-full`,
    " max-[165px]:text-[10px] max-[190px]:text-xs max-[205px]:text-sm max-[225px]:text-base max-[225px]:text-center max-[270px]:text-lg max-[305px]:text-xl"
  );

  const subContainer = clsx(
    "flex self-center justify-center gap-8",
    "max-[310px]:flex-wrap max-[250px]:gap-10"
  );

  return (
    <section className={ContainerOrganizers}>
      <h2 className={subTitleOrganizers}>Organizadores</h2>

      <div
        className={subContainer}>
        <Members
          github="https://github.com/DaviSC17"
          linkedin="linkedin.com/in/davi-santanna-99246a259/"
          image="https://github.com/DaviSC17.png"
          mainFunction=""
          name="Erick Rosa"
          key={1}
        />
        <Members
          github="https://github.com/DaviSC17"
          linkedin="linkedin.com/in/davi-santanna-99246a259/"
          image="https://github.com/DaviSC17.png"
          mainFunction=""
          name="Ana Martins"
          key={2}
        />
      </div>
    </section>
  );
};
