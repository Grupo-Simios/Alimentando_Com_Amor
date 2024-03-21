import Link from "next/link"


export const NavBarTop = () =>{
  return(
    <nav className="nav-bar-top ">
    <span className="span-ong-name">ASSOCIAÇÃO ALIMENTANDO COM AMOR</span>

    <ul className="nav-bar-ul">
      <Link className="h-full flex" href={"/"}>
        <li>Página inicial</li>
      </Link>
      <Link className="h-full flex" href={"/nossa-historia"}>
        <li>Nossa história</li>
      </Link>
      <Link className="h-full flex" href={"/ajude-nos"}>
        <li>Ajude-nos</li>
      </Link>
      <Link className="h-full flex" href={"/contato"}>
        <li>Contato</li>
      </Link>
      <Link className="h-full flex" href={"/grupo-simios"}>
        <li className="select-nav-items">Grupo Símios</li>
      </Link>
    </ul>
  </nav>
  )
}