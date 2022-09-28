import React from "react";
import "./ItemListContainer.css"
import { ItemCount } from './ItemCount';
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

//DATA DE TODOS LOS PRODUCTOS
const productos = [
    {id: 1, name: "Remera Oficial Boca Juniors", price: "$21000", seccion: "futbolArgentino"},
    {id: 2, name: "Remera Oficial Manchester City", price: "$23000", seccion: "futbolEuropa"},
    {id: 3, name: "Remera Oficial Talleres", price: "$19000", seccion: "futbolArgentino"},
    {id: 4, name: "Remera Oficial Liverpool", price: "$22000", seccion: "futbolEuropa"},
    {id: 5, name: "Remera Oficial Argentina", price: "$23000", seccion: "selecciones"},
    {id: 6, name: "Remera Oficial Brasil", price: "$23000", seccion: "selecciones"},
]
const ItemListContainer = ({oferta}) => {

    const [ data, setData ] = useState([])
    const {seccionId} = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000)
        });
        if (seccionId) {
            getData.then(res => setData(res.filter(producto => producto.seccion === seccionId)))
        } else {
            getData.then(res => setData(res));
        }
    }, [seccionId])


    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        <>
        <div className="container">
        <h3>¡Solo por hoy! OFERTAS hasta el</h3><h3 className="oferta">{oferta}</h3>
        </div>

        {/* <ItemCount initial={1} stock={10} onAdd={onAdd}/> */}
        <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;