import clsx from "clsx";

import Paragraph from "../home.collection/paragraph/paragraph"
import { ZillaFont } from "@/assets/fonts";
import { IParagraphProps } from "./types";

export default function ParagraphSection({
  children, title, border, ...props
}: IParagraphProps) {

  const SubTitleWhoWeAre = clsx(
    `text-2xl pb-2 border-b-[2px] leading-7 border-[#FF9F1C] font-normal `,
    ZillaFont.className,
    "md:text-center",
    `max-[200px]:text-base max-[210px]:text-lg`,
    { "border-none": border != true },
  );
  return (
    <>
      <section {...props}>
        <h2 className={SubTitleWhoWeAre}>{title}</h2>
        <Paragraph>
          {children}
        </Paragraph>
      </section>
    </>
  )
}