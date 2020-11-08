import React from 'react'
import { Link } from "react-router-dom"

function ProductCard(props) {
    return (
            <div className={`mb-10 ${props.product.adjective1} productCard`}>
                <Link to={`/products/${props.product.id}`}>
                <img className="w-7/12 flex mx-auto" src={`../${props.product.image}`}></img>
                </Link>
                <h2 className="text-center text-sm my-2 tracking-wider">{props.product.name}</h2>
                <h3 className="text-center text-xs tracking-wider">{props.product.price}</h3>
            </div>
    )
}

export default ProductCard