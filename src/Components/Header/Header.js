import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import "./Header.css"

const Header = () => {
    return(
        <header>
            <SportsSoccerIcon className="icon"/>
            <h1>Titulo Pagina</h1>
            <nav>
                <a href="">Seccion 1</a>
                <a href="">Seccion 2</a>
                <a href="">Seccion 3</a>
            </nav>
            <ShoppingCartIcon className="icon"/>
        </header>
    )
}

export default Header;