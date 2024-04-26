"use client";

import { AboutSimios } from "@/components/simios.collection/aboutSimios";
import { AboutProject } from "@/components/simios.collection/aboutProject";
import { Organizers } from "@/components/simios.collection/organizers";
import { Team } from "@/components/simios.collection/team";
import Header from "@/components/headerMobile/header";
import clsx from "clsx";

export default function Simios() {
  const Container = clsx(
    "flex flex-col justify-center items-center gap-14 bg-[#F9F6EE] px-5",
    "max-[300px]:gap-8 max-[300px]:px-2"
  );
  return (
    <main>
      <Header>Grupo Simios</Header>
      <div className={Container}>
        <AboutSimios />

        <AboutProject />

        <Organizers />

        <Team />
      </div>
    </main>
  );
}
