import Link from 'next/link'
import clsx from 'clsx'

import Button from '../CalltoactionButton/button';

const HomeDesktop = () => {
  const heroContainer = clsx(
    'max-md:hidden'
  )
  const bannerHeroHome = clsx(
    'md:h-[609px] w-screen',
    'lg:h-[609px] w-screen'
  )
  const divHomeComponents = clsx(
    'lg:flex lg:flex-col lg:w-[778px] lg:pt-[64px]',
    'md:flex md:flex-col md:w-[778px] md:pt-[64px]'
  )

  const headerHomecomponents = clsx(
    'md:border-8 md:border-[#1B1B1B8c] md:-[90%] md:p-8 md:flex md:flex-col md:gap-8 md:h-60 md:text-center md:items-center',
    'md:ml-auto md:mr-auto'
  )

  return (
    <section className={heroContainer}>
      <section className={`${bannerHeroHome} bannerHeroHome`}>
        <div className='max-w-[1320px] m-auto w-full'>
          <div className={`${divHomeComponents} pl-4`}>
            <div className={headerHomecomponents}>
              <h1 className="text-5xl font-[inter]">
                ALIMENTANDO <span className="text-yellow-primary">COM AMOR</span>
              </h1>
              <h2 className="text-2xl">
                Distribuição de cestas básicas e marmitas para pessoas vulneráveis ou em situação de rua
              </h2>
            </div>

            <div className="font-bold text-xl flex gap-4 justify-center mt-[64px]">
              <Link href={"/ajude-nos"}>
                <Button backGround='primary'>Ajude-nos</Button>
              </Link>
              <Link href={"/nossa-historia"}>
                <Button backGround="second">Conheça o projeto</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export { HomeDesktop };
