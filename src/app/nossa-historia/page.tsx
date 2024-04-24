
import { HeaderOurHistory } from "@/components/Ourhistory.collection/header";
import { AboutUsOurHistory } from "@/components/Ourhistory.collection/aboutUs";
import { SendDonation } from "@/components/Ourhistory.collection/sendDonation";
import { WhoWeHelps } from "@/components/Ourhistory.collection/whoWeHelps";
import { OurGoals } from "@/components/Ourhistory.collection/ourGoals";
import clsx from "clsx";

export default function OurHistory() {
  const ContainerOurHistory = clsx(
    /* Base styles */
    `flex items-center flex-col gap-10 `,

    /* Width change styles */
    `max-[150px]:overflow-x-hidden`
  );
  return (
    <div className={ContainerOurHistory}>
      <HeaderOurHistory />
      <AboutUsOurHistory />
      <div className="flex gap-12 flex-col justify-center items-center md:flex-col-reverse">
      <SendDonation />
      <WhoWeHelps />
      </div>

      <OurGoals />
    </div>

  );
}
