import React from "react"
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import ItemCart from "../ItemCart/ItemCart"

export const Cart = ({}) => {

    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Nicolas',
            email: 'nico@gmail.com',
            phone: '3548 542342'
        },
        items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
        total: totalPrice()
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Ir a la pagina principal</Link>
            </>
        );
    }


    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>Precio Total de compra: ${totalPrice()}</p>
            <button onClick={handleClick}>Confirmar Compra</button>
        </>
    )
}