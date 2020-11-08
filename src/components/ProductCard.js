import React from 'react'
import { Link } from "react-router-dom"

function ProductCard(props) {
    return (
        <Link to={`/products/${props.product.id}`}>
            <div className="mb-10">
                {props.product.name}
                {props.product.price}
                <img src={`../${props.product.image}`}></img>
            </div>
        </Link>
    )
}

export default ProductCard