import React, { useState, useEffect } from "react"
import "./ItemListContainer.css"

export const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial)

    const decrease = () => {
        setCounter(counter - 1)
    }

    const increase = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        setCounter(initial)
    }, [initial])

    return(
        <div className="counter">
            <button disabled={counter <= 1} onClick={decrease}>-</button>
            <span>{counter}</span>
            <button disabled={counter >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(counter)}>Agrega al carrito</button>
            </div>
        </div>
    )
}
