import clsx from "clsx";

import Header from "@/components/Header/header";
import { AboutUsOurHistory } from "@/components/ourHistory/aboutUs";
import { ContainerDonationOurHistory } from "@/components/ourHistory/containerDonation";
import { OurGoalsOurHistory } from "@/components/ourHistory/ourGoals";

function OurHistory() {
  const ContainerOurHistory = clsx(
    `flex items-center flex-col gap-10 `,
    `max-[150px]:overflow-x-hidden`
  );

  return (
   <>
    <main className={ContainerOurHistory}>
      <Header>Nossa História</Header>

      <AboutUsOurHistory />

      <ContainerDonationOurHistory />

      <OurGoalsOurHistory />
    </main>
   </>
  );
}

export default OurHistory;