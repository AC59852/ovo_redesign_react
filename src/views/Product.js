import React, {useState, useEffect,} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'

function Product() {
    const { id } = useParams()
    const url = `https://5fa766a79def160016adae33.mockapi.io/products/${id}`;
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null

    useEffect(() => {
        setProduct({
           loading: true,
           data: null,
           error: false 
        })
        axios.get(url)
        .then(response => {
            setProduct({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setProduct({
                loading: false,
                data: false,
                error: true
            })
        })
    }, [url])

    if(product.loading) {
        content = <Loader />
    }

    if(product.error) {
        content =
        <div>
            <h1>Product not found</h1>
        </div>
    }

    if(product.data) {
        content = 
        <div>
            <h1>{product.data.name}</h1>
            <img src={`../${product.data.image}`}></img>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Product