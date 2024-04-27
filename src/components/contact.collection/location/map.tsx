"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
require("dotenv").config();
export function Map() {
  const referenceMap = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    try {
      const mapInitialize = async () => {
        const Position = {
          lat: -5.78764,
          lng: -35.20932,
        };

        const loadMap = new Loader({
          apiKey: process.env.NEXT_PUBLIC_MAPS_KEY as string,
          version: "weekly",
        });

        const { Map } = await loadMap.importLibrary("maps");

        const mapOptions: google.maps.MapOptions = {
          center: Position,
          zoom: 20,
          mapId: "AlimentandoComAmor",
          controlSize: 30,
        };

        const SetupMap = new Map(
          referenceMap.current as HTMLDivElement,
          mapOptions
        );

        const { AdvancedMarkerElement } = (await google.maps.importLibrary(
          "marker"
        )) as google.maps.MarkerLibrary;

        const marker = new AdvancedMarkerElement({
          map: SetupMap,
          position: Position,
          gmpClickable: true,
          title: "Estamos aqui!"
        });

        marker.addListener("click", () => {
          window.open(
            "https://www.google.com/maps/place/R.+Santo+Antônio,+731+-+Cidade+Alta,+Natal+-+RN,+59010-270/@-5.7874438,-35.2116958,17z/data=!3m1!4b1!4m6!3m5!1s0x7b3000cab308407:0x80d9382d14f5050e!8m2!3d-5.7874438!4d-35.2091155!16s%2Fg%2F11c4yt94sl?entry=ttu",
            "_blanck"
          );
        });
      };

      mapInitialize();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div
      style={{ borderRadius: "10px", height: "400px", width: "600px" }}
      ref={referenceMap}
    />
  );
}
