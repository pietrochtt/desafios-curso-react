import React from "react"
import "./ItemListContainer.css"

export const ItemListContainer = ({oferta}) => {
    return(
        <div className="container">
        <p>¡Solo por hoy! OFERTAS hasta el <h1 className="oferta">{oferta}</h1></p>
        </div>
    )
}