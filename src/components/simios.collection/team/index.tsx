import { ZillaFont } from "@/assets/fonts";
import { Members } from "@/components/organizers.collectiion/organizers";
import clsx from "clsx";

export const Team = () => {
  const Container = clsx("flex flex-col w-full gap-10 flex-wrap");

  const subTitle = clsx(
    `${ZillaFont.className} text-2xl leading-7 font-bold z  pb-1 border-b-[2px] border-[#FF9F1C] w-full`,
    "max-[165px]:text-[10px] max-[190px]:text-xs max-[205px]:text-sm max-[225px]:text-base max-[225px]:text-center max-[270px]:text-lg max-[305px]:text-xl"
  );

  const subContainer = clsx(
    "flex self-center justify-center gap-8",
    "max-[310px]:flex-wrap max-[250px]:gap-10"
  );

  const boxForOne = clsx(
    "flex self-center gap-8 w-[100%] justify-center px-28 mb-10",
    "max-[310px]:px-0 max-[335px]:px-[72px] max-[400px]:px-20 max-[450px]:px-24"
  );

  return (
    <section className={Container}>
      <h2 className={subTitle}>
        Conheça a equipe que
        <br /> desenvolveu este site
      </h2>
      <div className={subContainer}>
        <Members
          github="https://github.com/DaviSC17"
          linkedin="linkedin.com/in/davi-santanna-99246a259/"
          image="https://github.com/DaviSC17.png"
          mainFunction="UI/UX designer"
          name="Gabriel Ferreira"
          key={3}
        />

        <Members
          github="https://github.com/DaviSC17"
          linkedin="linkedin.com/in/davi-santanna-99246a259/"
          image="https://github.com/DaviSC17.png"
          mainFunction="Desenvolvedor Web"
          name="Davi Santanna"
          key={4}
        />
      </div>

      <div className={subContainer}>
        <Members
          github="https://github.com/DaviSC17"
          linkedin="linkedin.com/in/davi-santanna-99246a259/"
          image="https://github.com/DaviSC17.png"
          mainFunction="Desenvolvedor"
          name="João Gabriel"
          key={5}
        />

        <Members
          github="https://github.com/DaviSC17"
          linkedin="linkedin.com/in/davi-santanna-99246a259/"
          image="https://github.com/DaviSC17.png"
          mainFunction="Analista de Sistemas"
          name="Ícaro Filipe"
          key={6}
        />
      </div>

      <div className={subContainer}>
        <Members
          github="https://github.com/DaviSC17"
          linkedin="linkedin.com/in/davi-santanna-99246a259/"
          image="https://github.com/DaviSC17.png"
          mainFunction="Desenvolvedor Web"
          name="Cláudio Silva"
          key={7}
        />

        <Members
          github="https://github.com/DaviSC17"
          linkedin="linkedin.com/in/davi-santanna-99246a259/"
          image="https://github.com/DaviSC17.png"
          mainFunction="Luís Carlos Duarte"
          name="Tester"
          key={8}
        />
      </div>

      <div className={boxForOne}>
        <Members
          github="https://github.com/DaviSC17"
          linkedin="linkedin.com/in/davi-santanna-99246a259/"
          image="https://github.com/DaviSC17.png"
          mainFunction="Documenter"
          name="Gabriel Santiago"
          key={9}
        />
      </div>
    </section>
  );
};
