"use client";

import { useRef } from "react";
import clsx from "clsx";
import { PhonesContacts } from "@/components/contact.collection/phones";
import { HeaderContact } from "@/components/contact.collection/header";
import { LocationMap } from "@/components/contact.collection/location";

export default function Contact() {

  const contactContainer = clsx(
    "flex items-center flex-col gap-20 max-[150px]:overflow-x-hidden",
    " md:gap-10 md:mb-20"
  );


  return (
    <div className={contactContainer}>
      <HeaderContact />

      <PhonesContacts />

      <LocationMap />
    </div>
  );
}
