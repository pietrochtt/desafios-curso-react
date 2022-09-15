import { ProductionQuantityLimits } from "@mui/icons-material"
import React from "react"


export const Item = ({data}) => {

    return(
        <a href="" className="producto">
            <h3>{data.name}</h3>
            <h4>{data.price}</h4>
        </a>
    )
}