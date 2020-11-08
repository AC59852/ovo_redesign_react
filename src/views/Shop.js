import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'

// https://5fa766a79def160016adae33.mockapi.io/products

function Shop() {
    const url = `https://5fa766a79def160016adae33.mockapi.io/products`;
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setProducts({
           loading: true,
           data: null,
           error: false 
        })
        axios.get(url)
        .then(response => {
            setProducts({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setProducts({
                loading: false,
                data: false,
                error: true
            })
        })
    }, [url])

    let content = null

    if(products.loading) {
        content = <Loader />
    }

    if(products.error) {
        content =
        <div>
            <h1>Products not found</h1>
        </div>
    }

    if(products.data) {
        content = 
        products.data.map((product, key) => 
            <div>
                <ProductCard 
                    product={product}
                />
            </div>
        )
    }

    return (
        <div>
            <h1>This is the shop page</h1>
            {content}
        </div>
    )
}

export default Shop