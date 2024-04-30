"use client";

import { ZillaFont } from "@/assets/fonts";
import { Members } from "@/components/organizers.collectiion/organizers";
import { simiosTeam } from "@/models/urlImgSwiper.model";
import clsx from "clsx";

export const Team = () => {
  const Container = clsx("flex flex-col w-full gap-10 flex-wrap");

  const subTitle = clsx(
    `${ZillaFont.className} text-2xl leading-7 font-bold z  pb-1 border-b-[2px] border-[#FF9F1C] w-full`,
    "max-[165px]:text-[10px] max-[190px]:text-xs max-[205px]:text-sm max-[225px]:text-base max-[225px]:text-center max-[270px]:text-lg max-[305px]:text-xl"
  );

  const FilterDevelepers = simiosTeam.filter((member) => !member.adm);

  return (
    <section className={Container}>
      <h2 className={subTitle}>
        Conheça a equipe que
        <br /> desenvolveu este site
      </h2>
      <div className="flex flex-wrap items-center max-w-[500px] justify-center self-center gap-10">
        {FilterDevelepers.map(
          ({ image, github, key, mainFunction, name, linkedin }, index) =>
            key === 1 ? (
              <Members
                github={github}
                hasGithub={false}
                hasLinkedin={true}
                linkedin={linkedin}
                image={image}
                mainFunction={mainFunction}
                name={name}
                key={index}
              />
            ) : (
              <Members
                hasGithub={true}
                hasLinkedin={true}
                github={github}
                linkedin={linkedin}
                image={image}
                mainFunction={mainFunction}
                name={name}
                key={index}
              />
            )
        )}
      </div>
    </section>
  );
};
