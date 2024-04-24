
import { AboutUsOurHistory } from "@/components/ourHistory.collection/aboutUs";
import { OurGoals } from "@/components/ourHistory.collection/ourGoals/";
import { SendDonation } from "@/components/ourHistory.collection/sendDonation";

import { WhoWeHelps } from "@/components/ourHistory.collection/whoWeHelps/";

import { HeaderOurHistory } from "@/components/ourHistory.collection/header";

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
