import React from "react"
import { Item } from "../Item/Item"


export const ItemList = ({ data = [] }) => {

    return(
        data.map(producto => <Item key={producto.id} data={producto}/>)
    );
}