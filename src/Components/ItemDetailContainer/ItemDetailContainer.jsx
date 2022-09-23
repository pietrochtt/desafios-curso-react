import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";

const producto = {
    id: 1, price: "$19000", nombre: "Remera de Boca"
}
const ItemDetailContainer = ({}) => {

    const [ data, setData ] = useState({})

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(producto);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])

    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;