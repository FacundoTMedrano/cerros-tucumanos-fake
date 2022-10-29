import { NavLink, useLocation } from "react-router-dom";
import SubNavBar from "./SubNavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

  const navDatos = [
    { titulo: "Inicio", path: "/" },
    { titulo: "Productos", path: "/productos" },
    { titulo: "Nosotros", path: "/nosotros" },
    { titulo: "Elaboración", path: "/elaboracion" },
    { titulo: "Galeria de Fotos", path: "/fotos" },
    { titulo: "Contacto", path: "/contacto" }
  ];
  const subDatos = [
    { titulo: "Historia", path: "/historia" },
    { titulo: "Yogurt Proviotico", path: "/yogurtproviotico" },
    { titulo: "Actividades Agricolas", path: "/actividadesagricolas" },
    { titulo: "Proyectos", path: "/proyectos" },
    { titulo: "Presente y Futuro", path: "/presenteyfuturo" },
    { titulo: "Nuestros Clientes", path: "/nuestrosclientes" }
  ]


  const listaSub = subDatos.map(x => x.path);

  const dato = useLocation()

  const nav = navDatos.map((x, i) => {
    if (x.titulo !== "Nosotros") {
      return (
        <li key={i}>
          <NavLink
            to={x.path}
            className={dato.pathname === x.path ? "active" : "off"}
          >
            {x.titulo}
          </NavLink>
        </li>
      )
    } else {
      return (
        <li key={i}>
          <NavLink
            to={null}
            className={listaSub.includes(dato.pathname) ? "active" : "off"}
          >
            <span>{x.titulo} <FontAwesomeIcon icon={faCaretDown} /></span>
          </NavLink>
          <ul className="menuDesplegable">
            <SubNavBar subDatos={subDatos} />
          </ul>
        </li>
      )
    }
  })

  {/* <FontAwesomeIcon icon={faCaretDown} /> */ }
  return (
    <div className="navegacion">
      <ul className="navBarUl">
        {nav}
      </ul>
    </div>
  );
}
