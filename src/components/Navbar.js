import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { IKImage } from "imagekitio-react";
import imagenes from "../imagenes";

export default function Navbar() {

  const navDatos = [
    { titulo: "Inicio", path: "/" },
    { titulo: "Productos", path: "/productos" },
    { titulo: "Nosotros", path: "/nosotros" },
    { titulo: "Elaboración", path: "/elaboracion" },
    { titulo: "Galeria", path: "/fotos" },
    { titulo: "Recetas", path: "/recetas" },
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

  const goUp = (ubicacion) => {
    if (dato.pathname === ubicacion) {
      document.documentElement.scrollTo(0, 0);
    } else {
      return null
    }
  }

  const subBar = subDatos.map((x, i) => {
    return (
      <li key={i}>
        <NavLink onClick={() => goUp(x.path)} className={dato.pathname === x.path ? "navLink active" : "navLink off"} to={x.path}> {x.titulo} </NavLink>
      </li>
    )
  })

  const nav = navDatos.map((x, i) => {
    if (x.titulo !== "Nosotros") {
      return (
        <li key={i}>
          <NavLink to={x.path} onClick={() => goUp(x.path)} className={dato.pathname === x.path ? "navLink active" : "navLink off"}>
            {x.titulo}
          </NavLink>
        </li>
      )
    } else {
      return (
        <li key={i}>
          <NavLink to={null} className={listaSub.includes(dato.pathname) ? "navLink active" : "navLink off"}>
            <span>{x.titulo} <FontAwesomeIcon icon={faCaretDown} /></span>
          </NavLink>
          <ul className="menuDesplegable">
            {subBar}
          </ul>
        </li>
      )
    }
  })

  return (
    <div className="navegacion">
      <div className="fixieClass">
        <div>
          <IKImage
            urlEndpoint={imagenes.urlEndpoint}
            path={imagenes.logoCerrosTucumanos}
            transformation={[{ "w": "150" }]}
          />
        </div>
        <ul className="navBarUl">
          {nav}
        </ul>
      </div>
    </div>
  );
}
