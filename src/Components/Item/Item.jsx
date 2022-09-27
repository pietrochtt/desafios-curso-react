import { ProductionQuantityLimits } from "@mui/icons-material"
import React from "react"
import { Link } from "react-router-dom"


export const Item = ({data}) => {

    return(
        <Link to={`/producto/${data.id}`} className="producto">
            <h3>{data.name}</h3>
            <h4>{data.price}</h4>
        </Link>
    )
}