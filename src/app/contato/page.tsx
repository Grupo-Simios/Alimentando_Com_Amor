"use client";

import { useRef } from "react";
import clsx from "clsx";
import { PhonesContacts } from "@/components/contact.collection/phones";
import { LocationMap } from "@/components/contact.collection/location";
import Header from "@/components/headerMobile/header";

export default function Contact() {

  const contactContainer = clsx(
    "flex items-center flex-col gap-20 max-[150px]:overflow-x-hidden",
    " md:gap-10 md:mb-20"
  );


  return (
    <div className={contactContainer}>
      <Header>Contato</Header>
      <PhonesContacts />
      <LocationMap />
    </div>
  );
}
