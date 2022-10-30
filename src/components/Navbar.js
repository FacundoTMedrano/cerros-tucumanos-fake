import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { IKImage } from "imagekitio-react";
import imagenes from "../imagenes";
import { motion } from "framer-motion";

export default function Navbar() {

  const navDatos = [
    { titulo: "Inicio", path: "/" },
    { titulo: "Productos", path: "/productos" },
    { titulo: "Nosotros", path: "/nosotros" },
    { titulo: "Elaboración", path: "/elaboracion" },
    { titulo: "Galeria de Fotos", path: "/fotos" },
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

  const subBar = subDatos.map((x, i) => {
    return (
      <li key={i}>
        <NavLink className={"link"} to={x.path}> {x.titulo} </NavLink>
      </li>
    )
  })

  const nav = navDatos.map((x, i) => {
    if (x.titulo !== "Nosotros") {
      return (
        <li key={i}>
          <NavLink to={x.path} className={dato.pathname === x.path ? "navPrincipal link active" : "navPrincipal link off"}>
            {x.titulo}
          </NavLink>
        </li>
      )
    } else {
      return (
        <li key={i}>
          <NavLink to={null} className={listaSub.includes(dato.pathname) ? "link active" : "link off"}>
            <span>{x.titulo} <FontAwesomeIcon icon={faCaretDown} /></span>
          </NavLink>
          <div className="divMenuDesplegable">
            <ul className="menuDesplegable">
              {subBar}
            </ul>
          </div>
        </li>
      )
    }
  })

  {/* <FontAwesomeIcon icon={faCaretDown} /> */ }
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
