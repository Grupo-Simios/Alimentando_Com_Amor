"use client";

import clsx from "clsx";

import { ZillaFont } from "@/assets/fonts";
import Title from "@/components/titles/title";
import { Members } from "@/components/organizers/organizers";
import { simiosTeam } from "@/models/urlImgSwiper.model";

const Team = () => {
  const Container = clsx("flex flex-col w-full gap-10 flex-wrap");

  const subTitle = clsx(
    `${ZillaFont.className} text-2xl leading-7 font-bold z  pb-1 border-b-[2px] border-[#FF9F1C] w-full`,
    "max-[165px]:text-[10px] max-[190px]:text-xs max-[205px]:text-sm max-[225px]:text-base max-[225px]:text-center max-[270px]:text-lg max-[305px]:text-xl",
    "md:font-normal"
  );

  const FilterDevelepers = simiosTeam.filter((member) => !member.adm);

  return (
    <section className={Container}>
      <Title className={subTitle}>Conheça a equipe que desenvolveu este site</Title>

      <div className="flex flex-wrap items-center max-w-[500px] justify-center self-center gap-10
      md:max-w-full
      ">

        {FilterDevelepers.map(
          ({ name, github, image, linkedin, mainFunction }, index) => (
            <Members
              key={index}
              name={name}
              github={github}
              linkedin={linkedin}
              image={image}
              mainFunction={mainFunction}
            />
          )
        )}

      </div>
    </section>
  );
};

export { Team };