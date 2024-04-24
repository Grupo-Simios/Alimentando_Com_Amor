import { ZillaFont } from "@/assets/fonts";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface profile {
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
          className="rounded"
          src={profile.image}
          alt={`Imagem de ${profile.name}`}
        />
      </figure>
      <div className="flex flex-col  gap-5">
        <span
          className={`${ZillaFont.className} font-normal text-lg leading-7 text-center text-[#1b1b1bcc]
          

          max-[190px]:text-sm
          max-[310px]:text-lg

          max-[325px]:text-xs
          max-[360px]:text-sm
          max-[400px]:text-base
          
          `}
        >
          {profile.name},
          <br /> {profile.mainFunction}
        </span>
        <div className="gap-3 flex self-center">
          <FaGithub
            cursor={"pointer"}
            href={profile.github}
            className="text-3xl

          max-[190px]:text-xl
          max-[320px]:text-2xl
          "
          />
          <FaLinkedin
            cursor={"pointer"}
            href={profile.linkedin}
            className="text-3xl 
            
          max-[190px]:text-xl
          max-[320px]:text-2xl
          "
          />
        </div>
      </div>
    </div>
  );
};
