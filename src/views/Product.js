import React, {useState, useEffect,} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {useTransition, animated} from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import Loader from '../components/Loader'
import SizeBtns from '../components/SizeBtns'

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

    const [showFilters, setShowFilters] = useState(false)

    const transitions = useTransition(showFilters, null, {
        from: {height: '0.01px' },
        enter: {height:'200px'},
        leave: {height: '0.01px' }
        })


    if(product.data) {
        content = 
        <div className="mx-auto shopItemCon">
            <div className="text-center itemImgCon">
                <img className="border-solid border-2" src={`../${product.data.image}`}></img>
                <h1 className="text-2xl mt-8 tracking-wider">{product.data.name}</h1>
            </div>
            <div>
                <h2 className="mb-4 mt-8 text-base">{product.data.material}</h2>
                <h2 className="mb-4 text-base">{product.data.adjective1}</h2>
                <h2 className="mb-4 text-base">{product.data.adjective2}</h2>
                <h2 className="mb-4 text-base">{product.data.adjective3}</h2>
                <h2 className="mb-4 text-base">{product.data.adjective4}</h2>
                <h2 className="mb-4 text-base">{product.data.adjective5}</h2>
                <h2 className="mb-4 text-base">{product.data.adjective6}</h2>
                <h2 className="mb-4 text-base">{product.data.adjective7}</h2>
                <h2 className="text-2xl">${product.data.price}</h2>
            </div>
            <div>
            <div className="sizeBtnCon mx-auto mt-8">
            <div className="flex justify-center items-center border-solid border-2 py-2 text-2xl tracking-wide cursor-pointer" onClick={() => setShowFilters(!showFilters)}>
                <h2 className="text-center px-16">Select a Size</h2>
                <FontAwesomeIcon className="text-sm cursor-pointer" icon={faMinus}/>
            </div>
                { transitions.map(({item, key, props}) => 
                    item && <animated.div className="overflow-hidden" key={key} style={props}>
                        <SizeBtns closeFilters={() => setShowFilters(false)}/>  
                    </animated.div>
                )}
            </div>
            </div>
        </div>
    }

    return (
        <div className="shopBck min-h-screen pt-24">
            {content}
        </div>
    )
}

export default Product