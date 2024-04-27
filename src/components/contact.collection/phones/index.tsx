
import { outfitFont } from "@/assets/fonts";
import { useRef } from "react";
import clsx from "clsx";
import Link from "next/link";

export const PhonesContacts = () => {
  const Email = useRef<any>();

  const copyEmail = () => {
    navigator.clipboard
      .writeText(Email.current.innerText)
      .then(() => alert("Copiado com sucesso"));
  };

  const Container = clsx("flex flex-col gap-10", "md:w-1/2 md:pl-6 lg:ml-28");

  const containerItems = clsx(
    `${outfitFont.className} w-full px-4 flex flex-col mt-28  gap-5`,
    "md:mb-10"
  );

  const contactTitle = clsx(
    `text-xl leading-7 text-[#1B1B1BCC] border-b-[2px] border-[#FF9F1C]`,
    "md:mt-10 max-[350px]:text-lg max-[280px]:text-base max-[200px]:text-sm max-[200px]:font-bold max-[160px]:text-[10px]"
  );

  const contactListPhones = clsx(
    `${outfitFont.className} text-lg flex flex-col gap-5`,
    "max-[400px]:text-base max-[350px]:text-sm max-[310px]:text-xs max-[260px]:text-[10px] max-[200px]:text-[8px] max-[200px]:font-semibold "
  );

  const sectionToCopyEmail = clsx(
    `${outfitFont.className} w-full px-4 flex flex-col  gap-5 relative`
  );

  const buttonCopyEmail = clsx(
    "absolute right-4 p-1 hidden items-center justify-center bg-[#83838328] rounded-sm   text-xs text-[#000000f5]",
    "max-[300px]:flex max-[240px]:text-[10px] max-[240px]:top-[-2px] max-[180px]:text-[8px]"
  );

  const contactListEmail = clsx(
    `${outfitFont.className} text-lg flex flex-col gap-5`,
    "max-[400px]:text-base max-[350px]:text-sm max-[310px]:font-bold max-[310px]:text-xs max-[280px]:text-[10px] max-[240px]:text-[8px] max-[210px]:text-[8px] max-[200px]:text-[6px]"
  );

  const contactAdress = clsx(
    `${outfitFont.className} w-full px-4 flex flex-col  gap-5`
  );

  const listAdress = clsx(
    `${outfitFont.className} text-lg flex flex-col gap-5`,
    "  max-[400px]:text-base max-[350px]:text-sm max-[310px]:text-xs max-[200px]:text-[8px] max-[200px]:font-semibold"
  );

  return (
    <div className={Container}>
      <section className={containerItems}>
        <h2 className={contactTitle}>TELEFONES</h2>

        <ul className={contactListPhones}>
          <Link
            target="_blank"
            href="https://wa.me/558421318789"
            title="Contato Administração"
          >
            Administração: (84) 2131-8789
          </Link>
          <Link
            target="_blank"
            href="https://wa.me/5584987136833"
            title="chamar no WhatsApp"
          >
            Maria Aparecida Cida: (84) 98713-6833
          </Link>
          <Link
            target="_blank"
            href="https://wa.me/987136833"
            title="chamar no WhatsApp"
          >
            Ysla Mônica: (84) 98713-6833
          </Link>
        </ul>
      </section>

      <section className={sectionToCopyEmail}>
        <button onClick={copyEmail} className={buttonCopyEmail}>
          Copiar email
        </button>
        <h2 className={contactTitle}>EMAIL</h2>
        <ul className={contactListEmail}>
          <a ref={Email}>voluntario@alimentandocom{}amornatal.org</a>
        </ul>
      </section>

      <address className={contactAdress}>
        <h2 className={contactTitle}>ENDEREÇO</h2>

        <ul className={listAdress}>
          <li>
            Rua Santo Antônio 731 <br /> Cidade Alta, Natal RN
          </li>
        </ul>
      </address>
    </div>
  );
};
