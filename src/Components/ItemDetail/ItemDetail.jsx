import React, { useState } from "react"
import "./ItemDetail.css"
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

const ItemDetail = ({ data }) => {

    const [ goToCart, setGoToCart ] = useState(false)
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity)
    }


    return(

        <div className="containerProduct">
            <h2>Detalle</h2>
            <h3>{data.name}</h3>
            <h3>${data.price}</h3>
            {
                goToCart 
                    ? <Link to='/cart'>Finalizar Compra</Link> 
                    : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            }
        </div>

    )
}

export default ItemDetail;