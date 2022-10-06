import React from "react";
import { useCartContext } from "../../Context/CartContext";

const ItemCart = ({product}) => {

    const { removeProduct } = useCartContext();

    return (
    <div className="itemCart">
        <p>Titulo: {product.name}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio: {product.price}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
    </div>
    )
}

export default ItemCart