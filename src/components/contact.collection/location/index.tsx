"use client";

require("dotenv").config();
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Map } from "./map";
import clsx from "clsx";

export const LocationMap = () => {


  /* Functions clsx */

  const contactLocalization = clsx(
    "w-full px-4 flex flex-col  gap-10 mb-20",
    "md:w-1/2 md:px-0 md:justify-center"
  );

  const subTittle = clsx(
    `text-xl leading-7 p-1 text-[#1B1B1BCC] border-b-[2px] border-[#FF9F1C]`,
    "md:mt-10 max-[350px]:text-lg max-[280px]:text-base max-[200px]:text-sm max-[200px]:font-bold max-[160px]:text-[10px]"
  );

  const divLocation = clsx("flex w-full items-center justify-center");

  return (
    <section className={contactLocalization}>
      <h2 className={subTittle}>LOCALIZAÇÃO</h2>
      <div className={divLocation}>
        <Map />
      </div>
    </section>
  );
};
