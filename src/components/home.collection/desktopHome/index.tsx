import reponsiveSizeDesktop from '@/components/home.collection/style/responsive/desktop/md.module.css'
import Link from 'next/link'
export const HomeDesktop = () =>{
  return(
    <section className='max-md:hidden'>
       <section className={reponsiveSizeDesktop.bannerHeroHome}>
        <div className={reponsiveSizeDesktop.divHomeComponents}>
        <header className="border-8 border-[#1B1B1B8c] w-[100%] p-8 flex flex-col gap-8 h-60 text-center items-center">
          <h1 className="text-5xl font-[inter] ">
            ALIMENTANDO <span className="text-yellow-primary">COM AMOR</span>
          </h1>
          <h3 className="text-2xl">
            Distribuição de cestas básicas e marmitas para pessoas vulneráveis
            ou em situação de rua
          </h3>
        </header>

        <div className="flex gap-8 text-xl font-semibold text-[1B1B1B]  justify-center mt-[48px]">
          <li className="list-none">ações voluntárias</li> 
          <li>kits de higiene feminina</li>
          <li>brinquedos para as crianças</li>
        </div>

        <div className="font-bold text-xl flex gap-4 justify-center mt-[64px]">
          <Link href={"/"}>
            <div
              className="bg-yellow-primary h-12 w-72 text-center grid place-content-center
              hover:bg-yellow-primaty-hover
             text-white rounded-lg cursor-pointer"
            >
              Ajude-nos
            </div>
          </Link>
          <Link href={"/"}>
            <div
              className="border-2 border-yellow-primary h-12 w-72 text-center grid place-content-center
             text-primary-black-text rounded-lg cursor-pointer hover:border-yellow-primaty-hover "
            >
              Conheça o projeto
            </div>
          </Link>
          {/* <div className="bg-red-400">Conheça o projeto</div> */}
        </div>
        </div>
      </section>
    </section>
  )
}