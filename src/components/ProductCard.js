import React from 'react'
import { Link } from "react-router-dom"

function ProductCard(props) {
    return (
        <div className={`w-6/12 productCard mb-10 ${props.product.adjective8} mx-auto`}>
                <Link to={`/products/${props.product.id}`}>
                <img className="w-9/12 flex mx-auto" src={`../${props.product.image}`}></img>
                </Link>
                <h2 className="text-center text-sm my-2 tracking-wider">{props.product.name}</h2>
                <h3 className="text-center text-xs tracking-wider">${props.product.price}</h3>
        </div>
    )
}

export default ProductCard