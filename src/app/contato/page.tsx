"use client"
import clsx from "clsx";
import { PhonesContacts } from "@/components/contact.collection/phones";
import { LocationMap } from "@/components/contact.collection/location";
import Header from "@/components/headerMobile/header";

export default function Contact() {

  const contactContainer = clsx(
    "flex items-center flex-col gap-20 max-[150px]:overflow-x-hidden",
    " md:gap-10 md:mb-20",
    `xl:flex xl:flex-row xl-justify-center xl:items-center
      xl:w-[70%] xl:ml-auto xl:mr-auto `,
      
   
  );


  return (
    <div className={contactContainer}>
      <Header>Contato</Header>

      <PhonesContacts />
      <LocationMap />


    </div>
  );
}
