import clsx from "clsx";
import Header from "@/components/headerMobile/header";
import { AboutUsOurHistory } from "@/components/ourHistory.collection/aboutUs";
import { ContainerDonationOurHistory } from "@/components/ourHistory.collection/containerDonation/";
import { OurGoalsOurHistory } from "@/components/ourHistory.collection/ourGoals";

export default function OurHistory() {
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
