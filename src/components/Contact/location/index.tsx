import clsx from "clsx";

export default function LocationMap() {
  const contactLocalization = clsx(
    `w-[350px] flex flex-col gap-10 mb-10`,
    `md:w-[67%] 
    max-[400px]:w-[320px] 
    max-[350px]:w-[280px]  
    max-[310px]:w-[230px]
    max-[280px]:w-[205px]
    max-[260px]:w-[195px]
    max-[240px]:w-[185px]
    max-[205px]:w-[155px]
    max-[185px]:w-[135px]
    max-[165px]:w-[120px]
    `,
    `xl:w-[50%]`
  );

  const contactTitle = clsx(
    `text-xl leading-7 text-[#1B1B1BCC] border-b-[2px] border-[#FF9F1C]`,
    "md:mt-10 max-[350px]:text-lg max-[280px]:text-base max-[200px]:text-sm max-[200px]:font-bold max-[160px]:text-[10px]"
  );

  return (
    <section className={contactLocalization}>
      <h2 className={contactTitle}>LOCALIZAÇÂO</h2>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.481580106611
  5!2d-35.21169042630631!3d-5.787438457108815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!
  4f13.1!3m3!1m2!1s0x7b3016e6852137f%3A0x7dff2bfbce7e91f2!2sAssocia%C3%A7%C3%A3
  o%20Alimentando%20Com%20Amor!5e0!3m2!1spt-BR!2sbr!4v1714340888129!5m2!1spt-BR
  !2sbr`}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`border h-80
        
        max-[400px]:h-72
        max-[310px]:h-60
        max-[280px]:h-52
        max-[200px]:h-44
        max-[180px]:h-32
        
        
        `}
      />
    </section>
  );
}
