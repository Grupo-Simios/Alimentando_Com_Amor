"use client";
import { ZillaFont } from "@/assets/fonts";
import {Members} from "@/components/organizers.collectiion/organizers";
import { simiosTeam } from "@/models/urlImgSwiper.model";
import Title from "@/components/titles/title";
import clsx from "clsx";
import { useEffect } from "react";
export const Organizers = () => {
  const ContainerOrganizers = clsx("flex flex-col w-full gap-10");

  const subTitleOrganizers = clsx(
    `${ZillaFont.className} text-2xl leading-7 font-bold z  pb-1 border-b-[2px] border-[#FF9F1C] w-full`,
    " max-[165px]:text-[10px] max-[190px]:text-xs max-[205px]:text-sm max-[225px]:text-base max-[225px]:text-center max-[270px]:text-lg max-[305px]:text-xl",
    "md:font-normal"
  );

  const subContainer = clsx("flex gap-10 self-center justify-center flex-wrap");
  
  const FilterAdm = simiosTeam.filter((member) => member.adm === true);



  return (
    <section className={ContainerOrganizers}>
      <Title className={subTitleOrganizers}>Organizadores</Title>
      <div className={subContainer}>
        {/* {FilterAdm.map(({ github, image, key, linkedin, name }, index) =>
          key === 3 ? (
            <Members
              hasGithub={false}
              hasLinkedin={true}
              github={github}
              linkedin={linkedin}
              image={image}
              mainFunction=""
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
              mainFunction=""
              name={name}
              key={index}
            />
          )
        )} */}

        {FilterAdm.map(
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
