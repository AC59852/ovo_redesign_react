import React, {useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import FilterBtns from '../components/FilterBtns'

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
        <div className="shopBck">
            <h1>Products not found</h1>
        </div>
    }

    const testRef = useRef("test")

    if(products.data) {
        content = 
        products.data.map((product, key) => 
            <div className="w-6/12 mx-auto">
                <ProductCard
                    product={product}
                />
            </div>
        )
    }

    const [showFilters, setShowFilters] = useState(false)

    const transitions = useTransition(showFilters, null, {
        from: {height: '0.01px' },
        enter: {height:'200px'},
        leave: {height: '0.01px' }
        })

    return (
        <div className="shopBck h-full pt-24">
            <div className="filterCon w-4/6 mx-auto mb-8">
            <div className="flex justify-center items-center border-solid border-2 py-3 text-3xl tracking-widest">
                <h2 className="text-center">Filter By Item</h2>
                <FontAwesomeIcon onClick={() => setShowFilters(!showFilters)} className="text-sm -mt-1 cursor-pointer ml-3" icon={faPlus}/>
            </div>
                { transitions.map(({item, key, props}) => 
                    item && <animated.div className="overflow-hidden" key={key} style={props}>
                        <FilterBtns closeFilters={() => setShowFilters(false)}/>  
                    </animated.div>
                )}
            </div>
            <div className="cardCon flex flex-wrap w-11/12 justify-evenly mx-auto">
                {content}
            </div>
        </div>
    )
}

export default Shop