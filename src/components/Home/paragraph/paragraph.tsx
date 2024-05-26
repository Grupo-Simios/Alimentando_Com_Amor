import { outfitFont } from "@/assets/fonts";
import { IParagraphProps } from "./types";
import { cn } from "@/lib/utils";

function Paragraph({
  children,
  boldText,
  ...props
}: IParagraphProps) {
  const paragraphClasses = cn(
    "text-lg md:mb-4 leading-6 text-[#1B1B1BCC] mb-4",
    'max-[245px]:text-sm max-[210px]:text-xs max-[170px]:text-[10px]',
    outfitFont.className,
    { "font-bold": boldText }
  );

  return <p className={paragraphClasses} {...props}>{children}</p>;
}

export default Paragraph;