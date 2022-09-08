import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Nav = ({secciones}) => {
    return(
        <nav>
            {secciones.map((seccion) => {
                return <a key={seccion.id} href="">{seccion.nombre}</a>
            })}

            <ShoppingCartIcon className="icon"/>
            
        </nav>
    )
}

