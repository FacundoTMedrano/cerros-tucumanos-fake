import { NavLink } from "react-router-dom";
const SubNavBar = ({ subDatos }) => {


    const subNav = subDatos.map((x, i) => {
        return (
            <li key={i + 3}>
                <NavLink
                    to={x.path}
                >
                    {x.titulo}
                </NavLink>
            </li>
        )
    })

    return subNav
};

export default SubNavBar;