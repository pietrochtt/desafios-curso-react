import React from "react";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import "./Header.css"
import Nav from './Nav/Nav.js'

const Header = () => {

    const secciones = [
        {id:0, nombre: 'Seccion 1'},
        {id:1, nombre: 'Seccion 2'},
        {id:2, nombre: 'Seccion 3'},
        {id:3, nombre: 'Seccion 4'},
    ]

    return(
        <header>
            <SportsSoccerIcon className="icon"/>
            <h1>Titulo Pagina</h1>
            <Nav secciones={secciones}/>
        </header>
    )
}

export default Header;