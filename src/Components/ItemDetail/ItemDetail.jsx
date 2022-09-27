import React from "react"

const ItemDetail = ({ data }) => {

    return(
        <div className="containerProduct">
            <h2>Detalle</h2>
            <h3>{data.name}</h3>
            <h3>{data.price}</h3>
        </div>
    )
}

export default ItemDetail;