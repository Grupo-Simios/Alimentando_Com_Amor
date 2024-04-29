
import clsx from "clsx";
import { ZillaFont } from "@/assets/fonts";
import { useState } from "react";

export const LocationMap = () => {
  const contactLocalization = clsx(
    "w-full px-4 flex flex-col  gap-10 mb-20",
    "md:w-1/2 md:px-0 md:justify-center",
    `xl:items-center`
  
  );

  const subTittle = clsx(
    `text-xl leading-7 p-1 text-[#1B1B1BCC] border-b-[2px] border-[#FF9F1C]`,
    "md:mt-10 max-[350px]:text-lg max-[280px]:text-base max-[200px]:text-sm max-[200px]:font-bold max-[160px]:text-[10px]"
  );

  const divLocation = clsx("flex w-full items-center justify-center");
  const [mapSize, setMapSize] = useState({
    width : 350,
    height : 206
   })
  
   window.addEventListener('resize',()=>{
    const currentWindows = window.innerWidth
    if(currentWindows < 480){
      setMapSize(prevMapSize=>({...prevMapSize,
        width : 350,
        height: 206
      }))
    }else{
      setMapSize(prevMapSize=>({...prevMapSize,
        width : 554,
        height: 326
      }))
    }
  })

  return (
    <section className={contactLocalization}>
   
   <h2 className={`${ZillaFont.className} text-center`}>LOCALIZAÇÂO</h2>
      <iframe
  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.481580106611
  5!2d-35.21169042630631!3d-5.787438457108815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!
  4f13.1!3m3!1m2!1s0x7b3016e6852137f%3A0x7dff2bfbce7e91f2!2sAssocia%C3%A7%C3%A3
  o%20Alimentando%20Com%20Amor!5e0!3m2!1spt-BR!2sbr!4v1714340888129!5m2!1spt-BR
  !2sbr`}
  width={mapSize.width}
  height={mapSize.height}
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="border mb-20"
/>
    </section>
  );
};
