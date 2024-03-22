import Link from "next/link"
import navbarStyle from "@/components/nav-bar.collection/style/navbar.module.css"


export const NavBarTop = () =>{
  return(
    <nav className={navbarStyle.navbartop}>
    <span className={navbarStyle.spanname}>ASSOCIAÇÃO ALIMENTANDO COM AMOR</span>

    <ul className={navbarStyle.navBarUl}>
      <Link className="h-full flex" href={"/"}>
        <li className={navbarStyle.liNavBar}  >Página inicial</li>
      </Link>
      <Link className="h-full flex" href={"/nossa-historia"}>
        <li className={navbarStyle.liNavBar}  >Nossa história</li>
      </Link>
      <Link className="h-full flex" href={"/ajude-nos"}>
        <li className={navbarStyle.liNavBar}  >Ajude-nos</li>
      </Link>
      <Link className="h-full flex" href={"/contato"}>
        <li className={navbarStyle.liNavBar}  >Contato</li>
      </Link>
      <Link className="h-full flex" href={"/grupo-simios"}>
        <li className={`${navbarStyle.liNavBar} ${navbarStyle.selectNavItems}`}>Grupo Símios</li>
      </Link>
    </ul>
  </nav>
  )
}