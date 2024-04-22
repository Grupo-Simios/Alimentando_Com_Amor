import { ZillaFont, outfitFont } from "@/assets/fonts";
import { FaArrowTurnDown } from "react-icons/fa6";
import Link from "next/link";
import clsx from "clsx";

export const Actions = () => {
  const OurActions = clsx(
    /* Base styles */

    "flex flex-col h-full mb-14 gap-10 w-full justify-around items-center"
  );

  const paragraphAboutWeDo = clsx(
    /* Base styles */
    `${ZillaFont.className} text-xl leading-6 font-normal flex w-[90%] text-center justify-center`,

    /* Width change styles */

    `max-[230px]:text-sm`
  );

  const OurActionsContainerButtons = clsx(
    /* Base styles */
    `flex flex-col gap-10 items-center`
  );

  const ButtonHelpUs = clsx(
    /* Base styles */
    `${outfitFont.className} font-black
    text-5 text-xl py-3 px-20 text-[#f5f5f5] bg-[#FF9F1C] rounded-lg text-xs`,

    /* Width change styles */
    `max-[300px]:px-14 max-[200px]:px-8`
  );

  const ButtonKnowTheProject = clsx(
    /* Base styles */
    `${outfitFont.className} font-black
    text-5 text-xl py-3 px-14 border-2 border-[#FF9F1C]  rounded-lg`,

    /* Width change styles */
    `max-[300px]:px-8 text-xs  max-[200px]:px-2 `
  );

  const OurActionsContainerSeeActions = clsx(
    /* Base styles */
    `flex gap-5 w-[100%] items-center justify-center`
  );

  const SeeOurActions = clsx(
    /* Base style */
    `${ZillaFont.className} font-black  leading-6 text-[#1b1b1bcc]`,

    /* Width change styles */
    `max-[250px]:text-sm  xsm:text-xl`
  );

  const ContainerArrowDown = clsx(
    /* Base style */
    `p-4 border-2 rounded-tr-[50%] 
    rounded-br-[50%] rounded-bl-[50%] border-[#FF9F1C]`,

    /* Width change styles */
    `max-xsm:p-2`
  );

  return (
    <article className={OurActions}>
      <p className={paragraphAboutWeDo}>
        Distribuição de cestas básicas e<br /> marmitas para pessoas vulneráveis
        ou <br />
        em situação de rua
      </p>

      <div className={OurActionsContainerButtons}>
        <Link href="/ajude-nos" className={ButtonHelpUs}>
          Ajude-nos
        </Link>
        <Link href="/simios" className={ButtonKnowTheProject}>
          Conheça o projeto
        </Link>
      </div>

      <div className={OurActionsContainerSeeActions}>
        <span className={SeeOurActions}>
          Veja abaixo algumas
          <br /> de nossas ações
        </span>
        <div className={ContainerArrowDown}>
          <FaArrowTurnDown color="#FFBF69" size={"22px"} />
        </div>
      </div>
    </article>
  );
};
