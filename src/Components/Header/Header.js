import React from "react";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import "./Header.css"
import Nav from './Nav/Nav.js'
import { Link } from "react-router-dom";

const Header = () => {

    const secciones = [
        {id:0, nombre: 'Selecciones', ruta: '/seccion/selecciones'},
        {id:1, nombre: 'Futbol Argentino', ruta: '/seccion/futbolargentino'},
        {id:2, nombre: 'Europa', ruta: '/seccion/europa'},
        {id:3, nombre: 'Seccion 4', ruta: '/seccion/seccion4'},
    ]

    return(
        <header>
            <Link to='/'>
                <SportsSoccerIcon className="icon"/>
            </Link>
            <Link to='/'>
                <h1>PilchaSports</h1>
            </Link>
            <Nav secciones={secciones}/>
        </header>
    )
}

export default Header;