import React from "react"

const ItemDetail = ({ data }) => {

    return(
        <div className="containerProduct">
            <h3>{data.nombre}</h3>
            <h3>{data.price}</h3>
        </div>
    )
}

export default ItemDetail;