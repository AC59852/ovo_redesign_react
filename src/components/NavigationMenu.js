import React from 'react'
import { Link } from "react-router-dom"

function NavigationMenu(props) {
    return(
        <ul className="flex nav-font flex-col h-full navLinks justify-center text-white tracking-wide">
            <li className="py-4 uppercase text-center"><Link onClick={props.closeMenu} to="/">Home</Link></li>
            <li className="py-4 uppercase text-center"><Link onClick={props.closeMenu} to="/shop">Shop</Link></li>
            <li className="py-4 uppercase text-center"><Link onClick={props.closeMenu} to="/stores">stores</Link></li>
            <li className="py-4 uppercase text-center"><Link onClick={props.closeMenu} to="/stores">contact</Link></li>
        </ul>
    )
}

export default NavigationMenu