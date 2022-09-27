import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const producto = [
    {id: 1, name: "Remera Oficial Boca Juniors", price: "$21000", seccion: "futbolArgentino"},
    {id: 2, name: "Remera Oficial Manchester City", price: "$23000", seccion: "futbolEuropa"},
    {id: 3, name: "Remera Oficial Talleres", price: "$19000", seccion: "futbolArgentino"},
    {id: 4, name: "Remera Oficial Liverpool", price: "$22000", seccion: "futbolEuropa"},
    {id: 5, name: "Remera Oficial Argentina", price: "$23000", seccion: "Selecciones"},
    {id: 6, name: "Remera Oficial Brasil", price: "$23000", seccion: "Selecciones"},
]
const ItemDetailContainer = ({}) => {

    const [ data, setData ] = useState({})
    const {productId} = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(producto);
            }, 1000);
        });

        getData.then(res => setData(res.find(producto => producto.id === parseInt(productId))));
    }, [])

    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;