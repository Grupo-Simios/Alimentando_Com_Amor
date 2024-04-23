"use client";
import clsx from "clsx";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { outfitFont } from "@/assets/fonts";

export const LocationMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC_jWH0YeM-5YOsUrCcKgT6Jy99t8B6Mho",
  });

  const locationClick = () => {

    window.open(
      "https://www.google.com.br/maps/place/R.+Santo+Antônio,+731+-+Cidade+Alta,+Natal+-+RN,+59010-270/@-5.7874438,-35.2116958,17z/data=!3m1!4b1!4m6!3m5!1s0x7b3000cab308407:0x80d9382d14f5050e!8m2!3d-5.7874438!4d-35.2091155!16s%2Fg%2F11c4yt94sl?entry=ttu",
      "_blank"
    );
  };

  const Position = {
    lat: -5.78764,
    lng: -35.20932,
  };

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
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{
              width: "80%",
              height: "350px",
              borderRadius: "6px",
            }}
            center={Position}
            zoom={20}
          >
            <MarkerF
              onClick={locationClick}
              position={Position}
              options={{
                label: {
                  text: "Estamos aqui",
                  fontFamily: `${outfitFont.className}`,
                  color: "white",
                },
              }}
            />
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};
