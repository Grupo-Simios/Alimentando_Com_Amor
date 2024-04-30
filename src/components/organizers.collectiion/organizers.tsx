import { ZillaFont } from "@/assets/fonts";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface profile {
  hasGithub: boolean;
  hasLinkedin: boolean;
  linkedin: string;
  github: string;
  name: string;
  mainFunction: string;
  image: string;
}

export const Members = (profile: profile) => {
  return (
    <div className="flex flex-col w-fit gap-5  justify-center items-center">
      <figure className="max-w-52 max-[310px]:px-4">
        <img
          width={190}
          className="rounded"
          src={profile.image}
          alt={`Imagem de ${profile.name}`}
        />
      </figure>
      <div className="flex flex-col mb-10 gap-3">
        <h3
          className={`${ZillaFont.className} font-semibold antialised text-lg leading-7 text-center text-[#2e2c2ccc]
          

          max-[190px]:text-sm
          max-[310px]:text-sm
          max-[400px]:text-base
          
          `}
        >
          {profile.name},
          <br /> {profile.mainFunction}
        </h3>
        <div className="gap-6 flex self-center">
          {profile.hasGithub ? (
            <Link href={profile.github} target="_blank">
              <FaGithub
                title={`Ir para o Github do ${profile.name}`}
                cursor={"pointer"}
                className="text-4xl max-[190px]:text-xl max-[320px]:text-2xl"
              />
            </Link>
          ) : (
            <></>
          )}

          {profile.hasLinkedin ? (
            <Link href={profile.linkedin} target="_blank">
              <FaLinkedin
                title={`Ir para o Linkedin do ${profile.name}`}
                cursor={"pointer"}
                className="text-4xl max-[190px]:text-xl max-[320px]:text-2xl"
              />
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
