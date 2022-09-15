import React from "react";
import "./ItemListContainer.css"
import { ItemCount } from './ItemCount';
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react"


const productos = [
    {id: 1, name: "Remera Oficial Boca Juniors", price: "$21000"},
    {id: 2, name: "Remera Oficial Manchester City", price: "$23000"},
    {id: 3, name: "Remera Oficial Talleres", price: "$19000"},
]
export const ItemListContainer = ({oferta}) => {

    const [ data, setData ] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 3000)
        });
        getData.then(res => setData(res));
    }, [])


    const onAdd = (quantity) => {
        console.log('Compraste ${quantity} unidades');
    }

    return(
        <>
        <div className="container">
        <h3>¡Solo por hoy! OFERTAS hasta el</h3><h3 className="oferta">{oferta}</h3>
        </div>

        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        <ItemList data={data}/>
        </>
    )
}