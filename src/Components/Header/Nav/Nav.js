import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink } from "react-router-dom";

const Nav = ({secciones}) => {
    return(
        <nav>
            {secciones.map((seccion) => {
                return <NavLink key={seccion.id} to={seccion.ruta}>{seccion.nombre}</NavLink>
            })}
            <Link to='/cart'>
                <ShoppingCartIcon className="icon"/>
            </Link>
            
        </nav>
    )
}

export default Nav;
