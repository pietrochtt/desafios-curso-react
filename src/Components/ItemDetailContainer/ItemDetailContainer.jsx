import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = ({}) => {

    const [ data, setData ] = useState({})
    const { productId } = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', productId);
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    }, [productId])

    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;