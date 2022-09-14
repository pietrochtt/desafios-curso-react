import React from "react"
import "./ItemListContainer.css"
import { ItemCount } from './ItemCount';

export const ItemListContainer = ({oferta}) => {

    const onAdd = (quantity) => {
        console.log('Compraste ${quantity} unidades');
    }

    return(
        <>
        <div className="container">
        <h3>¡Solo por hoy! OFERTAS hasta el</h3><h3 className="oferta">{oferta}</h3>
        </div>

        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </>
    )
}