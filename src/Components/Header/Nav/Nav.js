import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext";

const Nav = ({secciones}) => {

    const { totalProducts } = useCartContext()

    return(
        <nav>
            {secciones.map((seccion) => {
                return <NavLink key={seccion.id} to={seccion.ruta}>{seccion.nombre}</NavLink>
            })}
            <Link to='/cart'>
                <ShoppingCartIcon className="icon"/>
                <span>{totalProducts() || ''}</span>
            </Link>
            
        </nav>
    )
}

export default Nav;
