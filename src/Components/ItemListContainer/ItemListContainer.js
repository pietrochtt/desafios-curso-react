import React from "react";
import "./ItemListContainer.css"
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getFirestore, collection , getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({oferta}) => {

    const [ data, setData ] = useState([])
    const { seccionId } = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');

        if (seccionId) {
            const queryFilter = query(queryCollection, where('seccion', '==', seccionId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
    }, [seccionId])

    return(
        <>
        <div className="container">
        <h3>¡Solo por hoy! OFERTAS hasta el</h3><h3 className="oferta">{oferta}</h3>
        </div>
        
        <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;